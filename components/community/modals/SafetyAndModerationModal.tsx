import React from 'react';
import BaseModal from './BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SafetyAndModerationModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Safety & Moderation">
            <h4>We protect creators and players.</h4>
            <p>Here’s how we maintain a safe environment:</p>
            <ul>
                <li><strong>Report Tools:</strong> Every post and comment includes a flag icon. Use it to report violations.</li>
                <li><strong>Moderator Actions:</strong> Moderators can remove, lock, or pin posts, but all actions are logged for transparency.</li>
                <li><strong>Data Security:</strong> No personal or wallet information should be shared publicly.</li>
                <li><strong>Zero Tolerance Policy:</strong> Harassment, hate, scams, or NSFW content result in immediate bans.</li>
                <li><strong>Appeals:</strong> Users can appeal moderation decisions through the Support section.</li>
            </ul>
            <p>Safety allows creativity to flourish.</p>
        </BaseModal>
    );
};

export default SafetyAndModerationModal;