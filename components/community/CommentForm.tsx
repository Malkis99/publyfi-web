"use client";
import React from 'react';
import { User } from '@/lib/community-data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Avatar from './Avatar';
import { Bold, Italic, Code, Image as ImageIcon, Video, Paperclip, Smile, Notebook } from 'lucide-react';

interface CommentFormProps {
    user: User;
    isReply?: boolean;
}

const CommentForm: React.FC<CommentFormProps> = ({ user, isReply = false }) => {
    return (
        <div className="flex items-start space-x-4">
            <Avatar user={user} size={40} />
            <div className="flex-1">
                <div className="bg-[#140f22] border border-purple-800/50 rounded-lg">
                    <Textarea
                        placeholder={isReply ? "Write a reply..." : "Write a comment..."}
                        className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
                        rows={3}
                    />
                    <div className="p-2 border-t border-purple-800/50 flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Bold size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Italic size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Code size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><ImageIcon size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Video size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Paperclip size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Smile size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white"><Notebook size={16} /></Button>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            {isReply ? "Post Reply" : "Post Comment"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;