"use client";

import { useState } from "react";
import Button from "./Button";

const inputClass =
  "border-b border-zinc-200 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors bg-transparent w-full";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 border border-zinc-100 flex flex-col items-center justify-center text-center px-8">
        <div className="w-8 h-px bg-zinc-300 mb-8 mx-auto" />
        <h3 className="font-serif text-2xl font-light text-black mb-3">
          Thank you.
        </h3>
        <p className="text-sm text-zinc-500">
          We have received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.15em] text-zinc-400">
            First Name
          </span>
          <input type="text" required className={inputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.15em] text-zinc-400">
            Last Name
          </span>
          <input type="text" required className={inputClass} />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-zinc-400">
          Email
        </span>
        <input type="email" required className={inputClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-zinc-400">
          Organization
        </span>
        <input type="text" className={inputClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-zinc-400">
          Message
        </span>
        <textarea required rows={4} className={`${inputClass} resize-none`} />
      </label>
      <div className="mt-4">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
