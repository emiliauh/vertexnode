import { useId, useMemo, useState } from "react";
import { estimateCustomPrice, hourlyFromMonthly } from "@/lib/pricing";

export function PricingCalculator() {
  const [vcpu, setVcpu] = useState(2);
  const [ram, setRam] = useState(4);
  const [ssd, setSsd] = useState(60);
  const [mode, setMode] = useState<"monthly"|"hourly">("monthly");

  const monthly = useMemo(() => estimateCustomPrice(vcpu, ram, ssd), [vcpu, ram, ssd]);
  const price = mode === "monthly" ? monthly : hourlyFromMonthly(monthly);

  const idV = useId();
  const idR = useId();
  const idS = useId();

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between gap-4 p-3">
        <h3 className="h3">Calculator</h3>
        <div className="flex items-center gap-2">
          <button className={`btn ${mode==='monthly'?'btn-primary':'btn-ghost'}`} onClick={()=>setMode('monthly')}>Monthly</button>
          <button className={`btn ${mode==='hourly'?'btn-primary':'btn-ghost'}`} onClick={()=>setMode('hourly')}>Hourly</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 p-3">
        <div>
          <label htmlFor={idV} className="mono">vCPU: {vcpu}</label>
          <input id={idV} type="range" min={1} max={32} value={vcpu} onChange={(e)=>setVcpu(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label htmlFor={idR} className="mono">RAM: {ram} GB</label>
          <input id={idR} type="range" min={1} max={256} step={1} value={ram} onChange={(e)=>setRam(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label htmlFor={idS} className="mono">Storage: {ssd} GB</label>
          <input id={idS} type="range" min={20} max={2000} step={20} value={ssd} onChange={(e)=>setSsd(Number(e.target.value))} className="w-full" />
        </div>
      </div>

      <div className="flex items-baseline gap-3 p-3">
        <div className="text-3xl font-semibold">{mode==='monthly' ? `$${price.toFixed(2)}/mo` : `$${price.toFixed(4)}/hr`}</div>
        <div className="mono muted">AMD EPYC • NVMe Gen4 • 80 Gbps per host</div>
      </div>
    </div>
  );
}
