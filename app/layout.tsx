import "./globals.css";
import { Metadata } from "next";
import { Providers } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vertexnode.net"),
  title: {
    default: "VertexNode Hosting – High‑Performance VPS in Seconds",
    template: "%s – VertexNode Hosting"
  },
  description: "Deploy AMD EPYC NVMe VPS with 40–80 Gbps networking and Anycast DDoS protection. API, Terraform, IPv6, snapshots, backups.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.vertexnode.net",
    title: "VertexNode Hosting",
    description: "AMD EPYC, NVMe Gen4, 40–80 Gbps per host, Anycast DDoS.",
    images: ["/og-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexNode Hosting",
    description: "Deploy high‑performance VPS in seconds.",
    images: ["/og-cover.png"],
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
