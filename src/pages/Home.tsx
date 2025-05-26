import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database, Braces } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SkillBadge from '../components/SkillBadge';
import { useState } from 'react';
const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Affimintus Technologies',
    duration: 'July 2022 – August 2023',
    description: [
      'Built backend services for an e-commerce platform using Java and Spring Boot, optimizing API response times by 20% through caching (Redis) and query optimization.',
      'Enhanced dashboard UI with ReactJS, increasing user engagement by 15%.',
      'Handled 1,000+ concurrent users securely using JWT, SSL, and load balancing.',
      'Improved order data processing by 25% with MySQL indexing and optimization.',
      'Maintained Git & GitHub version control for collaborative development.',
      'Achieved 80% code coverage using JUnit and Sonar, reducing bugs by 20%.',
    ],
  },
  {
    role: 'Intern',
    company: 'IBM',
    duration: 'January 2022 – May 2022',
    description: [
      'Developed an AI-powered healthcare model using Python, SVM, and scikit-learn, improving predictive accuracy by 20%.',
      'Implemented data encryption protocols and OAuth 2.0 authentication to secure PII.',
      'Reduced diagnostic errors by 20% through debugging and optimization.',
      'Applied Agile methodologies and followed SDLC best practices to streamline delivery.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Affimintus Technologies',
    duration: 'May 2021 – November 2021',
    description: [
      'Developed and maintained over 10 RESTful APIs and microservices using JSON and XML, reducing data exchange errors by 25%.',
      'Collaborated with cross-functional teams to align development with business goals.',
      'Contributed to Agile sprints using Scrum methodology for faster iteration.',
    ],
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-950 dark:to-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="text-primary-600 dark:text-primary-400">
                  Abhay Soni
                </span>
                <br />
                Software Engineer
              </h1>
              <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl">
                I’m a passionate software engineer with expertise in full-stack
                development, machine learning, and cloud technologies. I
                recently completed my Master’s in Computer Science from Pace
                University.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Abhay Soni - Software Engineer"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center text-white text-3xl">
                  <Code size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white dark:bg-dark-900" id="about">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="About Me"
              subtitle="I am a dedicated software engineer with a strong foundation in computer science and a passion for building innovative solutions."
              align="center"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="card">
                <p>
                  Full-Stack Software Engineer with 2 years of experience and a
                  Master’s in Computer Science from Pace University New York
                  (GPA: 3.97/4). Skilled in building scalable, secure
                  applications using Java, Spring Boot, ReactJS, and Python.
                  Experienced in developing AI-powered solutions and
                  cloud-native systems using AWS, Docker, Firebase, and
                  Kubernetes. Passionate about delivering user-focused,
                  high-performance software that solves real-world problems.
                </p>
              </div>
              <br />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <AnimatedSection>
                  <SectionHeading
                    title="Technical Expertise"
                    subtitle="Equipped with hands-on experience in full-stack development, cloud platforms, and AI, I build scalable and user-focused digital solutions."
                    align="left"
                  />
                </AnimatedSection>
                <div className="flex flex-wrap gap-3">
                  {/* Programming Languages */}
                  <SkillBadge name="Java" icon={<Braces size={18} />} />
                  <SkillBadge name="Python" icon={<Braces size={18} />} />
                  <SkillBadge name="JavaScript" icon={<Braces size={18} />} />
                  <SkillBadge name="TypeScript" icon={<Braces size={18} />} />
                  <SkillBadge name="C++" icon={<Braces size={18} />} />

                  {/* Frontend */}
                  <SkillBadge name="ReactJS" icon={<Code size={18} />} />
                  <SkillBadge name="Angular" icon={<Code size={18} />} />
                  <SkillBadge name="HTML/CSS" icon={<Code size={18} />} />

                  {/* Backend */}
                  <SkillBadge name="Node.js" icon={<Server size={18} />} />
                  <SkillBadge name="Spring Boot" icon={<Server size={18} />} />
                  <SkillBadge name="Express.js" icon={<Server size={18} />} />

                  {/* Databases */}
                  <SkillBadge name="MongoDB" icon={<Database size={18} />} />
                  <SkillBadge name="MySQL" icon={<Database size={18} />} />
                  <SkillBadge name="PostgreSQL" icon={<Database size={18} />} />
                  <SkillBadge name="SQL Server" icon={<Database size={18} />} />
                  <SkillBadge name="DynamoDB" icon={<Database size={18} />} />

                  {/* DevOps / Cloud */}
                  <SkillBadge name="AWS" icon={<Server size={18} />} />
                  <SkillBadge name="Docker" icon={<Code size={18} />} />
                  <SkillBadge name="Kubernetes" icon={<Server size={18} />} />
                  <SkillBadge name="Jenkins" icon={<Server size={18} />} />
                  <SkillBadge name="Git/GitHub" icon={<Code size={18} />} />

                  {/* AI/ML */}
                  <SkillBadge
                    name="Machine Learning"
                    icon={<Braces size={18} />}
                  />
                  <SkillBadge name="Scikit-learn" icon={<Braces size={18} />} />
                  <SkillBadge name="LLM APIs" icon={<Braces size={18} />} />
                </div>
              </div>

              <div>
                <AnimatedSection>
                  <SectionHeading
                    title="Professional Experience"
                    subtitle="Delivered high-performance solutions across full-stack and AI projects—optimizing backend services, enhancing UI/UX, and improving predictive accuracy in real-world systems."
                    align="left"
                  />
                </AnimatedSection>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="card border border-gray-200 dark:border-dark-700 rounded-md p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{exp.role}</h4>
                          <p className="text-dark-500 dark:text-dark-300">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-dark-500 dark:text-dark-300 text-sm">
                          {exp.duration}
                        </span>
                      </div>
                      <button
                        className="mt-4 text-sm text-primary-600 hover:underline focus:outline-none"
                        onClick={() => toggleCard(index)}
                      >
                        {openIndex === index ? 'Hide Details' : 'View Details'}
                      </button>
                      {openIndex === index && (
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <AnimatedSection>
                  <SectionHeading
                    title="Education"
                    subtitle="Master’s in Computer Science from Pace University with a 3.97/4 GPA."
                    align="left"
                  />
                </AnimatedSection>
                <div className="space-y-4">
                  <div className="card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">
                          Master of Science in Computer Science
                        </h4>
                        <p className="text-dark-500 dark:text-dark-300">
                          Pace University, New York, USA
                        </p>
                      </div>
                      <span className="text-dark-500 dark:text-dark-300 text-sm">
                        2023-2025
                      </span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">
                          Bachelor of Technology in Computer Science
                        </h4>
                        <p className="text-dark-500 dark:text-dark-300">
                          Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore,
                          India
                        </p>
                      </div>
                      <span className="text-dark-500 dark:text-dark-300 text-sm">
                        2018-2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-100">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors duration-300"
            >
              Let's Connect
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
