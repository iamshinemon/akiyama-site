import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About — Akiyama Capital",
  description:
    "Learn about Akiyama Capital, our history, philosophy, and guiding values.",
};

const values = [
  {
    title: "Intellectual Honesty",
    body: "We hold our own theses to the same scrutiny we apply to the market. Acknowledging when we are wrong — and acting on it — is not weakness. It is the foundation of sustained outperformance.",
  },
  {
    title: "Long-Term Partnership",
    body: "We view our relationship with partners as a decades-long commitment. Our communications are frank, our reporting is thorough, and our door is always open.",
  },
  {
    title: "Capital Stewardship",
    body: "The capital entrusted to us represents years of work by our partners. We approach each allocation decision with the weight that responsibility demands.",
  },
  {
    title: "Selective by Design",
    body: "We intentionally limit the size of our fund. We will not expand AUM at the cost of our process. Our best ideas have natural capacity limits — and we respect them.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-end pb-20 pt-40 px-8 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto w-full">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-6 tracking-tight leading-[1.05] max-w-4xl">
            A firm built on patience, precision, and principle.
          </h1>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-6 mb-8 tracking-tight">
              Founded in 1998 in Tokyo.
            </h2>
            <p className="text-base leading-relaxed text-zinc-500 mb-6">
              Akiyama Capital was established by Kenji Akiyama following two
              decades of portfolio management at leading Japanese and
              international financial institutions. The firm was founded on a
              singular conviction: that superior long-term returns require a
              genuine commitment to independence from the short-term pressures
              that distort institutional decision-making.
            </p>
            <p className="text-base leading-relaxed text-zinc-500">
              Over twenty-six years, we have grown quietly — accepting capital
              only from partners who share our time horizon, and maintaining a
              structure that has never required us to compromise our process.
            </p>
          </div>
          <div>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-6 mb-8 tracking-tight">
              Value through depth.
            </h2>
            <p className="text-base leading-relaxed text-zinc-500 mb-6">
              We approach every investment as a partial ownership of a business
              — not as a ticker to be traded. This means we care deeply about
              the quality of management, the durability of competitive
              advantages, and the cultural character of the organizations we
              invest in.
            </p>
            <p className="text-base leading-relaxed text-zinc-500">
              We are contrarian not for its own sake, but because the conditions
              that create genuine value — fear, complexity, and
              misunderstanding — are invariably unpopular at the time of
              investment.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-40 px-8 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 tracking-tight">
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200">
            {values.map(({ title, body }) => (
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
            Interested in our approach?
          </h2>
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
