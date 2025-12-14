export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Privacy-preserving AI for regulated banking
          </span>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              Collaborative AI{" "}
              <span className="bg-gradient-to-r from-sky-500 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                without centralising data
              </span>{" "}
              — built for European banks.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
              Founded in March 2022 in response to a rapidly changing threat
              landscape, Federis AI helps banks unlock the value of distributed
              data while strengthening privacy, security, and regulatory
              compliance. We specialise in federated learning and governance-first
              delivery — keeping sensitive data inside local boundaries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/presentation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              View presentation
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/experiment"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-900/40 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-400"
            >
              Explore demo workspace
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span className="rounded-full border border-zinc-200/80 bg-white px-3 py-1 dark:border-zinc-800/80 dark:bg-zinc-950/40">
              Data stays local
            </span>
            <span className="rounded-full border border-zinc-200/80 bg-white px-3 py-1 dark:border-zinc-800/80 dark:bg-zinc-950/40">
              Governance &amp; auditability
            </span>
            <span className="rounded-full border border-zinc-200/80 bg-white px-3 py-1 dark:border-zinc-800/80 dark:bg-zinc-950/40">
              On-prem / private cloud / hybrid
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              What we deliver
            </div>
            <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/60">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  1 · Federated learning platform
                </div>
                <p className="mt-1">
                  Coordinate training rounds, aggregate updates, manage
                  participation policies, and keep raw data within each
                  subsidiary or jurisdiction.
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/60">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  2 · Governance &amp; compliance toolkit
                </div>
                <p className="mt-1">
                  Model lineage, training logs, versioning, audit trails and
                  access controls — designed for internal audit and model risk
                  stakeholders.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-zinc-300/80 bg-zinc-50/60 p-3 text-[11px] dark:border-zinc-700/80 dark:bg-zinc-900/60">
                Typical banking use cases: fraud/anomaly detection, credit risk
                signals, AML pattern detection, churn, and operational
                forecasting.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] dark:border-zinc-800/80">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Why federated learning for banks
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Federated learning enables collaborative model development across
            legally separated entities while keeping sensitive data local. You
            get group-wide signal — without building a centralised data lake
            that increases exposure and slows approvals.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Data stays local
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                No raw customer data leaves a subsidiary. Only model updates are
                exchanged — aligned with data residency requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Secure collaboration
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                Encryption in transit/at rest, RBAC, and configurable
                participation policies — with optional privacy enhancements.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Governance-ready
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                Training logs, model lineage, versioning, and audit trails help
                risk &amp; compliance teams sign off with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Founded for security &amp; privacy
          </div>
          <p className="text-zinc-600 dark:text-zinc-300">
            Federis AI was founded in March 2022 by Clemens Pfeiffer, Tobias
            Furtlehner, and Markus Thornton — with a mission to improve privacy
            and strengthen data security for banks across Europe amid rising
            cyber threats.
          </p>
          <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/60">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              The founding team
            </div>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Clemens Pfeiffer
                </span>{" "}
                — technology implementation experience in the renewable energy
                sector; delivery in regulated/critical environments with a focus
                on scalable rollouts and stakeholder management.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Tobias Furtlehner
                </span>{" "}
                — ML engineering &amp; secure software architecture for
                distributed learning setups; focus on reliable pipelines and
                resilient systems.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Markus Thornton
                </span>{" "}
                — applied data science (incl. predictive modelling); focus on
                operationalising ML solutions and translating analytics into
                measurable products.
              </li>
            </ul>
          </div>
          <p className="text-[11px] text-zinc-400">
            The founders completed their BSc degrees at the University of Applied
            Sciences St. Pölten before gaining experience in their respective
            fields.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-3 dark:border-zinc-800/80">
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Platform &amp; architecture
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Built to support regulated delivery: clear separation of concerns,
            policy-driven participation, and deployment models aligned to
            subsidiary constraints.
          </p>
        </div>

        <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Central orchestrator
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Coordinates training rounds, policies, and model versioning. Stores
              metadata — not raw data.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Local training nodes
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Deployed inside each subsidiary. Connect to local data sources and
              compute within the entity boundary.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Aggregation &amp; privacy
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Combines model updates into a global model. Optional privacy
              modules can be added depending on requirements.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Deployment options
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              On-premise, private cloud, or hybrid — aligned to risk appetite,
              residency needs, and infrastructure maturity.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] dark:border-zinc-800/80">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Commercials
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Pricing is modular and aligned to rollout scope: a fixed-scope pilot
            package, a platform subscription priced by nodes/environments, and
            professional services for integration and documentation support.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Pilot package
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                Setup + integration + one use case across a defined number of
                subsidiaries.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Platform subscription
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                Priced by nodes, environments (dev/test/prod), and optional
                modules.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Services &amp; support
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                Architecture, security/compliance documentation, rollout
                planning, training, and SLA tiers.
              </p>
            </div>
          </div>
          <p className="text-[11px] text-zinc-400">
            Financial statements, proof of delivery capacity, and relevant
            insurances can be provided upon request and/or under NDA.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            References
          </div>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
            <li>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                Deutsche Bank
              </span>{" "}
              — reference available under NDA / upon approval.
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                Raiffeisenbank
              </span>
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                Goldman Sachs
              </span>
            </li>
          </ul>
          <p className="text-[11px] text-zinc-400">
            Named client references are subject to client approval and may be
            shared under NDA.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Testimonials
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Feedback is often shared under NDA; below are anonymised summaries
              representative of what banking teams typically highlight.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <figure className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <blockquote className="text-zinc-700 dark:text-zinc-200">
              “The architecture let us collaborate across subsidiaries without
              triggering a long data-centralisation programme. Governance and
              auditability were built in from day one.”
            </blockquote>
            <figcaption className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              Head of Model Risk Management · European banking group (anonymised)
            </figcaption>
          </figure>

          <figure className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <blockquote className="text-zinc-700 dark:text-zinc-200">
              “Strong security posture and practical delivery. The team spoke
              the language of IT security and compliance — not just data
              science.”
            </blockquote>
            <figcaption className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              CISO Office · Retail bank (anonymised)
            </figcaption>
          </figure>

          <figure className="rounded-2xl border border-zinc-200/80 bg-white p-5 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <blockquote className="text-zinc-700 dark:text-zinc-200">
              “Clear rollout pattern, clear documentation, and measurable
              outcomes. We could onboard entities step-by-step despite very
              different infrastructure maturity.”
            </blockquote>
            <figcaption className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              Programme Lead · Fraud &amp; analytics (anonymised)
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
