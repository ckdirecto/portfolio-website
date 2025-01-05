interface ExperienceProps {
    className?: string;
}
const Experience: React.FC<ExperienceProps> = ({ className }) => {
    return (
    <div className={`bg-bento backdrop-blur-sm rounded-xl p-6 hover:scale-[102%] transition-all ${className}`}>
        <h2 className="text-xl font-bold text-white">Experience</h2>
        </div>
    );
};

export default Experience;