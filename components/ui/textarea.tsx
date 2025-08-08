import * as React from "react";
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => <textarea ref={ref} {...props} className={(props.className ?? "") + " w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"} />
);
Textarea.displayName = "Textarea";
