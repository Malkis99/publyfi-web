'use client';

import { useEffect, useRef } from 'react';
import { TowerControl, Upload, Feather } from 'lucide-react';

interface CreateActionWindowProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const actionItems = [
  { label: 'Go Live', icon: TowerControl },
  { label: 'Upload', icon: Upload },
  { label: 'Create Post', icon: Feather },
];

const CreateActionWindow = ({ isOpen, onClose, buttonRef }: CreateActionWindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="absolute top-full mt-2 right-0 w-48 z-10
                 p-2 bg-gradient-to-br from-[#231d3b] to-[#140f22]
                 rounded-xl border border-highlight/50 shadow-glow shadow-lg
                 origin-top-right transition-all duration-300 ease-out
                 animate-fade-scale-in"
    >
      <ul className="space-y-1">
        {actionItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <button className="w-full flex items-center text-left px-3 py-2 text-sm text-text-main rounded-md hover:bg-white/10 transition-colors group">
                <Icon className="mr-3 h-5 w-5 text-accent/80 transition-all duration-300 group-hover:text-white group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 4px rgba(163, 138, 209, 0.4))' }} />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreateActionWindow;