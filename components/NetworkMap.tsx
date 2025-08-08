import { useEffect, useId } from "react";
import { Sparkline } from "@/components/Sparkline";

const dcs = [
  { city: "New York", code: "NYC", rtt: 3 },
  { city: "Ashburn", code: "IAD", rtt: 2 },
  { city: "Chicago", code: "ORD", rtt: 6 },
  { city: "Dallas", code: "DFW", rtt: 8 },
  { city: "Seattle", code: "SEA", rtt: 15 },
  { city: "London", code: "LON", rtt: 70 },
  { city: "Frankfurt", code: "FRA", rtt: 78 },
  { city: "Tokyo", code: "NRT", rtt: 120 },
];

export function NetworkMap() {
  const id = useId();
  useEffect(()=>{},[]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="card p-4 lg:col-span-2">
        <div className="h-[320px] w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
          <svg aria-hidden viewBox="0 0 600 300" className="w-[90%] h-[80%] text-slate-400">
            <defs>
              <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="600" height="300" fill={`url(#g-${id})`} rx="18"/>
            {dcs.map((d, i)=> (
              <g key={d.code}>
                <circle cx={40 + i*65} cy={60 + (i%3)*60} r="5" fill="currentColor" />
                <text x={40 + i*65 + 10} y={60 + (i%3)*60 + 4} fontSize="10" className="fill-current">{d.code}</text>
              </g>
            ))}
            <path d="M45 60 C 120 40, 200 80, 260 120 S 360 180, 420 160 S 510 130, 560 140" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35"/>
          </svg>
        </div>
        <div className="mt-4 text-sm mono">Peering highlights • AS49217 • Looking glass: lg.vertexnode.net</div>
      </div>

      <div className="card p-4">
        <h3 className="h3">Latency (mock)</h3>
        <ul className="mt-3 space-y-2">
          {dcs.map(d => (
            <li key={d.code} className="flex items-center justify-between">
              <span>{d.city} <span className="mono muted">({d.code})</span></span>
              <span className="badge border-slate-300 dark:border-slate-700">{d.rtt} ms</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <div className="mono muted mb-1">Uptime (90 days)</div>
          <Sparkline values={[99.97, 100, 99.99, 99.98, 99.99, 100, 99.97]} />
        </div>
      </div>
    </div>
  );
}
