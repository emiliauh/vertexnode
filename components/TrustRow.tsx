export function TrustRow() {
  const items = [
    { label: "ISO 27001" },
    { label: "SOC 2" },
    { label: "99.99% SLA" },
    { label: "24/7 support" },
  ];
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {items.map((i) => (
        <span key={i.label} className="badge border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200">{i.label}</span>
      ))}
    </div>
  );
}
