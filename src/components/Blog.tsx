import React from 'react';

interface BlogProps {
    className?: string;
}

const Blog: React.FC<BlogProps> = ({ className }) => {
    return (
    <div className={`bg-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
        <h2 className="text-xl font-bold text-white">Blog</h2>
        <p className="text-gray-300 mt-2">Musings of a girl in tech</p>
    </div>
    );
};

export default Blog;



