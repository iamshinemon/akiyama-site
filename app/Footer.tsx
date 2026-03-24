import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12 px-8 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[11px] uppercase tracking-[0.2em] text-foreground-tertiary">{SITE.name}</span>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[11px] uppercase tracking-[0.15em] text-foreground-tertiary hover:text-foreground transition-colors">{label}</Link>
          ))}
        </nav>
        <p className="text-[11px] text-foreground-faint">&copy; {year} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
