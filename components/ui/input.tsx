import * as React from "react";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => <input ref={ref} {...props} className={(props.className ?? "") + " w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"} />
);
Input.displayName = "Input";
