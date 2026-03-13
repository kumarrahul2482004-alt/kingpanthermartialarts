import { Container } from "@/app/components/container";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <Container>
      <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
        {eyebrow ? <p className="pill">{eyebrow}</p> : null}
        <h2 id={id} className="section-title">
          {title}
        </h2>
        <p className="section-copy">{description}</p>
      </div>
    </Container>
  );
}
