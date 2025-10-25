"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CommunityRuleModal from './modals/CommunityRuleModal';
import FaqModal from './modals/FaqModal';
import DaoAndGovernanceModal from './modals/DaoAndGovernanceModal';
import PostingGuidelinesModal from './modals/PostingGuidelinesModal';
import SafetyAndModerationModal from './modals/SafetyAndModerationModal';
import SupportModal from './modals/SupportModal';

type ModalType = 'rules' | 'faq' | 'dao' | 'posting' | 'safety' | 'support' | null;

const Footer = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const buttons = [
        { label: "Community Rules", modal: 'rules' as ModalType },
        { label: "FAQ", modal: 'faq' as ModalType },
        { label: "DAO & Governance", modal: 'dao' as ModalType },
        { label: "Posting Guidelines", modal: 'posting' as ModalType },
        { label: "Safety & Moderation", modal: 'safety' as ModalType },
        { label: "Support", modal: 'support' as ModalType },
    ];

    const handleOpenChange = (modal: ModalType, open: boolean) => {
        if (open) {
            setActiveModal(modal);
        } else {
            setActiveModal(null);
        }
    }

    return (
        <footer className="w-full bg-black/20 border-t border-purple-900/50 py-8">
            <div className="container mx-auto flex justify-center items-center flex-wrap gap-4 px-4">
                {buttons.map(btn => (
                    <Button key={btn.label} variant="link" className="text-purple-300/70 hover:text-white" onClick={() => setActiveModal(btn.modal)}>
                        {btn.label}
                    </Button>
                ))}
            </div>

            <CommunityRuleModal isOpen={activeModal === 'rules'} onOpenChange={(open) => handleOpenChange('rules', open)} />
            <FaqModal isOpen={activeModal === 'faq'} onOpenChange={(open) => handleOpenChange('faq', open)} />
            <DaoAndGovernanceModal isOpen={activeModal === 'dao'} onOpenChange={(open) => handleOpenChange('dao', open)} />
            <PostingGuidelinesModal isOpen={activeModal === 'posting'} onOpenChange={(open) => handleOpenChange('posting', open)} />
            <SafetyAndModerationModal isOpen={activeModal === 'safety'} onOpenChange={(open) => handleOpenChange('safety', open)} />
            <SupportModal isOpen={activeModal === 'support'} onOpenChange={(open) => handleOpenChange('support', open)} />
        </footer>
    );
}

export default Footer;