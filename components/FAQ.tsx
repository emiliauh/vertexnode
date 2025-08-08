"use client";
import { useState } from "react";

const faqs = [
  { q: "How is billing handled?", a: "Hourly with a monthly cap. VAT/taxes excluded." },
  { q: "Do you support backups?", a: "Yes, scheduled backups and on-demand snapshots." },
  { q: "Which OS images are available?", a: "Ubuntu, Debian, AlmaLinux, Rocky, Windows (BYOL)." },
  { q: "Can I bring a custom ISO?", a: "Yes, upload ISOs via the control panel or API." },
  { q: "Is IPv6 included?", a: "Yes, dual-stack by default." },
  { q: "Bandwidth overage?", a: "Overage is $0.01/GB after plan limits." },
  { q: "Support SLAs?", a: "24/7 with response targets by severity (P1 ≤15 min)." },
  { q: "How do I cancel?", a: "Cancel any time from the dashboard. No long-term contracts." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="card p-4">
      {faqs.map((f, i)=> (
        <details key={f.q} className="border-b border-slate-200/60 dark:border-slate-800" open={open===i} onToggle={(e)=>{ if ((e.target as HTMLDetailsElement).open) setOpen(i); }}>
          <summary className="cursor-pointer py-3 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{f.q}</summary>
          <div className="pb-3 text-sm text-slate-700 dark:text-slate-300 max-w-[75ch]">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
