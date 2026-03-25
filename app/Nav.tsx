"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./constants";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const showBg = scrolled || menuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${showBg ? "bg-background/80 backdrop-blur-xl border-b border-border-light" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
        <Link href="/" className="text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-foreground">Akiyama Capital</Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={`text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-foreground ${pathname === href ? "text-foreground" : "text-foreground-tertiary"}`}>{label}</Link>
          ))}
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] p-1" aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-background/95 backdrop-blur-xl border-t border-border-light px-8 py-8 flex flex-col gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={`text-sm uppercase tracking-[0.15em] transition-colors hover:text-foreground ${pathname === href ? "text-foreground" : "text-foreground-secondary"}`}>{label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}
