import React from "react";

export function NextStepsApproachSlide() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Next steps · Alignment
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Decide the approach (and how we can help)
              </h2>
              <p className="max-w-4xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                We propose a short decision sprint: pick the target setup, define success metrics, and de-risk the path
                with a small pilot.
              </p>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-200">
                    Option A · Recommended default
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-emerald-950 dark:text-emerald-50">
                    Local models per bank
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-emerald-950/90 dark:text-emerald-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Fastest time-to-value, lowest operational overhead</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Works well with current data separation &amp; governance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Can later evolve into federated learning if needed</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-200/80 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/25">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-200">
                    Option B · If the gain justifies it
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-amber-950 dark:text-amber-50">
                    Federated learning
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-amber-950/90 dark:text-amber-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>Better cross-bank learning while keeping raw data local</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>Requires platform + governance + privacy/security controls</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>Best if we target measurable uplift and standardized operations</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Decision checklist
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>What uplift is “worth it” (AUC / recall @ FPR / cost saved)?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Which constraints dominate (residency, auditability, latency, ops)?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Are feature definitions and data quality aligned across banks?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Who owns the model lifecycle and risk controls end-to-end?</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-zinc-200/80 bg-white p-5 text-zinc-700 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-200">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  How we can help (2–6 week engagement)
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium">Decision workshop</span>: options, trade-offs, target architecture
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium">Data readiness</span>: feature alignment, quality gates, leakage checks
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium">Pilot implementation</span>: training pipeline + evaluation + reporting
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium">Security &amp; compliance</span>: threat model, audit logs, access controls
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium">MLOps</span>: monitoring, drift, retraining cadence, model registry
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium">Rollout plan</span>: per-bank playbook + operating model
                      </span>
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


