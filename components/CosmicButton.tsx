import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface CosmicButtonProps {
  label: string;
  href?: string;
  variant: 'solid' | 'outline';
  className?: string;
}

const CosmicButton: FC<CosmicButtonProps> = ({ label, href, variant, className = '' }) => {
  const baseClasses =
    'px-8 py-3 rounded-lg font-semibold text-text-main transition-transform duration-300 ease-out transform hover:scale-105 focus:outline-none';

  const variantClasses = {
    solid: 'bg-gradient-to-r from-highlight to-accent animate-[pulse-glow_4s_infinite] shadow-glow',
    outline: 'border-2 border-accent/50 hover:bg-accent/10',
  };

  const buttonContent = (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {label}
    </div>
  );

  return href ? (
    <Link href={href} passHref>
      {buttonContent}
    </Link>
  ) : (
    <button className="w-full">
      {buttonContent}
    </button>
  );
};

export default CosmicButton;