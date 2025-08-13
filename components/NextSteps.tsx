import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';


const NextSteps = forwardRef<HTMLDivElement>((_props, ref) => {
    const steps = [
        {
            title: "Immediate Actions (Next 2 Weeks)",
            owners: [
                {
                    name: "OK Tomorrow",
                    items: [
                        "Finalize SSO integration with W+K IT team",
                        "Complete community platform setup and testing",
                        "Update and finalize program communications",
                        "Share live event detail planning spreadsheet",
                    ]
                },
                {
                    name: "W+K",
                    items: [
                        "Confirm milestone timing",
                        "Confirm live session timezone approach",
                        "Schedule first inspirational keynote and first office hours",
                        "Confirm Live session member rosters",
                    ]
                }
            ]
        },
        {
            title: "Program Launch (September 2025)",
            items: [
                "WK Grow team sends welcome comms",
                "Community hub goes live and welcome module released",
                "Invites for first Inspirational Event and Office Hours sent",
            ]
        }
    ];

    return (
        <SectionWrapper ref={ref} id="next-steps" title="Immediate Next Steps">
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                {steps.map(step => (
                    <div key={step.title} className="bg-brand-gray p-6 rounded-lg">
                        <h3 className="font-serif text-xl font-bold text-brand-yellow mb-4">{step.title}</h3>
                        {step.owners ? (
                           <div className="space-y-4">
                                {step.owners.map(owner => (
                                    <div key={owner.name}>
                                        <h4 className="font-semibold text-white mb-2">{owner.name}</h4>
                                        <ul className="space-y-2 list-disc list-inside text-gray-300 pl-2">
                                            {owner.items.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ul className="space-y-3 list-disc list-inside text-gray-300">
                               {step.items?.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
});

NextSteps.displayName = 'NextSteps';

export default NextSteps;