'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSideMenu } from './SideMenuProvider';
import {
  Home,
  Store,
  Clapperboard,
  Film,
  ShieldCheck,
  Calendar,
  Users,
  CircleDollarSign,
  type LucideProps,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/marketplace', label: 'Marketplace', icon: Store },
  { href: '/streams', label: 'Streams', icon: Clapperboard },
  { href: '/reels', label: 'Reels', icon: Film },
  { href: '/quests', label: 'Quests', icon: ShieldCheck },
  { href: '/events', label: 'Events', icon: Calendar },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/token', label: 'Token', icon: CircleDollarSign },
];

const Navigation = () => {
  const pathname = usePathname();
  const { closeMenu } = useSideMenu();

  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon as React.ElementType<LucideProps>;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className={`
                  relative flex items-center px-3 py-2
                  text-lg font-medium tracking-wider
                  transition-all duration-300 ease-in-out rounded-lg
                  group transform hover:translate-x-1
                  ${isActive ? 'text-white bg-white/10 shadow-glow-soft' : 'text-text-main/80'}
                `}
              >
                {isActive && (
                  <span className="absolute left-0 h-6 w-1 bg-accent rounded-r-full shadow-glow" />
                )}

                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-[0_0_15px_rgba(163,138,209,0.4)]">
                    <Icon
                      className={`
                        h-6 w-6 shrink-0
                        transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-accent/70'}
                        group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(163,138,209,0.7)]
                      `}
                    />
                </div>
                <span className={`z-10 transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;