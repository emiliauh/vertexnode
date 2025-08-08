export function Sparkline({ values }: { values: number[] }) {
  const width = 260; const height = 60; const pad = 8;
  const min = Math.min(...values); const max = Math.max(...values);
  const pts = values.map((v, i) => {
    const x = pad + (i * (width - pad*2)) / (values.length - 1);
    const y = pad + (height - pad*2) * (1 - (v - min) / (max - min + 0.0001));
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-16">
      <polyline fill="none" stroke="currentColor" strokeOpacity="0.6" points={pts} />
    </svg>
  );
}
