import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface SocialsProps {
    className?: string;
}

const Socials: React.FC<SocialsProps> = ({ className }) => {
    const socialLinks = [
        {
            href: "https://github.com/ckdirecto",
            icon: <FaGithub size={24} />,
            label: "GitHub"
        },
        {
            href: "https://linkedin.com/in/claudeedirecto",
            icon: <FaLinkedin size={24} />,
            label: "LinkedIn"
        },
        {
            href: "https://twitter.com/directoeffect",
            icon: <FaTwitter size={24} />,
            label: "Twitter"
        },
        {
            href: "mailto:claudee.directo@gmail.com",
            icon: <FaEnvelope size={24} />,
            label: "Email"
        }
    ];

    return (
        <div className={`bg-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
            <h2 className="text-xl font-bold text-white">Let's Connect</h2>
            <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Socials;