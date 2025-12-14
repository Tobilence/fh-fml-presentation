import React from "react";
import { PRESENTATION_SLIDES } from "../presentation/slides";

export default function AllSlidesPage() {
  return (
    <main style={{ padding: 16, fontFamily: "ui-sans-serif, system-ui" }}>
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Presentation · All slides
          </div>
          <h1 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            All slides
          </h1>

          <nav className="mt-4 flex flex-wrap gap-2 text-sm">
            {PRESENTATION_SLIDES.map((slide) => (
              <a
                key={slide.status}
                href={`#slide-${slide.status}`}
                className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                {slide.title}
              </a>
            ))}
          </nav>
        </header>

        <div className="space-y-8">
          {PRESENTATION_SLIDES.map(({ status, title, Component }) => (
            <div key={status} className="scroll-mt-6">
              <div
                id={`slide-${status}`}
                className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
              >
                {title}
              </div>
              <Component />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

