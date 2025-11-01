import React from 'react';
import BaseModal from './BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const DaoAndGovernanceModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="DAO & Governance">
            <h4>PublyFi’s DAO empowers our PRO community to shape the platform’s evolution.</h4>
            <p>Here’s how it works:</p>
            <ol>
                <li><strong>Proposals:</strong> DAO proposals can include ecosystem updates, tokenomics changes, new features, or community events.</li>
                <li><strong>Voting Power:</strong> Only PRO users have governance rights. Voting power may depend on token holdings or reputation (mocked in UI).</li>
                <li><strong>Voting Process:</strong>
                    <ul>
                        <li>Each proposal has a start and end date.</li>
                        <li>The center-out vote bar shows the live sentiment: left = Against, right = For.</li>
                        <li>Votes update visually in real time.</li>
                    </ul>
                </li>
                <li><strong>Transparency:</strong> DAO history and results are public. Every vote, even mock, is visible in summary view.</li>
                <li><strong>Community Voice:</strong> Discussions about proposals happen openly in DAO threads. Everyone can share feedback.</li>
            </ol>
            <p>Together we decide the path forward. Every vote builds the world of PublyFi.</p>
        </BaseModal>
    );
};

export default DaoAndGovernanceModal;