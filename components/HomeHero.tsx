'use client'

import React, { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Lazy load YouTube component
const YouTube = lazy(() => import('react-youtube'));

// Placeholder for YouTube while loading
const YouTubePlaceholder = () => (
  <div className="w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
    <div className="text-white">Loading video...</div>
  </div>
);

const InstagramGallery = () => {
  const images = [
    {
      url: "/images/Instagram/Photo 3.jpeg",
      alt: "Le Mas - Jardin",
      width: 640,
      height: 480
    },
    {
      url: "/images/Instagram/photo5.avif",
      alt: "Le Mas - Vue Nature et olivier",
      width: 640,
      height: 480
    },
    {
      url: "/images/Instagram/Photo 2.jpeg",
      alt: "Le Mas - Intérieur",
      width: 640,
      height: 480
    },
    {
      url: "/images/Instagram/Photo 4.jpeg",
      alt: "Le Mas - Piscine",
      width: 640,
      height: 480
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-100 rounded-lg shadow-lg relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <a
            key={index}
            href="https://www.instagram.com/le_mas_deylieux"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg aspect-[4/3]"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading={index < 2 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 50vw, 25vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLTEwLS4xKSEoMC0vMSw5OTk5OTk5OTk5OTn/2wBDARUXFyAeIB4gHh4gIiEgMSohICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
          </a>
        ))}
      </div>
      <div className="md:hidden mt-4">
        <p className="text-lg text-gray-600">INSTAGRAM</p>
      </div>
    </div>
  );
};

const HomeHero = () => {
  const [isClient, setIsClient] = useState(true); // Immediately set to true
  const [isVideoVisible, setIsVideoVisible] = useState(true); // Immediately set to true


  useEffect(() => {
    setIsClient(true);
    
    // Only load video when user has scrolled a bit or after 3 seconds
    const timer = setTimeout(() => setIsVideoVisible(true), 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
          {isClient && isVideoVisible && (
            <Suspense fallback={<YouTubePlaceholder />}>
              <YouTube
                videoId="Rf-0p465Lp4"
                opts={{
                  host: 'https://www.youtube-nocookie.com',
                  playerVars: {
                    autoplay: 1,
                    loop: 1,
                    mute: 1,
                    controls: 0,
                    rel: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    playlist: 'Rf-0p465Lp4',
                    playsinline: 1,
                  },
                  width: '100%',
                  height: '100%',
                }}
                className="w-full h-full"
                iframeClassName="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[56.25vw]"
                onReady={(event: { target: { mute: () => void; playVideo: () => void } }) => {
                  event.target.mute();
                  event.target.playVideo();
                }}
                loading="lazy"
              />
            </Suspense>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10" />

        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white px-4"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Le Mas d&apos;Eylieux
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Un domaine d&apos;exception au Sud de l&apos;Ardèche
            </p>
            <Link
              href="/presentation"
              className="inline-flex items-center px-8 py-3 md:px-12 md:py-4 bg-white text-black rounded-full transition-colors duration-300 hover:bg-black hover:text-white group"
            >
              <span className="relative z-10">Nous découvrir</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Le Mas d&apos;Eylieux vous accueille</h2>
          </div>
          <InstagramGallery />
        </div>
      </section>
    </>
  );
};

export default HomeHero;