// app/contact/page.tsx
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import InView from "@/components/InView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akiyama Capital. We welcome conversations with defense company owners, advisors, and potential partners.",
};

const inquiryTypes = [
  {
    label: "Company Owners",
    value:
      "If you own or operate a defense or national security business and are considering a sale, succession plan, or strategic partnership, we welcome a confidential conversation at any stage of your process.",
  },
  {
    label: "M&A Advisors",
    value:
      "We work with intermediaries and advisors regularly. If you are representing a client in the defense, aerospace, or national security sector, we would like to hear from you.",
  },
  {
    label: "General Inquiries",
    value:
      "For all other matters — including press, careers, and partnership opportunities — please reach out using the form below.",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-end pb-20 pt-40 px-8 border-b border-border">
        <div className="max-w-7xl mx-auto w-full">
          <InView>
            <SectionLabel>Contact</SectionLabel>
          </InView>
          <InView delay={0.15}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-6 tracking-tight leading-[1.05] max-w-3xl">
              We are always in market.
            </h1>
          </InView>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
          {/* Info */}
          <InView>
            <div>
              <SectionLabel>Who We Hear From</SectionLabel>
              <div className="mt-10 space-y-10">
                {inquiryTypes.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary mb-2">
                      {label}
                    </p>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-16 border-t border-border-light">
                <p className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary mb-4">
                  Location
                </p>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  New York City
                </p>
              </div>
              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary mb-4">
                  Discretion
                </p>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  All inquiries are treated with complete confidentiality.
                  We do not share information with third parties.
                </p>
              </div>
            </div>
          </InView>

          {/* Form */}
          <InView delay={0.15}>
            <div>
              <SectionLabel>Send a Message</SectionLabel>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </InView>
        </div>
      </section>
    </>
  );
}
