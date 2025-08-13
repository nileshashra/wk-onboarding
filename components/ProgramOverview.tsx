import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { BsCheckCircleFill } from 'react-icons/bs';

const ProgramOverview = forwardRef<HTMLDivElement>((_props, ref) => {
    const pillars = [
        "Hands-on experimentation",
        "Real-world application",
        "Guided learning pathways",
        "Creative empowerment",
        "Productivity enhancement"
    ];

    return (
        <SectionWrapper ref={ref} id="overview" title="A Program to Lift the Entire W+K Organization">
            <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="bg-brand-gray p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-brand-yellow mb-4">What We Heard</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Through our discovery conversations, we identified the need to deliver a tailored, hands-on program that enables the W+K team to explore, experiment, and master Gemini—building both foundational and advanced capabilities through guided learning and real-world application. The goal is to unlock organization-wide gains in creativity and productivity, validating our investment.
                    </p>
                </div>
                <div className="bg-brand-gray p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-brand-yellow mb-4">Our Response</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        We've designed a comprehensive program that goes beyond traditional training. This cultural transformation initiative will embed AI fluency into the DNA of W+K's creative process, ensuring every team member feels confident and inspired to leverage Gemini in their daily work.
                    </p>
                    <h4 className="font-bold text-white mb-3">Program Pillars:</h4>
                    <ul className="space-y-2">
                        {pillars.map(pillar => (
                            <li key={pillar} className="flex items-center">
                                <BsCheckCircleFill className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                                <span className="text-gray-300">{pillar}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
});

ProgramOverview.displayName = 'ProgramOverview';

export default ProgramOverview;