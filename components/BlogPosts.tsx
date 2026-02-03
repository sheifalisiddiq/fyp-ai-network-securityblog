
import React, { useState } from 'react';
import { BlogPost, Comment } from '../types';
import CommentSection from './CommentSection';

const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    week: 1,
    date: 'September 12, 2024',
    title: 'Project Initiation: Setting the Foundation',
    concept: 'AI-Based Network Monitoring and Threat Detection System',
    rationale: 'Traditional security often misses zero-day threats. This project uses Machine Learning to detect anomalies in real-time, moving beyond static signature-based defense systems.',
    details: [
      'Focused on using Python and Scapy to analyze packet metadata.',
      'Monitoring key metrics: packet rate, protocol distribution, and payload size.',
      'Implementing host-based protection layers for local endpoint security.',
      'Defining baseline network behavior profiles for anomaly scoring.'
    ],
    tags: ['Python', 'Scapy', 'ML', 'Security'],
    comments: [
      {
        id: 'c1',
        author: 'Mr. Roshan Renji',
        content: 'Great start, Sheif. Looking forward to seeing the Scapy implementation next week.',
        timestamp: 'Sep 13, 2024 • 10:15 AM',
        isAdmin: true
      }
    ]
  }
];

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);

  const handleAddComment = (postId: string, newComment: Omit<Comment, 'id' | 'timestamp'>) => {
    const timestamp = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).replace(',', ' •');

    const comment: Comment = {
      ...newComment,
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      isAdmin: false
    };

    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...(post.comments || []), comment]
        };
      }
      return post;
    }));
  };

  const handleDeleteComment = (postId: string, commentId: string) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: (post.comments || []).filter(c => c.id !== commentId)
        };
      }
      return post;
    }));
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Project Journey</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Weekly updates on the development, challenges, and milestones of the IntelliGuard AI System.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {posts.map((post) => (
          <article key={post.id} className="relative group">
            {/* Timeline element */}
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-slate-800 group-hover:bg-cyan-500 transition-colors"></div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-300">
              <div className="p-1 px-4 bg-slate-800/50 flex justify-between items-center text-xs font-mono text-slate-500 border-b border-slate-800">
                <span>WEEK {post.week.toString().padStart(2, '0')}</span>
                <span>{post.date}</span>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-[10px] font-bold uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-3">Project Concept</h4>
                    <p className="text-lg text-slate-200 font-medium">{post.concept}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-3">Rationale</h4>
                    <p className="text-slate-400 leading-relaxed">{post.rationale}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-3">Implementation Details</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {post.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                          <span className="mt-1 w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0"></span>
                          <span className="text-slate-300 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Integration of Comment Section */}
                <CommentSection
                  comments={post.comments || []}
                  onAddComment={(comment) => handleAddComment(post.id, comment)}
                  onDeleteComment={(commentId) => handleDeleteComment(post.id, commentId)}
                />

                <div className="mt-12 flex justify-end">
                  <div className="flex items-center gap-2 text-cyan-500 font-medium cursor-pointer hover:gap-4 transition-all">
                    <span>Read Technical Spec</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
        
        {/* Placeholder for future posts */}
        <div className="p-12 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-500 text-center">
          <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="font-medium">More updates coming soon</p>
          <p className="text-sm mt-1">Week 2: Data Preprocessing & Model Training</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
