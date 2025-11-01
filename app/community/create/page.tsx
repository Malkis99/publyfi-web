import React from 'react';
import PostComposer from '@/components/community/PostComposer';
import StaticStarfield from '@/components/StaticStarfield';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CreateTopicPage = () => {
  return (
    <div className="min-h-screen bg-[#140f22] text-white">
        <StaticStarfield />
        <main className="container mx-auto px-4 py-8 pt-24">
             <Link href="/community" passHref>
                <Button variant="ghost" className="mb-8 text-purple-300 hover:text-white hover:bg-purple-900/50">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Community
                </Button>
            </Link>
            <PostComposer />
        </main>
    </div>
  );
};

export default CreateTopicPage;