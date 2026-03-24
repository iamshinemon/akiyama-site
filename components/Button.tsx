import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] transition-all duration-200";
  const styles = {
    primary: "bg-black text-white px-8 py-4 hover:bg-zinc-800",
    ghost:
      "border border-black text-black px-8 py-4 hover:bg-black hover:text-white",
  };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
