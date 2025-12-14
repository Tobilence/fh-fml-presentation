import React from "react";
import Image from "next/image";

export function ShapSlide() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Explainability · Feature impact
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                SHAP summary plot
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                This pattern was <span className="font-medium">similar for all models</span>.
              </p>
            </header>

            <div className="mt-6">
              <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/shap_values_combined_banks.png"
                    alt="SHAP summary plot (combined banks)"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                SHAP values across combined banks (summary).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

