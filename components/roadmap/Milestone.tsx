import { FC, ReactNode } from 'react';
import { MilestoneStatus } from '@/content/roadmap-data';
import StatusIcon from './StatusIcon';

interface MilestoneProps {
  status: MilestoneStatus;
  children: string; // Expect a string to process for highlighting
}

const keywordsToHighlight = [
  '$PUBL', 'DAO', 'Living 3D Avatar', 'Listing', 'GameSync',
  'Marketplace', 'Metaverse', 'Burn Vault', 'NFT', 'zkEVM',
  'FaceID', 'WebAuthn', 'CEX', 'DEX', 'AR/VR', 'SDK'
];

const HighlightedText: FC<{ text: string }> = ({ text }) => {
  const regex = new RegExp(`(${keywordsToHighlight.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        keywordsToHighlight.some(keyword => new RegExp(`^${keyword}$`, 'i').test(part)) ? (
          <span key={index} className="text-accent font-semibold [text-shadow:0_0_8px_rgba(163,138,209,0.5)]">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};


const Milestone: FC<MilestoneProps> = ({ status, children }) => {
  return (
    <div className="flex items-center space-x-4 group relative">
      {/* Spark on the timeline, appears on hover */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-sparkle"
        style={{
          left: '-1.875rem', // Centers the 0.75rem spark on the 1rem timeline from a 2.5rem padding
          filter: 'blur(3px)',
        }}
      />
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center relative">
        <StatusIcon status={status} />
      </div>
      <p className="text-text-main/80 group-hover:text-white transition-colors duration-300">
        <HighlightedText text={children} />
      </p>
    </div>
  );
};

export default Milestone;