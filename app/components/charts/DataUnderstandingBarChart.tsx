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

  // Equivalent SQL (example for splitColumn="education"):
  // SELECT income_num, education, count(*) AS count
  // FROM adult_income
  // WHERE instance = 'Bank A' -- skipped for dataset = 'All'
  // GROUP BY income_num, education
  let query = supabase
    .from("adult_income")
    .select(`income_num, ${splitColumn}, count:count()`)

  if (dataset !== "Overall") {
    query = query.eq("institute", dataset);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Failed to load adult_income grouped data:", error);
    return [];
  }

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

  React.useEffect(() => {
    let active = true;

    (async () => {
      const rows = await getData(dataset, split);
      if (active) setData(rows);
    })().catch((e) => {
      console.error("Failed to load chart data:", e);
      if (active) setData([]);
    });

    return () => {
      active = false;
    };
  }, [dataset, split]);

  return (
    <div style={{ width: "100%", height, paddingBottom: 25 }}>
      {showHeader ? (
        <div style={{ fontSize: 14, marginBottom: 8, opacity: 0.85 }}>
          Title: {dataset} — {split}
        </div>
      ) : null}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.35} />
          <XAxis dataKey="group" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} label={{ value: "Count", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend align="right" verticalAlign="top" />
          {/* Grouped bars: two series side-by-side for each category */}
          <Bar dataKey="yes" name="High Income" fill="#22c55e" radius={[4, 4, 0, 0]} />
          <Bar dataKey="no" name="Low Income" fill="#fca5a5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

