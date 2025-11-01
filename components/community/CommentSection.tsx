"use client";
import React from 'react';
import { Comment as CommentType, mockUsers } from '@/lib/community-data';
import Comment from './Comment';
import CommentForm from './CommentForm';

interface CommentSectionProps {
    comments: CommentType[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
    return (
        <section id="comments" className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">{comments.length} Comments</h2>

            <CommentForm user={mockUsers['user-1']} />

            <div className="space-y-6 mt-8">
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </section>
    );
};

export default CommentSection;