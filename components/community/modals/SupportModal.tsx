import React from 'react';
import BaseModal from './BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SupportModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Support">
            <h4>Need help or want to reach the team?</h4>
            <ul>
                <li><strong>General Support:</strong> For login, account, or technical issues.</li>
                <li><strong>Community Help:</strong> For posting, badges, or moderation questions.</li>
                <li><strong>DAO Support:</strong> For governance or PRO-related inquiries.</li>
                <li><strong>Report an Issue:</strong> Use the “Report” button in the Community or contact support directly.</li>
                <li><strong>Contact:</strong> [support@publyfi.com] (mock placeholder)</li>
            </ul>
            <p>Our support team and moderators are always here to help.</p>
        </BaseModal>
    );
};

export default SupportModal;