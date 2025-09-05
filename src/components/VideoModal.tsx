import { useEffect } from 'react';
import { XIcon } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button - outside modal for better visibility */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Close modal"
      >
        <XIcon className="h-6 w-6" />
      </button>

      <div 
        className="relative bg-black rounded-xl shadow-2xl w-full max-w-xs max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Video container - optimized for mobile/portrait videos */}
        <div className="relative flex-1 flex items-center justify-center">
          <video 
            className="max-w-full max-h-[75vh] object-contain"
            autoPlay 
            loop 
            muted 
            playsInline
            controls // Add controls for better UX in modal
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/mov" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Title */}
        <div className="p-4 bg-white rounded-b-xl">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Click outside, press ESC, or use the × to close</p>
        </div>
      </div>
    </div>
  );
}
