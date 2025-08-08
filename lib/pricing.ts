export type BillingMode = "monthly" | "hourly";

export type Plan = {
  name: string;
  vcpu: number;
  ramGB: number;
  ssdGB: number;
  bandwidthTB: number;
  portGbps: number;
  monthly: number;
};

export const plans: Plan[] = [
  { name: "Nano", vcpu: 1, ramGB: 1, ssdGB: 20, bandwidthTB: 1, portGbps: 1, monthly: 5 },
  { name: "Standard", vcpu: 2, ramGB: 4, ssdGB: 60, bandwidthTB: 3, portGbps: 2.5, monthly: 12 },
  { name: "Performance", vcpu: 4, ramGB: 8, ssdGB: 160, bandwidthTB: 5, portGbps: 5, monthly: 24 },
  { name: "Memory-Optimized", vcpu: 4, ramGB: 16, ssdGB: 160, bandwidthTB: 6, portGbps: 5, monthly: 36 },
];

export const hourlyFromMonthly = (m: number) => Number((m / 720).toFixed(4));

export function estimateCustomPrice(vcpu: number, ramGB: number, ssdGB: number): number {
  const base = 3;
  const cpuCost = vcpu * 4;
  const ramCost = ramGB * 1.2;
  const ssdCost = ssdGB * 0.08;
  return Math.round((base + cpuCost + ramCost + ssdCost) * 100) / 100;
}
