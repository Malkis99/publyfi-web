"use client";
import React, { useState } from 'react';
import { User, mockUsers } from '@/lib/community-data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Avatar from './Avatar';
import { Bold, Italic, Code, Image as ImageIcon, Video, Paperclip, Smile, List, Quote } from 'lucide-react';

type PostTemplate = 'Discussion' | 'Guide' | 'Announcement' | 'Poll' | 'DAO Proposal';

const templates: PostTemplate[] = ['Discussion', 'Guide', 'Announcement', 'Poll', 'DAO Proposal'];

const PostComposer = () => {
    const [activeTemplate, setActiveTemplate] = useState<PostTemplate>('Discussion');
    const user = mockUsers['user-1'];

    return (
        <div className="max-w-4xl mx-auto">
             <div className="flex items-center space-x-2 mb-4">
                {templates.map(template => (
                    <Button
                        key={template}
                        variant={activeTemplate === template ? 'default' : 'outline'}
                        onClick={() => setActiveTemplate(template)}
                        className={`${activeTemplate === template ? 'bg-purple-600' : 'border-purple-800/50 bg-[#140f22]/50'} hover:bg-purple-700`}
                    >
                        {template}
                    </Button>
                ))}
            </div>
            <div className="bg-[#231d3b]/50 border border-purple-900/30 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                    <Avatar user={user} size={40} />
                    <div className="flex-1 space-y-4">
                        <Input placeholder="Title" className="bg-[#140f22] border-purple-800/50 text-xl font-bold h-12" />

                        {activeTemplate === 'Poll' && (
                            <div className="space-y-2">
                                <Input placeholder="Poll Option 1" className="bg-[#140f22] border-purple-800/50" />
                                <Input placeholder="Poll Option 2" className="bg-[#140f22] border-purple-800/50" />
                                <Button variant="link" size="sm">Add Option</Button>
                            </div>
                        )}

                        <div className="bg-[#140f22] border border-purple-800/50 rounded-lg">
                            <Textarea
                                placeholder="What's on your mind?"
                                className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white min-h-[200px]"
                            />
                            <div className="p-2 border-t border-purple-800/50 flex justify-between items-center">
                                <div className="flex items-center space-x-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Bold size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Italic size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><List size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Quote size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Code size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><ImageIcon size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Paperclip size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Smile size={16} /></Button>
                                </div>
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold">
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostComposer;