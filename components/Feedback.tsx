
import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';

const Feedback = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <SectionWrapper ref={ref} id="feedback" title="Collaborative Growth Through Continuous Feedback" subtitle="We believe the best programs evolve based on real user needs and experiences. Rather than rigid adherence to a fixed curriculum, we've built flexibility into our program structure.">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-brand-gray p-8 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-brand-yellow mb-4">Feedback Mechanisms</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-white text-lg">Pulse Check Sessions</h4>
                      <p className="mt-1 text-gray-300">Every 4 months, we'll conduct collaborative workshops to assess program effectiveness, identify enhancement opportunities, and ensure we stay aligned with W+K's evolving needs.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Always-On Support</h4>
                      <p className="mt-1 text-gray-300">We maintain an open communication channel through a dedicated Slack workspace where senior leadership can engage with our team on-demand. Every request is logged, prioritized, and addressed.</p>
                    </div>
                  </div>
              </div>
              <div className="bg-brand-gray p-8 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-brand-yellow mb-4">Continuous Improvement</h3>
                   <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-white text-lg">Real-time Adjustments</h4>
                      <p className="mt-1 text-gray-300">Our process includes real-time content adjustments based on user feedback, module updates reflecting the latest AI developments, and format optimizations for better learning outcomes.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Engagement Monitoring</h4>
                      <p className="mt-1 text-gray-300">Regular attendance and engagement reporting helps identify what's working and what needs adjustment, ensuring maximum participation and value delivery for the W+K team.</p>
                    </div>
                  </div>
              </div>
            </div>
        </SectionWrapper>
    );
});

Feedback.displayName = 'Feedback';

export default Feedback;
