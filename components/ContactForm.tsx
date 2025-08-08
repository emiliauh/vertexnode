"use client";
import { useId, useState } from "react";

export function ContactForm() {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const idN = useId(); const idE = useId(); const idC = useId(); const idU = useId(); const idM = useId();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault(); setErr(null);
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!String(data.email).includes("@")) { setErr("Enter a valid email."); return; }
    setOk(true);
  }

  if (ok) return <div className="card p-4">Thanks. We’ll reply within 1 business day.</div>;

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <label htmlFor={idN} className="mono">Name</label>
          <input id={idN} name="name" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" required />
        </div>
        <div>
          <label htmlFor={idE} className="mono">Email</label>
          <input id={idE} name="email" type="email" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" required />
        </div>
      </div>
      <div>
        <label htmlFor={idC} className="mono">Company</label>
        <input id={idC} name="company" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
      </div>
      <div>
        <label htmlFor={idU} className="mono">Use case</label>
        <input id={idU} name="usecase" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
      </div>
      <div>
        <label htmlFor={idM} className="mono">Message</label>
        <textarea id={idM} name="message" rows={4} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" required />
      </div>
      {err && <div role="alert" className="text-sm text-red-600">{err}</div>}
      <button className="btn btn-primary w-fit">Send</button>
      <p className="mono muted">Or email <a className="underline" href="mailto:sales@vertexnode.net">sales@vertexnode.net</a>. Join our <a className="underline" href="#">Discord</a>.</p>
    </form>
  );
}
