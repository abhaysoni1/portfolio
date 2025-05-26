import { ProjectData } from '../components/ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'RideEase',
    description:
      'A full-stack carpool and vehicle rental web application with real-time ride booking, role-based access, GPS tracking, and Stripe payment integration.',
    image:
      'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: [
      'React.js',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Maps API',
      'Stripe API',
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
      'https://frontend-dot-gen-lang-client-0403310649.ue.r.appspot.com/icon.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
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
      'https://images.pexels.com/photos/6925436/pexels-photo-6925436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubLink:
      'https://github.com/abhaysoni1/CS641_abhay_soni/tree/main/BuildYouFit',
  },
  {
    id: 4,
    title: 'EduConnect',
    description:
      'An educational platform enabling institutions to host and manage online teaching without their own website infrastructure.',
    image:
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaEE', 'ReactJS', 'Spring', 'MySQL', 'HTML', 'CSS'],
    githubLink: 'https://github.com',
  },
  {
    id: 5,
    title: 'Harvest Hub',
    description:
      'A web-based agricultural marketplace enabling farmers to sell their products online directly to consumers.',
    image:
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'JavaEE',
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
      'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'SVM', 'Jupyter Notebook', 'PyCharm'],
    githubLink: 'https://github.com',
  },
  {
    id: 7,
    title: 'Sentiment Analysis',
    description:
      'A machine learning project that analyzes sentiment in text using natural language processing techniques. Implemented using Python and scikit-learn.',
    image:
      'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'scikit-learn', 'NLTK', 'Pandas'],
    githubLink: 'https://github.com',
  },
  {
    id: 8,
    title: 'IoT TJ Bot',
    description:
      'An interactive robot built using IBM Watson and Arduino Uno to demonstrate AI and IoT integration capabilities.',
    image:
      'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['IBM Watson', 'Arduino Uno', 'Node.js', 'IoT'],
    githubLink: 'https://github.com',
  },
];

export default projectsData;
