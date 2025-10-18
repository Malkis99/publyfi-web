import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface BaseModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-[#1a152e]/80 backdrop-blur-lg border-purple-700/50 text-white max-w-3xl shadow-glow shadow-purple-500/20"
        role="dialog"
        aria-modal="true"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white pb-4">
            {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;