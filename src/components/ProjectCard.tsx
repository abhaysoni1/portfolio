import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card group overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          loading="lazy"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      
      <p className="text-dark-500 dark:text-dark-300 mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 mt-4">
        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={18} />
            <span>Code</span>
          </a>
        )}
        
        {project.liveLink && (
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 ml-auto"
            aria-label={`Live demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;