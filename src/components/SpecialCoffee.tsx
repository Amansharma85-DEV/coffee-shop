import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, X, Coffee } from 'lucide-react';
import type { MenuItem } from '../types/cafe';

interface SpecialCoffeeProps {
  onAddToCart: (item: MenuItem) => void;
}

export const SpecialCoffee: React.FC<SpecialCoffeeProps> = ({ onAddToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const specialItem: MenuItem = {
    id: 'special-müil',
    name: 'Müil Irish Coffee (Special Reserve)',
    category: 'Espresso',
    price: 349,
    rating: 4.95,
    reviewsCount: 1840,
    description: 'A perfect blend of bold roasted Arabica flavors, smooth Irish whiskey essence, and hand-whipped sweet cream velvet foam.',
    image: '/images/irish_coffee.jpg',
    badge: 'Special Reserve',
    isPopular: true,
    isOrganic: true,
    prepTime: '6 mins',
    calories: '240 kcal',
  };

  return (
    <section id="special" className="py-28 lg:py-36 relative overflow-hidden bg-forest-950 text-cream-100 border-y border-gold-500/20">
      
      {/* Radial Gold Ambient Backlight */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-Bleed Asymmetric Editorial Row (6 cols left / 6 cols right with negative margin overlapping image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Overlapping Irish Coffee Goblet Image & Vintage Wax Seal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden shadow-2xl border-2 border-gold-500/30 group">
              <img
                src="/images/irish_coffee.jpg"
                alt="Special Reserve Müil Irish Coffee"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            </div>

            {/* Vintage Hand-Stamped Wax Seal Badge */}
            <motion.div
              animate={{ rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 wax-stamp px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-gold-400/60"
            >
              <Coffee className="w-5 h-5 text-forest-950" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-forest-950">HAND-POURED</span>
                <span className="text-xs font-serif font-bold text-forest-950">RESERVE NO. 04</span>
              </div>
            </motion.div>

            {/* Interactive Rotating "Brewed for You" Circular Stamp */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-cream-100 text-forest-950 p-2 shadow-2xl border-2 border-gold-500/40 flex items-center justify-center text-center cursor-pointer group"
              onClick={() => setModalOpen(true)}
            >
              <div className="w-full h-full rounded-full border border-dashed border-forest-900 flex flex-col items-center justify-center p-2">
                <span className="font-script text-lg sm:text-2xl text-gold-600">Brewed</span>
                <span className="font-serif font-bold text-xs sm:text-sm uppercase tracking-wider text-forest-950">For You</span>
                <Coffee className="w-4 h-4 text-forest-900 mt-0.5" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Editorial Recipe Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-7 text-left"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-gold-500" />
                <span className="font-script text-3xl sm:text-4xl text-gold-400">
                  Our Signature Creation
                </span>
              </div>
              <h2 className="font-serif font-bold text-4xl sm:text-6xl text-cream-100 tracking-tight">
                Müil Irish Coffee
              </h2>
            </div>

            <p className="text-cream-300 text-base sm:text-lg leading-relaxed font-light max-w-lg">
              A masterwork blend of high-altitude shade-grown Arabica espresso, aged Irish oak essence, and hand-whipped vanilla bean cream foam.
            </p>

            {/* Checkmark Features */}
            <ul className="space-y-3.5 pt-2">
              <li className="flex items-center gap-3.5 text-cream-100 font-semibold text-base sm:text-lg">
                <CheckCircle2 className="w-6 h-6 text-gold-400 fill-gold-400/20 shrink-0" />
                <span>100% Ethiopian High-Altitude Arabica</span>
              </li>
              <li className="flex items-center gap-3.5 text-cream-100 font-semibold text-base sm:text-lg">
                <CheckCircle2 className="w-6 h-6 text-gold-400 fill-gold-400/20 shrink-0" />
                <span>Medium Dark Oak Barrel Roast</span>
              </li>
              <li className="flex items-center gap-3.5 text-cream-100 font-semibold text-base sm:text-lg">
                <CheckCircle2 className="w-6 h-6 text-gold-400 fill-gold-400/20 shrink-0" />
                <span>Velvet Cold Foam & Nutmeg Finish</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="magnetic-btn group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gold-500 text-forest-950 font-bold text-sm tracking-wider uppercase shadow-glow-gold hover:bg-gold-400 transition-all"
              >
                <span>DISCOVER STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onAddToCart(specialItem)}
                className="px-8 py-4 rounded-full border border-cream-100/30 text-cream-100 hover:border-gold-500 hover:text-gold-400 font-semibold text-sm transition-all"
              >
                Add to Cart — ₹349
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modal Detail for Special Coffee */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-gold-500/30 overflow-hidden text-left"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-coffee-900 dark:text-cream-100 hover:bg-black/10 dark:hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <img
                  src="/images/irish_coffee.jpg"
                  alt="Special Reserve"
                  className="w-full h-64 object-cover rounded-2xl shadow-md"
                />
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                    Signature Tasting Notes
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-forest-950 dark:text-cream-100">
                    Müil Coffee Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300 leading-relaxed font-light">
                    Brewed with single-origin beans harvested from high-altitude shade farms in Ethiopia. Infused with warm butterscotch notes, roasted oak, and dark cocoa finish.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-forest-900 dark:text-cream-200">
                    <span>⏱ Prep: 6 mins</span>
                    <span>🔥 240 Calories</span>
                  </div>
                  <button
                    onClick={() => {
                      onAddToCart(specialItem);
                      setModalOpen(false);
                    }}
                    className="w-full py-3.5 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-bold text-sm shadow-md"
                  >
                    Order Special — ₹349
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
