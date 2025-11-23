import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchHighlights } from './components/ResearchHighlights';
import { Timeline } from './components/Timeline';
import { Publications, PublicationDetail } from './components/Publications';
import { Skills } from './components/Skills';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  // Basic hash routing implementation
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentHash]);

  // Function to render content based on hash
  const renderContent = () => {
    // Dynamic route for publication details
    if (currentHash.startsWith('#/publication/')) {
        const id = currentHash.split('/')[2];
        return <PublicationDetail id={id} />;
    }

    switch (currentHash) {
      case '#/research':
        return <ResearchHighlights />;
      case '#/publications':
        return <Publications />;
      case '#/experience':
        return <Timeline />;
      case '#/gallery':
          return <Gallery />;
      case '#/':
      default:
        return (
          <>
            <Hero />
            <ResearchHighlights />
            <Timeline />
            <Skills />
            <Publications />
            <Gallery />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;