import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  CalendarCheck2,
  ChartNoAxesCombined,
  ClipboardList,
  Dumbbell,
  MailCheck,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Swords,
  Users,
} from "lucide-react";

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const painPoints: IconCard[] = [
  {
    title: "Missed leads",
    description: "Inquiry forms, DMs, and trial requests slip through the cracks when staff get busy.",
    icon: ScanSearch,
  },
  {
    title: "Manual CRM updates",
    description: "Front-desk teams waste hours copying student details, attendance, and notes between tools.",
    icon: ClipboardList,
  },
  {
    title: "Forgotten follow-ups",
    description: "Hot prospects cool off when reminder emails and text messages are not sent on time.",
    icon: MailCheck,
  },
  {
    title: "Disorganized operations",
    description: "Waivers, onboarding, class schedules, and parent communication become hard to manage at scale.",
    icon: CalendarCheck2,
  },
];

export const solutions: IconCard[] = [
  {
    title: "Automated lead capture",
    description: "Route new inquiries from forms, ads, and social channels straight into your pipeline.",
    icon: Bot,
  },
  {
    title: "CRM integration",
    description: "Keep prospects, students, and parents synced automatically without repetitive data entry.",
    icon: BrainCircuit,
  },
  {
    title: "Email follow-up sequences",
    description: "Send timely reminders, trial confirmations, and nurture campaigns that convert more enrollments.",
    icon: MailCheck,
  },
  {
    title: "Student onboarding workflows",
    description: "Collect waivers, send welcome packs, and trigger next steps the moment someone signs up.",
    icon: BadgeCheck,
  },
  {
    title: "Operations automation",
    description: "Reduce admin load with workflow automations for scheduling, reminders, and internal handoffs.",
    icon: Sparkles,
  },
  {
    title: "Visibility and reporting",
    description: "Track lead sources, trial attendance, retention, and revenue with cleaner operational data.",
    icon: ChartNoAxesCombined,
  },
];

export const services: IconCard[] = [
  {
    title: "Martial arts training",
    description: "High-energy classes that build technique, confidence, resilience, and consistency.",
    icon: Swords,
  },
  {
    title: "Kids programs",
    description: "Age-appropriate training focused on discipline, focus, fitness, and respect.",
    icon: Users,
  },
  {
    title: "Self-defense coaching",
    description: "Practical self-defense skills taught through realistic drills and structured progression.",
    icon: ShieldCheck,
  },
  {
    title: "Fitness and discipline",
    description: "Conditioning-driven programs that sharpen mindset while improving mobility and strength.",
    icon: Dumbbell,
  },
  {
    title: "Automation for dojos",
    description: "Done-for-you systems that help martial arts schools scale with less admin friction.",
    icon: Bot,
  },
];

export const stats = [
  { value: "500+", label: "Students trained" },
  { value: "50+", label: "Martial arts schools using our automation" },
  { value: "10+", label: "Years of coaching and systems experience" },
  { value: "94%", label: "Average trial follow-up completion rate" },
];

export const caseStudies = [
  {
    title: "Local dojo increased student signups by 40%",
    description:
      "We connected lead forms to an automated nurture flow, reduced follow-up lag, and improved trial-to-enrollment conversions.",
    result: "+40% signups in 90 days",
  },
  {
    title: "Family martial arts studio cut admin time in half",
    description:
      "Automated onboarding, waiver collection, and parent reminders helped staff focus more on coaching and retention.",
    result: "-50% admin workload",
  },
  {
    title: "Growing academy reactivated cold leads at scale",
    description:
      "Segmented email sequences and simple CRM stages reopened conversations with prospects who had gone quiet.",
    result: "3.2x more rebooked trials",
  },
];

export const testimonials = [
  {
    name: "Maya R.",
    role: "Adult Student",
    quote:
      "The coaching is elite, the energy is positive, and the structure keeps me motivated every week.",
  },
  {
    name: "Daniel T.",
    role: "Parent",
    quote:
      "Enrollment was easy, communication is clear, and my son has become more focused and confident.",
  },
  {
    name: "Coach Elena V.",
    role: "School Owner",
    quote:
      "The automation setup stopped leads from slipping away and gave our staff hours back every single week.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Join the academy",
    description: "Book a trial, meet the coaches, and find the right program for your goals or your child.",
  },
  {
    step: "02",
    title: "Capture new leads automatically",
    description: "Every website form, ad response, and inquiry is collected and routed into a clear system.",
  },
  {
    step: "03",
    title: "Automate follow-ups",
    description: "Reminders, nurture emails, and no-show recovery sequences run without manual chasing.",
  },
  {
    step: "04",
    title: "Manage students through CRM",
    description: "Track status, classes, onboarding tasks, and retention notes in one organized workflow.",
  },
  {
    step: "05",
    title: "Grow your martial arts business",
    description: "Spend more time coaching, improve retention, and scale with cleaner operations.",
  },
];

export const benefits = [
  "More students enrolling consistently",
  "Less admin work for coaches and staff",
  "Better organization across the business",
  "Higher retention with timely follow-ups",
  "Faster growth without operational chaos",
];

export const faqs = [
  {
    question: "Do I need technical knowledge to use the automation system?",
    answer:
      "No. We design the workflows so owners and staff can use them without technical expertise, and we guide the setup process.",
  },
  {
    question: "Is the automation system included with academy programs?",
    answer:
      "The academy programs and automation solutions can be engaged separately, but they are designed to work together for schools that want both growth and operational efficiency.",
  },
  {
    question: "Can parents enroll kids online?",
    answer:
      "Yes. The site and workflow structure support online inquiries, trial booking, onboarding steps, and follow-up communication for parents.",
  },
  {
    question: "How long does automation setup take?",
    answer:
      "Most schools can launch an initial lead capture and follow-up workflow within one to two weeks, depending on CRM readiness and process complexity.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Automation", href: "#automation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Automation", href: "#automation" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const trustBadges = [
  "Trusted by families",
  "Built for school owners",
  "Conversion-focused systems",
];

export const partnerLogos = [
  "Champion CRM",
  "Black Belt Ops",
  "Dojo Flow",
  "LeadStrike",
  "Mat Metrics",
];

export const heroHighlights = [
  "Free trial classes available",
  "Parent-friendly enrollment journeys",
  "Automation built for martial arts schools",
];

export const heroMetrics = [
  { label: "Trial requests captured", value: "1,200+" },
  { label: "Follow-ups automated", value: "18k+" },
  { label: "Average response speed", value: "< 2 min" },
];

export const visualFeatureChips = [
  "Lead routing",
  "Email sequences",
  "CRM sync",
  "Parent onboarding",
  "Retention reminders",
  "Staff workflows",
];

export const heroProof = [
  {
    title: "Built for enrollment growth",
    description: "Turn more trial interest into booked classes with faster follow-up and a cleaner pipeline.",
    icon: ArrowUpRight,
  },
  {
    title: "Designed for retention",
    description: "Keep students engaged with consistent communication and organized next steps.",
    icon: Users,
  },
];
