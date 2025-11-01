"use client";

import { useState } from 'react';

const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-sm bg-bg-secondary text-text-main/90 border border-accent/30 rounded-md shadow-lg z-10 transition-opacity duration-300 animate-fade-scale-in">
          {text}
        </div>
      )}
    </div>
  );
};

const TokenomicsSnapshot = () => {
  return (
    <div className="mt-12 w-full max-w-4xl mx-auto fade-in-up-on-scroll" id="tokenomics-snapshot">
      <div
        className="
          group p-5 rounded-lg border border-[#50348f]/50
          bg-transparent
          relative overflow-hidden
          shadow-[0_0_25px_rgba(80,52,143,0.2),inset_0_0_15px_rgba(163,138,209,0.1)]
        "
      >
        <h3 className="text-2xl font-semibold text-center mb-5 text-accent">Tokenomics Snapshot</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">

          {/* Total Supply */}
          <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_15px_rgba(163,138,209,0.2)]">
            <p className="text-text-main/70 text-sm mb-1">Total Supply</p>
            <p className="text-lg font-bold text-white" style={{ textShadow: '0 0 10px rgba(163, 138, 209, 0.7)' }}>500,000,000 PUBL</p>
          </div>

          {/* Deflationary Rate */}
          <Tooltip text="Emissions reduce 1.5× yearly">
            <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_15px_rgba(163,138,209,0.2)] cursor-help">
              <p className="text-text-main/70 text-sm mb-1">Deflationary Rate</p>
              <p className="text-lg font-bold text-white" style={{ textShadow: '0 0 10px rgba(163, 138, 209, 0.7)' }}>1.5× Yearly Halving</p>
            </div>
          </Tooltip>

          {/* Burn Mechanisms */}
          <Tooltip text="Marketplace fees & voluntary burns">
            <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_15px_rgba(163,138,209,0.2)] cursor-help">
              <p className="text-text-main/70 text-sm mb-1">Burn Mechanisms</p>
              <p className="text-lg font-bold text-white" style={{ textShadow: '0 0 10px rgba(163, 138, 209, 0.7)' }}>Marketplace + Voluntary</p>
            </div>
          </Tooltip>

          {/* Governance */}
          <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-[0_0_15px_rgba(163,138,209,0.2)]">
            <p className="text-text-main/70 text-sm mb-1">Governance</p>
            <p className="text-lg font-bold text-white" style={{ textShadow: '0 0 10px rgba(163, 138, 209, 0.7)' }}>DAO-enabled</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TokenomicsSnapshot;