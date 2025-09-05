import { SunIcon, MoonIcon } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ? 'rotate-180 scale-100' : 'rotate-0 scale-100'
          }`}
        >
          {isDarkMode ? (
            <MoonIcon className="w-6 h-6 text-blue-400" />
          ) : (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          )}
        </div>
      </div>
    </button>
  );
}
