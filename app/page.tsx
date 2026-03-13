import { Benefits } from "@/components/Benefits";
import { CaseStudies } from "@/components/CaseStudies";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { Process } from "@/components/Process";
import { Programs } from "@/components/Programs";
import { SocialProof } from "@/components/SocialProof";
import { SolutionSection } from "@/components/SolutionSection";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <Programs />
        <SocialProof />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
