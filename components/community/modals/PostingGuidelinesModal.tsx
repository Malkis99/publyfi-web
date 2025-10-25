import React from 'react';
import BaseModal from './BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const PostingGuidelinesModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Posting Guidelines">
            <p>Before posting, remember:</p>
            <ol>
                <li><strong>Quality over quantity.</strong> Think before you post. Make your contribution valuable and thoughtful.</li>
                <li><strong>Formatting matters.</strong> Use headers, lists, and markdown for readability.</li>
                <li><strong>Credit sources.</strong> When sharing media or ideas, cite or link the original creator.</li>
                <li><strong>Prime Topics.</strong> Only Prime members can start new threads — make them count!</li>
                <li><strong>Images & Media.</strong> Keep uploads relevant, clean, and within size limits.</li>
                <li><strong>Guides.</strong> Guides should be clear, accurate, and helpful. Include visuals or examples.</li>
            </ol>
            <p>Every post helps shape the tone of our community. Be creative — but stay respectful.</p>
        </BaseModal>
    );
};

export default PostingGuidelinesModal;