"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustRow } from "@/components/TrustRow";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PricingTable } from "@/components/PricingTable";
import { PricingCalculator } from "@/components/PricingCalculator";
import { NetworkMap } from "@/components/NetworkMap";
import { SLA } from "@/components/SLA";
import { DocsPreview } from "@/components/DocsPreview";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
          <TrustRow />
        </section>

        <section id="features" className="section">
          <h2 className="h2 mb-6">Capabilities</h2>
          <FeatureGrid />
        </section>

        <section id="pricing" className="section">
          <h2 className="h2 mb-6">Pricing</h2>
          <PricingTable />
          <div className="mt-10">
            <PricingCalculator />
            <p className="mt-3 mono muted">Hourly billed, monthly cap, VAT/taxes excluded.</p>
          </div>
        </section>

        <section id="network" className="section">
          <h2 className="h2 mb-6">Network</h2>
          <NetworkMap />
        </section>

        <section id="sla" className="section">
          <h2 className="h2 mb-6">SLA & Security</h2>
          <SLA />
        </section>

        <section id="docs" className="section">
          <h2 className="h2 mb-6">Developer Docs</h2>
          <DocsPreview />
        </section>

        <section id="testimonials" className="section">
          <h2 className="h2 mb-6">What teams say</h2>
          <Testimonials />
        </section>

        <section id="faq" className="section">
          <h2 className="h2 mb-6">FAQ</h2>
          <FAQ />
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
