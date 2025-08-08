import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800 p-8 md:p-12">
      <svg aria-hidden className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-10" viewBox="0 0 800 400">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative">
        <h1 className="h1 max-w-[75ch]">Deploy high-performance VPS in seconds.</h1>
        <p className="lead mt-4">AMD EPYC nodes • NVMe • 40–80 Gbps networking • Anycast DDoS protection.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#pricing" className="btn btn-primary">Launch a VPS <ArrowRight className="h-4 w-4"/></a>
          <a href="#pricing" className="btn btn-ghost">View Pricing</a>
        </div>
      </div>
    </div>
  );
}
