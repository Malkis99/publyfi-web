import Link from 'next/link';
import { FC, ComponentProps } from 'react';

interface CosmicButtonProps {
  label: string;
  href?: ComponentProps<typeof Link>['href'];
  variant: 'solid' | 'outline' | 'success';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const CosmicButton: FC<CosmicButtonProps> = ({
  label,
  href,
  variant,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}) => {
  const baseClasses =
    'px-8 py-3 rounded-lg font-semibold text-text-main transition-transform duration-300 ease-out transform hover:scale-105 focus:outline-none text-center inline-block disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    solid: 'bg-gradient-to-r from-highlight to-accent animate-[pulse-glow_4s_infinite] shadow-glow',
    outline: 'border-2 border-accent/50 hover:bg-accent/10',
    success: 'bg-green-600/80 text-white shadow-[0_0_15px_rgba(74,222,128,0.5)]',
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
    <button type={type} className={`${combinedClasses} w-full`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default CosmicButton;