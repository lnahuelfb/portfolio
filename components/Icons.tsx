type P = { size?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  viewBox: "0 0 24 24",
} as const;

export const ArrowRight = ({ size = 16, className }: P) => (
  <svg {...base} width={size} height={size} className={className}><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
);
export const ArrowUpRight = ({ size = 14, className }: P) => (
  <svg {...base} width={size} height={size} className={className}><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
);
export const Chevron = ({ size = 16, className }: P) => (
  <svg {...base} width={size} height={size} className={className}><path d="M9 18l6-6-6-6" /></svg>
);
export const Moon = ({ size = 16, className }: P) => (
  <svg {...base} width={size} height={size} className={className}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
);
export const Sun = ({ size = 16, className }: P) => (
  <svg {...base} width={size} height={size} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
export const Copy = ({ size = 14, className }: P) => (
  <svg {...base} width={size} height={size} className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
export const Check = ({ size = 14, className }: P) => (
  <svg {...base} width={size} height={size} className={className}><path d="M20 6L9 17l-5-5" /></svg>
);
