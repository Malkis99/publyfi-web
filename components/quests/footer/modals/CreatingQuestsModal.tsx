import React from 'react';
import BaseModal from '@/components/community/modals/BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const CreatingQuestsModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Creating & Completing Quests">
            <h4>Creating Quests (Streamers Only)</h4>
            <p>Only Pro-tier verified streamers can create and publish custom quests. Each quest must define:</p>
            <ul>
                <li><strong>Objective:</strong> what players must do (e.g., “Win 3 matches,” “Share a clip,” etc.).</li>
                <li><strong>Reward Type:</strong> NFT, cosmetic, collectible, or $PUBL token.</li>
                <li><strong>Verification Method:</strong> manual, GameSync-linked, or automated task completion.</li>
            </ul>
            <h4>Completing Quests (Users)</h4>
            <p>Users browse quests from streamers or the platform feed. After accepting a quest, progress is automatically tracked. GameSync ensures all actions (kills, wins, clips shared, etc.) are verified authentically. Once completed, users instantly receive rewards to their connected wallet or inventory.</p>
            <h4>Quest Lifecycle:</h4>
            <ul>
                <li>Quest appears in feed or on streamer profile.</li>
                <li>User accepts quest → modal confirms “Quest Accepted.”</li>
                <li>Progress tracked automatically via GameSync or platform activity.</li>
                <li>Upon completion, the reward is distributed instantly.</li>
                <li>Quest archived in user’s history; reputation and level increase.</li>
            </ul>
        </BaseModal>
    );
};

export default CreatingQuestsModal;
