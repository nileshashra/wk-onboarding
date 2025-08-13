import React from 'react';

const OKLogo: React.FC<{ className?: string }> = ({ className }) => {
  const logoUrl = "https://cdn.prod.website-files.com/67d07dee9ce1636f55a9cb17/689a688ea2fe774f9229ee03_Ok-Tomorrow-Logo---Yellow-Circle-1000x1000.png";
  
  return (
    <div className={`w-36 h-36 ${className}`}>
      <img 
        src={logoUrl} 
        alt="OK Tomorrow Logo" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
};

export default OKLogo;