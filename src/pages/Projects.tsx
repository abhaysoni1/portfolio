import { useState } from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  
  // Extract unique technologies across all projects
  const allTechnologies = ['All', ...new Set(
    projectsData.flatMap(project => project.technologies)
  )];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.includes(filter)
      );

  return (
    <div className="pt-28 pb-20 bg-gray-50 dark:bg-dark-900 min-h-screen">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="My Projects"
            subtitle="A showcase of my recent work, personal projects, and contributions to open source."
            align="center"
          />
        </AnimatedSection>
        
        {/* Filter */}
        <AnimatedSection>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech, index) => (
              <button
                key={index}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === tech 
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <AnimatedSection key={project.id}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-dark-500 dark:text-dark-300">
                No projects found with the selected technology.
              </p>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;