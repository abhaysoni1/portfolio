import { Code, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-800 shadow-md py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-primary-700 dark:text-primary-400"
            >
              <Code size={24} />
              <span>AbhayPortfolio</span>
            </Link>
            <p className="text-dark-500 dark:text-dark-300 max-w-xs">
              Building elegant solutions to complex problems with clean,
              efficient code.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/abhaysoni1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhay-soni-369a131b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-6 text-center text-dark-500 dark:text-dark-300">
          <p>&copy; {currentYear} Abhay Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
