"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";

const PRESENTATION_STAGE_TABLE = "live_presentation";
const PRESENTATION_LIVE_TYPE = "presentation-live";
const POLL_INTERVAL_MS = 2000;

export default function PresentationPage() {
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchLiveStatus = async () => {
      try {
        setIsLoading((prev) => (lastUpdatedAt === null ? true : prev));
        const supabase = createBrowserSupabaseClient();

        const { data, error } = await supabase
          .from(PRESENTATION_STAGE_TABLE)
          .select("status")
          .eq("type", PRESENTATION_LIVE_TYPE)
          .limit(1);

        if (cancelled) return;
        if (error) {
          setError(error.message);
          return;
        }

        const nextStatus = data?.[0]?.status;
        setStatus(typeof nextStatus === "number" ? nextStatus : null);
        setError(null);
        setLastUpdatedAt(Date.now());
      } catch (err) {
        if (cancelled) return;
        setError(String(err));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchLiveStatus();
    const intervalId = window.setInterval(fetchLiveStatus, POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ padding: 16, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1 style={{ marginBottom: 8 }}>Presentation (live)</h1>

      {error ? (
        <div style={{ color: "crimson", whiteSpace: "pre-wrap" }}>
          Error: {error}
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Current status:{" "}
          <span style={{ fontWeight: 700 }}>
            {status === null ? "null" : status}
          </span>
        </div>
      )}

      <div style={{ marginTop: 8, opacity: 0.7, fontSize: 12 }}>
        Polling every {POLL_INTERVAL_MS / 1000}s.{" "}
        {lastUpdatedAt ? (
          <>Last updated: {new Date(lastUpdatedAt).toLocaleTimeString()}</>
        ) : null}
      </div>
    </main>
  );
}


