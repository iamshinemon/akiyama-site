import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Strategy — Akiyama Capital",
  description:
    "How Akiyama Capital approaches investment management and capital allocation.",
};

const principles = [
  {
    num: "01",
    title: "Quality First",
    body: "We begin with business quality. No price is cheap enough to compensate for a fundamentally flawed business model or misaligned management. Quality is our primary filter.",
  },
  {
    num: "02",
    title: "Price Discipline",
    body: "Even exceptional businesses can be poor investments at the wrong price. We are patient, often waiting years for the right entry point before committing capital.",
  },
  {
    num: "03",
    title: "Conviction Sizing",
    body: "We size positions in proportion to our conviction, not to satisfy arbitrary diversification rules. Our top ten positions typically represent 60–75% of the portfolio.",
  },
];

const process = [
  {
    step: "01",
    title: "Idea Generation",
    body: "Opportunities arise from our global network, systematic screens, and the study of corporate events — spinoffs, management changes, restructurings — where the market tends to misprice.",
  },
  {
    step: "02",
    title: "Deep Research",
    body: "We build comprehensive models of unit economics, competitive dynamics, and capital allocation history. We speak with customers, competitors, and former employees.",
  },
  {
    step: "03",
    title: "Investment Committee",
    body: "Every new position requires unanimous approval from our investment committee. We encourage — and institutionalize — intellectual challenge.",
  },
  {
    step: "04",
    title: "Active Ownership",
    body: "Post-investment, we remain engaged with management and continually reassess our thesis. Positions are held until the thesis is complete or disproven.",
  },
];

const assetClasses = [
  {
    title: "Global Equities",
    body: "Our primary mandate. We invest in publicly listed equities across developed and emerging markets, with no sector or geography restrictions.",
  },
  {
    title: "Special Situations",
    body: "Structural complexity — spinoffs, restructurings, litigation outcomes — creates persistent mispricing that rewards thorough research.",
  },
  {
    title: "Private Co-investments",
    body: "Selectively, alongside trusted partners in private companies where we have deep conviction and appropriate governance rights.",
  },
  {
    title: "Credit Opportunities",
    body: "Distressed and dislocated credit situations, where our equity-centric analytical framework offers a differentiated perspective.",
  },
];

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-end pb-20 pt-40 px-8 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto w-full">
          <SectionLabel>Strategy</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-6 tracking-tight leading-[1.05] max-w-4xl">
            A repeatable process. An unwavering standard.
          </h1>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Core Principles</SectionLabel>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
            {principles.map(({ num, title, body }) => (
              <div key={num}>
                <p className="text-xs text-zinc-300 font-mono mb-8">{num}</p>
                <h3 className="font-serif text-2xl font-light text-black mb-4">
                  {title}
                </h3>
                <div className="w-8 h-px bg-zinc-200 mb-6" />
                <p className="text-sm leading-relaxed text-zinc-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-40 px-8 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <SectionLabel>Investment Process</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-8 tracking-tight leading-[1.15]">
                Deliberate at every stage.
              </h2>
              <p className="text-base leading-relaxed text-zinc-500">
                Our investment process is designed to surface asymmetric
                opportunities while rigorously stress-testing every assumption.
                We do not outsource thinking to consensus or models — we read
                primary sources, build original research, and debate ideas
                internally before taking any position.
              </p>
            </div>
            <div>
              {process.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="py-8 border-b border-zinc-200 flex gap-8"
                >
                  <p className="text-xs text-zinc-300 font-mono pt-1 flex-shrink-0">
                    {step}
                  </p>
                  <div>
                    <h4 className="font-serif text-lg font-light text-black mb-2">
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Asset Focus */}
      <section className="py-40 px-8 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Asset Focus</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-16 tracking-tight">
            Where we invest.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100">
            {assetClasses.map(({ title, body }) => (
              <div key={title} className="bg-white p-12">
                <h3 className="font-serif text-2xl font-light text-black mb-4">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
            Ready to discuss alignment?
          </h2>
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
