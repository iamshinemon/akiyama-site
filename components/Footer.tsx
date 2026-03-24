import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/strategy", label: "Strategy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Akiyama Capital
        </span>
        <nav className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.15em] text-zinc-400 hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-zinc-300">
          &copy; {year} Akiyama Capital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
