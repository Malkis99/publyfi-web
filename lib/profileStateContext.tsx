'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for our state and actions
interface ProfileState {
  likes: number;
  hasLiked: boolean;
  dailyRewardClaimed: boolean;
  equippedItems: Record<string, string | null>; // e.g., { head: 'item-id-123', chest: null }
}

interface ProfileActions {
  toggleLike: () => void;
  claimDailyReward: () => void;
  equipItem: (slot: string, itemId: string) => void;
  unequipItem: (slot: string) => void;
}

// Combine state and actions into the context value
type ProfileContextType = ProfileState & ProfileActions;

// Create the context
const ProfileStateContext = createContext<ProfileContextType | undefined>(undefined);

// Define some initial mock data
const initialMockState: ProfileState = {
  likes: 1234,
  hasLiked: false,
  dailyRewardClaimed: false,
  equippedItems: {
    head: 'epic-helmet',
    chest: null,
    legs: 'common-greaves',
    shoulders: null,
    feet: null,
    hands: 'legendary-gauntlets',
    back: null,
    accessory1: null,
    accessory2: null,
    leftHand: 'mythic-sword',
    rightHand: null,
  },
};

// Create the provider component
export const ProfileStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ProfileState>(initialMockState);

  const toggleLike = () => {
    setState((prevState) => ({
      ...prevState,
      hasLiked: !prevState.hasLiked,
      likes: prevState.hasLiked ? prevState.likes - 1 : prevState.likes + 1,
    }));
  };

  const claimDailyReward = () => {
    setState((prevState) => ({
      ...prevState,
      dailyRewardClaimed: true,
    }));
  };

  const equipItem = (slot: string, itemId: string) => {
    setState((prevState) => ({
      ...prevState,
      equippedItems: {
        ...prevState.equippedItems,
        [slot]: itemId,
      },
    }));
  };

  const unequipItem = (slot: string) => {
    setState((prevState) => ({
      ...prevState,
      equippedItems: {
        ...prevState.equippedItems,
        [slot]: null,
      },
    }));
  };

  const value = { ...state, toggleLike, claimDailyReward, equipItem, unequipItem };

  return (
    <ProfileStateContext.Provider value={value}>
      {children}
    </ProfileStateContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useProfileState = () => {
  const context = useContext(ProfileStateContext);
  if (context === undefined) {
    throw new Error('useProfileState must be used within a ProfileStateProvider');
  }
  return context;
};