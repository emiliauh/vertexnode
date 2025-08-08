import * as React from "react";
export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={(props.className ?? "") + " card"} />;
}
