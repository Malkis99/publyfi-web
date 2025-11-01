import React from 'react';
import BaseModal from '@/components/community/modals/BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const GameSyncModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="GameSync System">
            <p>GameSync is PublyFi’s verification bridge — linking your in-game actions with your PublyFi profile.</p>
            <h4>Core Features:</h4>
            <ul>
                <li><strong>Cross-Platform Sync:</strong> Connects with Steam, Epic Games, Battle.net, and others via secure APIs.</li>
                <li><strong>Auto-Verification:</strong> All achievements, wins, or milestones are validated in real-time.</li>
                <li><strong>Fraud Prevention:</strong> GameSync checks blockchain data and gameplay stats to eliminate fake progress.</li>
            </ul>
            <h4>Player Benefits:</h4>
            <ul>
                <li>Achievements in external games translate into PublyFi rewards (NFTs, cosmetics, profile badges).</li>
                <li>Living Avatars evolve visually based on verified progress.</li>
                <li>Cross-game reputation increases visibility in leaderboards.</li>
            </ul>
            <h4>For Streamers & Guilds:</h4>
            <ul>
                <li>Streamers can design quests that link directly with external games.</li>
                <li>Guilds can sync collective achievements to unlock guild-wide rewards and badges.</li>
            </ul>
            <p>GameSync makes PublyFi not just a platform — but a universal gaming identity layer.</p>
        </BaseModal>
    );
};

export default GameSyncModal;
