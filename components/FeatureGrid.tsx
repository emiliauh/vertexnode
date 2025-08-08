import { Cloud, Gauge, Shield, Activity, Globe2, Lock } from "lucide-react";

const features = [
  { title: "NVMe VPS", desc: "KVM, AMD EPYC, DDR5, snapshots, backups.", icon: Cloud },
  { title: "Global Network", desc: "PoPs: NYC, Ashburn, Chicago, Dallas, Seattle, London, Frankfurt, Tokyo.", icon: Globe2 },
  { title: "Security", desc: "DDoS mitigation (L3/4), firewall, private networking.", icon: Shield },
  { title: "Automation", desc: "API, Terraform, cloud-init, IPv6 ready.", icon: Activity },
  { title: "Observability", desc: "Real-time metrics, status page, incident history.", icon: Gauge },
  { title: "Compliance", desc: "GDPR-friendly data handling.", icon: Lock },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map(({ title, desc, icon: Icon }) => (
        <div key={title} className="card p-5 transition duration-fast hover:shadow-lg">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5" />
            <h3 className="h3">{title}</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-[70ch]">{desc}</p>
        </div>
      ))}
    </div>
  );
}
