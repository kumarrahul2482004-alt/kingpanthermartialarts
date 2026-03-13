import type { LucideIcon } from "lucide-react";
import {
  Award,
  BrainCircuit,
  Dumbbell,
  HeartPulse,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trophy,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

export type ProblemItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProgramItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type CaseStudyItem = {
  name: string;
  result: string;
  before: string;
  after: string;
  story: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  "Beginner Friendly",
  "Certified Fight Coaches",
  "Real Self-Defense",
  "Free Trial Available",
];

export const problems: ProblemItem[] = [
  {
    title: "Lack of fitness motivation",
    description:
      "Standard workouts get repetitive fast, making it hard to stay consistent and see real physical progress.",
    icon: HeartPulse,
  },
  {
    title: "Low confidence",
    description:
      "When you do not feel strong, prepared, or capable, that uncertainty shows up in daily life and decision-making.",
    icon: UserRound,
  },
  {
    title: "Poor self-defense knowledge",
    description:
      "Most people have never practiced practical defensive movement under pressure with expert correction.",
    icon: Shield,
  },
  {
    title: "Stress and lack of discipline",
    description:
      "Without a challenging routine and strong coaching, focus, resilience, and discipline can slip over time.",
    icon: BrainCircuit,
  },
];

export const solutions = [
  {
    title: "Professional martial arts coaching",
    description: "Train under experienced coaches who sharpen fundamentals, form, and mindset every session.",
    icon: Award,
  },
  {
    title: "Structured training programs",
    description: "Follow a proven path built for beginners, young athletes, and competitive fighters.",
    icon: Target,
  },
  {
    title: "Real combat techniques",
    description: "Learn practical striking, movement, and defense that translate into real confidence.",
    icon: Swords,
  },
  {
    title: "Physical and mental discipline",
    description: "Build strength, endurance, self-control, and focus with consistent academy routines.",
    icon: Sparkles,
  },
];

export const trainerHighlights = [
  {
    name: "Coach Marcus Steele",
    role: "Head MMA Coach",
    summary: "Former national competitor focused on precision striking, footwork, and high-performance conditioning.",
  },
  {
    name: "Coach Elena Cruz",
    role: "Kids Program Director",
    summary: "Specializes in building discipline, confidence, and safe technique development for younger students.",
  },
  {
    name: "Coach Devon Blake",
    role: "Self Defense Lead",
    summary: "Teaches practical scenario-based defense with clear, step-by-step instruction for all levels.",
  },
];

export const programs: ProgramItem[] = [
  {
    title: "Beginner Martial Arts Training",
    description: "Master stance, movement, and core techniques with a welcoming program built for first-timers.",
    icon: Shield,
    cta: "Start as a Beginner",
  },
  {
    title: "MMA Conditioning",
    description: "Boost endurance, explosiveness, and fight-ready athleticism with high-intensity sessions.",
    icon: Dumbbell,
    cta: "Build Fight Fitness",
  },
  {
    title: "Self Defense Training",
    description: "Learn calm, effective responses for real-world situations through practical defense drills.",
    icon: Swords,
    cta: "Learn Self Defense",
  },
  {
    title: "Kids Martial Arts Program",
    description: "Help children grow confidence, discipline, and coordination in a safe, structured environment.",
    icon: Users,
    cta: "Explore Kids Classes",
  },
  {
    title: "Advanced Fighter Training",
    description: "Refine strategy, sparring, and competitive performance for serious students and active fighters.",
    icon: Trophy,
    cta: "Train Like a Competitor",
  },
];

export const stats: StatItem[] = [
  { value: "500+", label: "Students Trained" },
  { value: "10+", label: "Professional Coaches" },
  { value: "8+", label: "Years of Training Excellence" },
  { value: "100+", label: "Tournament Winners" },
];

export const caseStudies: CaseStudyItem[] = [
  {
    name: "Rahul S.",
    result: "Lost 24 lbs and earned his first tournament medal in 7 months.",
    before: "Low stamina, inconsistent workouts, and no combat sports background.",
    after: "Competing confidently, training four days a week, and mentoring new members.",
    story:
      "Rahul started with zero experience and focused on the beginner curriculum, conditioning, and coach check-ins. The structure helped him become stronger, sharper, and fully committed.",
  },
  {
    name: "Maya T.",
    result: "Built confidence and moved from trial class to advanced sparring track.",
    before: "Wanted self-defense skills but felt intimidated by gyms and group training.",
    after: "Now attends weekly striking sessions and leads by example with calm, disciplined focus.",
    story:
      "Maya used the free trial to ease in, then progressed through private fundamentals and coached sparring. The academy gave her a safe but challenging path to real confidence.",
  },
  {
    name: "Ethan K.",
    result: "Improved focus, fitness, and discipline through the youth competition pathway.",
    before: "Struggled with routine, energy, and confidence in team environments.",
    after: "Earned two youth podium finishes and developed stronger habits at school and at home.",
    story:
      "With guidance from the kids program and clear milestone tracking, Ethan turned training into a weekly routine that strengthened both mindset and performance.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "Training here completely changed my confidence and fitness. Every class feels focused, motivating, and elite.",
    name: "Jason Miller",
    role: "Beginner Program Student",
    avatar: "/images/avatar-jason.svg",
  },
  {
    quote: "The coaches know exactly how to push you without overwhelming you. I felt stronger within the first month.",
    name: "Priya Shah",
    role: "Self Defense Member",
    avatar: "/images/avatar-priya.svg",
  },
  {
    quote: "My son loves the kids classes. The discipline, respect, and structure have been incredible for him.",
    name: "Angela Brooks",
    role: "Parent of Youth Student",
    avatar: "/images/avatar-angela.svg",
  },
  {
    quote: "This is the first gym that made me feel like an athlete again. The energy is premium from day one.",
    name: "Darnell Reed",
    role: "MMA Conditioning Student",
    avatar: "/images/avatar-darnell.svg",
  },
];

export const processSteps = [
  {
    title: "Book Free Trial",
    description: "Choose your class and reserve a no-pressure session with our coaching team.",
  },
  {
    title: "Meet Your Coach",
    description: "Get assessed, set your goals, and find the right training path for your level.",
  },
  {
    title: "Start Training",
    description: "Step into guided sessions built around technique, conditioning, and confidence.",
  },
  {
    title: "Transform Yourself",
    description: "Stay consistent and watch your strength, mindset, and discipline evolve.",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Build real strength",
    description: "Develop athletic power, endurance, mobility, and resilience through purposeful training.",
    icon: Dumbbell,
  },
  {
    title: "Learn self-defense",
    description: "Gain practical techniques you can rely on under pressure instead of theory alone.",
    icon: Shield,
  },
  {
    title: "Improve discipline",
    description: "Use structured classes and accountability to create better habits inside and outside the academy.",
    icon: Target,
  },
  {
    title: "Increase confidence",
    description: "Feel sharper, more composed, and more capable as your training level rises.",
    icon: Zap,
  },
  {
    title: "Elite fitness training",
    description: "Push beyond standard gym routines with martial arts conditioning that keeps you engaged.",
    icon: Trophy,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do I need experience to join?",
    answer:
      "No. Many students start with zero martial arts experience. Our beginner track is designed to teach fundamentals safely and progressively.",
  },
  {
    question: "What age groups can train?",
    answer:
      "We offer youth and adult programs, including dedicated kids classes and advanced training for experienced fighters.",
  },
  {
    question: "How many classes per week should I attend?",
    answer:
      "Most members train two to four times per week depending on goals, schedule, and recovery. Coaches help recommend the right pace.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Yes. We offer a free trial class so you can meet the coaches, experience the environment, and choose the right program.",
  },
];

export const contactDetails = {
  phone: "9990262981",
  email: "r8802746909@gmail.com",
  address: "123 Panther Way, Austin, TX 78701",
  hours: "Mon-Fri 6am-9pm, Sat 8am-5pm",
};
