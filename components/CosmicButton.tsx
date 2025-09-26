import Link from 'next/link';
import { FC } from 'react';

interface CosmicButtonProps {
  label: string;
  href?: string;
  variant: 'solid' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const CosmicButton: FC<CosmicButtonProps> = ({
  label,
  href,
  variant,
  className = '',
  type = 'button',
  onClick,
}) => {
  const baseClasses =
    'px-8 py-3 rounded-lg font-semibold text-text-main transition-transform duration-300 ease-out transform hover:scale-105 focus:outline-none text-center inline-block';

  const variantClasses = {
    solid: 'bg-gradient-to-r from-highlight to-accent animate-[pulse-glow_4s_infinite] shadow-glow',
    outline: 'border-2 border-accent/50 hover:bg-accent/10',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={`${combinedClasses} w-full`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CosmicButton;