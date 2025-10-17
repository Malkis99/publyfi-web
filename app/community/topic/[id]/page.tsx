"use client";
import React from 'react';
import { mockFeedItems, mockUsers } from '@/lib/community-data';
import Avatar from '@/components/community/Avatar';
import { notFound } from 'next/navigation';
import StaticStarfield from '@/components/StaticStarfield';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, ThumbsUp, Share2, Heart } from 'lucide-react';
import CommentSection from '@/components/community/CommentSection';
import { parseContent } from '@/lib/content-parser';
import InteractionButton from '@/components/community/InteractionButton';

const TopicPage = ({ params }: { params: { id: string } }) => {
    // In a real app, you'd fetch this data. Here we find it in our mock data.
    const item = mockFeedItems.find(p => p.id === params.id);

    if (!item || (item.type !== 'discussion' && item.type !== 'guide')) {
        notFound();
    }

    const author = item.author || mockUsers['system'];

    return (
        <div className="min-h-screen bg-[#140f22] text-gray-200">
            <StaticStarfield />
            <main className="container mx-auto px-4 py-8 pt-24">
                <div className="max-w-4xl mx-auto">
                    <Link href="/community" passHref>
                        <Button variant="ghost" className="mb-8 text-purple-300 hover:text-white hover:bg-purple-900/50">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Community
                        </Button>
                    </Link>

                    <article className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-8">
                        <header className="mb-8">
                            <h1 className="text-4xl font-bold tracking-tight text-white mb-4">{item.title}</h1>
                            <div className="flex items-center space-x-4">
                                <Avatar user={author} size={48} />
                                <div>
                                    <p className="font-semibold text-white">{author.name}</p>
                                    <p className="text-sm text-gray-400">Posted on {item.timestamp}</p>
                                </div>
                            </div>
                        </header>

                        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none">
                           <div>{parseContent(item.content!)}</div>
                           {/* More rich text content would go here */}
                        </div>

                        <footer className="mt-8 pt-6 border-t border-purple-900/50 flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                                <InteractionButton icon={ThumbsUp} count={item.likeCount || 0} label="Like" activeColor="bg-blue-500" />
                                <InteractionButton icon={MessageSquare} count={item.comments?.length || 0} label="Comment" activeColor="bg-green-500" />
                                <InteractionButton icon={Share2} count={item.shareCount || 0} label="Share" activeColor="bg-purple-500" />
                            </div>
                        </footer>
                    </article>

                    <CommentSection comments={item.comments || []} />
                </div>
            </main>
        </div>
    );
};

export default TopicPage;