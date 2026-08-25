import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set loop to true so it plays start to finish then repeats
    audio.loop = true;
    audio.volume = 0.45; // Smooth ambient volume

    const isMuted = sessionStorage.getItem('audioMuted') === 'true';
    if (isMuted) return;

    let started = false;

    const startPlayback = () => {
      if (started) return;

      audio.play()
        .then(() => {
          started = true;
          setIsPlaying(true);
          setHasInteracted(true);
          removeListeners();
        })
        .catch((err) => {
          console.log("Audio play attempt failed:", err);
        });
    };

    const handleUserInteraction = (e: Event) => {
      // If the interaction is on the toggle button, let togglePlay handle it
      const target = e.target as HTMLElement;
      if (target && target.closest('#audio-toggle-button')) {
        return;
      }

      const isMutedNow = sessionStorage.getItem('audioMuted') === 'true';
      if (isMutedNow) {
        removeListeners();
        return;
      }

      startPlayback();
    };

    const removeListeners = () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('mousedown', handleUserInteraction);
      document.removeEventListener('pointerdown', handleUserInteraction);
    };

    // Try immediate autoplay if we haven't interacted yet
    if (!hasInteracted) {
      startPlayback();

      // Listen for user interactions to start play if blocked
      if (!started) {
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);
        document.addEventListener('mousedown', handleUserInteraction);
        document.addEventListener('pointerdown', handleUserInteraction);
      }
    }

    return () => {
      removeListeners();
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      sessionStorage.setItem('audioMuted', 'true');
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          sessionStorage.setItem('audioMuted', 'false');
        })
        .catch((err) => {
          console.error("Playback failed:", err);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/bundak_sa_letra.m4a" preload="auto" autoPlay />
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 no-print">
        <motion.button
          id="audio-toggle-button"
          onClick={togglePlay}
          className={`flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border shadow-lg transition-colors duration-300 ${
            isPlaying
              ? 'bg-black/50 border-green-500/40 shadow-green-500/10 text-white'
              : 'bg-black/70 border-white/10 text-slate-300 hover:text-white'
          }`}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Animated sound wave bars when playing */}
          <div className="flex items-end gap-[3px] h-3.5 w-4 overflow-hidden">
            {isPlaying ? (
              [1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="w-[2px] bg-green-400 rounded-full"
                  animate={{
                    height: [4, 14, 4],
                  }}
                  transition={{
                    duration: 0.5 + i * 0.12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transformOrigin: 'bottom' }}
                />
              ))
            ) : (
              [1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-[2px] h-[3px] bg-slate-400 rounded-full"
                />
              ))
            )}
          </div>

          <span className="text-sm font-semibold tracking-widest font-sans uppercase">
            taptap
          </span>

          <div className="flex items-center justify-center">
            {isPlaying ? (
              <FiVolume2 className="text-green-400 animate-pulse" size={16} />
            ) : (
              <FiVolumeX className="text-slate-400" size={16} />
            )}
          </div>
        </motion.button>
      </div>
    </>
  );
}
