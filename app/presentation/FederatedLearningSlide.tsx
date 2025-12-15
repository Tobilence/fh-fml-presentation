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
                Federated learning (group-wide)
              </h2>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-200">
                    Upsides
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-950/90 dark:text-emerald-100/90">
                    <li>Raw data stays local → easier residency &amp; compliance.</li>
                    <li>Cross-entity learning → better generalization &amp; robustness.</li>
                    <li>Faster propagation of new patterns across subsidiaries.</li>
                    <li>More standardized governance/monitoring vs N separate models.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-rose-200/80 bg-rose-50 p-4 dark:border-rose-900/40 dark:bg-rose-950/25">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-800 dark:text-rose-200">
                    Downsides / risks
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-950/90 dark:text-rose-100/90">
                    <li>Update leakage (membership inference / gradient inversion).</li>
                    <li>Poisoning / backdoors via malicious participants.</li>
                    <li>Sybil/impersonation &amp; control-plane attack surface.</li>
                    <li>Hub is a high-value target + higher infra/ops overhead.</li>
                  </ul>
                </div>

                <div className="md:col-span-2 rounded-xl border border-zinc-200/80 bg-white p-4 text-zinc-700 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-200">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    What the bank needs to implement
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                    <li>Compute: local training per subsidiary + central orchestrator/log storage.</li>
                    <li>Secure connectivity: hub↔node mTLS/VPN; bandwidth for model updates.</li>
                    <li>Identity &amp; key mgmt: node certificates, rotation/revocation; IAM/SSO; secrets/KMS.</li>
                    <li>Logging/audit/monitoring: round logs, lineage, drift &amp; performance monitoring.</li>
                    <li>MLOps: registry, CI/CD, approvals; versioned configs &amp; rollout process.</li>
                    <li>Data/feature readiness: consistent features + local data quality checks.</li>
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


