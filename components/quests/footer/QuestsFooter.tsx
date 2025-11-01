"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import QuestRulesModal from './modals/QuestRulesModal';
import CreatingQuestsModal from './modals/CreatingQuestsModal';
import GameSyncModal from './modals/GameSyncModal';
import FairPlayModal from './modals/FairPlayModal';
import SupportVerificationModal from './modals/SupportVerificationModal';

type ModalType = 'rules' | 'create' | 'game-sync' | 'fair-play' | 'support' | null;

const QuestsFooter = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const buttons = [
        { label: "Quest Rules & Structure", modal: 'rules' as ModalType },
        { label: "How to Create & Complete Quests", modal: 'create' as ModalType },
        { label: "GameSync Integration", modal: 'game-sync' as ModalType },
        { label: "Fairness & Anti-Abuse System", modal: 'fair-play' as ModalType },
        { label: "Support & Verification", modal: 'support' as ModalType },
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

            <QuestRulesModal isOpen={activeModal === 'rules'} onOpenChange={(open) => handleOpenChange('rules', open)} />
            <CreatingQuestsModal isOpen={activeModal === 'create'} onOpenChange={(open) => handleOpenChange('create', open)} />
            <GameSyncModal isOpen={activeModal === 'game-sync'} onOpenChange={(open) => handleOpenChange('game-sync', open)} />
            <FairPlayModal isOpen={activeModal === 'fair-play'} onOpenChange={(open) => handleOpenChange('fair-play', open)} />
            <SupportVerificationModal isOpen={activeModal === 'support'} onOpenChange={(open) => handleOpenChange('support', open)} />
        </footer>
    );
}

export default QuestsFooter;