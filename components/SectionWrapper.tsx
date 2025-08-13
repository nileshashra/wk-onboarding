
import React, { forwardRef } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(({ id, title, subtitle, children }, ref) => {
  return (
    <section ref={ref} id={id} className="py-16 md:py-24 animate-fade-in-up" style={{ animationFillMode: 'both' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-center text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
