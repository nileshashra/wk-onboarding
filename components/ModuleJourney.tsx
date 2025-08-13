import React, { useState, forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { moduleJourneyData, coreSkillsets } from '../constants';

const ModuleJourney = forwardRef<HTMLDivElement>((_props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = moduleJourneyData[activeIndex];

  return (
    <SectionWrapper ref={ref} id="journey" title="24 Modules, 12 Months of Growth" subtitle="Our carefully curated learning journey is designed specifically to inspire all W+K team members, regardless of their department or office location.">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-brand-gray p-4 sm:p-6 md:p-8 rounded-lg">
        {/* Left Column: Category Navigation */}
        <div className="md:w-1/3 lg:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 pb-4 md:pb-0 md:pr-8">
          <nav aria-label="Module Categories">
            <ul className="flex flex-row md:flex-col gap-2 -mx-2 md:mx-0 overflow-x-auto md:overflow-x-visible">
              {moduleJourneyData.map((category, index) => (
                <li key={category.category} className="flex-shrink-0 md:flex-shrink">
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left text-sm sm:text-base font-semibold p-3 rounded-md transition-colors duration-200 ${
                      activeIndex === index
                        ? 'bg-brand-yellow text-brand-black'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    {category.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Column: Category Content */}
        <div className="md:w-2/3 lg:w-3/4">
          {activeCategory && (
            <div role="tabpanel">
              <p className="italic text-gray-300 mb-6 text-base">{activeCategory.purpose}</p>
              <div className="space-y-4">
                {activeCategory.modules.map((module) => (
                  <div key={module.title} className="bg-gray-900/50 p-4 rounded-md border border-gray-700/50">
                    <h4 className="font-bold text-white text-base">{module.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-2xl font-serif font-bold text-white mb-6">Core Skillsets Developed</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {coreSkillsets.map(skill => (
            <span key={skill} className="bg-brand-yellow/20 text-brand-yellow py-2 px-4 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
});

ModuleJourney.displayName = 'ModuleJourney';

export default ModuleJourney;