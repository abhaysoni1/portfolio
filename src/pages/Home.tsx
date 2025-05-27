import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database, Braces } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SkillBadge from '../components/SkillBadge';
import { useState } from 'react';


type experiences = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
};

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Affimintus Technologies',
    duration: 'July 2022 – August 2023',
    description: `I have a proven track record in building robust backend services for e-commerce platforms using Java and Spring Boot. By implementing Redis caching and query optimization techniques, I optimized API response times by 20%, ensuring swift and efficient user experiences. Concurrently, I enhanced the platform's frontend with ReactJS, resulting in a notable 15% increase in user engagement. Security-wise, I adeptly managed over 1,000 concurrent users through JWT, SSL, and load balancing techniques. Moreover, I streamlined order data processing with MySQL indexing, improving efficiency by 25%. Throughout these projects, I maintained rigorous version control using Git & GitHub, facilitating seamless collaboration. Achieving an impressive 80% code coverage with JUnit and Sonar, I significantly reduced bugs, further ensuring high-quality deliverables.`,
    tags: [
      'Java', 'Spring Boot', 'ReactJS', 'MySQL', 'Redis',
      'JWT', 'SSL', 'Load Balancing', 'Git', 'GitHub',
      'JUnit', 'Sonar', 'Agile', 'REST APIs'
    ]
  },
  {
    role: 'Intern',
    company: 'IBM',
    duration: 'January 2022 – May 2022',
    description: `I developed an AI-powered healthcare model leveraging Python, SVM, and scikit-learn, enhancing predictive accuracy by 20%. To ensure the security of personally identifiable information (PII), I implemented robust data encryption protocols and OAuth 2.0 authentication. Through rigorous debugging and optimization, I reduced diagnostic errors by 20%, improving overall model performance. Additionally, I applied Agile methodologies and adhered to SDLC best practices, which significantly streamlined the project delivery process.`,
    tags: [
      'Python', 'SVM', 'Scikit-learn', 'Data Encryption',
      'OAuth 2.0', 'Machine Learning', 'SDLC', 'Agile'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Affimintus Technologies',
    duration: 'May 2021 – November 2021',
    description: `I developed and maintained over 10 RESTful APIs and microservices utilizing JSON and XML, resulting in a 25% reduction in data exchange errors. By collaborating closely with cross-functional teams, I ensured alignment between development efforts and business objectives. Additionally, I actively contributed to Agile sprints using the Scrum methodology, facilitating faster iteration and continuous improvement throughout the development process.`,
    tags: [
      'REST APIs', 'Microservices', 'JSON', 'XML',
      'Agile', 'Scrum', 'Team Collaboration'
    ]
  },
];

