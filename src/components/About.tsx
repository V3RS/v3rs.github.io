// React import not needed with JSX Transform
import { FileTextIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import golfImg from '../assets/golf.jpg';
import meImg from '../assets/veer.png';
import snowboardImg from '../assets/snowboard.jpg';
import resumePdf from '../assets/Singh_Veerkaran_Resume.pdf';

export function About() {
  return <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Learn more about my background and interests" />
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images section - simple grid layout */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img src={golfImg} alt="Golfing activity" className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700 object-cover aspect-square transition-all duration-300" />
              </div>
              <div className="col-span-1">
                <img src={meImg} alt="Veer Singh" className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700 object-cover aspect-square transition-all duration-300" />
              </div>
              <div className="col-span-2">
                <img src={snowboardImg} alt="Snowboarding activity" className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700 object-cover aspect-video transition-all duration-300" />
              </div>
            </div>
          </div>
          {/* Bio content */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                Hello, I'm Veer Singh
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              I'm a software engineer and a Marine veteran with a passion for
              creating elegant solutions to complex problems. When I'm not
              coding, you'll find me exploring the outdoors, golfing, weight
              training, running, or just hanging out with my dog.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              My background in the USMC has given me a unique perspective on
              problem-solving, and I bring that creativity and discipline to
              every project I work on. I'm particularly interested in Full-Stack
              Engineering, Mobile Development, AI Technologies, and I'm always
              looking to learn and grow as a developer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              Feel free to reach out with feedback or collaboration ideas. I love 
              discussing development, system architecture, emerging technologies, 
              and innovative solutions.
            </p>
            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-300">
                My Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'React Native', 'Flutter', 'Redux', 'Node.js', 'Express', 'Supabase', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQL', 'AWS S3', 'Git', 'TDD', 'CI/CD', 'AI Tools', 'SCSS', 'CSS', 'Next.js', 'Docker', 'GraphQL', 'Webpack', 'Prometheus'].map((skill, index) => <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300">
                    {skill}
                  </span>)}
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="flex items-center bg-emerald-600 dark:bg-emerald-700 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                <FileTextIcon className="h-5 w-5 mr-2" />
                <span>Resume</span>
              </a>
              <a href="https://github.com/V3RS" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                <GithubIcon className="h-5 w-5 mr-2" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/veerkaran-singh/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                <LinkedinIcon className="h-5 w-5 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}