"use client";
import React from 'react';
import { Comment as CommentType, User } from '@/lib/community-data';
import Avatar from './Avatar';
import { parseContent } from '@/lib/content-parser';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Smile, Flame, Heart } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import CommentForm from './CommentForm';
import ProfileHovercard from './ProfileHovercard';
import InteractionButton from './InteractionButton';

interface CommentProps {
    comment: CommentType;
    isReply?: boolean;
}

const Comment: React.FC<CommentProps> = ({ comment, isReply = false }) => {
    const hasReplies = comment.replies && comment.replies.length > 0;

    return (
        <div className="flex space-x-4 relative">
            {isReply && <div className="absolute left-5 top-12 bottom-4 w-0.5 bg-purple-800/30 glow-line"></div>}
            <Avatar user={comment.author} size={isReply ? 32 : 40} />
            <div className="flex-1">
                <div className="bg-[#140f22]/50 border border-purple-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <ProfileHovercard user={comment.author}>
                            <p className="font-bold text-white cursor-pointer">{comment.author.name}</p>
                        </ProfileHovercard>
                        <p className="text-xs text-gray-400">{comment.timestamp}</p>
                    </div>
                    <div className="text-gray-300 mt-2 text-sm">{parseContent(comment.content)}</div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                        <InteractionButton icon={ThumbsUp} count={comment.likeCount || 0} label="Like" activeColor="bg-blue-500" />
                        <Button variant="ghost" size="sm" className="hover:text-white flex items-center"><MessageSquare size={14} className="mr-1"/> Reply</Button>
                    </div>
                    <div className="flex items-center space-x-2">
                        {comment.reactions.map((reaction, index) => {
                            const reactionIcons = {
                                thumbsup: <ThumbsUp size={16} />,
                                flame: <Flame size={16} />,
                                heart: <Heart size={16} />,
                                smile: <Smile size={16} />,
                            };
                            return (
                                <div key={index} className="flex items-center space-x-1 bg-purple-900/50 px-2 py-1 rounded-full">
                                    {reactionIcons[reaction.emoji]}
                                    <span className="text-xs">{reaction.count}</span>
                                </div>
                            );
                        })}
                         <Button variant="ghost" size="icon" className="h-6 w-6"><Smile size={14}/></Button>
                    </div>
                </div>

                {hasReplies && (
                    <Collapsible className="mt-4">
                        <CollapsibleTrigger asChild>
                            <Button variant="link" className="text-purple-300 text-xs p-0 h-auto">
                                View {comment.replies.length} replies
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4 space-y-4">
                            {comment.replies.map(reply => (
                                <Comment key={reply.id} comment={reply} isReply />
                            ))}
                             <CommentForm user={comment.author} isReply />
                        </CollapsibleContent>
                    </Collapsible>
                )}
            </div>
        </div>
    );
};

export default Comment;