const certifications = [
  {
    name: 'INSPIRE (International Student Professional Readiness Education) Program Certification',
    link: 'https://www.credly.com/badges/da94ee69-20ac-44ce-a73e-17054357d729/linked_in_profile',
    tags: [
      'Career Readiness',
      'Professional Branding',
      'Interviewing',
      'Job Search Strategies',
      'Networking',
      'Resume Writing',
      'LinkedIn',
      'Self-Development'
    ],
  },
  {
    name: 'Data Science Practitioner (IBM)',
    link: 'https://www.credly.com/badges/9eaeeaed-2585-4206-b3da-da3600031750/',
    tags: [
      'Data Science',
      'Machine Learning',
      'Data Visualization',
      'Deep Learning',
      'Data Wrangling',
      'Pandas',
      'Matplotlib',
      'IBM Watson',
      'Watson Studio',
      'Model Deployment',
      'IBM Cloud',
      'Design Thinking',
      'User Experience'
    ]
    ,
  },
  {
    name: 'Introduction to Quantum Computing – Cognitive Class (IBM)',
    link: 'https://courses.cognitiveclass.ai/certificates/065a1c827b9c46998bad3c10eff1a5c1',
    tags: ['Quantum Computing', 'Qubit Theory', 'IBM Cognitive Class'],
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
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
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#about"
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700"
                >
                  About Me
                </a>
                <a
                  href="#expertise"
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700"
                >
                  Technical Expertise
                </a>
                <a
                  href="#experience"
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700"
                >
                  Education
                </a>
                <a
                  href="#certifications"
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700"
                >
                  Certificates
                </a>
              </div>


            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/AbhayGrad.jpg`}
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
              align="center"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="card">
                <p>
                  I am a Full-Stack Software Engineer with 2 years of experience and a
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
              <div id="expertise" className="pt-20 -mt-20">
                <AnimatedSection>
                  <SectionHeading
                    title="Technical Expertise"
                    subtitle="Equipped with hands-on experience in full-stack development, cloud platforms, and AI, I build scalable and user-focused digital solutions."
                    align="left"
                  />
                </AnimatedSection>
                <div className="flex flex-wrap gap-3">
                  {/* Programming Languages */}
                  <div className="w-full font-semibold text-dark-700 dark:text-dark-300 mt-4">Programming Languages / Frontend / Backend</div>
                  <SkillBadge name="Java" icon={<Braces size={18} />} />
                  <SkillBadge name="Python" icon={<Braces size={18} />} />
                  <SkillBadge name="JavaScript" icon={<Braces size={18} />} />
                  <SkillBadge name="TypeScript" icon={<Braces size={18} />} />
                  <SkillBadge name="C++" icon={<Braces size={18} />} />
                  <SkillBadge name="ReactJS" icon={<Code size={18} />} />
                  <SkillBadge name="Angular" icon={<Code size={18} />} />
                  <SkillBadge name="HTML/CSS" icon={<Code size={18} />} />
                  <SkillBadge name="Node.js" icon={<Server size={18} />} />
                  <SkillBadge name="Spring Boot" icon={<Server size={18} />} />
                  <SkillBadge name="MicroServices" icon={<Server size={18} />} />
                  <SkillBadge name="Express.js" icon={<Server size={18} />} />



                  {/* Databases */}
                  <div className="w-full font-semibold text-dark-700 dark:text-dark-300 mt-4">Databases</div>
                  <SkillBadge name="MongoDB" icon={<Database size={18} />} />
                  <SkillBadge name="MySQL" icon={<Database size={18} />} />
                  <SkillBadge name="PostgreSQL" icon={<Database size={18} />} />
                  <SkillBadge name="SQL Server" icon={<Database size={18} />} />
                  <SkillBadge name="DynamoDB" icon={<Database size={18} />} />

                  {/* DevOps / Cloud */}
                  <div className="w-full font-semibold text-dark-700 dark:text-dark-300 mt-4">DevOps / Cloud</div>
                  <SkillBadge name="AWS" icon={<Server size={18} />} />
                  <SkillBadge name="Docker" icon={<Code size={18} />} />
                  <SkillBadge name="Kubernetes" icon={<Server size={18} />} />
                  <SkillBadge name="Jenkins" icon={<Server size={18} />} />
                  <SkillBadge name="Git/GitHub" icon={<Code size={18} />} />
                  <SkillBadge name="RestAPI" icon={<Code size={18} />} />

                  {/* AI / ML */}
                  <div className="w-full font-semibold text-dark-700 dark:text-dark-300 mt-4">AI / ML</div>
                  <SkillBadge name="Machine Learning" icon={<Braces size={18} />} />
                  <SkillBadge name="Scikit-learn" icon={<Braces size={18} />} />
                  <SkillBadge name="LLM APIs" icon={<Braces size={18} />} />
                  <SkillBadge name="Linear Regression" icon={<Braces size={18} />} />
                </div>

              </div>

              <div id="experience" className="pt-20 -mt-20">
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
                      <br />
                      {openIndex === index && (

                        <span className="text-dark-500 dark:text-dark-300 text-sm">
                          {exp.description}
                        </span>
                      )}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>


              </div>
              <div id="education" className="pt-20 -mt-20">
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
                        <br />
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Database Management Systems
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Full Stack Enterprise Development
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Mobile Web App Development
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Algorithms and
                            Computing Theory
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Data Structures and Algorithms
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Python Programming
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                            Internet Computing
                          </span>
                        </div>
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
              <div id="certifications" className="pt-20 -mt-20">
                <AnimatedSection>
                  <SectionHeading title="Certifications" align="left" />
                </AnimatedSection>

                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="card">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:underline"
                            >
                              {cert.name}
                            </a>
                          </h4>

                          <div className="flex flex-wrap gap-2 mt-2">
                            {cert.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
