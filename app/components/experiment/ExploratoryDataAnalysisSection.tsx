"use client";

import React from "react";
import {
    DataUnderstandingBarChart,
    type DataUnderstandingSplit,
    type Dataset,
} from "@/app/components/charts/DataUnderstandingBarChart";
import { Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";

export function ExploratoryDataAnalysisSection() {
    const datasetOptions = React.useMemo(
        () =>
            [
                { value: "All", label: "Overall" },
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

    const [dataset, setDataset] = React.useState<Dataset>("All");
    const [split, setSplit] = React.useState<DataUnderstandingSplit>("Education");

    return (
        <section className="flex flex-col gap-8">
            <div className="space-y-4 text-xs sm:text-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    2 · Exploratory Data Analysis
                </h2>
                <div className="space-y-3">
                    <p>
                        The feature set combines basic demographics (<strong>age</strong>,{" "}
                        <strong>gender</strong>, <strong>race</strong>,{" "}
                        <strong>country of origin</strong>), education and employment
                        information (<strong>education level</strong>,{" "}
                        <strong>work class</strong>, <strong>occupation</strong>,{" "}
                        <strong>marital status</strong>,{" "}
                        <strong>relationship status</strong>), and financial/work
                        intensity signals (<strong>capital gains</strong>,{" "}
                        <strong>capital losses</strong>,{" "}
                        <strong>hours worked per week</strong>). With data from multiple
                        institutions (
                        <span className="font-semibold text-blue-700 dark:text-blue-300">
                            Bank A
                        </span>
                        ,{" "}
                        <span className="font-semibold text-blue-700 dark:text-blue-300">
                            Bank B
                        </span>
                        ,{" "}
                        <span className="font-semibold text-blue-700 dark:text-blue-300">
                            Bank C
                        </span>
                        ), we can compare performance across banks and assess how well a
                        model transfers between different customer populations.
                    </p>
                    <p className="mt-2">
                        <span className="font-semibold">
                            Label distribution varies by bank:
                        </span>{" "}
                        Bank B has by far the largest volume (
                        <span className="text-zinc-700 dark:text-zinc-200">
                            317,096 in class 0
                        </span>{" "}
                        vs.{" "}
                        <span className="text-zinc-700 dark:text-zinc-200">
                            85,827 in class 1
                        </span>
                        ), while Bank A is smaller (
                        <span className="text-zinc-700 dark:text-zinc-200">
                            142,978 vs. 83,478
                        </span>
                        ) and Bank C is smallest on the positive class (
                        <span className="text-zinc-700 dark:text-zinc-200">
                            141,457 vs. 29,163
                        </span>
                        ). In percentage terms, the{" "}
                        <span className="font-mono bg-zinc-100 px-1 py-0.5 rounded text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                            &gt;50K
                        </span>{" "}
                        share is roughly{" "}
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            36.9%
                        </span>{" "}
                        (Bank A),{" "}
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            21.3%
                        </span>{" "}
                        (Bank B), and{" "}
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            17.1%
                        </span>{" "}
                        (Bank C), meaning the classes are imbalanced everywhere&mdash;but
                        especially at Bank C. This matters because a model can look
                        &ldquo;good&rdquo; on accuracy by leaning toward the majority
                        class, and because the same decision threshold may behave
                        differently across banks when the base rate of higher income
                        changes.
                    </p>
                    <p className="mt-2">
                        <span className="font-semibold">Critical considerations:</span>{" "}
                        <br />
                        Comparability and{" "}
                        <span className="font-semibold">robustness across banks</span>{" "}
                        are key. Category definitions and &ldquo;unknown&rdquo; values
                        can vary by institution, and distributions can shift
                        substantially&mdash;particularly for skewed variables like
                        capital gains/losses, where most customers have zeros and a
                        small minority have very large values.
                    </p>
                    <ul className="ml-3 mt-2 list-disc space-y-1 text-zinc-700 dark:text-zinc-300">
                        <li>
                            <span className="font-medium">
                                Fairness-sensitive attributes
                            </span>{" "}
                            (<span className="italic">e.g.</span>, gender, race,
                            nationality) should be treated carefully.
                        </li>
                        <li>
                            As this is a{" "}
                            <span className="font-medium">
                                binary threshold task
                            </span>
                            , simple accuracy should not be solely relied upon:{" "}
                            <span className="font-mono bg-zinc-100 px-1 py-0.5 rounded text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                false positives
                            </span>{" "}
                            and{" "}
                            <span className="font-mono bg-zinc-100 px-1 py-0.5 rounded text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                false negatives
                            </span>{" "}
                            should be examined, and attention should be paid to whether
                            errors are concentrated within specific customer segments.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                            Fairness
                        </h3>
                        <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                            <div className="space-y-3">
                                <p>
                                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                        Fairness is a central consideration
                                    </span>{" "}
                                    in this proof of concept, because the training data is
                                    skewed across sensitive groups in several ways.
                                </p>
                                <ul className="ml-5 list-disc space-y-1">
                                    <li>
                                        Each bank contains substantially more{" "}
                                        <span className="font-semibold text-blue-700 dark:text-blue-300">
                                            male
                                        </span>{" "}
                                        than{" "}
                                        <span className="font-semibold text-pink-600 dark:text-pink-300">
                                            female
                                        </span>{" "}
                                        customers, and the positive outcome (
                                        <span className="font-mono bg-zinc-100 px-1 py-0.5 rounded text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                                            &gt;50K
                                        </span>
                                        ) is more common for males.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                                            White customers
                                        </span>{" "}
                                        are overrepresented, and show higher positive rates
                                        than non-White customers.
                                    </li>
                                </ul>
                                <p>
                                    These imbalances can directly shape model behavior: the
                                    model may learn patterns that reflect historical or
                                    structural differences rather than purely credit-relevant
                                    signals. It will typically be better calibrated and more
                                    accurate for majority groups, simply because it sees more
                                    of them during training. As a result, a single global
                                    decision threshold can produce{" "}
                                    <span className="font-medium text-red-700 dark:text-red-400">
                                        uneven error rates
                                    </span>{" "}
                                    across groups (<span className="italic">e.g.</span>,
                                    higher false negatives for underrepresented groups),
                                    potentially leading to systematically different downstream
                                    outcomes.
                                </p>
                                <p>
                                    <span className="font-medium">
                                        For model development:
                                    </span>{" "}
                                    fairness should be evaluated explicitly alongside
                                    accuracy&mdash;using{" "}
                                    <span className="font-semibold">
                                        group-wise performance
                                    </span>{" "}
                                    and <span className="font-semibold">error breakdowns</span>
                                    . Any conclusions about model quality should be made with{" "}
                                    <span className="font-semibold">base-rate</span> and{" "}
                                    <span className="font-semibold">
                                        representation gaps
                                    </span>{" "}
                                    in mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-lg border border-zinc-200/80 bg-white p-4 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                                                ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                                                : "text-zinc-800 dark:text-zinc-200"
                                        }
                                    >
                                        {option.label}
                                    </Button>
                                );
                            })}
                        </Flex>

                        <Flex align="center" gap="2">
                            <Text
                                size="1"
                                weight="medium"
                                className="uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400"
                            >
                                Split
                            </Text>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button
                                        variant="outline"
                                        radius="small"
                                        size="2"
                                        className="text-zinc-800 dark:text-zinc-200"
                                    >
                                        {split}
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content align="end">
                                    {splitOptions.map((option) => (
                                        <DropdownMenu.Item
                                            key={option}
                                            onSelect={() => setSplit(option)}
                                        >
                                            {option}
                                        </DropdownMenu.Item>
                                    ))}
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Flex>
                    </div>

                    <div className="mt-3">
                        <DataUnderstandingBarChart dataset={dataset} split={split} />
                    </div>

                    </div>

                    <div>
                        <div className="grid gap-3 sm:grid-cols-3">
                            <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                                <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                    Features overview
                                </div>
                                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                                    Same schema across banks: education, work signals,
                                    marital status, capital gains/losses, and sensitive
                                    attributes (e.g., gender, race).
                                </p>
                            </div>

                            <div className="rounded-xl border border-emerald-500/40 bg-emerald-50 p-3 dark:border-emerald-500/40 dark:bg-emerald-950/40">
                                <div className="text-[11px] font-medium text-emerald-700 dark:text-emerald-200">
                                    Per-client profiling (Bank A/B/C)
                                </div>
                                <p className="mt-1 text-xs text-emerald-900 dark:text-emerald-50">
                                    We compare client sizes, label distributions, and key
                                    feature distributions to make non-IID visible.
                                </p>
                            </div>

                            <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                                <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                    Risk / governance notes
                                </div>
                                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                                    We check sensitive-attribute representation and base rates
                                    per client, and document any definition/quality differences
                                    that could impact fairness or calibration.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}


