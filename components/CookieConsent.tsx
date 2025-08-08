"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("cc_seen");
    if (!seen) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 card p-4 w-[95%] max-w-xl">
      <div className="text-sm">We use essential cookies. Enable analytics?</div>
      <div className="mt-3 flex items-center gap-2">
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={analytics} onChange={(e)=>setAnalytics(e.target.checked)} /> Analytics
        </label>
        <button className="btn btn-primary ml-auto" onClick={()=>{ localStorage.setItem("cc_seen","1"); localStorage.setItem("cc_analytics", analytics?"1":"0"); setOpen(false); }}>Save</button>
      </div>
    </div>
  );
}
