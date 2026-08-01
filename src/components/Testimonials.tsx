import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/cafeData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-36 relative overflow-hidden bg-cream-200/40 dark:bg-forest-900/30">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-[-100px] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="font-script text-3xl sm:text-4xl text-coffee-600 dark:text-gold-400">
              Love Notes & Reviews
            </span>
            <span className="h-[1px] w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-6xl text-forest-950 dark:text-cream-100 tracking-tight">
            Guest Testimonials
          </h2>
          <p className="text-coffee-700 dark:text-cream-300 text-base font-light">
            Over 19,500+ verified 5-star reviews on Google & Zomato.
          </p>
        </div>

        {/* Floating Testimonial Card with Overlapping Avatar */}
        <div className="relative pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-[44px] p-8 sm:p-14 shadow-2xl border border-gold-500/30 text-center relative overflow-visible"
            >
              {/* Overlapping Floating Avatar on top border */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-cream-100 dark:border-forest-900 shadow-2xl"
                  />
                  {/* Verified Google Review Badge */}
                  <span className="absolute bottom-0 right-0 bg-gold-500 text-forest-950 p-1.5 rounded-full shadow-md" title="Verified Review">
                    <CheckCircle2 className="w-4 h-4 fill-forest-950 text-gold-500" />
                  </span>
                </div>
              </div>

              <Quote className="w-20 h-20 text-gold-500/15 absolute top-10 left-8 pointer-events-none" />

              {/* 5 Stars Rating */}
              <div className="flex justify-center items-center gap-1 mt-6 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif italic text-xl sm:text-3xl text-forest-950 dark:text-cream-100 leading-relaxed max-w-3xl mx-auto mb-8">
                "{item.review}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-1.5">
                <h4 className="font-serif font-bold text-2xl text-forest-900 dark:text-cream-100">
                  {item.name}
                </h4>
                <p className="text-xs text-coffee-600 dark:text-gold-400 font-medium">
                  {item.role} • <span className="italic">{item.location}</span>
                </p>
                <span className="mt-2 inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 text-xs font-semibold border border-gold-500/20">
                  Favorite Order: {item.favoriteOrder}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-forest-950 dark:text-cream-100 hover:bg-gold-500 hover:text-forest-950 transition-all shadow-lg z-30"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-forest-950 dark:text-cream-100 hover:bg-gold-500 hover:text-forest-950 transition-all shadow-lg z-30"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'bg-gold-500 w-10'
                  : 'bg-cream-400 dark:bg-forest-700 w-3 hover:bg-gold-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
