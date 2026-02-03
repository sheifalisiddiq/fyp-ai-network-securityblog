
import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import Navbar from './components/Navbar';
import About from './components/About';
import BlogPosts from './components/BlogPosts';
import MeetingLog from './components/MeetingLog';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.ABOUT);

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case NavTab.ABOUT:
        return <About onNavigate={(tab) => setActiveTab(tab)} />;
      case NavTab.BLOG:
        return <BlogPosts />;
      case NavTab.LOG:
        return <MeetingLog />;
      case NavTab.GALLERY:
        return <Gallery />;
      case NavTab.CONTACT:
        return <Contact />;
      default:
        return <About onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-cyan-500/30">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
