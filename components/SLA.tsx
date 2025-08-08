import { Check } from "lucide-react";

export function SLA() {
  const items = [
    "99.99% compute SLA",
    "Pro-rated credits on breach",
    "Redundant power & network",
    "Anycast L3/4 DDoS included",
  ];

  const sec = [
    "Tier III facilities, access control",
    "Encryption at rest (NVMe), in transit",
    "Role-based access, 2FA, audit logs",
    "Backups + snapshots (configurable)",
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card p-5">
        <h3 className="h3 mb-2">SLA Summary</h3>
        <ul className="space-y-2">
          {items.map(i => (<li key={i} className="flex items-center gap-2"><Check className="h-4 w-4"/>{i}</li>))}
        </ul>
      </div>
      <div className="card p-5">
        <h3 className="h3 mb-2">Security</h3>
        <ul className="space-y-2">
          {sec.map(i => (<li key={i} className="flex items-center gap-2"><Check className="h-4 w-4"/>{i}</li>))}
        </ul>
      </div>
    </div>
  );
}
