import React from 'react';
import BaseModal from '@/components/community/modals/BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const QuestRulesModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Quest Rules & Structure">
            <p>PublyFi’s Quest System transforms every player action into meaningful progress and rewards. All quests follow a unified framework to maintain fairness, progression, and engagement.</p>
            <h4>Quest Types</h4>
            <p><strong>Platform Quests:</strong> Created by PublyFi itself to reward activity, creativity, and consistency. Rewards include NFTs, cosmetics, collectibles, and reputation boosts — never direct tokens. Seasonal questlines evolve over time, keeping users engaged through new challenges.</p>
            <p><strong>Streamer Quests:</strong> Designed and funded directly by streamers, available only to Pro subscribers. Rewards include $PUBL tokens, rare NFTs, cosmetics, or access to exclusive events. These quests strengthen community bonds and create new monetization routes for creators.</p>
            <p><strong>Guild & Meta Quests:</strong> Collaborative challenges completed by guilds or multiple users for large-scale rewards. Reward pools scale dynamically based on guild activity and member contributions.</p>
            <h4>Quest Limits (Anti-Farm)</h4>
            <p>Each user has daily and weekly quest completion limits. Limits prevent farming and maintain economic stability. Limits scale with Reputation Level and Subscription Tier (Prime / Pro).</p>
        </BaseModal>
    );
};

export default QuestRulesModal;
