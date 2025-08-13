import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { okTomorrowRoles, wkChampionRoles } from '../constants';


const Roles = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <SectionWrapper ref={ref} id="roles" title="Together, We Drive Momentum">
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-brand-gray p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-white mb-4">OK Tomorrow Will Own:</h3>
                    <ul className="space-y-3 list-disc list-inside text-gray-300">
                      {okTomorrowRoles.map(role => <li key={role}>{role}</li>)}
                    </ul>
                </div>
                <div className="bg-brand-gray p-8 rounded-lg">
                    <h3 className="font-serif text-2xl font-bold text-white mb-4">W+K Will Champion:</h3>
                    <ul className="space-y-3 list-disc list-inside text-gray-300">
                      {wkChampionRoles.map(role => <li key={role}>{role}</li>)}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
});

Roles.displayName = 'Roles';

export default Roles;