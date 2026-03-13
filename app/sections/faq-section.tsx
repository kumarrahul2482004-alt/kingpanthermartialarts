import { Container } from "@/app/components/container";
import { FAQAccordion } from "@/app/components/faq-accordion";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { faqs } from "@/app/lib/site-data";

export function FAQSection() {
  return (
    <section id="faq" className="section-shell" aria-labelledby="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="FAQ"
        title="Common questions before someone books a class or requests a demo"
        description="A good FAQ reduces uncertainty right before the conversion decision. These answers address both academy enrollment and automation implementation."
      />
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
            <FAQAccordion items={faqs} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
