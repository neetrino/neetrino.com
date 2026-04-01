export const CONTACT_CONTENT = {
  hero: {
    eyebrow: "GET IN TOUCH",
    title: "CONTACT US",
    body: "We are here to help you build, launch, and grow your digital presence. Reach out through your preferred channel, visit our office location, or send us an inquiry directly.",
  },
  sectionTitles: {
    info: "Contact information",
    methods: "Choose your preferred channel",
    location: "Visit our office",
    socials: "Social channels",
    inquiry: "Send an inquiry",
  },
} as const;

export const CONTACT_DETAILS = {
  email: "info@neetrino.com",
  phone: "+374 44 343 000",
  workingHours: "Mon - Fri, 10:00 - 19:00",
  address: "108/10 Andranik Zoravar St., Yerevan, Armenia",
  mapsUrl:
    "https://www.google.com/maps/place/Neetrino+IT+Company/@40.1684411,44.3634731,12z/data=!4m6!3m5!1s0x6a7d86fee77d7891:0x1a931845d2acd1e2!8m2!3d40.1684703!4d44.4458742!16s%2Fg%2F11tjg95w_6?entry=tts",
  mapsEmbedUrl: "https://www.google.com/maps?q=40.1684703,44.4458742&z=15&output=embed",
} as const;

export const CONTACT_METHODS = [
  {
    title: "Email us",
    description: "Send project details and get a response from our team.",
    href: `mailto:${CONTACT_DETAILS.email}`,
    cta: CONTACT_DETAILS.email,
  },
  {
    title: "Call us",
    description: "Speak directly with us during working hours.",
    href: "tel:+37444343000",
    cta: CONTACT_DETAILS.phone,
  },
  {
    title: "WhatsApp",
    description: "Quick communication for updates and follow-ups.",
    href: "https://wa.me/37444343000",
    cta: "Open WhatsApp",
  },
  {
    title: "Telegram",
    description: "Message our team on Telegram.",
    href: "https://telegram.me/neetrino",
    cta: "Open Telegram",
  },
] as const;

export const CONTACT_SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/Neetrino" },
  { label: "Instagram", href: "https://www.instagram.com/neetrino_it_agency/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/neetrino-it-agency/" },
  { label: "Telegram", href: "https://telegram.me/neetrino" },
  { label: "WhatsApp", href: "https://wa.me/37444343000" },
  { label: "Viber", href: "viber://chat?number=%2B37444343000" },
] as const;
