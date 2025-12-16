"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export type Dataset = "Bank A" | "Bank B" | "Bank C" | "Overall";
export type DataUnderstandingSplit =
  | "Education"
  | "Marital Status"
  | "Age"
  | "Gender"
  | "Race";

interface DataUnderstandingBarChartProps {
  dataset: Dataset;
  split: DataUnderstandingSplit;
  height?: number;
  showHeader?: boolean;
}

type Row = {
  group: string;
  yes: number;
  no: number;
};

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function getSplitColumn(split: DataUnderstandingSplit) {
  switch (split) {
    case "Education":
      return "education";
    case "Marital Status":
      return "marital-status";
    case "Age":
      return "age_bin";
    case "Gender":
      return "gender";
    case "Race":
      return "race";
  }
}

async function getData(dataset: Dataset, split: DataUnderstandingSplit): Promise<Row[]> {
  const supabase = createBrowserSupabaseClient();
  const splitColumn = getSplitColumn(split);

  const maxAttempts = 3; // 1 initial + 2 retries
  const backoffMs = [250, 750];

  let data: unknown[] | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let query = supabase
      .from("adult_income")
      .select(`income_num, ${splitColumn}, count:count()`);

    if (dataset !== "Overall") {
      query = query.eq("institute", dataset);
    }

    const res = await query;

    if (!res.error) {
      data = (res.data ?? []) as unknown[];
      break;
    }

    console.error(
      `Failed to load adult_income grouped data (attempt ${attempt}/${maxAttempts}):`,
      res.error
    );

    if (attempt < maxAttempts) {
      await sleep(backoffMs[Math.min(attempt - 1, backoffMs.length - 1)] ?? 500);
    }
  }

  if (!data) return [];

  const byGroup: Record<string, Row> = {};

  for (const r of data ?? []) {
    const groupValue = String((r as any)[splitColumn] ?? "Unknown");
    const incomeNum = Number((r as any).income_num);
    const count = Number((r as any).count ?? 0);

    const existing = byGroup[groupValue] ?? { group: groupValue, yes: 0, no: 0 };

    if (incomeNum === 1) existing.yes += count;
    else existing.no += count;

    byGroup[groupValue] = existing;
  }

  return Object.values(byGroup).sort((a, b) => {
    const totalA = a.yes + a.no;
    const totalB = b.yes + b.no;
    if (totalB !== totalA) return totalB - totalA; // highest total first
    return a.group.localeCompare(b.group); // stable tie-breaker
  });
}

export const DataUnderstandingBarChart: React.FC<DataUnderstandingBarChartProps> = ({
  dataset,
  split,
  height = 320,
  showHeader = true,
}) => {
  const [data, setData] = React.useState<Row[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let active = true;
    const timeoutId = window.setTimeout(() => {
      (async () => {
        if (active) setLoading(true);
        const rows = await getData(dataset, split);
        if (active) {
          setData(rows);
          setLoading(false);
        }
      })().catch((e) => {
        console.error("Failed to load chart data:", e);
        if (active) {
          setData([]);
          setLoading(false);
        }
      });
    }, 500);

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
    };
  }, [dataset, split]);

  return (
    <div
      className="rounded-xl border border-zinc-200 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-zinc-950/40"
      style={{ width: "100%", height, paddingBottom: 12 }}
    >
      {showHeader ? (
        <div
          style={{
            fontSize: 14,
            marginBottom: 8,
            color: "var(--muted-foreground)",
          }}
        >
          Title: {dataset} — {split}
        </div>
      ) : null}

      {loading ? (
        <div
          aria-live="polite"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            color: "var(--muted-foreground)",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: 8,
          }}
        >
          Loading chart…
        </div>
      ) : (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="3 3" />
          <XAxis
            dataKey="group"
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            axisLine={{ stroke: "var(--chart-axis)" }}
            tickLine={{ stroke: "var(--chart-axis)" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            axisLine={{ stroke: "var(--chart-axis)" }}
            tickLine={{ stroke: "var(--chart-axis)" }}
            label={{
              value: "Count",
              angle: -90,
              position: "insideLeft",
              fill: "var(--muted-foreground)",
            }}
          />
          <Tooltip
            contentStyle={{
              background: "var(--chart-tooltip-bg)",
              border: "1px solid var(--chart-tooltip-border)",
              borderRadius: 10,
              color: "var(--foreground)",
            }}
            labelStyle={{ color: "var(--muted-foreground)" }}
            itemStyle={{ color: "var(--foreground)" }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{ color: "var(--muted-foreground)" }}
          />
          {/* Grouped bars: two series side-by-side for each category */}
          <Bar dataKey="yes" name="High Income" fill="#22c55e" radius={[4, 4, 0, 0]} />
          <Bar dataKey="no" name="Low Income" fill="#fca5a5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      )}
    </div>
  );
};

