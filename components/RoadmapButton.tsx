
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface RoadmapButtonProps {
  label: string;
  href: string;
  icon?: ReactNode;
  className?: string;
}

const RoadmapButton: FC<RoadmapButtonProps> = ({ label, href, icon, className = '' }) => {
  const baseClasses =
    'px-4 py-2 rounded-lg font-semibold text-sm text-text-main transition-transform duration-300 ease-out transform hover:scale-105 focus:outline-none text-center inline-flex items-center justify-center gap-2';

  const variantClasses = 'bg-gradient-to-r from-highlight to-accent animate-[pulse-glow_4s_infinite] shadow-glow';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <Link href={href} className={combinedClasses}>
      {icon}
      {label}
    </Link>
  );
};

export default RoadmapButton;
