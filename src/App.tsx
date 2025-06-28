import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import VideoSection from './components/VideoSection';
import ApplicationGuide from './components/ApplicationGuide';
import TargetCrops from './components/TargetCrops';
import Science from './components/Science';
import Footer from './components/Footer';
import StickyOrderButton from './components/StickyOrderButton';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <VideoSection />
          <ApplicationGuide />
          <TargetCrops />
          <Science />
        </main>
        <Footer />
        <StickyOrderButton />
      </div>
    </ThemeProvider>
  );
}

export default App;