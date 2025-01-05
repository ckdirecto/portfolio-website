import React from 'react';

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <div className={`gradient-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
            <h1 className="text-4xl font-bold text-white">👋 Hi, I'm Claudee</h1>
            <p className="text-xl text-gray-300 mt-2">DevOps & Cloud Engineer</p>
            <p className="text-gray-400 mt-4 leading-relaxed">
                A DevOps Engineer with a passion for automating everything. 
                Currently working on cloud infrastructure, CI/CD pipelines, and making 
                systems more reliable. Currently rekindling with web development.   
            </p>
        </div>
    );
};

export default Hero;