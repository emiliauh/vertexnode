import Script from "next/script";

export function DocsPreview() {
  const req = `curl -s -H "Authorization: Bearer $API_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d '{"region":"nyc","vcpu":2,"ram_gb":4,"ssd_gb":60}' \\\n  https://api.vertexnode.net/v1/servers`;

  const res = `{
  "id": "srv_8f1c2",
  "status": "provisioning",
  "region": "nyc",
  "ipv4": null,
  "ipv6": null,
  "created_at": "2025-08-08T12:00:00Z"
}`;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card p-5">
        <div className="mono text-xs">API Overview • Authentication • Create Server • Snapshots</div>
        <pre className="mt-3 overflow-auto rounded-xl bg-slate-950 text-slate-100 p-4 text-xs"><code>{req}</code></pre>
        <pre className="mt-3 overflow-auto rounded-xl bg-slate-950 text-slate-100 p-4 text-xs"><code>{res}</code></pre>
        <a href="#" className="btn btn-primary mt-3">Open Full Docs</a>
      </div>
      <div className="card p-5">
        <h3 className="h3">Notes</h3>
        <ul className="list-disc ml-5 mt-2 text-sm">
          <li>OAuth2 tokens, fine-grained API keys.</li>
          <li>Terraform provider, cloud-init, webhooks.</li>
          <li>Rate limits: 600 req/min per token.</li>
        </ul>
      </div>

      <Script id="ld-faq" type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How is billing handled?", acceptedAnswer: {"@type":"Answer", text: "Hourly with a monthly cap. VAT/taxes excluded."}},
          { "@type": "Question", name: "Do you support backups?", acceptedAnswer: {"@type":"Answer", text: "Yes, scheduled backups and on-demand snapshots."}},
          { "@type": "Question", name: "Can I bring a custom ISO?", acceptedAnswer: {"@type":"Answer", text: "Yes, upload ISOs via the control panel or API."}},
          { "@type": "Question", name: "Is IPv6 included?", acceptedAnswer: {"@type":"Answer", text: "Yes, dual-stack by default."}},
          { "@type": "Question", name: "What about bandwidth overage?", acceptedAnswer: {"@type":"Answer", text: "Overage billed at $0.01/GB after plan limits."}},
          { "@type": "Question", name: "Support SLA?", acceptedAnswer: {"@type":"Answer", text: "24/7 with response targets by severity (P1 ≤15 min)."}},
          { "@type": "Question", name: "Cancellation?", acceptedAnswer: {"@type":"Answer", text: "Cancel any time. No long-term contracts."}}
        ]
      })}</Script>
    </div>
  );
}
