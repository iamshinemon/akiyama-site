// app/company/page.tsx
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import InView from "@/components/InView";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Akiyama Capital is a privately-held investment firm focused on acquiring and operating national security and defense companies across the United States.",
};

const principles = [
  {
    title: "Operator Mindset",
    body: "We do not acquire businesses to hold them at arm's length. We embed ourselves in operations, work alongside management teams, and take responsibility for outcomes.",
  },
  {
    title: "Long-Term Ownership",
    body: "We are permanent capital. There is no fund lifecycle, no forced exit timeline. Every decision is made with a multi-decade horizon in mind.",
  },
  {
    title: "Mission Continuity",
    body: "The companies we acquire support critical national security functions. We treat the preservation of clearances, certifications, and institutional knowledge as non-negotiable priorities during every transition.",
  },
  {
    title: "Disciplined Growth",
    body: "We will not pursue growth at the expense of integration quality. Each acquisition is fully absorbed before the next is executed. Speed without discipline destroys value.",
  },
];

export default function Company() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-end pb-20 pt-40 px-8 border-b border-border">
        <div className="max-w-7xl mx-auto w-full">
          <InView>
            <SectionLabel>Company</SectionLabel>
          </InView>
          <InView delay={0.15}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-6 tracking-tight leading-[1.05] max-w-4xl">
              A platform built to acquire, operate, and scale.
            </h1>
          </InView>
        </div>
      </section>

      {/* Overview */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
          <InView>
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-6 mb-8 tracking-tight">
                A new kind of defense holding company.
              </h2>
              <p className="text-base leading-relaxed text-foreground-secondary mb-6">
                Akiyama Capital is a privately-held investment firm based in
                New York. We focus exclusively on acquiring and operating
                national security and defense companies across the United
                States through a disciplined roll-up strategy.
              </p>
              <p className="text-base leading-relaxed text-foreground-secondary">
                Backed by institutional and private investors, we acquire
                high-quality businesses from founders and owners who care
                about the continuity of their teams, their contracts, and
                their mission — and we build them into a scaled platform
                with modern operations, shared infrastructure, and
                permanent capital behind them.
              </p>
            </div>
          </InView>

          <InView delay={0.15}>
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl font-light mt-6 mb-8 tracking-tight">
                Entrepreneurship through acquisition.
              </h2>
              <p className="text-base leading-relaxed text-foreground-secondary mb-6">
                Our model is Entrepreneurship Through Acquisition — we
                identify, acquire, and operate small-to-midsize defense
                businesses in a fragmented industrial base and build them
                into something larger than any one of them could become
                alone.
              </p>
              <p className="text-base leading-relaxed text-foreground-secondary">
                We are not financial engineers. We are operators and
                builders who use M&amp;A as a growth tool. Every
                acquisition is a commitment to preserve mission capability,
                modernize systems, and grow the business from the inside
                out.
              </p>
            </div>
          </InView>
        </div>
      </section>

      {/* Principles */}
      <section className="py-40 px-8 bg-background-warm border-t border-border">
        <div className="max-w-7xl mx-auto">
          <InView>
            <div className="mb-20">
              <SectionLabel>Principles</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 tracking-tight">
                How we operate.
              </h2>
            </div>
          </InView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {principles.map(({ title, body }, i) => (
              <InView key={title} delay={0.08 * i}>
                <div className="bg-background-white p-12">
                  <h3 className="font-serif text-2xl font-light text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {body}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <InView>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
              Interested in working with us?
            </h2>
          </InView>
          <InView delay={0.1}>
            <Button href="/contact">Contact Us</Button>
          </InView>
        </div>
      </section>
    </>
  );
}
