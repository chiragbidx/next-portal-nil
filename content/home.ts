// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "TalentSync CRM is live",
    titleBefore: "Recruit, manage, and place with",
    titleHighlight: "TalentSync",
    titleAfter: "— next-gen CRM for recruiters",
    subtitle:
      "TalentSync is the all-in-one workspace for recruitment agencies and staffing teams to manage candidates, clients, jobs, and placements with speed and clarity.",
    primaryCta: { label: "Book Demo", href: "#contact" },
    secondaryCta: { label: "Discover features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "TalentSync dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Runs on trusted cloud partners",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why TalentSync",
    heading: "Purpose-built for recruitment teams",
    description:
      "Say goodbye to outdated CRM workflows. TalentSync brings all your candidate, client, job order, and placement data together with team-based security and a blazing-fast dashboard.",
    items: [
      {
        icon: "Blocks",
        title: "One-Stop Recruitment Hub",
        description: "Track candidates, jobs, clients, and placements with a CRM designed for recruiters—not just sales.",
      },
      {
        icon: "Briefcase",
        title: "Optimized Workflow",
        description: "Stage pipelines, automate actions, and eliminate bottlenecks at every recruitment stage.",
      },
      {
        icon: "Goal",
        title: "Complete Activity History",
        description: "Always know who did what—see every important event, safely scoped to your team.",
      },
      {
        icon: "Sparkle",
        title: "Frictionless Experience",
        description: "Intuitive UI, fast search/filtering, robust validation, and mobile-ready for recruiters on the go.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "CRM Features",
    heading: "Modern CRM for talent-driven teams",
    subtitle:
      "TalentSync is a multi-tenant, role-based CRM with unique flows for candidate placement and job order management—built for growing agencies.",
    items: [
      { icon: "UserCircle2", title: "Candidate Management", description: "Store resumes, track status, manage tags, and assign to job orders in one click." },
      { icon: "Building", title: "Client CRM", description: "Keep all client companies organized with smart search and placement histories." },
      { icon: "Briefcase", title: "Job Orders", description: "Create and manage job orders, assign recruiters, and track candidates through the hiring pipeline." },
      { icon: "CheckCircle", title: "Placements & Tracking", description: "Record every successful placement, attach salary/fee, and spot hiring trends." },
      { icon: "Activity", title: "Audit Trail", description: "See an activity feed of all actions done by your team—for compliance and peace of mind." },
      { icon: "ShieldCheck", title: "Team-Scoped Security", description: "All data partitioned by team with strict role-based permissions and audit-ready logs." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What sets TalentSync apart",
    subtitle:
      "Built for modern recruitment workflows, offering flexibility, transparency, and speed.",
    items: [
      { title: "Candidate-Jobs Linking", description: "Assign candidates to jobs and track progress at every stage.", pro: false },
      { title: "Client History", description: "Full client profiles, search, and job/placement history in one place.", pro: false },
      { title: "Placement Analytics", description: "Track placements by client, candidate, or order—spot trends instantly.", pro: false },
      { title: "Team & Role Management", description: "Multi-tenant structure with granular roles and admin controls.", pro: false },
      { title: "Secure, Fast, Reliable", description: "Production-ready backend with audit logging and scalable cloud.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Customer Stories",
    heading: "Recruitment success with TalentSync",
    reviews: [
      { image: "/demo-img.jpg", name: "Priya B.", role: "Director, VelocityHR", comment: "TalentSync simplified our candidate screening and made placements a breeze.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Amit K.", role: "Recruiter, NextLeap Staffing", comment: "The activity log means I always know what my team is working on.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Linda May", role: "Partner, Agile Placement", comment: "Multi-tenant design keeps our client data secure and separated.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Tom Wu", role: "Talent Lead, CloudTail", comment: "Love the one-click job order assignments and quick filtering!", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet TalentSync’s founders",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Growth"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" }
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Your",
        lastName: "Partner",
        positions: ["Recruitment Tech Advisor"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" }
        ],
      },
    ],
  },
  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Flexible pricing for growing teams",
    subtitle: "Start free, then scale revenue—no per-candidate pricing or hidden fees.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Test TalentSync in your agency—includes all recruitment features.",
        buttonText: "Start for free",
        benefits: ["Up to 5 teammates", "Unlimited candidates", "Candidate-to-job linking", "All CRM modules", "Support via chat"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "Full access for recruiters and managers—great for scaling teams.",
        buttonText: "Start trial",
        benefits: [
          "Unlimited teammates",
          "Placement analytics",
          "Priority support",
          "Advanced filtering",
          "Hiring activity logs"
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 149,
        description: "For large recruitment process outsourcing and rapid-growth agencies.",
        buttonText: "Contact sales",
        benefits: [
          "SSO/SAML integration",
          "Dedicated support",
          "Bulk data import",
          "Custom reporting",
          "API integration"
        ],
      },
    ],
  },
  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "See TalentSync in action",
    description:
      "Request a walkthrough of TalentSync or share your needs—we’re here to help your recruiting accelerate.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Mumbai, India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Demo hours", value: ["Monday - Friday", "9AM - 7PM IST"] },
    },
    formSubjects: [
      "Product Demo",
      "Pricing",
      "Migration Help",
      "API/Integration",
      "Recruitment Workflows"
    ],
    formSubmitLabel: "Request demo",
  },
  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "TalentSync Questions",
    items: [
      { question: "Is TalentSync cloud-based?", answer: "Yes—access from anywhere, with data partitioned by team." },
      { question: "Can we import our current CRM data?", answer: "Yes—CSV import support is available on select plans. Contact us to discuss integrations." },
      { question: "Does it restrict records per plan?", answer: "No. We believe in fair, value-driven pricing—no per-candidate or per-client fees." },
      { question: "Are there user role controls?", answer: "Yes. Team owners can manage permission for members/admins." },
      { question: "What support channels are available?", answer: "Email, chat, and onboarding help for every team." },
    ],
  },
  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "TalentSync",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" }
        ],
      },
    ],
    copyright: "\u00a9 2026 TalentSync Recruitment CRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },
  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "TalentSync",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#testimonials", label: "Clients" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "CRM Modules",
    featureImage: { src: "/hero-image-light.jpeg", alt: "TalentSync CRM preview" },
    features: [
      { title: "Candidate Management", description: "Smart, searchable CRM profiles and recruitment statuses." },
      { title: "Job Orders", description: "All open or closed roles, permissions, and team workflow collaboration." },
      { title: "Placements", description: "Record and review matches, attached contracts, and fees." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://nextjs.org/docs", ariaLabel: "Next.js Documentation" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}