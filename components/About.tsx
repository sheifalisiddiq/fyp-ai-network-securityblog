
import React from 'react';
import { NavTab } from '../types';

interface AboutProps {
  onNavigate: (tab: NavTab) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 py-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center overflow-hidden">
            <img 
              src="https://picsum.photos/seed/sheif/400/400" 
              alt="Sheif Ali Siddiq" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Sheif Ali <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Siddiq</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-2xl">
            Computer Systems Engineering Student at the intersection of 
            <span className="text-white font-medium"> AI</span>, 
            <span className="text-white font-medium"> Cybersecurity</span>, and 
            <span className="text-white font-medium"> Business</span>.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button 
              onClick={() => onNavigate(NavTab.BLOG)}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
            >
              View Project Blog
            </button>
            <button 
              onClick={() => onNavigate(NavTab.CONTACT)}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Technical Focus</h3>
          <p className="text-slate-400 leading-relaxed">
            Passionate about building intelligent systems that can predict and mitigate complex network security threats before they manifest.
          </p>
        </div>

        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
          <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
          <p className="text-slate-400 leading-relaxed">
            Expertise in host-based protection, packet analysis, and identifying zero-day vulnerabilities in enterprise network infrastructures.
          </p>
        </div>

        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors">
          <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Business Strategy</h3>
          <p className="text-slate-400 leading-relaxed">
            Understanding the economic impact of technical solutions and bridging the gap between engineering goals and business objectives.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-900/30 rounded-3xl p-8 border border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Tech Stack & Proficiency</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Python', 'Scapy', 'TensorFlow', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS', 'Network Security', 'Machine Learning'].map(skill => (
            <span key={skill} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors cursor-default border border-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
