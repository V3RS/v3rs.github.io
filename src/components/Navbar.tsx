import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import resumePdf from '../assets/Singh_Veerkaran_Resume.pdf';
import { DarkModeToggle } from './DarkModeToggle';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-emerald-800 dark:text-emerald-400" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>
              VS
            </a>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#about" onClick={e => {
              e.preventDefault();
              scrollToSection('about');
            }} className="text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200">
                About
              </a>
              <a href="#projects" onClick={e => {
              e.preventDefault();
              scrollToSection('projects');
            }} className="text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" onClick={e => {
              e.preventDefault();
              scrollToSection('contact');
            }} className="text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200">
                Contact
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200">
                Resume
              </a>
              <DarkModeToggle />
            </div>
          </div>
          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={e => {
          e.preventDefault();
          scrollToSection('about');
        }} className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
              About
            </a>
            <a href="#projects" onClick={e => {
          e.preventDefault();
          scrollToSection('projects');
        }} className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
              Projects
            </a>
            <a href="#contact" onClick={e => {
          e.preventDefault();
          scrollToSection('contact');
        }} className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
              Contact
            </a>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
              Resume
            </a>
          </div>
        </div>}
    </nav>;
}