import React from 'react';
import BaseModal from './BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const CommunityRuleModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Community Rules">
            <h4>Welcome to PublyFi Community.</h4>
            <p>Our goal is to make this a space where creators, gamers, and DAO members can share ideas, build together, and have fun.</p>
            <p>Please follow these core principles:</p>
            <ol>
                <li><strong>Respect others.</strong> Treat everyone with kindness. Personal attacks, hate speech, or harassment are not tolerated.</li>
                <li><strong>Stay on topic.</strong> Keep discussions relevant to the category or thread. Use Off-topic for casual chat.</li>
                <li><strong>No spam or self-promotion.</strong> Avoid repetitive posts, advertisements, or unrelated links.</li>
                <li><strong>Constructive criticism.</strong> You can disagree — just do it respectfully.</li>
                <li><strong>Prime-only posting.</strong> Only Prime members can create new topics. Everyone can comment or vote.</li>
                <li><strong>Report responsibly.</strong> Use the report feature if you see something against the rules. Moderators will review it quickly.</li>
                <li><strong>One account per person.</strong> Alternate or fake accounts may result in suspension.</li>
            </ol>
            <p>Violation of these rules may lead to warnings or bans. Our moderators aim to keep PublyFi fair and fun for all.</p>
        </BaseModal>
    );
};

export default CommunityRuleModal;