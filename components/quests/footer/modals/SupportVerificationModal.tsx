import React from 'react';
import BaseModal from '@/components/community/modals/BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SupportVerificationModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Account Verification & Support">
            <p>PublyFi uses a progressive KYC system to balance open access with secure monetization.</p>
            <h4>KYC Levels:</h4>
            <ul>
                <li><strong>Level 0 (Free):</strong> Guest access — explore and view content, no monetization.</li>
                <li><strong>Level 1 (Prime):</strong> Email/phone verification — unlock Prime features and limited quest access.</li>
                <li><strong>Level 2 (Pro):</strong> Full KYC — ID verification unlocks Pro quests, NFT trading, and $PUBL monetization.</li>
            </ul>
            <h4>Security Features:</h4>
            <ul>
                <li>Multi-factor authentication (MFA) for all high-value accounts.</li>
                <li>Hardware key and IP whitelisting for streamers.</li>
                <li>DAO-level governance protections for major creators and guilds.</li>
            </ul>
            <h4>Support Access:</h4>
            <ul>
                <li>Issues with rewards, quests, or verification can be reported directly via Support modal.</li>
                <li>Priority support for Pro-tier users and verified streamers.</li>
            </ul>
        </BaseModal>
    );
};

export default SupportVerificationModal;
