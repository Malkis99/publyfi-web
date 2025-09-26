"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlaySquare, Film, Swords, Calendar, ShoppingBag, Users, Scale } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/streams", label: "Streams", icon: PlaySquare },
  { href: "/reels", label: "Reels", icon: Film },
  { href: "/quests", label: "Quests", icon: Swords },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/community", label: "Community", icon: Users },
  { href: "/dao", label: "DAO", icon: Scale }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg-primary/60 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition
                ${active ? "bg-white/10 shadow-glow" : "hover:bg-white/5"}`}
            >
              <Icon className={`h-5 w-5 ${active ? "text-accent" : "text-white/80 group-hover:text-accent"}`} />
              <span className={`text-sm ${active ? "text-accent" : "text-white/90"}`}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
