
import React, { useState, forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { BsChevronDown, BsCheckCircleFill } from 'react-icons/bs';
import { metricsData } from '../constants';
import { Metric } from '../types';

const AccordionItem: React.FC<{ item: Metric; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6"
      >
        <h3 className="font-semibold text-lg text-white">{item.category}</h3>
        <BsChevronDown
          className={`w-6 h-6 text-brand-yellow transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5 text-gray-300">
          <ul className="space-y-2 mb-4">
            {item.kpis.map(kpi => (
              <li key={kpi} className="flex items-start">
                <BsCheckCircleFill className="w-5 h-5 mr-3 mt-1 text-brand-yellow flex-shrink-0" />
                <span>{kpi}</span>
              </li>
            ))}
          </ul>
          <div className="bg-gray-800 p-3 rounded-md">
            <p><span className="font-semibold text-white">Target:</span> {item.target}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const SuccessMetrics = forwardRef<HTMLDivElement>((_props, ref) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <SectionWrapper ref={ref} id="metrics" title="Measuring Impact, Celebrating Progress">
            <div className="bg-brand-gray rounded-lg overflow-hidden">
                {metricsData.map((metric, index) => (
                    <AccordionItem 
                        key={index} 
                        item={metric} 
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
});

SuccessMetrics.displayName = 'SuccessMetrics';

export default SuccessMetrics;