import * as React from "react";
export const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => <select {...props} className={(props.className ?? "") + " w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"} />
