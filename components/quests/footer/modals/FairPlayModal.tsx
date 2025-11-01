import React from 'react';
import BaseModal from '@/components/community/modals/BaseModal';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const FairPlayModal: React.FC<ModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title="Fair Play & Anti-Bot System">
            <p>PublyFi ensures fairness through strict monitoring and progressive penalties.</p>
            <h4>AI Behavior Tracking:</h4>
            <ul>
                <li>Detects suspicious play patterns, repetitive automation, or instant task loops.</li>
                <li>Flags abnormal session lengths, identical quest completions, or spam activity.</li>
            </ul>
            <h4>Multi-Account Protection:</h4>
            <ul>
                <li>Prevents abuse via IP, wallet, and device fingerprinting.</li>
                <li>Linked wallets under the same identity are automatically tracked and verified.</li>
            </ul>
            <h4>Penalty System:</h4>
            <ul>
                <li><strong>First Offense:</strong> Temporary warning and activity restriction.</li>
                <li><strong>Repeat Offense:</strong> Account lock pending re-verification.</li>
                <li><strong>Severe Abuse:</strong> DAO governance may vote on permanent bans.</li>
            </ul>
            <h4>Core Rule: Only real users earn real rewards. PublyFi’s anti-farm systems keep the economy balanced and the ecosystem trustworthy.</h4>
        </BaseModal>
    );
};

export default FairPlayModal;
