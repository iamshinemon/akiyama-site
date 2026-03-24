export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-px bg-foreground-tertiary" />
      <span className="text-[11px] uppercase tracking-[0.2em] text-foreground-tertiary">{children}</span>
    </div>
  );
}
