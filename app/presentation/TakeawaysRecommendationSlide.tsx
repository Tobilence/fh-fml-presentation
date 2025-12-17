import React from "react";

export function TakeawaysRecommendationSlide() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Summary
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Takeaways 
              </h2>
              <p className="max-w-4xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                <span className="font-medium text-zinc-900 dark:text-zinc-50">Rule of thumb:</span> start with{" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-50">local per-bank models</span>. If you can justify the additional complexity (and risk controls), move to{" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-50">federated learning</span>. Avoid a fully{" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-50">combined</span> approach due to bias + compliance friction.
              </p>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-rose-200/80 bg-rose-50 p-5 dark:border-rose-900/40 dark:bg-rose-950/25">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-800 dark:text-rose-200">
                      Avoid
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight text-rose-950 dark:text-rose-50">
                      Combined model
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-rose-950/90 dark:text-rose-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rose-400 dark:bg-rose-600" />
                      <span>
                        <span className="font-medium">Increased bias</span> observed in our results
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rose-400 dark:bg-rose-600" />
                      <span>
                        Adds <span className="font-medium">legal/compliance friction</span> (centralized data)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rose-400 dark:bg-rose-600" />
                      <span className="font-medium">Not recommended</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-amber-200/80 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/25">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-200">
                      Best, but heavy
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight text-amber-950 dark:text-amber-50">
                      Federated model
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-amber-950/90 dark:text-amber-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>
                        <span className="font-medium">Best &amp; fairest</span> option overall
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span>
                        Requires the <span className="font-medium">most effort</span> (infra, ops, governance)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-600" />
                      <span className="text-amber-950/80 dark:text-amber-100/80">
                        Unclear if the ~2% accuracy gain is worth the hassle/overhead
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl border border-emerald-200/80 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-900 ring-1 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-100 dark:ring-emerald-900/50">
                    Recommended
                  </div>
                  <div className="pr-20">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-200">
                      Pragmatic default
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight text-emerald-950 dark:text-emerald-50">
                      Local models per bank
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-emerald-950/90 dark:text-emerald-100/90">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Works well in practice with current data separation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>
                        Great <span className="font-medium">“bang-for-your-buck”</span> alternative
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 dark:bg-emerald-600" />
                      <span>Lower operational overhead than full FL</span>
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


