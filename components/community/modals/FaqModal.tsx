import React from 'react';
import BaseModal from './BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const FaqModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="FAQ">
            <h4>Q: Who can post topics?</h4>
            <p>Only Prime users can create new topics. All logged-in users can comment, vote, and react.</p>
            <h4>Q: What is the DAO section?</h4>
            <p>DAO allows PRO users to participate in governance — voting on proposals, ecosystem changes, and liquidity decisions.</p>
            <h4>Q: How do I earn badges?</h4>
            <p>Badges are automatically granted for milestones — Prime, PRO, Moderator, Verified Creator, and more.</p>
            <h4>Q: Can I upload images or videos?</h4>
            <p>Yes! Topics and comments support media uploads and embeds.</p>
            <h4>Q: What happens if I break the rules?</h4>
            <p>Moderators may remove posts or restrict accounts for repeated violations.</p>
            <h4>Q: Where can I find platform updates?</h4>
            <p>Check “News” or “Platform Announcements” in the Community categories.</p>
        </BaseModal>
    );
};

export default FaqModal;