import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiImage } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { galleryData } from '../data/resumeData';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation support in lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prev) => 
      prev !== null ? (prev + 1) % galleryData.length : null
    );
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => 
      prev !== null ? (prev - 1 + galleryData.length) % galleryData.length : null
    );
  };

  return (
    <section id="outside-ide" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="GALLERY"
          title="OUTSIDE IDE"
        />

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 dark:border-slate-800 bg-black/40 backdrop-blur-sm aspect-video flex items-center justify-center"
            >
              {/* Media Content */}
              {item.type === 'video' ? (
                <div className="w-full h-full relative">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const playPromise = e.currentTarget.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                      }
                    }}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                  {/* Play Indicator Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 dark:bg-green-600/30 border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform duration-300">
                      <FiPlay size={20} className="ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title || 'Gallery item'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 dark:bg-green-600/30 border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform duration-300">
                      <FiImage size={20} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md no-print"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <FiX size={24} />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="Previous Media"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="Next Media"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Active Media Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] px-4 flex flex-col items-center justify-center"
            >
              {galleryData[lightboxIndex].type === 'video' ? (
                <video
                  src={galleryData[lightboxIndex].url}
                  className="max-w-full max-h-[70vh] rounded-xl shadow-2xl border border-white/10"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={galleryData[lightboxIndex].url}
                  alt={galleryData[lightboxIndex].title || 'Lightbox media'}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
