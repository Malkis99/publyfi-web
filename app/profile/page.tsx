'use client';

import { AuthProvider, useAuth } from '@/lib/authContext';
import { ProfileStateProvider } from '@/lib/profileStateContext';
import { AuthGateway } from '@/components/profile/AuthGateway';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { CharacterPanel } from '@/components/profile/CharacterPanel';
import { ContentPanel } from '@/components/profile/ContentPanel';

// --- Main Profile Content View ---
const ProfileContent = () => {
  return (
    // Use bg-bg-primary for a solid, harmonious background. Added ml-80 for pinned menu.
    <div className="relative min-h-screen text-white bg-bg-primary lg:ml-80">
      <div className="relative z-10">
        {/* Unified container for a seamless, extendable layout. Removed bottom border/rounding. */}
        <div className="bg-gray-800/30 border-t border-x border-purple-500/20 rounded-t-xl shadow-2xl shadow-purple-900/20">
          <ProfileHeader />
          {/* Added items-start to prevent column stretching */}
          <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Make character panel narrower and content panel wider */}
            <div className="lg:col-span-4">
              <CharacterPanel />
            </div>
            <div className="lg:col-span-8">
              <ContentPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Authentication Wrapper ---
const ProfileView = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <ProfileContent /> : <AuthGateway />;
};

// --- Page Entry Point ---
const ProfilePage = () => {
  return (
    <AuthProvider>
      <ProfileStateProvider>
        <ProfileView />
      </ProfileStateProvider>
    </AuthProvider>
  );
};

export default ProfilePage;