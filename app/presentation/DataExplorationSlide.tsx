/* eslint-disable react/button-has-type */
"use client";

import React from "react";
import { Button, Flex } from "@radix-ui/themes";
import {
  DataUnderstandingBarChart,
  type DataUnderstandingSplit,
  type Dataset,
} from "@/app/components/charts/DataUnderstandingBarChart";

export function DataExplorationSlide() {
  const datasetOptions = React.useMemo(
    () =>
      [
        { value: "Overall", label: "Overall" },
        { value: "Bank A", label: "Bank A" },
        { value: "Bank B", label: "Bank B" },
        { value: "Bank C", label: "Bank C" },
      ] as const satisfies ReadonlyArray<{ value: Dataset; label: string }>,
    [],
  );

  const splitOptions = React.useMemo(
    () =>
      [
        "Education",
        "Race",
        "Gender",
        "Marital Status",
        "Age",
      ] as const satisfies ReadonlyArray<DataUnderstandingSplit>,
    [],
  );

  const [dataset, setDataset] = React.useState<Dataset>("Overall");
  const [split, setSplit] = React.useState<DataUnderstandingSplit>("Gender");

  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Data Exploration
            </h2>
            <p className="mt-2 max-w-full text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Explore how the data differs across banks. Pay special attention to the following distributional differences:
            </p>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <span>
                  <strong>Gender</strong> is unevenly distributed (males are advantaged).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <span>
                  <strong>Education</strong> is split unevenly across banks (Bank A is much more educated).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <span>
                  <strong>Race</strong>: Whites are privileged and overrepresented in all banks.
                </span>
              </li>
            </ul>
          </div>
          <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {dataset} · {split}
          </div>
        </header>

        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,0.9fr)] md:items-start">
          <div className="min-w-0">
            <DataUnderstandingBarChart
              dataset={dataset}
              split={split}
              height={440}
              showHeader={false}
            />
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Filters
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <Flex gap="2" wrap="wrap">
                  {datasetOptions.map((option) => {
                    const isActive = option.value === dataset;
                    return (
                      <Button
                        key={option.value}
                        type="button"
                        onClick={() => setDataset(option.value)}
                        variant={isActive ? "solid" : "outline"}
                        radius="small"
                        size="2"
                        aria-pressed={isActive}
                        className={
                          isActive
                            ? "!bg-zinc-900 !text-white hover:!bg-zinc-800 dark:!bg-zinc-50 dark:!text-zinc-900 dark:hover:!bg-zinc-200"
                            : "!text-zinc-800 dark:!text-zinc-200 !border-zinc-300 dark:!border-white/20 dark:!bg-transparent"
                        }
                      >
                        {option.label}
                      </Button>
                    );
                  })}
                </Flex>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Categories
              </div>
              <div className="mt-3 grid gap-3">
                <Button
                  type="button"
                  onClick={() => setSplit("Gender")}
                  variant={split === "Gender" ? "solid" : "soft"}
                  radius="large"
                  size="3"
                  aria-pressed={split === "Gender"}
                  className={
                    split === "Gender"
                      ? "h-12 justify-between !bg-zinc-900 px-4 text-left text-base font-semibold !text-white hover:!bg-zinc-800 dark:!bg-zinc-50 dark:!text-zinc-900 dark:hover:!bg-zinc-200 !border !border-zinc-200 dark:!border-white/10"
                      : "h-12 justify-between !bg-zinc-100 px-4 text-left text-base font-semibold !text-zinc-900 hover:!bg-zinc-200 dark:!bg-zinc-900/60 dark:!text-zinc-50 dark:hover:!bg-zinc-900 !border !border-zinc-200 dark:!border-white/10"
                  }
                >
                  <span>Gender</span>
                </Button>

                <Button
                  type="button"
                  onClick={() => setSplit("Race")}
                  variant={split === "Race" ? "solid" : "soft"}
                  radius="large"
                  size="3"
                  aria-pressed={split === "Race"}
                  className={
                    split === "Race"
                      ? "h-12 justify-between !bg-zinc-900 px-4 text-left text-base font-semibold !text-white hover:!bg-zinc-800 dark:!bg-zinc-50 dark:!text-zinc-900 dark:hover:!bg-zinc-200 !border !border-zinc-200 dark:!border-white/10"
                      : "h-12 justify-between !bg-zinc-100 px-4 text-left text-base font-semibold !text-zinc-900 hover:!bg-zinc-200 dark:!bg-zinc-900/60 dark:!text-zinc-50 dark:hover:!bg-zinc-900 !border !border-zinc-200 dark:!border-white/10"
                  }
                >
                  <span>Race</span>
                </Button>

                <Button
                  type="button"
                  onClick={() => setSplit("Age")}
                  variant={split === "Age" ? "solid" : "soft"}
                  radius="large"
                  size="3"
                  aria-pressed={split === "Age"}
                  className={
                    split === "Age"
                      ? "h-12 justify-between !bg-zinc-900 px-4 text-left text-base font-semibold !text-white hover:!bg-zinc-800 dark:!bg-zinc-50 dark:!text-zinc-900 dark:hover:!bg-zinc-200 !border !border-zinc-200 dark:!border-white/10"
                      : "h-12 justify-between !bg-zinc-100 px-4 text-left text-base font-semibold !text-zinc-900 hover:!bg-zinc-200 dark:!bg-zinc-900/60 dark:!text-zinc-50 dark:hover:!bg-zinc-900 !border !border-zinc-200 dark:!border-white/10"
                  }
                >
                  <span>Age</span>
                </Button>

                <Button
                  type="button"
                  onClick={() => setSplit("Marital Status")}
                  variant={split === "Marital Status" ? "solid" : "soft"}
                  radius="large"
                  size="3"
                  aria-pressed={split === "Marital Status"}
                  className={
                    split === "Marital Status"
                      ? "h-12 justify-between !bg-zinc-900 px-4 text-left text-base font-semibold !text-white hover:!bg-zinc-800 dark:!bg-zinc-50 dark:!text-zinc-900 dark:hover:!bg-zinc-200 !border !border-zinc-200 dark:!border-white/10"
                      : "h-12 justify-between !bg-zinc-100 px-4 text-left text-base font-semibold !text-zinc-900 hover:!bg-zinc-200 dark:!bg-zinc-900/60 dark:!text-zinc-50 dark:hover:!bg-zinc-900 !border !border-zinc-200 dark:!border-white/10"
                  }
                >
                  <span>Marital Status</span>
                </Button>

                <Button
                  type="button"
                  onClick={() => setSplit("Education")}
                  variant={split === "Education" ? "solid" : "soft"}
                  radius="large"
                  size="3"
                  aria-pressed={split === "Education"}
                  className={
                    split === "Education"
                      ? "h-12 justify-between !bg-zinc-900 px-4 text-left text-base font-semibold !text-white hover:!bg-zinc-800 dark:!bg-zinc-50 dark:!text-zinc-900 dark:hover:!bg-zinc-200 !border !border-zinc-200 dark:!border-white/10"
                      : "h-12 justify-between !bg-zinc-100 px-4 text-left text-base font-semibold !text-zinc-900 hover:!bg-zinc-200 dark:!bg-zinc-900/60 dark:!text-zinc-50 dark:hover:!bg-zinc-900 !border !border-zinc-200 dark:!border-white/10"
                  }
                >
                  <span>Education</span>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}