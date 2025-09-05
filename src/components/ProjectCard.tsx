// React import not needed with JSX Transform
import { useState } from 'react';
import { GithubIcon } from 'lucide-react';
import { VideoModal } from './VideoModal';
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  mediaType?: 'image' | 'video' | 'comingSoon';
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}
interface ProjectCardProps {
  project: ProjectProps;
}
export function ProjectCard({
  project
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = () => {
    if (project.mediaType === 'video') {
      setIsModalOpen(true);
    }
  };

  return <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg dark:shadow-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-600 h-full flex flex-col">
      <div className="relative overflow-hidden" style={{
      paddingBottom: project.mediaType === 'video' || project.mediaType === 'comingSoon' ? '75%' : '56.25%' /* 4:3 for videos and coming soon, 16:9 for images */
    }}>
        {project.mediaType === 'comingSoon' ? (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="mb-4">
                <div className="inline-block relative">
                  <div className="w-16 h-16 border-4 border-emerald-200 dark:border-emerald-700 border-t-emerald-600 dark:border-t-emerald-400 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-emerald-600 dark:bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="text-emerald-800 dark:text-emerald-200 font-semibold text-lg tracking-wider">
                COMING SOON
              </div>
            </div>
          </div>
        ) : project.mediaType === 'video' && project.video ? (
          <div 
            className="absolute top-0 left-0 w-full h-full cursor-pointer group"
            onClick={handleVideoClick}
          >
            <video 
              className="w-full h-full object-contain bg-gray-100 transition-transform duration-500 group-hover:scale-105"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={project.video} type="video/mp4" />
              <source src={project.video} type="video/mov" />
              Your browser does not support the video tag.
            </video>
            {/* Subtle click indicator */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <img src={project.image || ''} alt={project.title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        )}
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => <span key={index} className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors duration-300">
              {tech}
            </span>)}
        </div>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <div className="flex space-x-3">
          {project.mediaType !== 'comingSoon' && project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-300">
              <GithubIcon className="h-5 w-5 mr-1" />
              <span>GitHub</span>
            </a>}
          {/* {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-300">
              <ExternalLinkIcon className="h-5 w-5 mr-1" />
              <span>Live Demo</span>
            </a>} */}
        </div>
      </div>

      {/* Video Modal */}
      {project.mediaType === 'video' && project.video && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoSrc={project.video}
          title={project.title}
        />
      )}
    </div>;
}