
import React from 'react';
import { GalleryItem } from '../types';

const GALLERY: GalleryItem[] = [
  {
    id: '1',
    title: 'System Architecture',
    description: 'High-level design of the AI-Based Network Monitoring system showing the data flow from packet capture to anomaly detection.',
    imageUrl: 'https://picsum.photos/seed/arch/800/600',
    category: 'Design'
  },
  {
    id: '2',
    title: 'Data Flow Diagram',
    description: 'Detailed DFD illustrating how Scapy processes incoming traffic and extracts metadata features.',
    imageUrl: 'https://picsum.photos/seed/flow/800/600',
    category: 'Design'
  },
  {
    id: '3',
    title: 'Python Scapy Module',
    description: 'Code snippet of the initial packet sniffing implementation using Python.',
    imageUrl: 'https://picsum.photos/seed/code/800/600',
    category: 'Development'
  },
  {
    id: '4',
    title: 'Network Baseline Analysis',
    description: 'Visualization of normal network activity patterns used for training the anomaly detection model.',
    imageUrl: 'https://picsum.photos/seed/data/800/600',
    category: 'Analysis'
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">Project Gallery</h2>
        <p className="text-slate-400">Visual documentation of diagrams, code blocks, and system interfaces.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GALLERY.map((item) => (
          <div key={item.id} className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 transition-all hover:border-cyan-500/30">
            <div className="aspect-video overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[10px] font-bold uppercase tracking-widest border border-slate-700">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
