import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-accent",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:opacity-90",
        ghost: "border border-slate-300 dark:border-slate-700 hover:bg-slate-100/60 dark:hover:bg-slate-800/60",
      },
    },
    defaultVariants: { variant: "default" }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button ref={ref} className={clsx(buttonVariants({ variant }), className)} {...props} />
  )
);
Button.displayName = "Button";
