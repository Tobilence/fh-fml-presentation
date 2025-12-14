export function FederatedLearningContent() {
    return (
        <section className="w-full border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
            <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    6 · Federated Machine Learning (FL)
                </h2>

                <div className="space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    <p>
                        For a bank, implementing <span className="font-medium text-zinc-900 dark:text-zinc-50">Federated Learning</span>{" "}
                        means subsidiaries jointly train a predictive model{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">without moving raw data</span>{" "}
                        across legal entities or borders. Each subsidiary trains locally, and only{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">model updates</span>{" "}
                        (e.g., gradients/weights) are shared for aggregation.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Hub (orchestrator / aggregator)
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Coordinates training rounds and selects participants</li>
                            <li>Distributes the current model and collects updates</li>
                            <li>Aggregates updates (e.g., FedAvg) and versions models</li>
                            <li>Produces audit logs and governance artifacts</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Spokes (local FL nodes)
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Deployed inside each subsidiary’s environment</li>
                            <li>Connects to local feature/data pipelines and compute</li>
                            <li>Trains locally and exports only updates (no raw data)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Governance & security layer
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Participation policies and approval workflows</li>
                            <li>Access control, key management, node identity</li>
                            <li>Logging, audit trails, and model lineage</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                        Typical round-based workflow
                    </h3>

                    <div className="grid gap-2 sm:grid-cols-5">
                        {[
                            {
                                title: "1 · Distribute",
                                text: "Hub sends model v0 to selected subsidiaries.",
                            },
                            {
                                title: "2 · Train locally",
                                text: "Each subsidiary trains on its own local data.",
                            },
                            {
                                title: "3 · Send updates",
                                text: "Each subsidiary sends update Δ back (not raw data).",
                            },
                            {
                                title: "4 · Aggregate",
                                text: "Hub aggregates updates → model v1 (e.g., FedAvg).",
                            },
                            {
                                title: "5 · Repeat",
                                text: "Continue until target metrics / stop criteria are met.",
                            },
                        ].map((step) => (
                            <div
                                key={step.title}
                                className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300"
                            >
                                <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    {step.title}
                                </div>
                                <p className="mt-1">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                            Benefits (for the bank)
                        </h3>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50 p-4 text-xs text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-100">
                                <div className="text-[11px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
                                    Data sovereignty & compliance
                                </div>
                                <p className="mt-1 text-sm leading-relaxed">
                                    Raw data stays local → reduced cross-border transfer exposure and easier alignment with data residency and local regulatory constraints.
                                </p>
                                <p className="mt-2 text-xs text-emerald-800/90 dark:text-emerald-100/80">
                                    Smaller privacy footprint compared to centralized data pooling.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-sky-200/80 bg-sky-50 p-4 text-xs text-sky-900 dark:border-sky-900/40 dark:bg-sky-950/25 dark:text-sky-100">
                                <div className="text-[11px] font-medium uppercase tracking-wide text-sky-700 dark:text-sky-200">
                                    Performance & robustness
                                </div>
                                <p className="mt-1 text-sm leading-relaxed">
                                    Combining patterns across markets/products can improve generalization and stabilize performance across subsidiaries—especially for limited sample sizes or rare-event signals.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-zinc-200/80 bg-white p-4 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-300">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Suggested experiment-based wording (add your metrics)
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4">
                                <li>
                                    “In our experiment, the federated model showed more stable performance across subsidiaries, reducing performance variance between entities.”
                                </li>
                                <li>
                                    “The aggregated model achieved comparable or improved{" "}
                                    <span className="font-mono">[AUC / PR-AUC / Recall@FPR]</span>{" "}
                                    versus single-entity baselines, particularly for rare patterns and edge cases.”
                                </li>
                                <li>
                                    “Federation enabled faster propagation of learned patterns from one entity to the broader group without transferring raw data.”
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-violet-200/80 bg-violet-50 p-4 text-xs text-violet-900 dark:border-violet-900/40 dark:bg-violet-950/25 dark:text-violet-100">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-violet-700 dark:text-violet-200">
                                Operational / strategic
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                                <li>Faster group-wide learning from emerging fraud/anomaly patterns.</li>
                                <li>More standardized governance and monitoring than N separate models.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                            Downsides / challenges
                        </h3>

                        <div className="rounded-2xl border border-rose-200/80 bg-rose-50 p-4 text-xs text-rose-950 dark:border-rose-900/40 dark:bg-rose-950/25 dark:text-rose-100">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-rose-700 dark:text-rose-200">
                                Security risks (attack vectors)
                            </div>
                            <div className="mt-2 space-y-3 text-sm leading-relaxed">
                                <div>
                                    <div className="font-medium">Model / gradient leakage</div>
                                    <p className="text-rose-950/80 dark:text-rose-100/80">
                                        Updates can leak information about training data (membership inference, gradient inversion).
                                    </p>
                                    <p className="mt-1 text-xs text-rose-900/70 dark:text-rose-100/70">
                                        Mitigations: secure aggregation, differential privacy, gradient clipping, reduced update granularity, strict access controls.
                                    </p>
                                </div>
                                <div>
                                    <div className="font-medium">Poisoning / backdoors</div>
                                    <p className="text-rose-950/80 dark:text-rose-100/80">
                                        A compromised subsidiary can submit malicious updates to degrade the global model or insert targeted behavior.
                                    </p>
                                    <p className="mt-1 text-xs text-rose-900/70 dark:text-rose-100/70">
                                        Mitigations: robust aggregation, update anomaly detection, weighting/reputation schemes, signed updates, quarantine + review workflows.
                                    </p>
                                </div>
                                <div>
                                    <div className="font-medium">Sybil / impersonation</div>
                                    <p className="text-rose-950/80 dark:text-rose-100/80">
                                        An attacker pretends to be a valid node or creates many fake participants to influence aggregation.
                                    </p>
                                    <p className="mt-1 text-xs text-rose-900/70 dark:text-rose-100/70">
                                        Mitigations: strong identity (mTLS), hardware-backed keys, allow-listing, attestation where feasible, strict onboarding.
                                    </p>
                                </div>
                                <div>
                                    <div className="font-medium">Supply-chain risk</div>
                                    <p className="text-rose-950/80 dark:text-rose-100/80">
                                        Compromised containers/packages/CI can affect multiple participants.
                                    </p>
                                    <p className="mt-1 text-xs text-rose-900/70 dark:text-rose-100/70">
                                        Mitigations: SBOM, signed artifacts, vulnerability scanning, segregated build/runtime environments.
                                    </p>
                                </div>
                                <div>
                                    <div className="font-medium">Hub is a high-value target</div>
                                    <p className="text-rose-950/80 dark:text-rose-100/80">
                                        If the orchestrator is compromised: coordination, policies, and model IP are at risk (even if no raw data is stored centrally).
                                    </p>
                                    <p className="mt-1 text-xs text-rose-900/70 dark:text-rose-100/70">
                                        Mitigations: hardening, zero-trust, least privilege, HSM/KMS integration, network segmentation, monitoring, HA.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-amber-200/80 bg-amber-50 p-4 text-xs text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-100">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-amber-700 dark:text-amber-200">
                                Key point
                            </div>
                            <p className="mt-1 text-sm leading-relaxed">
                                FL reduces <span className="font-medium">raw-data sharing</span> risk, but shifts part of the risk toward{" "}
                                <span className="font-medium">update privacy</span> and{" "}
                                <span className="font-medium">control-plane security</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                        Required infrastructure (bank needs)
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Compute
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                <li>Per subsidiary: local training compute (CPU/GPU)</li>
                                <li>Central: orchestrator compute + model/log storage</li>
                                <li>Scalable runtime (VMs/Kubernetes) recommended</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Network & connectivity
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                <li>Secure hub↔node connectivity (mTLS; VPN/private links as needed)</li>
                                <li>Updates are smaller than raw data, but large models can be network-intensive</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Identity & key management
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                <li>Certificates per node, rotation/revocation</li>
                                <li>IAM/SSO integration and secrets management</li>
                                <li>Optional: HSM/KMS-backed keys</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Logging, audit, monitoring
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                <li>Training-round logs and governance events</li>
                                <li>Model lineage and reproducibility artifacts</li>
                                <li>Local + group-level model monitoring (drift/performance)</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                MLOps
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                <li>Model registry + CI/CD for FL workflows</li>
                                <li>Approval gates (model risk, compliance)</li>
                                <li>Versioned configs and local data/feature definitions</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Data / feature readiness
                            </div>
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                <li>Consistent feature definitions across subsidiaries</li>
                                <li>Local data quality checks to avoid “federating garbage”</li>
                                <li>Clear operating model: onboarding, releases, incident response</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 via-white to-white p-5 text-xs text-zinc-600 dark:border-zinc-800/80 dark:from-zinc-900/50 dark:via-zinc-950/40 dark:to-zinc-950/40 dark:text-zinc-300">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        Bank-ready summary
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">
                        Federated learning lets <span className="font-medium text-zinc-900 dark:text-zinc-50">Pilot Bank</span>{" "}
                        train models across subsidiaries while keeping{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">raw data local</span>, supporting data sovereignty and cross-border compliance.
                        The trade-offs are new attack surfaces (leakage/poisoning/control-plane risks) and higher requirements for infrastructure, governance, and MLOps.
                    </p>
                </div>
            </div>
        </section>
    );
}


