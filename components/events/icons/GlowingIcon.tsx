// components/events/icons/GlowingIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

type IconName = 'Chest' | 'Gem' | 'Token' | 'Shield' | 'Relic' | 'Emblem' | 'Icon' | 'Title' | 'ArmorFragment' | 'Cosmetic' | 'Sigil';

interface GlowingIconProps {
  icon: IconName;
  color: string;
}

const SvgPath = ({ icon }: { icon: IconName }) => {
    switch (icon) {
        case 'Chest': return <path d="M20 12l-2-5H6L4 12H2v6h20v-6h-2zM6 7h12v3H6V7zm-2 7v2h2v-2H4zm16 0v2h2v-2h-2z" />;
        case 'Gem': return <path d="M12 2L2 7l10 15 10-15L12 2zm0 12.5L6.5 9 12 4l5.5 5L12 14.5z" />;
        case 'Token': return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />;
        case 'Shield': return <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />;
        case 'Relic': return <path d="M12 2l-5.33 8.88-1.55.43-3.12-3.12L2 9.17l3.12 3.12-.43 1.55L2 19.17l.98.98L8.33 15l1.55.43L12 22l5.33-8.88 1.55-.43 3.12 3.12.98-.98-3.12-3.12.43-1.55L22 4.83l-.98-.98L15.67 9l-1.55-.43L12 2z" />;
        case 'Emblem': return <path d="M12 2l4 4-1.5 1.5L12 5l-2.5 2.5L8 5l4-4zm0 20l-4-4 1.5-1.5L12 19l2.5-2.5 1.5 1.5-4 4zM5 8l-1.5 1.5L5 12l2.5-2.5L5 8zm14 0l-2.5 2.5L19 12l1.5-1.5L18 8z" />;
        case 'Icon': return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />;
        case 'Title': return <path d="M5 4v3h5.5v12h3V7H19V4H5z" />;
        case 'ArmorFragment': return <path d="M14.24 3.47L7.76 10l-2.07 6.13a3.37 3.37 0 0 0 4.48 4.48L16.3 18.5l6.53-6.53c.98-.98.98-2.56 0-3.54l-2.06-2.06c-.98-.98-2.56-.98-3.53 0z" />;
        case 'Cosmetic': return <path d="M12 2c-2.3 0-4.32 1-5.79 2.58.12.1.25.19.38.28l1.71 1.05C9.4 5.24 10.62 5 12 5s2.6.24 3.7.61l1.71-1.05c.13-.09.26-.18.38-.28C16.32 3 14.3 2 12 2zM4.32 5.61C4.1 6.36 4 7.17 4 8c0 2.22.89 4.21 2.34 5.66l.78-1.35c-.88-.9-1.32-2.1-1.12-3.32.18-1.09.8-2.03 1.68-2.61L4.32 5.61zM20 8c0-.83-.1-1.64-.32-2.39l-3.36.73c.18 1.22-.26 2.42-1.14 3.32-.88.9-2.08 1.34-3.18 1.12l-1.35.78C11.79 15.11 13.78 16 16 16c.83 0 1.64-.1 2.39-.32l.73 3.36c.75-.22 1.44-.55 2.06-1.02.62-.47 1.15-1.03 1.58-1.66S22 14.22 22 12c0-1.78-.59-3.41-1.58-4.72-.43-.63-.96-1.19-1.58-1.66-.62-.46-1.31-.8-2.06-1.02l.73 3.36C18.4 6.1 19 6.22 19 8c0 1.38-.84 2.55-2 2.91V10c-1.1 0-2 .9-2 2s.9 2 2 2v-.91c1.16-.36 2-1.53 2-2.91z" />;
        case 'Sigil': return <path d="M12 2L4 5v6c0 5 8 10 8 10s8-5 8-10V5l-8-3zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />;
        default: return null;
    }
}

const GlowingIcon = ({ icon, color }: GlowingIconProps) => {
  return (
    <div className="relative w-12 h-12">
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SvgPath icon={icon} />
      </motion.svg>
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        style={{ filter: `blur(8px)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <SvgPath icon={icon} />
      </motion.svg>
    </div>
  );
};

export default GlowingIcon;
