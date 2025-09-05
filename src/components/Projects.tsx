import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard, ProjectProps } from './ProjectCard';
import taskNestVideo from '../assets/task-nest.mov';
import golfLabVideo from '../assets/golf-lab.MP4';
export function Projects() {
  const [activeTab, setActiveTab] = useState<'completed' | 'inProgress'>('inProgress');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [slideTransition, setSlideTransition] = useState(true);
  // Description text for each project category
  const categoryDescriptions = {
    completed: "These are foundational projects from earlier in my career that showcase my core development skills. While currently offline due to Heroku's service changes, I'm actively redeploying them with updated architecture and mobile optimization. This process serves as valuable practice in modernizing legacy codebases and demonstrates my growth as a developer.",
    inProgress: "These exciting projects are currently under active development. I'm exploring new technologies and pushing my boundaries with each work-in-progress. My goal is to deploy 5 applications that hopefully I, along with my friends and family, will actively use by the end of 2026."
  };
  const completedProjects: ProjectProps[] = [{
    id: 1,
    title: 'SoundWave',
    description: 'SoundWave, a SoundCloud clone, is a music sharing platform where anyone, from up-and-coming artists to professionals, can upload their music for users to discover.',
    image: 'https://live.staticflickr.com/65535/51119712284_5b9abba493_h.jpg',
    githubUrl: 'https://github.com/V3RS/SoundCloud-Clone',
    liveUrl: 'https://example.com',
    technologies: ['React', 'Redux', 'JavaScript', 'Express', 'PostgreSQL', 'AWS S3']
  }, {
    id: 2,
    title: 'Musicflix',
    description: 'Musicflix is a unique take on Netflix where music videos are showcased instead of TV shows and movies. This application includes an intuitive User Interface and an easily accessible backend to query specific videos that the user wants to watch.',
    image: 'https://live.staticflickr.com/65535/51119620173_04554d8ae3_k.jpg',
    githubUrl: 'https://github.com/V3RS/musicflix',
    liveUrl: 'https://example.com',
    technologies: ['React', 'Redux', 'JavaScript', 'Python', 'Flask', 'PostgreSQL']
  }, {
    id: 3,
    title: 'Skybnb',
    description: 'This project clones the popular website Airbnb with a Star Wars theme. The web application provides users the ability to create accounts, log in as a demo, book spots, search for spots, and leave ratings and reviews on spots.',
    image: 'https://live.staticflickr.com/65535/51119844308_178cd91ae2_h.jpg',
    githubUrl: 'https://github.com/V3RS/skybnb',
    liveUrl: 'https://example.com',
    technologies: ['React', 'Redux', 'JavaScript', 'Python', 'Flask', 'PostgreSQL', 'AWS S3']
  }, {
    id: 4,
    title: 'Fitness Deck',
    description: 'Fitness Deck is a unique way to stay active using a deck of playing cards with a modern front-end design using React. The goal is to get through all 52 cards where each suit represents a different exercise and each card value determines the number of reps.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    githubUrl: 'https://github.com/V3RS/fitness-deck',
    liveUrl: 'https://example.com',
    technologies: ['JavaScript', 'React', 'CSS', 'HTML']
  }];
  const inProgressProjects: ProjectProps[] = [{
    id: 5,
    title: 'Golf Lab',
    description: 'A modern, responsive mobile app for tracking golf practice sessions, shot confidence, and AI-powered performance summaries.',
    video: golfLabVideo,
    mediaType: 'video' as const,
    githubUrl: 'https://github.com/V3RS',
    technologies: ['React Native', 'TypeScript', 'Supabase', 'AI Integration']
      }, {
      id: 6,
      title: 'TaskNest',
      description: 'Mobile app for couples/roommates to assign and track daily chores with color-coordinated task ownership and appreciation features.',
      video: taskNestVideo,
      mediaType: 'video' as const,
      githubUrl: 'https://github.com/V3RS',
      technologies: ['Flutter', 'Supabase']
      }, {
             id: 7,
       title: 'FantasyFootball Genius',
       description: 'An intelligent fantasy football assistant that leverages machine learning to analyze player statistics, predict performance trends, and provide personalized lineup recommendations.',
       mediaType: 'comingSoon' as const,
       technologies: ['Python', 'TensorFlow', 'FastAPI', 'React Native', 'PostgreSQL', 'NFL API', 'Scikit-learn']
             }, {
       id: 8,
       title: 'SmartSpend AI',
       description: 'A personal finance machine learning project that automatically categorizes expenses from receipts and bank transactions.',
       mediaType: 'comingSoon' as const,
       technologies: ['Python', 'PyTorch', 'OpenCV', 'Tesseract OCR', 'FastAPI', 'React', 'MongoDB', 'Plaid API']
       }, {
       id: 9,
       title: 'FitCoach',
       description: 'A personalized fitness companion that uses AI to create custom workout plans based on your goals, available equipment, and progress tracking.',
       mediaType: 'comingSoon' as const,
       technologies: ['React Native', 'Python', 'TensorFlow', 'Computer Vision', 'Supabase', 'HealthKit', 'MediaPipe']
       }];
  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const activeProjects = activeTab === 'completed' ? completedProjects : inProgressProjects;
  // Calculate total number of slides based on projects length and items per view
  const totalSlides = Math.ceil(activeProjects.length / itemsPerView);
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };
  // Handle tab change - disable transition temporarily
  const handleTabChange = (tab: 'completed' | 'inProgress') => {
    setSlideTransition(false);
    setActiveTab(tab);
    setCurrentSlide(0);
    // Re-enable transition after a brief delay
    setTimeout(() => setSlideTransition(true), 50);
  };
  return <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="Check out some of my recent work" />
        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors duration-300 ${activeTab === 'inProgress' ? 'bg-emerald-600 dark:bg-emerald-700 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`} onClick={() => handleTabChange('inProgress')}>
              In Progress
            </button>
            <button type="button" className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors duration-300 ${activeTab === 'completed' ? 'bg-emerald-600 dark:bg-emerald-700 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`} onClick={() => handleTabChange('completed')}>
              Completed
            </button>
          </div>
        </div>
        {/* Category Description */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {activeTab === 'completed' ? categoryDescriptions.completed : categoryDescriptions.inProgress}
          </p>
        </div>
        {/* Carousel */}
        <div className="relative">
          {/* Previous button */}
          <button onClick={prevSlide} disabled={currentSlide === 0} className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md dark:shadow-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} aria-label="Previous slide">
            <ChevronLeftIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
          {/* Carousel container with overflow hidden */}
          <div className="overflow-hidden">
            {/* Projects wrapper with transform for sliding effect */}
            <div className="flex" style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: slideTransition ? 'transform 0.5s ease-in-out' : 'none'
          }}>
              {/* Group projects into slides */}
              {Array.from({
              length: totalSlides
            }).map((_, slideIndex) => <div key={slideIndex} className="flex w-full flex-none">
                  {activeProjects.slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView).map(project => <div key={project.id} className="px-4 w-full" style={{
                width: `${100 / itemsPerView}%`
              }}>
                        <ProjectCard project={project} />
                      </div>)}
                </div>)}
            </div>
          </div>
          {/* Next button */}
          <button onClick={nextSlide} disabled={currentSlide >= totalSlides - 1} className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md dark:shadow-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 ${currentSlide >= totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} aria-label="Next slide">
            <ChevronRightIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
        {/* Dots indicator */}
        {totalSlides > 1 && <div className="flex justify-center mt-8">
            {Array.from({
          length: totalSlides
        }).map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`mx-1 h-2 w-2 rounded-full ${currentSlide === index ? 'bg-emerald-600' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>}
      </div>
    </section>;
}