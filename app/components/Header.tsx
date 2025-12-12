"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import Logo from "../logo.png";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/experiment", label: "Experiment" },
  { href: "/model-cards", label: "Model cards" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-background/80 backdrop-blur-md dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Federis AI logo"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Federis AI
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Applied AI for regulated finance
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative rounded-full px-3 py-1 transition-colors",
                  "hover:text-zinc-900 dark:hover:text-zinc-50",
                  isActive
                    ? "bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900"
                    : "text-zinc-600 dark:text-zinc-300",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* <div className="hidden items-center gap-3 sm:flex">
          <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            Banking-ready AI
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-100 dark:ring-emerald-800/60">
            Under NDA – demo data only
          </span>
        </div> */}
      </div>
      <Separator.Root className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
    </header>
  );
}


