export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-px bg-zinc-300" />
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">{children}</span>
    </div>
  );
}
