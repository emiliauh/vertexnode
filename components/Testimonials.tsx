export function Testimonials() {
  const items = [
    { quote: "Boot times are instant. API is clean.", name: "Ravi S.", role: "Platform Lead", company: "Acme Robotics" },
    { quote: "Moved latency-sensitive jobs without drama.", name: "Jamie C.", role: "SRE", company: "Pixeltide" },
    { quote: "Pricing is clear. Network is fast.", name: "Nora K.", role: "CTO", company: "Helix Analytics" },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((t) => (
        <figure key={t.name} className="card p-5">
          <blockquote className="text-sm">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm muted">{t.name} • {t.role} @ {t.company}</figcaption>
        </figure>
      ))}
    </div>
  );
}
