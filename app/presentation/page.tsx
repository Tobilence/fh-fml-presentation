"use client";

import React from "react";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { PRESENTATION_SLIDES } from "./slides";

const PRESENTATION_STAGE_TABLE = "live_presentation";
const PRESENTATION_LIVE_TYPE = "presentation-live-fr";
const POLL_INTERVAL_MS = 2000;

export default function PresentationPage() {
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);

  const slideNode = React.useMemo(() => {
    const slide = PRESENTATION_SLIDES.find((entry) => entry.status === status);
    if (slide) return <slide.Component />;

    return <div>Loading...</div>;
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


