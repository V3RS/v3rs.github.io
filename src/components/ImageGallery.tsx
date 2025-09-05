import React from 'react';
export function ImageGallery() {
  const images = [{
    src: "/IMG_4490.jpg",
    alt: 'Desert sand dunes with ocean view',
    caption: 'Desert Exploration',
    className: 'col-span-1 md:col-span-2'
  }, {
    src: "/IMG_4226.jpg",
    alt: 'Mountain lake with dramatic sky',
    caption: 'Mountain Adventures',
    className: 'col-span-1 md:col-span-2'
  }, {
    src: "/IMG_4515.jpg",
    alt: 'Waterfall with mountain view',
    caption: 'Waterfall Hiking',
    className: 'col-span-1 md:col-span-2'
  }];
  return <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Passions & Adventures
        </h2>
        {/* Gallery grid with proper image sizing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-auto">
          {images.map((image, index) => <div key={index} className={`relative group overflow-hidden rounded-md shadow-sm ${image.className}`}>
              {/* Image container with fixed aspect ratio */}
              <div className="aspect-[4/3] w-full h-auto">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2 w-full">
                  <h3 className="text-white text-sm md:text-base font-medium">
                    {image.caption}
                  </h3>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}