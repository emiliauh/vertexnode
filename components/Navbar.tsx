"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";

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
  return (
    <header className="nav-sticky">
      <nav className="container-tight flex h-14 items-center justify-between gap-6">
        <Link href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold tracking-tight">VertexNode</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="muted hover:underline underline-offset-4">{l.label}</a>
          ))}
          <a href="#pricing" className="btn btn-primary">Deploy Now</a>
          <ThemeToggle />
        </div>
        <details className="md:hidden">
          <summary className="btn btn-ghost">Menu</summary>
          <div className="mt-2 flex flex-col gap-2">
            {links.map((l) => (<a key={l.href} href={l.href} className="py-1">{l.label}</a>))}
            <a href="#pricing" className="btn btn-primary mt-2">Deploy Now</a>
            <ThemeToggle />
          </div>
        </details>
      </nav>
    </header>
  );
}
