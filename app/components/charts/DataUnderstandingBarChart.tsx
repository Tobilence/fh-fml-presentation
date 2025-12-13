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

export type Dataset = "Bank A" | "Bank B" | "Bank C" | "All";
export type DataUnderstandingSplit =
  | "Education"
  | "Marital Status"
  | "Age"
  | "Gender"
  | "Race";

interface DataUnderstandingBarChartProps {
  dataset: Dataset;
  split: DataUnderstandingSplit;
}

type DummyRow = {
  group: string;
  yes: number;
  no: number;
};

function getDummyData(split: DataUnderstandingSplit): DummyRow[] {
  switch (split) {
    case "Education":
      return [
        { group: "Primary", yes: 28, no: 72 },
        { group: "Secondary", yes: 41, no: 59 },
        { group: "Tertiary", yes: 52, no: 48 },
        { group: "Unknown", yes: 18, no: 82 },
      ];
    case "Marital Status":
      return [
        { group: "Single", yes: 46, no: 54 },
        { group: "Married", yes: 33, no: 67 },
        { group: "Divorced", yes: 39, no: 61 },
      ];
    case "Age":
      return [
        { group: "18–29", yes: 44, no: 56 },
        { group: "30–44", yes: 38, no: 62 },
        { group: "45–59", yes: 31, no: 69 },
        { group: "60+", yes: 27, no: 73 },
      ];
    case "Gender":
      return [
        { group: "Female", yes: 42, no: 58 },
        { group: "Male", yes: 34, no: 66 },
      ];
    case "Race":
      return [
        { group: "Group A", yes: 36, no: 64 },
        { group: "Group B", yes: 48, no: 52 },
        { group: "Group C", yes: 29, no: 71 },
        { group: "Group D", yes: 41, no: 59 },
      ];
    default:
      return [];
  }
}

export const DataUnderstandingBarChart: React.FC<DataUnderstandingBarChartProps> = ({
  dataset,
  split,
}) => {
  const data = React.useMemo(() => getDummyData(split), [split]);

  return (
    <div style={{ width: "100%", height: 320, paddingBottom: 25  }}>
      <div style={{ fontSize: 14, marginBottom: 8, opacity: 0.85 }}>
        Title: {dataset} — {split}
      </div>

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

