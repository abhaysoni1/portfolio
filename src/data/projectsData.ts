import { ProjectData } from '../components/ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'RideEase',
    description:
      'A full-stack carpool and vehicle rental web application with real-time ride booking, role-based access, GPS tracking, and Stripe payment integration.',
    image:
      `${import.meta.env.BASE_URL}images/ride.jpg`,
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Maps API',
      'Jenkins',
    ],
    githubLink: 'https://github.com/himanshu8655/rideease-frontend',
  },
  {
    id: 2,
    title: 'Ghor Kalyug- Study Mate',
    description:
      'A web application that helps students find study partners based on their courses and interests. Built with React, Node.js, and MongoDB.',
    image:
      `${import.meta.env.BASE_URL}images/icon.png`,
    technologies: ['React.js', 'Node.js', 'MongoDB','Express.js','Jenkins','Firebase','Docker', 'Kubernetes','LLM API Integration'],
    githubLink: 'https://github.com/abhaysoni1/Ghor-kalyug-StudyMate',
    liveLink:
      'https://frontend-dot-gen-lang-client-0403310649.ue.r.appspot.com/',
  },
  {
    id: 3,
    title: 'BuildYouFit',
    description:
      'A fitness tracking application that helps users create and follow personalized workout plans. Features include exercise tracking and progress visualization.',
    image:
      `${import.meta.env.BASE_URL}images/fit.png`,
    technologies: ['ReactNative', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubLink:
      'https://github.com/abhaysoni1/CS641_abhay_soni/tree/main/BuildYouFit',
  },
  {
    id: 4,
    title: 'EduConnect',
    description:
      'An educational platform enabling institutions to host and manage online teaching without their own website infrastructure.',
    image:
      `${import.meta.env.BASE_URL}images\\Edu.png`,
    technologies: ['Java', 'React.js', 'Springboot', 'MySQL', 'HTML', 'CSS'],
    githubLink: 'https://github.com',
  },
  {
    id: 5,
    title: 'Harvest Hub',
    description:
      'A web-based agricultural marketplace enabling farmers to sell their products online directly to consumers.',
    image:
      `${import.meta.env.BASE_URL}images\\Harvest-hub.jpeg`,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'MySQL',
      'AWS',
      'Ajax',
    ],
    githubLink: 'https://github.com',
  },
  {
    id: 6,
    title: 'AI Disease Prediction',
    description:
      'An AI-based healthcare application predicting diabetes and heart disease with up to 85% accuracy using machine learning.',
    image:
      `${import.meta.env.BASE_URL}images/AID.jpeg`,
    technologies: ['Python', 'SVM', 'Jupyter Notebook','Pandas'],
    githubLink: 'https://github.com',
  },
  {
    id: 7,
    title: 'Sentiment Analysis',
    description:
      'A machine learning project that analyzes sentiment in text using natural language processing techniques. Implemented using Python and scikit-learn.',
    image:
      `${import.meta.env.BASE_URL}images/Sent.png`,
    technologies: ['Python', 'scikit-learn', 'NLTK', 'Pandas'],
    githubLink: 'https://github.com',
  },
  {
    id: 8,
    title: 'IoT Lightning Detection System',
    description:
      'A real-time lightning detection system using Arduino and IoT sensors to monitor electrical activity and trigger alerts.',
    image:
      `${import.meta.env.BASE_URL}images/IOT.png`,
    technologies: ['IBM Watson', 'Arduino Uno', 'Node.js', 'IoT'],
    githubLink: 'https://github.com',
  },
];

export default projectsData;
