import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Designed for risk, compliance &amp; data leaders in banking
          </span>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              AI your{" "}
              <span className="bg-gradient-to-r from-sky-500 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                risk committee
              </span>{" "}
              can sign off on.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
              Federis AI helps banks design, build, and govern machine learning
              systems – from first proof-of-concept to regulated,
              production-grade deployments. This demo showcases how we think about experiments,
              model cards, and explainability.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/experiment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Explore experiment
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/model-cards"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-900/40 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-400"
            >
              See model cards
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              How this demo is structured
            </div>
            <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/60">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  1 · Experiment workspace
                </div>
                <p className="mt-1">
                  Use the{" "}
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Experiment
                  </span>{" "}
                  page to talk through how models evolve: versions, design
                  choices, and evidence you would show to risk &amp; business
                  stakeholders.
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/60">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  2 · Model card overview
                </div>
                <p className="mt-1">
                  Use the{" "}
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Model cards
                  </span>{" "}
                  page to show how documentation, limitations, and governance
                  checks can be organised for your internal templates.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-zinc-300/80 bg-zinc-50/60 p-3 text-[11px] dark:border-zinc-700/80 dark:bg-zinc-900/60">
                Everything you see here is placeholder content. In a project,
                we replace it with your portfolio, your processes, and your
                internal language – keeping the structure, not the numbers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] dark:border-zinc-800/80">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Why banks work with us
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            We combine model development with governance, documentation, and
            change management – so your first AI project can survive contact
            with internal audit and regulators.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                End-to-end
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                From data exploration and feature pipelines to front-end
                explainability views for relationship managers.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Governance-native
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                Model cards, decision logs, and audit trails are first-class
                citizens, not an afterthought.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Bank-ready
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                We speak the language of CROs, model risk, and IT security –
                not just data science.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Selected client references
          </div>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
            <li>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                [Tier-1 European retail bank]
              </span>{" "}
              – credit risk PD model modernisation, experiment tracking, and
              explainability workbench for risk and business.
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                [Regional universal bank]
              </span>{" "}
              – model card library, lightweight model inventory, and review
              workflows for model risk management.
            </li>
            <li>
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                [Private banking &amp; wealth manager]
              </span>{" "}
              – next-best-action recommender with human-in-the-loop controls and
              front-office explanations.
            </li>
          </ul>
          <p className="text-[11px] text-zinc-400">
            Client names and details are anonymised. We are happy to adapt this
            demo to match your portfolio, organisation, and data landscape.
          </p>
        </div>
      </section>
    </div>
  );
}
