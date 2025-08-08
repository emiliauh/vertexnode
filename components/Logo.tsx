export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l9 5-9 5-9-5 9-5z"/>
      <path d="M3 12l9 5 9-5"/>
      <path d="M3 17l9 5 9-5"/>
    </svg>
  );
}
