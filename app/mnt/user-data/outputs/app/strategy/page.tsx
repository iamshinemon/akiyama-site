// app/strategy/page.tsx
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import InView from "@/components/InView";

export const metadata: Metadata = {
  title: "Strategy",
  description:
    "Akiyama Capital builds long-term value through search, acquisition, and strategic roll-up of national security and defense companies.",
};

const principles = [
  {
    num: "01",
    title: "Contract Visibility",
    body: "Defense contractors operate on multi-year government contracts with high renewal rates and predictable revenue profiles. This is not cyclical project work — it is structural, mission-driven demand with long-duration visibility.",
  },
  {
    num: "02",
    title: "Fragmented Industrial Base",
    body: "There are over 100,000 small and mid-size businesses in the U.S. defense supply chain. The vast majority are independently owned, sub-scale, and operate without institutional infrastructure. Consolidation creates immediate value.",
  },
  {
    num: "03",
    title: "Succession Tailwind",
    body: "The average defense company founder is nearing retirement. Many hold irreplaceable security clearances with no internal succession plan. We provide a clean transition for owners who want their people, contracts, and mission taken care of.",
  },
];

const process = [
  {
    step: "01",
    title: "Sourcing",
    body: "We identify acquisition targets through proprietary outreach, defense industry networks, and direct relationships with company owners and operators. We are always in market.",
  },
  {
    step: "02",
    title: "Diligence",
    body: "Every target undergoes rigorous financial, operational, and regulatory analysis. We evaluate contract backlog, clearance infrastructure, key personnel dependencies, and integration complexity before any offer is made.",
  },
  {
    step: "03",
    title: "Acquisition",
    body: "We structure transactions that align incentives — typically retaining existing leadership, preserving facility clearances, and offering meaningful participation in the platform's long-term upside.",
  },
  {
    step: "04",
    title: "Integration",
    body: "Post-close, we deploy shared infrastructure: centralized back-office, compliance and reporting systems, proposal support, and operational playbooks refined across prior acquisitions.",
  },
  {
    step: "05",
    title: "Optimization",
    body: "We drive growth through improved contract capture rates, expanded past-performance credentials, cross-sell across the platform, and selective technology modernization that increases operational capacity.",
  },
];

const advantages = [
  {
    title: "Platform Economics",
    body: "Each acquisition is additive. Shared operations, compliance infrastructure, and past-performance credentials create compounding advantages at scale that no single small contractor can replicate alone.",
  },
  {
    title: "Clearance & Certification Moat",
    body: "Security clearances and government certifications take years to obtain and cannot be transferred. Acquiring cleared facilities and personnel is the only efficient path to scale in this sector.",
  },
  {
    title: "Operational Modernization",
    body: "Many defense SMBs run on legacy processes and manual workflows. We bring modern ERP, project management, and data systems that unlock margin expansion and position companies for larger contract vehicles.",
  },
  {
    title: "Talent Retention",
    body: "Cleared engineers, program managers, and technical staff are the business. Our integration model preserves autonomy where it matters and adds institutional support where it compounds — not to strip and flip.",
  },
];

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-end pb-20 pt-40 px-8 border-b border-border">
        <div className="max-w-7xl mx-auto w-full">
          <InView>
            <SectionLabel>Strategy</SectionLabel>
          </InView>
          <InView delay={0.15}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-6 tracking-tight leading-[1.05] max-w-4xl">
              Source aggressively. Buy deliberately. Scale with discipline.
            </h1>
          </InView>
        </div>
      </section>

      {/* Industry Thesis */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <InView>
            <SectionLabel>Industry Thesis</SectionLabel>
          </InView>
          <InView delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-8 tracking-tight max-w-3xl">
              National security is the ideal roll-up market.
            </h2>
            <p className="text-base leading-relaxed text-foreground-secondary max-w-2xl mb-20">
              The structural characteristics of this industry — long-duration
              contracts, high barriers to entry, fragmented ownership, and
              critical workforce scarcity — create a repeatable acquisition
              thesis with durable economics.
            </p>
          </InView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {principles.map(({ num, title, body }, i) => (
              <InView key={num} delay={0.1 * i}>
                <div>
                  <p className="text-[11px] text-foreground-faint font-mono mb-8">
                    {num}
                  </p>
                  <h3 className="font-serif text-2xl font-light text-foreground mb-4">
                    {title}
                  </h3>
                  <div className="w-8 h-px bg-accent mb-6" />
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {body}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Process */}
      <section className="py-40 px-8 bg-background-warm border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <InView>
              <div>
                <SectionLabel>Acquisition Process</SectionLabel>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-8 tracking-tight leading-[1.15]">
                  One great company at a time.
                </h2>
                <p className="text-base leading-relaxed text-foreground-secondary">
                  We execute a repeatable, five-stage acquisition process
                  designed to move efficiently from sourcing through
                  integration — while maintaining the diligence standards
                  required to protect our capital, preserve mission
                  capability, and meet the regulatory requirements unique
                  to the defense sector.
                </p>
              </div>
            </InView>

            <div>
              {process.map(({ step, title, body }, i) => (
                <InView key={step} delay={0.08 * i}>
                  <div className="py-8 border-b border-border flex gap-8">
                    <p className="text-[11px] text-foreground-faint font-mono pt-1 flex-shrink-0">
                      {step}
                    </p>
                    <div>
                      <h4 className="font-serif text-lg font-light text-foreground mb-2">
                        {title}
                      </h4>
                      <p className="text-sm leading-relaxed text-foreground-secondary">
                        {body}
                      </p>
                    </div>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-40 px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <InView>
            <SectionLabel>Value Creation</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-16 tracking-tight">
              How we build value post-acquisition.
            </h2>
          </InView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {advantages.map(({ title, body }, i) => (
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
              Considering a sale or partnership?
            </h2>
          </InView>
          <InView delay={0.1}>
            <Button href="/contact">Start a Conversation</Button>
          </InView>
        </div>
      </section>
    </>
  );
}
