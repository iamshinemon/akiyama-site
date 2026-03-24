import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "ghost" | "light";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({ href, variant = "primary", children, className = "", type = "button", disabled = false }: ButtonProps) {
  const base = "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";
  const styles = {
    primary: "bg-foreground text-background-white px-8 py-4 hover:bg-accent hover:-translate-y-px disabled:opacity-40 disabled:pointer-events-none",
    ghost: "border border-foreground-tertiary text-foreground-secondary px-8 py-4 hover:border-foreground hover:text-foreground hover:-translate-y-px disabled:opacity-40 disabled:pointer-events-none",
    light: "border border-white/25 text-white/70 px-8 py-4 hover:border-white hover:text-white hover:-translate-y-px",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls} disabled={disabled}>{children}</button>;
}
