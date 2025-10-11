'use client';

import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

export const StatusPassportModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Digital Account Passport</h2>
            {/* The max-width has been removed to allow the image to fill the modal width */}
            <div className="relative w-full mx-auto aspect-[1.586] mb-4">
                <Image
                    src={ASSETS.passport}
                    alt="Status Passport Card"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Status Prime</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
                This account holds Prime status — a mark of prestige and trust. Prime members gain exclusive access to premium features, enhanced visibility across the platform, and priority rewards.
            </p>
        </div>
    );
};