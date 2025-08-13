import React from 'react';
import OKLogo from './OKLogo';
import { BsCalendar3, BsGlobe, BsStars, BsSun } from 'react-icons/bs';

interface Stat {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    value: string;
    label: string;
}

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="bg-brand-gray p-6 rounded-lg text-center flex flex-col items-center justify-start transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <stat.icon className="w-10 h-10 text-brand-yellow mb-4" />
        <p className="text-4xl font-bold text-white">{stat.value}</p>
        <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
    </div>
);


const Hero: React.FC = () => {
    const stats: Stat[] = [
        { icon: BsCalendar3, value: "12", label: "Month Program" },
        { icon: BsGlobe, value: "Global", label: "W+K Team Reach" },
        { icon: BsStars, value: "Gemini", label: "AI Platform Focus" },
        { icon: BsSun, value: "Cultural", label: "Transformation Approach" },
    ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
       <div className="mb-12">
            <OKLogo />
        </div>
      <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
        W+K x OK Tomorrow GenAI Training Program Kickoff
      </h1>
      
      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-lg text-gray-400">
          Over the next 12 months, we'll partner closely to bring AI fluency and inspiration to the entire W+K global team. With a significant investment in Gemini, the goal is to drive meaningful, organization-wide adoption—ensuring teams have the knowledge and confidence to use it effectively in their daily work.
        </p>
        <p className="mt-4 text-lg text-brand-yellow italic">
          It's a cultural shift designed to make Gemini a trusted creative and strategic tool across roles, offices, and ways of working.
        </p>
      </div>

       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {stats.map(stat => (
                <StatCard key={stat.label} stat={stat} />
            ))}
        </div>
    </div>
  );
};

export default Hero;