// Single source for contact data. Replace every placeholder before launch.
export const SITE = {
  name: "Nahuel Fernandez",
  fullName: "Nahuel Fernandez Beschtedt",
  email: "nahuel@nahuelfb.com", // needs Cloudflare Email Routing -> Gmail before launch
  mailSubject: "Pilot project",
  linkedin: "https://www.linkedin.com/in/nahuel-fernandez-beschtedt/",
  github: "https://github.com/lnahuelfb",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nahuelfb.com",
  title: "Nahuel Fernandez · Data collection and automation developer",
  description:
    "I build scrapers, data pipelines and the systems around them: job queues, retries, recovery after failures and monitoring. I work async, with clear written updates.",
} as const;

export const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(SITE.mailSubject)}`;
