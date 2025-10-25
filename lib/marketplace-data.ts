export type Rarity = "Common" | "Rare" | "Epic" | "Legendary" | "Mythic";

export interface NftItem {
  id: number;
  name: string;
  category: string;
  rarity: Rarity;
  price: number;
  imageUrl: string;
  creator: string;
  genre: string;
}

export const placeholderItems: NftItem[] = [
  // Common
  { id: 1, name: "Standard Issue Helmet", category: "Equipment", rarity: "Common", price: 25, imageUrl: "https://i.postimg.cc/pX42zJj4/common-helmet.png", creator: "CyberCorp", genre: "Cyberpunk" },
  { id: 2, name: "Basic Utility Belt", category: "Equipment", rarity: "Common", price: 20, imageUrl: "https://i.postimg.cc/mD0C0Fq4/common-belt.png", creator: "CyberCorp", genre: "Cyberpunk" },
  { id: 3, name: "Simple Datapad", category: "Utility", rarity: "Common", price: 15, imageUrl: "https://i.postimg.cc/W1V5GZ6M/common-datapad.png", creator: "DataStream", genre: "Cyberpunk" },
  { id: 4, name: "Standard Boots", category: "Equipment", rarity: "Common", price: 30, imageUrl: "https://i.postimg.cc/L8yXJg6x/common-boots.png", creator: "CyberCorp", genre: "Cyberpunk" },
  { id: 5, name: "Grey-Blue Frame", category: "Profile", rarity: "Common", price: 10, imageUrl: "https://i.postimg.cc/NfK8qBqF/common-frame.png", creator: "Aesthetics Inc.", genre: "Cyberpunk" },
  { id: 6, name: "Basic Comms Unit", category: "Equipment", rarity: "Common", price: 22, imageUrl: "https://i.postimg.cc/SRvLpWjY/common-comms.png", creator: "DataStream", genre: "Shooter" },

  // Rare
  { id: 7, name: "Scout Drone 'Wisp'", category: "Pets", rarity: "Rare", price: 120, imageUrl: "https://i.postimg.cc/tJ0g1GqG/rare-drone.png", creator: "SynthLife", genre: "Open World" },
  { id: 8, name: "'Azure' Light Blade", category: "Equipment", rarity: "Rare", price: 150, imageUrl: "https://i.postimg.cc/d1hXk3bY/rare-blade.png", creator: "BladeWorks", genre: "Fantasy RPG" },
  { id: 9, name: "Holographic Cape", category: "Equipment", rarity: "Rare", price: 110, imageUrl: "https://i.postimg.cc/k4G2zG9Z/rare-cape.png", creator: "Aesthetics Inc.", genre: "Cyberpunk" },
  { id: 10, name: "Shimmering Aura", category: "Profile", rarity: "Rare", price: 90, imageUrl: "https://i.postimg.cc/WbY7gXJc/rare-aura.png", creator: "Aesthetics Inc.", genre: "Fantasy RPG" },
  { id: 11, name: "Advanced Goggles", category: "Equipment", rarity: "Rare", price: 130, imageUrl: "https://i.postimg.cc/VvW2gY8q/rare-goggles.png", creator: "CyberCorp", genre: "Shooter" },
  { id: 12, name: "'Blue Shimmer' Frame", category: "Profile", rarity: "Rare", price: 75, imageUrl: "https://i.postimg.cc/pr0v2hB9/rare-frame.png", creator: "Aesthetics Inc.", genre: "Cyberpunk" },

  // Epic
  { id: 13, name: "Goliath-Class Pauldrons", category: "Equipment", rarity: "Epic", price: 450, imageUrl: "https://i.postimg.cc/yN6gYhW3/epic-pauldrons.png", creator: "ArmoryX", genre: "Shooter" },
  { id: 14, name: "'Void' Heavy Rifle", category: "Equipment", rarity: "Epic", price: 500, imageUrl: "https://i.postimg.cc/bJpYh2f2/epic-rifle.png", creator: "ArmoryX", genre: "Shooter" },
  { id: 15, name: "Personal Shield Generator", category: "Utility", rarity: "Epic", price: 400, imageUrl: "https://i.postimg.cc/8z0h8LgL/epic-shield.png", creator: "SynthLife", genre: "Cyberpunk" },
  { id: 16, name: "Cyber-Phoenix Companion", category: "Pets", rarity: "Epic", price: 600, imageUrl: "https://i.postimg.cc/W3hV1gYy/epic-phoenix.png", creator: "SynthLife", genre: "Epic Sets" },
  { id: 17, name: "'Purple Wave' Frame", category: "Profile", rarity: "Epic", price: 350, imageUrl: "https://i.postimg.cc/k5nZTVGz/epic-frame.png", creator: "Aesthetics Inc.", genre: "Cyberpunk" },
  { id: 18, name: "Zero-G Boots", category: "Equipment", rarity: "Epic", price: 420, imageUrl: "https://i.postimg.cc/pL5N8nN3/epic-boots.png", creator: "CyberCorp", genre: "Open World" },

  // Legendary
  { id: 19, name: "Helmet of the Vanguard", category: "Equipment", rarity: "Legendary", price: 1200, imageUrl: "https://i.postimg.cc/HkqYyH7S/legendary-helmet.png", creator: "Ancient Tech", genre: "Fantasy RPG" },
  { id: 20, name: "'Sunfire' Energy Core", category: "Utility", rarity: "Legendary", price: 1500, imageUrl: "https://i.postimg.cc/zXyWfG3L/legendary-core.png", creator: "Ancient Tech", genre: "Epic Sets" },
  { id: 21, name: "Celestial Background", category: "Profile", rarity: "Legendary", price: 950, imageUrl: "https://i.postimg.cc/c4sYyL9G/legendary-background.png", creator: "Cosmic Designs", genre: "Cultural / Historical Styles" },
  { id: 22, name: "Graviton Gauntlets", category: "Equipment", rarity: "Legendary", price: 1300, imageUrl: "https://i.postimg.cc/y8gYhYgH/legendary-gauntlets.png", creator: "Ancient Tech", genre: "Open World" },
  { id: 23, name: "'Gold Pulsation' Frame", category: "Profile", rarity: "Legendary", price: 800, imageUrl: "https://i.postimg.cc/T1yYyYfN/legendary-frame.png", creator: "Cosmic Designs", genre: "Epic Sets" },
  { id: 24, name: "Wyvern Companion 'Ignis'", category: "Pets", rarity: "Legendary", price: 2000, imageUrl: "https://i.postimg.cc/KzYyYyYJ/legendary-wyvern.png", creator: "Mythical Creatures", genre: "Fantasy RPG" },

  // Mythic
  { id: 25, name: "Crown of the Cosmos", category: "Equipment", rarity: "Mythic", price: 9999, imageUrl: "https://i.postimg.cc/6pYyYyYj/mythic-crown.png", creator: "The Architects", genre: "Epic Sets" },
  { id: 26, name: "Heart of a Dying Star", category: "Utility", rarity: "Mythic", price: 8500, imageUrl: "https://i.postimg.cc/tT7YyYyK/mythic-heart.png", creator: "The Architects", genre: "Epic Sets" },
  { id: 27, name: "Reality-Bending Gauntlet", category: "Equipment", rarity: "Mythic", price: 12000, imageUrl: "https://i.postimg.cc/4xYyYyYd/mythic-gauntlet.png", creator: "The Architects", genre: "Epic Sets" },
  { id: 28, name: "Singularity Core", category: "Utility", rarity: "Mythic", price: 11000, imageUrl: "https://i.postimg.cc/BvYyYyY7/mythic-core.png", creator: "The Architects", genre: "Epic Sets" },
  { id: 29, name: "Eyes of the Void", category: "Profile", rarity: "Mythic", price: 7500, imageUrl: "https://i.postimg.cc/KzYyYyYJ/mythic-eyes.png", creator: "The Architects", genre: "Epic Sets" },
];