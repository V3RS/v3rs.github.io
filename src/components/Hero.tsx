import { useEffect, useState } from 'react';
import { ChevronDownIcon, FileTextIcon } from 'lucide-react';
import desertImg from '../assets/desert.jpg';
import lakeImg from '../assets/lake.jpg';
import waterfallImg from '../assets/waterfall.jpg';
import resumePdf from '../assets/Singh_Veerkaran_Resume.pdf';
export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  // Typing animation state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(75);
  // Array of texts to cycle through
  const textArray = ['SOFTWARE ENGINEER', 'USMC VETERAN', 'LIFELONG LEARNER', 'FITNESS FOCUSED', 'AI ENTHUSIAST'];
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(50); // Faster when deleting
      } else {
        setTypingSpeed(75); // Normal speed when typing
      }
      // Handle text completion or deletion
      if (!isDeleting && text === fullText) {
        // Pause at the end of typing before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // Small pause before typing the next word
        setTypingSpeed(500);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);
  return <section className="relative w-full overflow-hidden">
      {/* Modern horizontal banner */}
      <div className="relative max-w-7xl mx-auto my-8 rounded-lg overflow-hidden shadow-xl">
        <div className="flex h-[450px]">
          {/* Image banner - horizontal layout */}
          <div className="relative w-1/3 overflow-hidden">
            <img src={desertImg} alt="Desert sand dunes with ocean view" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-1/3 overflow-hidden">
            <img src={lakeImg} alt="Mountain lake with dramatic sky" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-1/3 overflow-hidden">
            <img src={waterfallImg} alt="Waterfall with mountain view" className="w-full h-full object-cover" />
          </div>
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 transition-opacity duration-300"></div>
          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 animate-fadeIn">
              <span className="block">VEER SINGH</span>
            </h1>
            <div className="w-20 h-1 bg-emerald-500 dark:bg-emerald-400 mb-6 animate-fadeIn animation-delay-200 transition-colors duration-300"></div>
            <h2 className="text-xl sm:text-2xl font-light text-white/90 dark:text-white/95 mb-8 animate-fadeIn animation-delay-200 h-8 transition-colors duration-300">
              <span>{text}</span>
              <span className="inline-block w-1 h-6 ml-1 bg-white dark:bg-gray-300 animate-pulse transition-colors duration-300"></span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
              <button onClick={scrollToProjects} className="bg-white dark:bg-gray-800 hover:bg-emerald-600 hover:text-white text-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-600 dark:hover:text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase font-medium tracking-wider">
                Explore Projects
              </button>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-emerald-600 dark:bg-emerald-700 hover:bg-white hover:text-emerald-800 dark:hover:bg-gray-800 dark:hover:text-emerald-300 text-white px-8 py-3 rounded-sm transition-all duration-300 uppercase font-medium tracking-wider">
                <FileTextIcon className="h-5 w-5 mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Additional content below the banner */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
          Creating innovative solutions with a passion for the outdoors and
          technology. Transforming ideas into impactful experiences.
        </p>
        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center animate-bounce">
          <button onClick={scrollToProjects} className="text-emerald-700 dark:text-emerald-400 focus:outline-none transition-colors duration-300" aria-label="Scroll down">
            <ChevronDownIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>;
}