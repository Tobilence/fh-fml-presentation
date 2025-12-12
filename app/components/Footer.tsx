import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-background/80 py-6 text-xs text-zinc-500 backdrop-blur-md dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Federis AI. Demo environment –
          not affiliated with any bank.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hover:text-zinc-800 hover:underline dark:hover:text-zinc-200"
          >
            Imprint
          </Link>
          <Link
            href="#"
            className="hover:text-zinc-800 hover:underline dark:hover:text-zinc-200"
          >
            Privacy
          </Link>
          <span className="hidden text-[11px] text-zinc-400 sm:inline">
            AI model governance · Responsible ML · Risk &amp; Compliance
          </span>
        </div>
      </div>
    </footer>
  );
}


