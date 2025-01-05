import React from 'react';

interface InterestsProps {
    className?: string;
}

const Contact: React.FC<InterestsProps> = ({ className }) => {
    return (
    <div className={`bg-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
        <h2 className="text-xl font-bold text-white">✨ Beyond the Code</h2>
        <p className="text-gray-300 mt-2">Read!</p>
    </div>
    );
};

export default Contact;