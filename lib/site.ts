// Single source for contact data. Replace every placeholder before launch.
export const SITE = {
  name: "Nahuel Fernandez",
  fullName: "Nahuel Fernandez Beschtedt",
  email: "nahuel@nahuelfb.com", // needs Cloudflare Email Routing -> Gmail before launch
  mailSubject: "Pilot project",
  linkedin: "https://www.linkedin.com/in/nahuel-fernandez-beschtedt/",
  github: "https://github.com/lnahuelfb",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nahuelfb.com",
  // Flip to false when not taking new projects: hides the availability line.
  available: true,
  title: "Nahuel Fernandez · Data collection and automation developer",
  description:
    "I build scrapers, data pipelines and the systems around them: job queues, retries, recovery after failures and monitoring. I work async, with clear written updates.",
} as const;

// Hero subline. SITE.description (shorter) stays as the meta description.
export const PITCH =
  "For teams that depend on web data and can't afford it to break quietly. I build scrapers, data pipelines and the systems around them: queues, retries, recovery after failures and monitoring. I work async, with clear written updates.";

const MAIL_BODY = [
  "What data do you need?",
  "Where does it come from?",
  "How often do you need it?",
  "Has anything broken before?",
].join("\r\n");

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(SITE.mailSubject)}&body=${encodeURIComponent(MAIL_BODY)}`;
