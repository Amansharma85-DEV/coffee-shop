import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, Award, Sparkles } from 'lucide-react';
import { FEATURED_DESSERTS } from '../data/cafeData';
import type { MenuItem } from '../types/cafe';

interface FeaturedDessertsProps {
  onAddToCart: (item: MenuItem) => void;
}

export const FeaturedDesserts: React.FC<FeaturedDessertsProps> = ({ onAddToCart }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const heroDessert = FEATURED_DESSERTS[0]; // Aatis Pistachio Bliss
  const secondaryDesserts = FEATURED_DESSERTS.slice(1, 3); // Lermi & Filtre
  const carouselDesserts = FEATURED_DESSERTS.slice(3); // Remaining 3 desserts

  // Monitor scroll position for disabling/enabling buttons
  const checkScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollState();
    const carouselEl = carouselRef.current;
    if (carouselEl) {
      carouselEl.addEventListener('scroll', checkScrollState);
      window.addEventListener('resize', checkScrollState);
    }
    return () => {
      if (carouselEl) carouselEl.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="desserts" className="py-24 lg:py-36 relative overflow-hidden bg-cream-50 dark:bg-forest-950">
      
      {/* Background Decor Ambient Blur */}
      <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold-500" />
              <span className="font-script text-3xl sm:text-4xl text-coffee-600 dark:text-gold-400">
                Handcrafted Pastry Lab
              </span>
            </div>
            <h2 className="font-serif font-bold text-4xl sm:text-6xl text-forest-950 dark:text-cream-100 tracking-tight">
              Featured Desserts
            </h2>
            <p className="text-coffee-700 dark:text-cream-300 text-base font-light max-w-md">
              Each cake layer is handcrafted with single-origin cocoa, fresh berries, and organic nuts.
            </p>
          </div>
        </div>

        {/* --- ASYMMETRIC BROKEN GRID (7 cols + 5 cols) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column (7 cols): Giant Primary Feature Card (Aatis Pistachio) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-[40px] p-8 sm:p-12 bg-[#E3EAD8] dark:bg-[#1A2E24] shadow-luxury border border-black/5 dark:border-white/10 flex flex-col justify-between overflow-hidden group min-h-[460px]"
          >
            {/* Wax Badge Accent */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-cream-100 text-xs font-extrabold uppercase tracking-wider shadow-md">
                <Award className="w-4 h-4 text-gold-400" />
                Chef's Recommendation
              </span>
              <span className="font-mono text-xs font-bold text-coffee-800 dark:text-gold-400">
                BATCH NO. 08
              </span>
            </div>

            {/* Overlapping Image & Info Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6 z-10">
              <div className="md:col-span-6 space-y-4 text-left">
                <span className="font-script text-3xl text-coffee-700 dark:text-gold-400 block">
                  {heroDessert.subtitle}
                </span>
                <h3 className="font-serif font-bold text-4xl sm:text-5xl text-forest-950 dark:text-cream-100">
                  {heroDessert.title}
                </h3>
                <p className="text-sm text-coffee-800 dark:text-cream-300 font-light leading-relaxed">
                  {heroDessert.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-coffee-600 dark:text-cream-400 block uppercase tracking-widest">
                    Price
                  </span>
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-forest-950 dark:text-gold-400">
                    ₹{heroDessert.price}
                  </span>
                </div>
              </div>

              {/* Overlapping Image container */}
              <div className="md:col-span-6 flex justify-center">
                <img
                  src={heroDessert.image}
                  alt={heroDessert.title}
                  className="w-full max-w-[280px] h-auto object-contain filter drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom Add to Cart CTA */}
            <div className="flex items-center justify-between pt-6 border-t border-black/10 dark:border-white/10 z-10">
              <span className="text-xs font-semibold text-coffee-800 dark:text-cream-200">
                Sicilian Pistachios & White Chocolate Ganache
              </span>
              <button
                onClick={() =>
                  onAddToCart({
                    id: heroDessert.id,
                    name: `${heroDessert.title} (${heroDessert.subtitle})`,
                    category: 'Desserts',
                    price: heroDessert.price,
                    rating: 4.9,
                    reviewsCount: 320,
                    description: heroDessert.description,
                    image: heroDessert.image,
                    isPopular: true,
                  })
                }
                className="magnetic-btn min-w-[52px] min-h-[52px] rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95"
                aria-label={`Add ${heroDessert.title} to cart`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column (5 cols): 2 Stacked Staggered Cards (Lermi & Filtre) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryDesserts.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-[32px] p-6 sm:p-7 ${card.bgColorClass} shadow-luxury border border-black/5 dark:border-white/10 flex items-center justify-between overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex-1`}
              >
                <div className="space-y-2 max-w-[55%] text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-[10px] font-bold uppercase tracking-wider text-forest-950 dark:text-cream-100">
                    {idx === 0 ? '🍫 Belgian Dark Cocoa' : '🫐 Fresh Forest Berries'}
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-forest-950 dark:text-cream-100">
                    {card.title}
                  </h4>
                  <p className="font-script text-xl text-coffee-700 dark:text-gold-400">
                    {card.subtitle}
                  </p>
                  <p className="font-serif font-bold text-2xl text-forest-950 dark:text-gold-400 pt-1">
                    ₹{card.price}
                  </p>
                </div>

                <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                  />
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: card.id,
                        name: `${card.title} (${card.subtitle})`,
                        category: 'Desserts',
                        price: card.price,
                        rating: 4.9,
                        reviewsCount: 280,
                        description: card.description,
                        image: card.image,
                      })
                    }
                    className="absolute bottom-0 right-0 min-w-[44px] min-h-[44px] rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 flex items-center justify-center shadow-md hover:scale-110 active:scale-95"
                    aria-label={`Add ${card.title} to cart`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* --- HORIZONTAL SWIPE CAROUSEL WITH FLOATING PREV / NEXT BUTTONS --- */}
        <div className="relative space-y-4 pt-6 border-t border-coffee-900/10 dark:border-cream-100/10">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-widest text-coffee-600 dark:text-gold-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              More Artisanal Slices (Swipe or Click)
            </span>
          </div>

          {/* Carousel Wrapper with Floating Buttons */}
          <div className="relative group/carousel">
            
            {/* Floating Previous Button (Left Side) */}
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none disabled:transform-none border border-gold-500/30"
              aria-label="Previous Desserts"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Floating Next Button (Right Side) */}
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none disabled:transform-none border border-gold-500/30"
              aria-label="Next Desserts"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Scroll Container with hidden scrollbars and touch swipe support */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory px-1 scroll-smooth"
            >
              {carouselDesserts.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`shrink-0 w-[82vw] sm:w-[330px] snap-start rounded-[32px] p-6 ${card.bgColorClass} shadow-luxury border border-black/5 dark:border-white/10 flex flex-col justify-between group/card hover:-translate-y-2 transition-all duration-500`}
                >
                  <div className="text-center space-y-1 mb-3">
                    <h4 className="font-serif font-bold text-2xl text-forest-950 dark:text-cream-100">
                      {card.title}
                    </h4>
                    <p className="font-script text-xl text-coffee-700 dark:text-gold-400">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="w-36 h-36 mx-auto my-2 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain filter drop-shadow-lg transform group-hover/card:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <p className="text-xs font-light text-coffee-800 dark:text-cream-300 text-center line-clamp-2 my-2">
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/10">
                    <span className="font-serif font-bold text-2xl text-forest-950 dark:text-gold-400">
                      ₹{card.price}
                    </span>
                    <button
                      onClick={() =>
                        onAddToCart({
                          id: card.id,
                          name: `${card.title} (${card.subtitle})`,
                          category: 'Desserts',
                          price: card.price,
                          rating: 4.8,
                          reviewsCount: 190,
                          description: card.description,
                          image: card.image,
                        })
                      }
                      className="w-11 h-11 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 flex items-center justify-center shadow-md hover:scale-110 active:scale-95"
                      aria-label={`Add ${card.title} to cart`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
