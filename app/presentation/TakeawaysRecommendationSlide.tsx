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
                Takeaways / Recommendation
              </h2>
            </header>

            <div className="mt-6 flex-1">
              <div className="rounded-xl border border-zinc-200/80 bg-white p-5 text-zinc-700 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-200">
                <div className="text-sm leading-relaxed">tbd: Argue whether federated learning is a good fit for the bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


