
import React, { useState } from 'react';
import { BlogPost, Comment } from '../types.ts';
import CommentSection from './CommentSection.tsx';
import { motion } from 'framer-motion';

const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    week: 1,
    date: 'September 12, 2024',
    title: 'Week 1: Project Initiation',
    concept: 'Title: AI-Based Network Monitoring and Threat Detection System. This project involves developing a host-based security application that monitors real-time network traffic. By utilizing machine learning algorithms, the system aims to distinguish between normal user activity and malicious patterns—such as DDoS attacks or unauthorized port scanning—providing an intelligent layer of protection for the device.',
    rationale: 'I chose this project because traditional firewalls and signature-based detection systems are often blind to "zero-day" attacks that don\'t match known patterns. As someone passionate about cybersecurity, I wanted to create a solution that uses behavioral analysis to identify threats. This is significant because it shifts the focus from reactive security to proactive, intelligent monitoring, which is critical for securing modern IoT and enterprise environments.',
    details: {
      significance: 'The project addresses the growing complexity of network attacks by automating the detection process, reducing the need for constant human oversight.',
      approach: {
        capture: 'Data Capture: Using Python and libraries like Scapy to intercept and analyze network packets.',
        ai: 'AI Integration: Implementing classification models (like Random Forest) to evaluate traffic metadata such as packet rate and protocol types.',
        ui: 'User Interface: A centralized dashboard to visualize network health and provide clear alerts when suspicious behavior is detected.'
      }
    },
    reflections: 'My goal for this week was to establish the project scope and finalize my supervisor, Mr. Roshan Renji. Moving forward, the primary challenge will be ensuring the AI model remains lightweight enough to run on a host device while maintaining high accuracy in threat classification.',
    tags: ['Python', 'Scapy', 'ML', 'Security', 'Zero-Day'],
    comments: []
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
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Project Journey</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Professional records of development, academic milestones, and technical implementation of the AI Network Monitor.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {posts.map((post) => (
          <motion.article 
            key={post.id} 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-slate-800 group-hover:bg-cyan-500 transition-colors duration-1000"></div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-700">
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

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-700">
                  {post.title}
                </h3>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-3">Project Idea</h4>
                    <p className="text-slate-200 leading-relaxed">{post.concept}</p>
                  </section>

                  <section>
                    <h4 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-3">Rationale</h4>
                    <p className="text-slate-400 leading-relaxed">{post.rationale}</p>
                  </section>

                  <section>
                    <h4 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-3">Proposed Approach</h4>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      <motion.div 
                        whileHover={{ x: 15 }}
                        transition={{ type: "spring", stiffness: 40, damping: 10 }}
                        className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">{post.details.approach.capture}</p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 15 }}
                        transition={{ type: "spring", stiffness: 40, damping: 10 }}
                        className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">{post.details.approach.ai}</p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 15 }}
                        transition={{ type: "spring", stiffness: 40, damping: 10 }}
                        className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm leading-relaxed">{post.details.approach.ui}</p>
                      </motion.div>
                    </div>
                    <p className="mt-4 text-slate-400 text-sm italic">
                      <span className="text-white font-bold">Significance:</span> {post.details.significance}
                    </p>
                  </section>

                  <section className="bg-slate-950/30 p-6 rounded-2xl border border-slate-800/50 border-l-4 border-l-cyan-500">
                    <h4 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-3">Initial Reflections</h4>
                    <p className="text-slate-400 text-sm italic leading-relaxed">{post.reflections}</p>
                  </section>
                </div>

                <CommentSection
                  comments={post.comments || []}
                  onAddComment={(comment) => handleAddComment(post.id, comment)}
                  onDeleteComment={(commentId) => handleDeleteComment(post.id, commentId)}
                />

                <div className="mt-12 flex justify-end">
                  <motion.div 
                    whileHover={{ x: 15 }}
                    transition={{ type: "spring", stiffness: 40, damping: 10 }}
                    className="flex items-center gap-2 text-cyan-500 font-medium cursor-pointer transition-all duration-700"
                  >
                    <span>Technical Docs coming soon</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="p-12 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-500 text-center"
        >
          <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="font-medium">Week 2: Data Collection & Feature Selection</p>
          <p className="text-sm mt-1 uppercase tracking-widest font-mono text-slate-600">Loading pipeline...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPosts;
