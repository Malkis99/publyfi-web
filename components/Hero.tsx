import Link from "next/link";
import { Rocket, Shield, Store } from "lucide-react";
import { CosmicButton } from "./ui/CosmicButton";
import StatusBadges from "./StatusBadges";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-highlight/20 via-transparent to-transparent blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Web3 Social-Gaming Platform
          </h1>
          <p className="mt-4 text-white/80">
            Streams, quests, NFT marketplace, and DAO — all powered by a scalable, modular architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CosmicButton asChild href="/dashboard">
              <span className="inline-flex items-center gap-2"><Rocket className="h-4 w-4" /> Open App</span>
            </CosmicButton>
            <CosmicButton variant="ghost" asChild href="/dao">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> DAO</span>
            </CosmicButton>
            <CosmicButton variant="outline" asChild href="/marketplace">
              <span className="inline-flex items-center gap-2"><Store className="h-4 w-4" /> Marketplace</span>
            </CosmicButton>
          </div>
          <div className="mt-10">
            <StatusBadges />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-highlight/30 to-accent/20 grid place-items-center text-center">
            <div className="text-white/80">
              <div className="text-sm uppercase tracking-widest opacity-70">3D Avatar Stage (placeholder)</div>
              <div className="mt-2 text-xs opacity-60">Integrate react-three-fiber or Unity WebGL here</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
