import React from 'react';

interface BentoCardProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, children, className }) => {
    return (
        <div className={`bg-white rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {children}
            </div>
        </div>
    );
};

export default BentoCard;