export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-gray-900 dark:bg-gray-950 text-white relative transition-colors duration-300">
      {/* Nature-themed decorative element */}
      <div className="absolute top-0 left-0 w-full h-12 bg-cover bg-center opacity-20" style={{
      backgroundImage: 'url(https://uploadthingy.s3.us-west-1.amazonaws.com/7Ks4bu9KZxtnPZ5ckRwwkq/Screenshot_2025-09-04_at_2.41.50_PM.png)',
      transform: 'scaleY(-1)' // Flip the image
    }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Veer Singh
            </a>
            <p className="text-gray-400 dark:text-gray-300 mt-1 transition-colors duration-300">Software Engineer | USMC</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>
              Home
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={e => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              Projects
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={e => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              About
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300" onClick={e => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-300 flex items-center justify-center transition-colors duration-300">
            © {currentYear} Veer Singh
          </p>
        </div>
      </div>
    </footer>;
}