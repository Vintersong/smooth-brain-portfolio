export interface Milestone {
  date: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    date: "January 2023",
    title: "Project Kickoff",
    description: "Initial brainstorming sessions and concept validation. Defined the core vision and assembled the founding team.",
  },
  {
    date: "March 2023",
    title: "Research & Discovery",
    description: "Deep-dive into market research, competitor analysis, and user interviews to shape the product direction.",
  },
  {
    date: "May 2023",
    title: "First Prototype",
    description: "Built a rough interactive prototype to test core assumptions and gather early feedback from potential users.",
  },
  {
    date: "July 2023",
    title: "Architecture Design",
    description: "Finalized the technical architecture, chose the tech stack, and set up the development infrastructure.",
  },
  {
    date: "September 2023",
    title: "Alpha Release",
    description: "Shipped the first internal alpha with essential features. Started dogfooding and logging bugs aggressively.",
  },
  {
    date: "November 2023",
    title: "Design System",
    description: "Created a comprehensive design system with reusable components, tokens, and guidelines for consistency.",
  },
  {
    date: "January 2024",
    title: "Beta Launch",
    description: "Opened the beta to a small group of external testers. Collected feedback and iterated on UX pain points.",
  },
  {
    date: "March 2024",
    title: "Performance Overhaul",
    description: "Optimized load times, reduced bundle size, and improved rendering performance across all devices.",
  },
  {
    date: "June 2024",
    title: "Feature Expansion",
    description: "Added collaboration tools, notifications, and integrations based on the most-requested beta feedback.",
  },
  {
    date: "August 2024",
    title: "Security Audit",
    description: "Conducted a full security audit, implemented fixes, and achieved compliance with industry standards.",
  },
  {
    date: "October 2024",
    title: "Public Launch",
    description: "Officially launched to the public with a marketing campaign, landing page, and onboarding flow.",
  },
  {
    date: "December 2024",
    title: "Post-Launch Iteration",
    description: "Analyzed usage data, addressed scaling challenges, and shipped quality-of-life improvements based on real-world usage.",
  },
];
