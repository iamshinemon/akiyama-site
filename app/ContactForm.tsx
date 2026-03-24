"use client";
import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 border border-border-light flex flex-col items-center justify-center text-center px-8">
        <div className="w-8 h-px bg-accent mb-8 mx-auto" />
        <h3 className="font-serif text-2xl font-light text-foreground mb-3">Thank you.</h3>
        <p className="text-sm text-foreground-secondary">We have received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">Name</span>
          <input type="text" name="name" required className="border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors bg-transparent w-full" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">Company</span>
          <input type="text" name="company" className="border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors bg-transparent w-full" />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">Email</span>
        <input type="email" name="email" required className="border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors bg-transparent w-full" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary">Message</span>
        <textarea name="message" required rows={4} className="border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors bg-transparent w-full resize-none" />
      </label>
      <div className="mt-4">
        <Button type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send Message"}</Button>
      </div>
    </form>
  );
}
