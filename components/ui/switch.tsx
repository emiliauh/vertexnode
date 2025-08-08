import * as React from "react";
export const Switch = ({ checked, onChange }:{checked:boolean; onChange:(v:boolean)=>void}) => (
  <button role="switch" aria-checked={checked} onClick={()=>onChange(!checked)} className={`btn ${checked? 'btn-primary':'btn-ghost'}`}>{checked? 'On':'Off'}</button>
);
