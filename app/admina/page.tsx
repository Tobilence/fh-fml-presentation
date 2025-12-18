
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import styles from "./admin.module.css";

const PRESENTATION_STAGE_TABLE = "live_presentation";
const PRESENTATION_LIVE_TYPE = "presentation-live";

export default function AdminPage() {
  const [presentationType, setPresentationType] = useState<string>(
    PRESENTATION_LIVE_TYPE
  );
  const [presentationTypeDraft, setPresentationTypeDraft] = useState<string>(
    PRESENTATION_LIVE_TYPE
  );
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const fetchLiveStatus = useCallback(async () => {
    try {
      setIsLoading(true);
      const supabase = createBrowserSupabaseClient();

      const { data, error } = await supabase
        .from(PRESENTATION_STAGE_TABLE)
        .select("status")
        .eq("type", presentationType)
        .maybeSingle();

      if (error) {
        setError(error.message);
        return;
      }

      const nextStatus = Number(data?.status ?? 0);
      setStatus(Number.isFinite(nextStatus) ? nextStatus : 0);

      setError(null);
    } catch (err) {
      setError(String(err));
    } finally {
      setIsLoading(false);
    }
  }, [presentationType]);

  const upsertLivePresentation = useCallback(
    async (patch: { status?: number }) => {
      const supabase = createBrowserSupabaseClient();

      const updateRes = await supabase
        .from(PRESENTATION_STAGE_TABLE)
        .update(patch)
        .eq("type", presentationType)
        .select("status")
        .maybeSingle();

      if (updateRes.error) throw updateRes.error;

      // If the row doesn't exist yet, create it.
      if (!updateRes.data) {
        const insertRes = await supabase
          .from(PRESENTATION_STAGE_TABLE)
          .insert({ type: presentationType, ...patch })
          .select("status")
          .single();

        if (insertRes.error) throw insertRes.error;
      }
    },
    [presentationType]
  );

  const persistStatus = useCallback(
    async (nextStatus: number) => {
      try {
        setIsSaving(true);
        await upsertLivePresentation({ status: nextStatus });
        setStatus(nextStatus);
        setError(null);
      } catch (err) {
        setError(String(err));
      } finally {
        setIsSaving(false);
      }
    },
    [upsertLivePresentation]
  );

  const persistStatusDelta = useCallback(
    async (delta: number) => {
      try {
        setIsSaving(true);
        const supabase = createBrowserSupabaseClient();

        // Optional: if you created an RPC that does `status = status + delta`, we can use it.
        // Function signature idea:
        //   increment_live_presentation_status(p_type text, p_delta int) returns void
        const rpcRes = await supabase
          .rpc("increment_live_presentation_status", {
            p_type: presentationType,
            p_delta: delta,
          })
          .throwOnError();

        // If RPC exists and succeeds, refresh to show the latest.
        if (rpcRes) {
          await fetchLiveStatus();
          setError(null);
          return;
        }
      } catch (err) {
        // Fall back to read → write if the RPC doesn't exist / isn't allowed.
        try {
          const supabase = createBrowserSupabaseClient();
          const { data, error } = await supabase
            .from(PRESENTATION_STAGE_TABLE)
            .select("status")
            .eq("type", presentationType)
            .maybeSingle();

          if (error) throw error;

          const current = Number(data?.status ?? 0);
          const next = (Number.isFinite(current) ? current : 0) + delta;

          await upsertLivePresentation({ status: next });
          setStatus(next);
          setError(null);
        } catch (innerErr) {
          setError(String(innerErr));
        }
      } finally {
        setIsSaving(false);
      }
    },
    [fetchLiveStatus, presentationType, upsertLivePresentation]
  );

  useEffect(() => {
    fetchLiveStatus();
  }, [fetchLiveStatus]);

  const currentStatus = status ?? 0;
  const disableControls = isLoading || isSaving;

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <section className={styles.section}>
          <div className={styles.label}>Presentation type</div>
          <input
            value={presentationTypeDraft}
            onChange={(e) => setPresentationTypeDraft(e.target.value)}
            disabled={disableControls}
            className={styles.input}
          />
          <div className={styles.sectionActions}>
            <button
              type="button"
              onClick={() => setPresentationType(presentationTypeDraft.trim())}
              disabled={disableControls || presentationTypeDraft.trim() === ""}
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Use this type
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.label}>Current selected page</div>
          <div className={styles.statusNumber}>
            {isLoading ? "…" : String(currentStatus)}
          </div>
          <div className={styles.hintRow}>
            <span>{disableControls ? "Updating…" : "Ready"}</span>
            <button
              type="button"
              onClick={fetchLiveStatus}
              disabled={disableControls}
              className={styles.smallButton}
            >
              Refresh
            </button>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.grid}>
            <button
              type="button"
              onClick={() => persistStatusDelta(-1)}
              disabled={disableControls}
              className={styles.button}
            >
              -1
            </button>
            <button
              type="button"
              onClick={() => persistStatusDelta(1)}
              disabled={disableControls}
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              +1
            </button>
            <button
              type="button"
              onClick={() => persistStatus(0)}
              disabled={disableControls || currentStatus === 0}
              className={`${styles.button} ${styles.buttonDanger}`}
            >
              Reset to 0
            </button>
            <button
              type="button"
              onClick={() => persistStatus(currentStatus)}
              disabled={disableControls}
              className={styles.button}
            >
              Re-save current
            </button>
          </div>
        </section>

        {error ? <div className={styles.error}>Error: {error}</div> : null}
      </div>
    </main>
  );
}