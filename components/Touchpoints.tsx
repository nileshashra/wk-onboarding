
import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { touchpointsData } from '../constants';
import { Touchpoint } from '../types';

const TouchpointCard: React.FC<{ touchpoint: Touchpoint }> = ({ touchpoint }) => {
  return (
    <div className="bg-brand-yellow text-brand-black p-6 rounded-lg h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-xl font-bold font-serif mb-3">{touchpoint.title}</h3>
      <p className="flex-grow mb-4 text-gray-800">{touchpoint.description}</p>
      <div className="text-sm text-black/70">
        <p><span className="font-semibold">Format:</span> {touchpoint.format}</p>
        <p><span className="font-semibold">Audience:</span> {touchpoint.audience}</p>
        <p><span className="font-semibold">Cadence:</span> {touchpoint.cadence}</p>
      </div>
    </div>
  );
};


const Touchpoints = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <SectionWrapper ref={ref} id="approach" title="Six Key Program Touchpoints">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {touchpointsData.map(tp => (
                    <TouchpointCard key={tp.title} touchpoint={tp} />
                ))}
            </div>
        </SectionWrapper>
    );
});

Touchpoints.displayName = 'Touchpoints';

export default Touchpoints;
