import React from 'react';

interface ProjectsProps {
    className?: string;
}

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
    const projects: Project[] = [
        {
            title: "Portfolio Website",
            description: "Personal portfolio website built with React and TailwindCSS",
            technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
            link: "https://github.com/ckdirecto/portfolio-website"
        },
        {
            title: "Published work on Electronic Nose and CNN",
            description: "An electronic nose device is paired with a deep learning model to create a system that identifies tomato ripeness.",
            technologies: ["Python", "TensorFlow", "CNN"],
            link: "https://ieeexplore.ieee.org/document/9984415/"
        },
        {
            title: "Salba",
            description: "Salba is an emergency response mobile application for rescue operations. This was a proposal for BlueHacks 2021.",
            technologies: ["Dart", "Flutter", "Firebase"],
            link: "https://github.com/ckdirecto/Sentinels"
        },
    ];

    return (
        <div className={`bg-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
            <h2 className="text-xl font-bold text-white mb-4">Projects</h2>
            <div className="overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2">
                {projects.map((project, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-semibold">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white/80 hover:text-white underline decoration-white/20 hover:decoration-white/80"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <p className="text-white/60 mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
                            >
                                View Project →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;