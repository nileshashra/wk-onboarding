import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramOverview from './components/ProgramOverview';
import Touchpoints from './components/Touchpoints';
import ModuleJourney from './components/ModuleJourney';
import Timeline from './components/Timeline';
import Feedback from './components/Feedback';
import Roles from './components/Roles';
import TechSetup from './components/TechSetup';
import SuccessMetrics from './components/SuccessMetrics';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

const App: React.FC = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const nextStepsRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Overview', ref: overviewRef },
    { name: 'Approach', ref: approachRef },
    { name: 'Journey', ref: journeyRef },
    { name: 'Timeline', ref: timelineRef },
    { name: 'Next Steps', ref: nextStepsRef },
  ];

  return (
    <div className="bg-brand-black min-h-screen text-gray-200 font-sans">
      <div className="fixed inset-0 border-8 border-brand-yellow pointer-events-none z-50"></div>
      <Header navLinks={navLinks} />
      
      <main className="px-6 sm:px-12 md:px-24 pt-24 pb-12">
        <Hero />
        <ProgramOverview ref={overviewRef} />
        <Touchpoints ref={approachRef} />
        <ModuleJourney ref={journeyRef} />
        <Timeline ref={timelineRef} />
        <Feedback />
        <Roles />
        <TechSetup />
        <SuccessMetrics />
        <NextSteps ref={nextStepsRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;