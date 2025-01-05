import React from 'react';

const Footer: React.FC = () => {
    return (
    <footer className="bg-gray-800 text-white p-4 w-full text-center">
        <p>&copy; {new Date().getFullYear()} Claudee Directo</p>
    </footer>
    );
};

export default Footer;