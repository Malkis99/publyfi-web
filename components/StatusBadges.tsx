function Card({ title, desc, className }: { title: string; desc: string; className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 p-4 min-w-[180px] ${className || ""}`}>
      <div className="text-sm opacity-70">{title}</div>
      <div className="text-xs opacity-60">{desc}</div>
    </div>
  );
}

export default function StatusBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      <Card title="Free" desc="Core access" className="bg-white/5" />
      <Card title="Prime" desc="One-time upgrade" className="bg-gradient-to-br from-white/10 to-yellow-500/10" />
      <Card title="Pro" desc="Monthly quests & boosts" className="bg-gradient-to-br from-highlight/20 to-accent/10" />
      <Card title="VIP" desc="Exclusive drops" className="bg-gradient-to-br from-white/10 to-amber-300/10" />
    </div>
  );
}
