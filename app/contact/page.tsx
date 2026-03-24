import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Akiyama Capital",
  description: "Get in touch with the Akiyama Capital team.",
};

const officeDetails = [
  {
    label: "Tokyo Headquarters",
    value:
      "Marunouchi Trust Tower\n1-8-3 Marunouchi, Chiyoda-ku\nTokyo 100-0005, Japan",
  },
  {
    label: "General Enquiries",
    value: "contact@akiyamacapital.com",
  },
  {
    label: "Investor Relations",
    value: "ir@akiyamacapital.com",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-end pb-20 pt-40 px-8 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto w-full">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mt-6 tracking-tight leading-[1.05] max-w-3xl">
            Let us begin a conversation.
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
          {/* Info */}
          <div>
            <SectionLabel>Our Office</SectionLabel>
            <div className="mt-10 space-y-10">
              {officeDetails.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">
                    {label}
                  </p>
                  <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-16 border-t border-zinc-100">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-4">
                Availability
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                We welcome introductory conversations with qualified investors.
                All enquiries are treated with complete discretion.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionLabel>Send a Message</SectionLabel>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
