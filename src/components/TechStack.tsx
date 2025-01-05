import React from 'react';
import { FaAws, FaGit, FaGithub, FaLinux } from 'react-icons/fa';
import { 
    SiTypescript, 
    SiDocker, 
    SiKubernetes, 
    SiTerraform,
    SiPython,
    SiJavascript,
} from 'react-icons/si';

interface TechStackProps {
    className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className }) => {
    const techStack = [
        { name: 'AWS', icon: <FaAws size={24} /> },
        { name: 'TypeScript', icon: <SiTypescript size={24} /> },
        { name: 'Linux', icon: <FaLinux size={24} /> },
        { name: 'Git', icon: <FaGit size={24} /> },
        { name: 'GitHub Actions', icon: <FaGithub size={24} /> },
        { name: 'Docker', icon: <SiDocker size={24} /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={24} /> },
        { name: 'Terraform', icon: <SiTerraform size={24} /> },
        { name: 'Python', icon: <SiPython size={24} /> },
        { name: 'JavaScript', icon: <SiJavascript size={24} /> },
    ];

    return (
        <div className={`bg-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
            <h2 className="text-xl font-bold text-white mb-4">Dev & Infra Stack</h2>
            <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                    <div 
                        key={tech.name} 
                        className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        {tech.icon}
                        <p className="text-sm">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;