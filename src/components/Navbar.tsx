import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-dark-800 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary-700 dark:text-primary-400"
        >
          <Code size={28} />
          <span>AbhayPortfolio</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`
            }
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`
            }
            onClick={handleNavLinkClick}
          >
            Projects
          </NavLink>
          <a
  href="src\assets\Abhay-Soni-Resume.pdf"
  download="Abhay-Soni-Resume.pdf"
  className="font-medium text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
>
  Resume
</a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`
            }
            onClick={handleNavLinkClick}
          >
            Contact
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-dark-600" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-dark-600" />
            )}
          </button>
          <button
            className="text-dark-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-dark-900 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300'
              }`
            }
            onClick={handleNavLinkClick}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
