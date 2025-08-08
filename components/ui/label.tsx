import * as React from "react";
export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => <label {...props} className={(props.className ?? "") + " mono"} />
