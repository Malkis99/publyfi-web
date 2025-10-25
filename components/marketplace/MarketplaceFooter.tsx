"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import InfoModal from './InfoModal';
import {
  TradingRulesContent,
  FAQContent,
  RestrictionsContent,
  SecurityContent,
  HowToBuyContent,
  CommissionsContent,
} from '@/lib/footer-data';

type ModalContent = {
  title: string;
  content: React.ReactNode;
};

const footerLinks: { name: string; content: ModalContent }[] = [
  { name: 'Trading Rules', content: { title: 'Trading Rules', content: <TradingRulesContent /> } },
  { name: 'FAQ', content: { title: 'Frequently Asked Questions', content: <FAQContent /> } },
  { name: 'Restrictions', content: { title: 'Restrictions', content: <RestrictionsContent /> } },
  { name: 'Security', content: { title: 'Security', content: <SecurityContent /> } },
  { name: 'How to Buy', content: { title: 'How to Buy', content: <HowToBuyContent /> } },
  { name: 'Commissions', content: { title: 'Commissions', content: <CommissionsContent /> } },
];

const MarketplaceFooter = () => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="w-full py-6 border-t border-purple-900/50 bg-black/20 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent animate-aurora-border"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-4">
            {footerLinks.map((link) => (
              <Button
                key={link.name}
                variant="link"
                className="text-purple-300/70 hover:text-white text-lg transition-all duration-300"
                onClick={() => openModal(link.content)}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#a38ad1] to-transparent animate-aurora-border-rev"></div>
      </footer>

      {modalContent && (
        <InfoModal
          isOpen={!!modalContent}
          onClose={closeModal}
          title={modalContent.title}
        >
          {modalContent.content}
        </InfoModal>
      )}
    </>
  );
};

export default MarketplaceFooter;