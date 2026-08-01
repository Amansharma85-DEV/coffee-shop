import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import type { GalleryItem } from '../types/cafe';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Coffee', 'Desserts', 'Interior', 'Barista'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-36 relative overflow-hidden bg-cream-50 dark:bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold-500" />
              <span className="font-script text-3xl sm:text-4xl text-coffee-600 dark:text-gold-400">
                Visual Sanctuary
              </span>
            </div>
            <h2 className="font-serif font-bold text-4xl sm:text-6xl text-forest-950 dark:text-cream-100 tracking-tight">
              Photo Gallery
            </h2>
            <p className="text-coffee-700 dark:text-cream-300 text-base font-light">
              Atmospheric moments from our lantern garden, roast extractions, and sweet bakes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 shadow-md'
                    : 'bg-cream-200/80 dark:bg-forest-900/40 text-coffee-900 dark:text-cream-200 hover:bg-cream-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* True Pinterest-style Masonry Columns Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className={`relative group rounded-[32px] overflow-hidden cursor-pointer shadow-luxury hover:shadow-2xl border border-cream-300/40 dark:border-forest-800 transform hover:-translate-y-2 transition-all duration-500 break-inside-avoid ${
                  idx % 3 === 0 ? 'blob-card-1' : idx % 3 === 1 ? 'blob-card-2' : 'rounded-[32px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-left">
                  <div className="flex justify-end">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="space-y-1 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-gold-400">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-bold text-xl">{item.title}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-cream-200">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>{item.likes} appreciations</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl glass-card border border-white/20 text-left"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="md:col-span-8 aspect-4/3 overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="md:col-span-4 p-8 space-y-4 text-forest-950 dark:text-cream-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                    {activePhoto.category}
                  </span>
                  <h3 className="font-serif font-bold text-2xl">{activePhoto.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-coffee-600 dark:text-cream-300">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                    <span>{activePhoto.likes} appreciations</span>
                  </div>
                  <p className="text-xs text-coffee-500 dark:text-cream-400 font-light leading-relaxed">
                    Captured live at Aura & Oak Cafe. High-resolution editorial photography.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
