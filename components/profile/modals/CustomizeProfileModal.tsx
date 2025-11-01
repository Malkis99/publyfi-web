'use client';

import { motion } from 'framer-motion';
import {
    Image as ImageIcon,
    Palette,
    Square,
    User,
    Save,
    XCircle,
    LayoutGrid,
    Paintbrush,
    PanelTop,
    Mountain
} from 'lucide-react';

// Reusable component for each customization option button
const IconCustomizationOption = ({ icon: Icon, label, onClick }: { icon: React.ElementType; label: string; onClick?: () => void; }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -2 }}
        className="flex flex-col items-center justify-center p-3 bg-black/20 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors w-full aspect-square"
    >
        <Icon className="w-7 h-7 text-purple-300 mb-2" />
        <span className="text-xs font-semibold text-center text-white">{label}</span>
    </motion.button>
);

// Reusable component for section titles
const CustomizationSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-6">
        <h3 className="text-md font-semibold text-purple-300/80 mb-3 ml-1 tracking-wider">{title}</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {children}
        </div>
    </div>
);


export const CustomizeProfileModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Profile Customization</h2>

            <CustomizationSection title="Avatar">
                <IconCustomizationOption icon={User} label="Avatar" />
                <IconCustomizationOption icon={Square} label="Frame" />
            </CustomizationSection>

            <CustomizationSection title="Profile Appearance">
                <IconCustomizationOption icon={Mountain} label="Background" />
                <IconCustomizationOption icon={ImageIcon} label="Banner" />
                <IconCustomizationOption icon={Palette} label="Theme" />
            </CustomizationSection>

            <CustomizationSection title="Content Management">
                <IconCustomizationOption icon={LayoutGrid} label="Showcases" />
                <IconCustomizationOption icon={Paintbrush} label="Illustrations" />
                <IconCustomizationOption icon={PanelTop} label="Panels" />
            </CustomizationSection>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-4">
                <button
                    onClick={onClose}
                    className="flex items-center space-x-2 px-5 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
                    <XCircle className="w-4 h-4" />
                    <span>Cancel</span>
                </button>
                <button
                     onClick={onClose}
                     className="flex items-center space-x-2 px-5 py-2 bg-purple-600 border border-purple-500 rounded-lg text-sm text-white hover:bg-purple-700 transition-all transform hover:scale-105">
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                </button>
            </div>
        </div>
    );
};