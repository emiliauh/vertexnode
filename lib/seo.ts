"use client";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Script id="gtag-placeholder" strategy="afterInteractive">{`
        // window.dataLayer = window.dataLayer || [];
        // function gtag(){dataLayer.push(arguments)}
        // gtag('js', new Date());
        // gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID || ""}');
      `}</Script>
      {children}
      <Script id="ld-org" type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VertexNode Hosting",
        url: "https://www.vertexnode.net",
        logo: "https://www.vertexnode.net/logo.svg",
        sameAs: ["https://twitter.com/vertexnode","https://github.com/vertexnode"],
        contactPoint: [{
          "@type": "ContactPoint",
          telephone: "+1-000-000-0000",
          contactType: "customer support",
          availableLanguage: ["en"],
        }]
      })}</Script>
      <Script id="ld-product" type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "VertexNode VPS",
        brand: "VertexNode Hosting",
        description: "AMD EPYC NVMe VPS with 40–80 Gbps networking and Anycast DDoS.",
        offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: 5, highPrice: 36, offerCount: 4 }
      })}</Script>
    </ThemeProvider>
  );
}
