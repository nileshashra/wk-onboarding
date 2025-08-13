
import React from 'react';

const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.795A9 9 0 1112 .5a9 9 0 019 12.295z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.343 17.657a9 9 0 0111.314 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c-1.35.6-2.5 1.5-3.5 2.5m7 0c-1-.9-2.2-1.9-3.5-2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5c1.35-.6 2.5-1.5 3.5-2.5m-7 0c1 .9 2.2 1.9 3.5 2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5v17" />
    </svg>
);

export default GlobeAltIcon;
