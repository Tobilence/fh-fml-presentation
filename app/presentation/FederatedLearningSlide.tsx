import React from "react";

export function FederatedLearningSlide() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Federated Machine Learning · Pros &amp; cons
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Federated Learning: What would it look like?
              </h2>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-200">
                    Upsides
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-950/90 dark:text-emerald-100/90">
                    <li>
                      <span className="font-medium">Raw data stays local</span> → easier residency &amp; compliance.
                    </li>
                    <li>
                      <span className="font-medium">Cross-entity learning</span> → better generalization &amp; robustness.
                    </li>
                    <li>
                      <span className="font-medium">Faster propagation</span> of new patterns across subsidiaries.
                    </li>
                    <li>
                      <span className="font-medium">Standardized governance/monitoring</span> vs N separate models.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-rose-200/80 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/25">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-800 dark:text-rose-200">
                    Downsides / risks
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-950/90 dark:text-rose-100/90">
                    <li>
                      <span className="font-medium">Update leakage</span> (membership inference / gradient inversion).
                    </li>
                    <li>
                      <span className="font-medium">Poisoning / backdoors</span> via malicious participants.
                    </li>
                    <li>
                      <span className="font-medium">Sybil/impersonation</span> &amp; control-plane attack surface.
                    </li>
                    <li>
                      <span className="font-medium">Hub is a high-value target</span> + higher infra/ops overhead.
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-2 rounded-xl border border-zinc-200/80 bg-white p-4 text-zinc-700 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-200">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Implementation Requirements
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                    <li>
                      <span className="font-medium">FL platform</span>: hub/orchestrator + local FL nodes/agents per subsidiary.
                    </li>
                    <li>
                      <span className="font-medium">Node onboarding</span>: allow-listing, identity, signed artifacts, key rotation/revocation.
                    </li>
                    <li>
                      <span className="font-medium">Secure connectivity</span>: hub↔node mTLS/VPN + network segmentation.
                    </li>
                    <li>
                      <span className="font-medium">Privacy/security controls</span>: secure aggregation, DP/clipping (as needed), update validation.
                    </li>
                    <li>
                      <span className="font-medium">Round ops &amp; observability</span>: per-round audit logs, model lineage, client-level monitoring.
                    </li>
                    <li>
                      <span className="font-medium">Cross-site readiness</span>: aligned feature definitions + local data quality gates.
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


