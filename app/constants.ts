// lib/constants.ts

export const NAV_LINKS = [
  { href: "/company", label: "Company" },
  { href: "/strategy", label: "Strategy" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE = {
  name: "Akiyama Capital",
  tagline: "One Acquisition at a Time.",
  description:
    "Akiyama Capital is a New York-based investment firm focused on acquiring and operating national security and defense companies across the U.S. through a disciplined roll-up strategy.",
  email: "info@akiyamacapital.com",
  url: "https://akiyamacapital.com",
  location: "New York City",
} as const;
