"use client";

import { useState, useEffect, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import DocsSidebar from '@/components/docs/sidebar';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

const docSections = [
  { slug: 'overview', title: 'Overview' },
  { slug: 'ecosystem-features', title: 'Ecosystem Features' },
  { slug: 'content-interaction', title: 'Content & Interaction' },
  { slug: 'content-mechanics', title: 'Content Mechanics' },
  { slug: 'identity-engine', title: 'Identity Engine' },
  { slug: 'blockchain-architecture', title: 'Blockchain Architecture' },
  { slug: 'security-framework', title: 'Security Framework' },
  { slug: 'security-compliance', title: 'Security & Compliance' },
  { slug: 'investor-faq', title: 'Investor FAQ' },
  { slug: 'faq-general', title: 'FAQ' },
];

// A simple component for fade-in transitions
const FadeIn = ({ children, show }: { children: ReactNode; show: boolean }) => (
  <div className={`transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0'}`}>
    {children}
  </div>
);

const DocsPage = () => {
  const [activeSlug, setActiveSlug] = useState('overview');
  const [mdxSource, setMdxSource] = useState<MDXRemoteProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (!activeSlug) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/docs/${activeSlug}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to fetch content: ${response.statusText}`);
        }
        const data = await response.json();
        setMdxSource(data.source);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        setMdxSource(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [activeSlug]);

  const ContentDisplay = () => {
    if (loading) {
      return <p className="text-text-main/70 animate-pulse">Loading document...</p>;
    }
    if (error) {
      return <p className="text-red-400">Error: {error}</p>;
    }
    if (mdxSource) {
      // @ts-ignore
      return <MDXRemote {...mdxSource} />;
    }
    return <p>Select a document to view.</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-bg-secondary text-text-main">
      <Navbar />
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <DocsSidebar
            sections={docSections}
            activeSlug={activeSlug}
            onSectionSelect={setActiveSlug}
          />

          <section className="lg:col-span-9">
            <div className="bg-white/5 border border-white/10 rounded-xl min-h-[60vh]">
              <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 prose prose-invert">
                <FadeIn show={!loading}>
                  <ContentDisplay />
                </FadeIn>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;