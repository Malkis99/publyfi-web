'use client';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Timeline from '@/components/roadmap/Timeline';
import Quarter from '@/components/roadmap/Quarter';
import Milestone from '@/components/roadmap/Milestone';
import { roadmapData } from '@/content/roadmap-data';
import Checkpoint from '@/components/roadmap/Checkpoint';
import ScrollReveal from '@/components/ScrollReveal';
import StaticStarfield from '@/components/StaticStarfield';
import Navbar from '@/components/Navbar';
import IconPlanet from '@/components/icons/IconPlanet';
import CosmicButton from '@/components/CosmicButton';

const backgroundSteps = [
  '#231d3b', // Q1
  '#282244', // Q2
  '#2d274d', // Q3
  '#322c56', // Q4
  '#37315f', // Q5
  '#3c3668', // Q6
];

const RoadmapPage: NextPage = () => {
  const [bgColor, setBgColor] = useState(backgroundSteps[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const quarterIndex = roadmapData.findIndex(
              (q) => q.title.split(' ')[0] === entry.target.id
            );
            if (quarterIndex !== -1) {
              setBgColor(backgroundSteps[quarterIndex]);
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when the element is in the vertical center
        threshold: 0,
      }
    );

    const quarterElements = roadmapData.map((q) => document.getElementById(q.title.split(' ')[0]));
    quarterElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      quarterElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full text-text-main overflow-x-hidden transition-all duration-1000"
      style={{ background: `linear-gradient(135deg, #0f0b1c, #140f22, ${bgColor})`}}
    >
      <StaticStarfield />
      <Navbar />
      <div className="container mx-auto px-4 py-24 relative">
        <header className="text-center mb-24">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-white [text-shadow:0_0_20px_rgba(163,138,209,0.5)]">
              PublyFi Roadmap
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-text-main/70 mt-4">
              Explore the PublyFi journey — from foundation to the living metaverse. Track our progress, upcoming milestones, and vision for the future.
            </p>
          </ScrollReveal>
        </header>

        <div className="relative max-w-3xl mx-auto">
          <Timeline />
          <div className="relative z-10">
            {roadmapData.map((quarter, index) => (
              <div key={index}>
                <ScrollReveal delay={200} triggerOnce={true}>
                  <Quarter title={quarter.title} description={quarter.description}>
                    {quarter.milestones.map((milestone, mIndex) => (
                      <ScrollReveal
                        key={mIndex}
                        animationType="slide-in-left"
                        delay={mIndex * 80}
                        triggerOnce={true}
                      >
                        <Milestone status={milestone.status}>
                          {milestone.text}
                        </Milestone>
                      </ScrollReveal>
                    ))}
                  </Quarter>
                </ScrollReveal>
                {quarter.isCheckpoint && index < roadmapData.length - 1 && (
                  <ScrollReveal triggerOnce={true}>
                    <Checkpoint />
                  </ScrollReveal>
                )}
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-24 text-center">
          <ScrollReveal>
            <div className="relative inline-block px-4">
              <p className="text-lg text-text-main/70">
                🌟 This roadmap evolves with PublyFi. Each quarter, DAO members vote on new priorities.
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-px bg-accent/30 animate-breathing-glow" />
            </div>
            <div className="mt-8">
              <CosmicButton
                label="🗳 Join DAO & Shape the Future"
                href="/waitlist"
                variant="solid"
                className="inline-block"
              />
            </div>
          </ScrollReveal>
        </footer>
      </div>
    </div>
  );
};

export default RoadmapPage;