// app/page.tsx
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import InView from "@/components/InView";

const stats = [
  { value: "$100M+", label: "Assets Under Management" },
  { value: "100K+", label: "Defense SMBs in the U.S." },
  { value: "1", label: "Acquisition at a Time" },
];

const pillars = [
  {
    num: "01",
    title: "Source Aggressively",
    body: "We proactively identify high-quality defense and national security businesses with embedded government relationships, proven contract performance, and untapped potential for operational scale.",
  },
  {
    num: "02",
    title: "Buy Deliberately",
    body: "Every acquisition is underwritten with analytical rigor. We look for businesses with recurring contract revenue, active security clearances, and a clear path to platform integration.",
  },
  {
    num: "03",
    title: "Scale with Discipline",
    body: "Post-acquisition, we bring operational excellence, shared infrastructure, and strategic M&A to build a scaled defense platform — greater than the sum of its parts.",
  },
];

const thesisPoints = [
  "Massive, fragmented industrial base — 100,000+ defense SMBs",
  "High barriers to entry via clearances and certifications",
  "Long-duration government contracts with strong visibility",
  "Aging ownership creating succession opportunities",
  "Platform economics through scale and shared infrastructure",
  "Technology modernization as a force multiplier",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center pt-20 px-8 relative">
        <div className="absolute top-[15%] right-[8%] w-px h-44 bg-gradient-to-b from-transparent via-foreground-faint to-transparent opacity-30 hidden lg:block" />
        <div className="absolute top-[calc(15%+88px)] right-[calc(8%-24px)] w-12 h-px bg-gradient-to-r from-transparent to-foreground-faint opacity-20 hidden lg:block" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <InView>
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground-tertiary mb-12">
                — New York City
              </p>
            </InView>

            <InView delay={0.15}>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-foreground mb-10">
                Building enduring value.
                <br />
                One acquisition at a time.
              </h1>
            </InView>

            <InView delay={0.3}>
              <p className="text-lg text-foreground-secondary leading-relaxed max-w-xl mb-14">
                Akiyama Capital acquires and operates national security and
                defense companies across the United States, scaling them
                through a disciplined, hands-on roll-up strategy.
              </p>
            </InView>

            <InView delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/strategy">Our Strategy</Button>
                <Button href="/contact" variant="ghost">
                  Get in Touch
                </Button>
              </div>
            </InView>
          </div>
        </div>
      </section>

      {/* ── Thesis ── */}
      <section className="py-40 px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <InView>
            <SectionLabel>Our Thesis</SectionLabel>
          </InView>

          <InView delay={0.1}>
            <blockquote className="mt-16 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight text-foreground max-w-5xl pl-8 border-l-2 border-accent">
              &ldquo;The U.S. defense industrial base is vast, fragmented,
              and facing a generational transition. We see an opportunity to
              build a scaled platform where operational discipline and modern
              infrastructure meet mission-critical capability.&rdquo;
            </blockquote>
          </InView>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
            {stats.map(({ value, label }, i) => (
              <InView key={label} delay={0.1 * i}>
                <div className="bg-background-white py-12 px-10">
                  <p className="font-serif text-5xl font-light text-foreground mb-3">
                    {value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">
                    {label}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Build ── */}
      <section className="py-40 px-8 bg-background-warm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <InView>
                <SectionLabel>How We Build</SectionLabel>
              </InView>
              <InView delay={0.1}>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 tracking-tight">
                  Source. Acquire.
                  <br />
                  Integrate. Scale.
                </h2>
              </InView>
            </div>
            <InView delay={0.2}>
              <Button href="/strategy" variant="ghost">
                Read Our Strategy
              </Button>
            </InView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map(({ num, title, body }, i) => (
              <InView key={num} delay={0.1 * i}>
                <div className="group">
                  <p className="text-[11px] text-foreground-faint font-mono mb-8">
                    {num}
                  </p>
                  <h3 className="font-serif text-2xl font-light text-foreground mb-4">
                    {title}
                  </h3>
                  <div className="w-8 h-px bg-foreground-faint mb-6 group-hover:w-16 group-hover:bg-accent transition-all duration-300" />
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {body}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Defense ── */}
      <section className="py-40 px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            <div>
              <InView>
                <SectionLabel>Why Defense &amp; National Security</SectionLabel>
              </InView>
              <InView delay={0.1}>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 mb-8 tracking-tight leading-[1.15]">
                  Mission-critical businesses.
                  <br />
                  Generational opportunity.
                </h2>
              </InView>
              <InView delay={0.2}>
                <p className="text-base leading-relaxed text-foreground-secondary mb-6">
                  The U.S. defense industrial base relies on tens of thousands
                  of small and mid-size contractors — companies that design,
                  manufacture, maintain, and support the systems our national
                  security depends on. Many of these businesses are
                  founder-owned, operate with irreplaceable clearances and
                  certifications, and face an imminent wave of ownership
                  transitions with no succession plan in place.
                </p>
                <p className="text-base leading-relaxed text-foreground-secondary mb-12">
                  We bring permanent capital, operational discipline, and
                  modern infrastructure to these businesses — preserving the
                  capabilities and relationships that make them valuable while
                  building a platform that no single company could achieve
                  alone.
                </p>
              </InView>
              <InView delay={0.3}>
                <Button href="/company">About Our Firm</Button>
              </InView>
            </div>

            <div className="flex flex-col mt-8 lg:mt-16">
              {thesisPoints.map((item, i) => (
                <InView key={item} delay={0.05 * i}>
                  <div className="flex items-center gap-6 py-6 border-b border-border-light group">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground-faint group-hover:bg-accent transition-colors flex-shrink-0" />
                    <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-background-dark text-white py-40 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-16">
          <div>
            <InView>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-8">
                Owners &amp; Advisors
              </p>
            </InView>
            <InView delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
                Considering a sale
                <br />
                or partnership?
              </h2>
            </InView>
          </div>
          <InView delay={0.2}>
            <div className="flex flex-col gap-4 flex-shrink-0">
              <Button href="/contact" variant="light">
                Start a Conversation &rarr;
              </Button>
              <p className="text-[11px] text-white/20 text-center">
                All inquiries treated with discretion.
              </p>
            </div>
          </InView>
        </div>
      </section>
    </>
  );
}
