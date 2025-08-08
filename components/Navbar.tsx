"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { useEffect, useState } from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#network", label: "Network" },
  { href: "#sla", label: "SLA" },
  { href: "#faq", label: "FAQ" },
  { href: "#docs", label: "Docs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <header className="nav-sticky">
      <nav className="container-tight flex h-14 items-center justify-between gap-6">
        <Link href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold tracking-tight">VertexNode</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="muted hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="btn btn-primary">Deploy Now</a>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <button
          className="md:hidden btn btn-ghost"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden z-50 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <div className="container-tight py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <a href="#pricing" className="btn btn-primary">Deploy Now</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
