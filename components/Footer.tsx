export function Footer() {
  return (
    <footer id="contact" className="section">
      <div className="grid gap-8 md:grid-cols-5">
        <div>
          <div className="font-semibold">Products</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#pricing" className="hover:underline">VPS</a></li>
            <li><a href="#network" className="hover:underline">Network</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Network</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>AS49217</li>
            <li><a href="#network" className="hover:underline">Looking Glass</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Resources</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#docs" className="hover:underline">Docs</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
            <li><a href="#docs" className="hover:underline">API</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#faq" className="hover:underline">SLA</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">AUP</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm muted">
        <div>© {new Date().getFullYear()} VertexNode Hosting</div>
        <div className="flex items-center gap-3">
          <a href="mailto:sales@vertexnode.net" className="hover:underline">sales@vertexnode.net</a>
          <span>•</span>
          <a href="#" className="hover:underline">Discord</a>
          <span>•</span>
          <a href="#" className="hover:underline">Slack</a>
        </div>
      </div>
    </footer>
  );
}
