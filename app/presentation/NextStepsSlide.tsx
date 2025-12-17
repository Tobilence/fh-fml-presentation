import React from "react";

export function NextStepsSlide() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Roadmap
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Next steps
              </h2>
              <p className="max-w-4xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                A pragmatic plan: align on the target approach, validate it with a short pilot, then productionize with
                proper governance and monitoring.
              </p>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Phase 1 · 1–2 weeks
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Align &amp; decide
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Decide target setup (local vs federated vs hybrid)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Agree on success metrics + constraints (risk, compliance, latency)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Define minimum viable dataset + feature definitions per bank</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-5 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-200">
                    Phase 2 · 4–6 weeks
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-emerald-950 dark:text-emerald-50">
                    Pilot &amp; validate
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-emerald-950/90 dark:text-emerald-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Run a small end-to-end pilot (2–3 banks / subsets)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Validate model performance, fairness, explainability &amp; stability</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Decide go/no-go with quantified cost/benefit</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-200/80 bg-amber-50 p-5 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/25">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-200">
                    Phase 3 · 8–12 weeks
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-amber-950 dark:text-amber-50">
                    Productionize
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-amber-950/90 dark:text-amber-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>Governance: audit logs, model lineage, approvals, ownership</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>MLOps: monitoring, drift detection, retraining cadence</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>Rollout plan + playbook per bank; scale to remaining entities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


