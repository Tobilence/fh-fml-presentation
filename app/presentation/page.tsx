"use client";

import React from "react";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { DataExplorationSlide } from "./DataExplorationSlide";
import { BusinessCase } from "./BusinessCase";
import { ModelDevelopment } from "./ModelDevelopment";
import { ModelFinetuning } from "./ModelFinetuning";
import { ModelCardSlide } from "./ModelCardSlide";

const PRESENTATION_STAGE_TABLE = "live_presentation";
const PRESENTATION_LIVE_TYPE = "presentation-live";
const POLL_INTERVAL_MS = 2000;

export default function PresentationPage() {
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);

  const slideNode = React.useMemo(() => {
    const statusComponentMap: Record<number, React.ReactNode> = {
      0: <BusinessCase />,
      1: <DataExplorationSlide />,
      2: <ModelDevelopment />,
      3: <ModelFinetuning />,
      4: <ModelCardSlide />,
    };

    if (
      status !== null &&
      Object.prototype.hasOwnProperty.call(statusComponentMap, status)
    ) {
      return statusComponentMap[status];
    }

    return <div>No slide to show for status {String(status)}.</div>;
  }, [status]);

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

        const nextStatus = +data?.[0]?.status;
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
      {error ? (
        <div style={{ color: "crimson", whiteSpace: "pre-wrap" }}>
          Error: {error}
        </div>
      ) :(
        <div>
          {slideNode}
        </div>
      )}
    </main>
  );
}


