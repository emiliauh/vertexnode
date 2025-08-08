import * as React from "react";
export const Slider = ({ value, onChange, min=0, max=100, step=1 }: { value:number; onChange:(v:number)=>void; min?:number; max?:number; step?:number; }) => (
  <input type="range" min={min} max={max} step={step} value={value} onChange={(e)=>onChange(Number(e.target.value))} className="w-full" />
);
