"use client";

import { useState } from "react";

interface GalleryProps {
  photos: string[];
  title: string;
}

export default function EnhancedListingGallery({ photos, title }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!photos || photos.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
        No images uploaded
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        {/* Main Image */}
        <div 
          className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden cursor-pointer relative group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={photos[selectedIndex]}
            alt={`${title} - Image ${selectedIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition text-lg font-semibold bg-black/50 px-4 py-2 rounded">
              Click to enlarge
            </span>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {photos.length > 1 && (
          <div className="grid grid-cols-6 gap-2 mt-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`h-20 w-full rounded overflow-hidden border-2 transition ${
                  selectedIndex === index 
                    ? "border-railBlue" 
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          >
            ×
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
            }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300"
          >
            ‹
          </button>

          <img
            src={photos[selectedIndex]}
            alt={`${title} - Full size`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300"
          >
            ›
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
