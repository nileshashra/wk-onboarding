import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';

const TechSetup = forwardRef<HTMLDivElement>((_props, ref) => {
    const features = [
        {
            title: "Single Sign-On (SSO)",
            description: "We're collaborating with the W+K IT team to implement SSO integration prior to program launch, ensuring seamless access to all program resources without additional login friction."
        },
        {
            title: "Global Localization",
            description: "Understanding W+K's international presence, we've implemented AI-powered localization for all video content. Our transcription and dubbing solution ensures training materials are accessible in multiple languages.",
            languages: [
                { name: 'Portuguese', flag: '🇧🇷' },
                { name: 'Spanish', flag: '🇲🇽' },
                { name: 'Chinese', flag: '🇨🇳' },
                { name: 'Japanese', flag: '🇯🇵' },
            ]
        }
    ];

    return (
        <SectionWrapper ref={ref} id="tech" title="Global Solved">
            <div className="grid md:grid-cols-2 gap-6 text-left">
                {features.map(feature => (
                    <div key={feature.title} className="bg-brand-gray p-6 rounded-lg flex flex-col">
                        <div className="flex-grow">
                            <h3 className="font-bold text-xl text-brand-yellow mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                        {feature.languages && (
                            <div className="mt-4 pt-4 border-t border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-400 mb-2">Proposed Languages:</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {feature.languages.map(lang => (
                                        <span key={lang.name} className="text-gray-300 text-sm flex items-center">
                                            {lang.flag} <span className="ml-2">{lang.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
});

TechSetup.displayName = 'TechSetup';

export default TechSetup;