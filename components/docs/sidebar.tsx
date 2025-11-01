"use client";

import { useState } from 'react';
import Link from 'next/link';

// Define the structure for a documentation section
interface DocSection {
  slug: string;
  title: string;
}

// Props for the sidebar component
interface DocsSidebarProps {
  sections: DocSection[];
  activeSlug: string;
  onSectionSelect: (slug: string) => void;
}

const DocsSidebar = ({ sections, activeSlug, onSectionSelect }: DocsSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (slug: string) => {
    onSectionSelect(slug);
    setSearchTerm('');
    setMobileMenuOpen(false); // Close mobile menu on selection
  };

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const sidebarContent = (
    <>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search docs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#140f22]/70 border border-accent/40 text-text-main placeholder:text-white/50 focus:ring-1 focus:ring-accent/40 focus:outline-none transition-shadow"
        />
        <SearchIcon />
      </div>
      <nav>
        <ul>
          {filteredSections.map((section) => (
            <li key={section.slug}>
              <button
                onClick={() => handleItemClick(section.slug)}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                  activeSlug === section.slug
                    ? 'bg-highlight/40 text-white shadow-glow-sm border border-accent/50'
                    : 'text-text-main/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden lg:block lg:col-span-3">
        <div className="sticky top-24 p-4 bg-gradient-to-br from-bg-primary to-bg-secondary border border-white/10 rounded-xl shadow-lg">
          {sidebarContent}
        </div>
      </aside>

      {/* --- Mobile Dropdown --- */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex justify-between items-center px-4 py-3 bg-secondary border border-white/10 rounded-lg text-white font-semibold"
        >
          <span>{isMobileMenuOpen ? 'Close Menu' : 'Open Docs Menu'}</span>
          <span>{isMobileMenuOpen ? '▲' : '▼'}</span>
        </button>
        {isMobileMenuOpen && (
          <div className="mt-2 p-4 bg-secondary border border-white/10 rounded-lg">
            {sidebarContent}
          </div>
        )}
      </div>
    </>
  );
};

export default DocsSidebar;