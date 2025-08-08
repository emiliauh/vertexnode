import { plans, hourlyFromMonthly } from "@/lib/pricing";
import { useState } from "react";

export function PricingTable() {
  const [mode, setMode] = useState<"monthly"|"hourly">("monthly");

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center gap-2">
          <span className="mono muted">Billing:</span>
          <button className={`btn ${mode === 'monthly' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setMode('monthly')} aria-pressed={mode==='monthly'}>Monthly</button>
          <button className={`btn ${mode === 'hourly' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setMode('hourly')} aria-pressed={mode==='hourly'}>Hourly</button>
        </div>
        <a href="#contact" className="btn btn-ghost">Need custom?</a>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Plan</th><th>vCPU</th><th>RAM</th><th>NVMe SSD</th><th>Bandwidth</th><th>Port</th><th>Price</th><th></th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => {
              const price = mode === 'monthly' ? `$${p.monthly}/mo` : `$${hourlyFromMonthly(p.monthly)}/hr`;
              return (
                <tr key={p.name}>
                  <td className="font-medium">{p.name}</td>
                  <td>{p.vcpu}</td>
                  <td>{p.ramGB} GB</td>
                  <td>{p.ssdGB} GB</td>
                  <td>{p.bandwidthTB} TB</td>
                  <td>{p.portGbps} Gbps</td>
                  <td className="font-semibold">{price}</td>
                  <td><a href="#contact" className="btn btn-primary">Deploy</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
