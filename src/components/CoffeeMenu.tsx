import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, Check, Heart, Sparkles, Clock, Flame, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import type { MenuItem } from '../types/cafe';

interface CoffeeMenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const CoffeeMenu: React.FC<CoffeeMenuProps> = ({ onAddToCart }) => {
  const categories = [
    'All',
    'Espresso',
    'Latte',
    'Cappuccino',
    'Mocha',
    'Cold Coffee',
    'Tea',
    'Artisanal Eats',
    'Desserts',
  ];

  const [activeTab, setActiveTab] = useState('All');
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});
  const [likedItemIds, setLikedItemIds] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);

  const tabsRef = useRef<HTMLDivElement>(null);
  const tabBtnRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const filteredItems =
    activeTab === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  // Tab change with smooth auto-centering and skeleton loader
  const handleTabChange = (category: string) => {
    setActiveTab(category);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);

    const btn = tabBtnRefs.current[category];
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItemIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Alternating card background colors matching editorial mockup
  const cardBgClasses = [
    'bg-[#FAF5EE] dark:bg-[#1C2C25] border-cream-300/60 dark:border-forest-700',
    'bg-[#F4EBE1] dark:bg-[#23352D] border-coffee-900/10 dark:border-forest-700',
    'bg-[#E8EFE2] dark:bg-[#1E3329] border-forest-900/10 dark:border-forest-700',
    'bg-[#FDF0EE] dark:bg-[#2A2328] border-rose-900/10 dark:border-forest-700',
  ];

  return (
    <section id="menu" className="py-12 sm:py-20 lg:py-28 relative overflow-hidden bg-[#FDFBF7] dark:bg-[#0A1713]">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Responsive Section Header */}
        <div className="text-left max-w-xl mb-5 sm:mb-8 space-y-1.5">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="font-script text-2xl sm:text-4xl text-coffee-600 dark:text-gold-400">
              Handcrafted Artisanal Tasting
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-forest-950 dark:text-cream-100 tracking-tight leading-tight">
            Coffee & Savory Eats
          </h2>
          <p className="text-coffee-700 dark:text-cream-300 text-xs sm:text-base font-light">
            Single-origin espresso extractions, slow pour-overs, and sourdough toasties.
          </p>
        </div>

        {/* STICKY CATEGORY NAVIGATION (No Scrollbar + Subtle Mask Overlays) */}
        <div className="sticky top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-[#FDFBF7]/90 dark:bg-[#0A1713]/90 backdrop-blur-md border-y border-gold-500/15">
          <div className="relative max-w-7xl mx-auto flex items-center">
            
            {/* Left & Right Gradient Mask Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-[#FDFBF7] dark:from-[#0A1713] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-l from-[#FDFBF7] dark:from-[#0A1713] to-transparent pointer-events-none z-10" />

            {/* Category Tabs Container */}
            <div
              ref={tabsRef}
              className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-1 px-1 w-full scroll-smooth"
            >
              {categories.map((category) => {
                const isActive = activeTab === category;
                return (
                  <button
                    key={category}
                    ref={(el) => {
                      tabBtnRefs.current[category] = el;
                    }}
                    onClick={() => handleTabChange(category)}
                    className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-[#0F231C] text-cream-100 dark:bg-gold-500 dark:text-forest-950 shadow-md scale-105 font-bold'
                        : 'bg-[#F7F2EB] dark:bg-forest-900/40 text-[#2C1810] dark:text-cream-200 hover:bg-cream-300 dark:hover:bg-forest-800'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RESPONSIVE 2x2 GRID INFO BAR ON MOBILE (Matches Screenshot Image 1) */}
        <div className="mt-4 mb-7 py-2 border-b border-coffee-900/10 dark:border-cream-100/10">
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:justify-center sm:gap-6 text-xs font-semibold text-coffee-800 dark:text-cream-200">
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#FAF5EE] dark:bg-forest-900/40 border border-gold-500/10 text-gold-600 dark:text-gold-400 justify-center shadow-sm">
              <Flame className="w-4 h-4 fill-gold-500" />
              <span>Chef's Special</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#FAF5EE] dark:bg-forest-900/40 border border-gold-500/10 text-coffee-800 dark:text-cream-200 justify-center shadow-sm">
              <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#FAF5EE] dark:bg-forest-900/40 border border-gold-500/10 text-coffee-800 dark:text-cream-200 justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#FAF5EE] dark:bg-forest-900/40 border border-gold-500/10 text-coffee-800 dark:text-cream-200 justify-center shadow-sm">
              <Clock className="w-4 h-4 text-coffee-500 dark:text-cream-400" />
              <span>15–20 min</span>
            </div>
          </div>
        </div>

        {/* DEDICATED RESPONSIVE PRODUCT GRID:
            - Mobile (320px–767px): grid-cols-1 (100% full width, 1 card per row)
            - Tablet (768px–1023px): md:grid-cols-2 (2 cards per row)
            - Desktop (1024px+): lg:grid-cols-3 xl:grid-cols-4 (3–4 cards per row)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch w-full">
          <AnimatePresence mode="wait">
            {isLoading
              ? // Skeleton Loader
                Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`skel-${i}`}
                    className="animate-pulse rounded-[28px] bg-cream-200 dark:bg-forest-900 h-[380px] w-full"
                  />
                ))
              : filteredItems.map((item, index) => {
                  const isAdded = addedItemIds[item.id];
                  const isLiked = likedItemIds[item.id];
                  const bgStyle = cardBgClasses[index % cardBgClasses.length];
                  const isAccentCard = index % 3 === 2;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      key={item.id}
                      className={`group relative rounded-[28px] ${bgStyle} shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden border w-full ${
                        isAccentCard ? 'ring-1 ring-gold-500/30' : ''
                      }`}
                    >
                      {/* Edge-to-Edge 16:10 Aspect Image (230px height on mobile) */}
                      <div className="relative aspect-[16/10] h-[230px] sm:h-auto w-full overflow-hidden bg-cream-300 dark:bg-forest-900">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Top-Left Floating Dark Badge */}
                        {item.badge && (
                          <span className="absolute top-3 left-3 bg-[#0F231C]/90 dark:bg-gold-500 text-cream-100 dark:text-forest-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                            {item.badge}
                          </span>
                        )}

                        {/* Top-Right Circular Wishlist Heart Button */}
                        <button
                          onClick={(e) => toggleLike(item.id, e)}
                          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
                          aria-label="Wishlist Item"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'
                            }`}
                          />
                        </button>

                        {/* Rating Chip Bottom-Left */}
                        <div className="absolute bottom-2.5 left-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      {/* Card Content (Equal Heights & Pixel Perfect Spacing) */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 text-left">
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 block">
                            {item.category}
                          </span>

                          <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-950 dark:text-cream-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors leading-snug line-clamp-2">
                            {item.name}
                          </h3>

                          <p className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300 leading-relaxed font-light line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom Row: PRICE Label + ₹329 & Dark Green Add to Cart Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10">
                          <div>
                            <span className="text-[10px] text-coffee-500 dark:text-cream-400 block uppercase font-light tracking-wider">
                              PRICE
                            </span>
                            <span className="font-serif font-bold text-2xl text-forest-950 dark:text-gold-400">
                              ₹{item.price}
                            </span>
                          </div>

                          <button
                            onClick={() => handleAdd(item)}
                            className={`ripple-btn min-h-[48px] h-12 px-6 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md flex items-center gap-2 shrink-0 ${
                              isAdded
                                ? 'bg-emerald-600 text-white scale-105'
                                : 'bg-[#0F231C] text-cream-100 dark:bg-gold-500 dark:text-forest-950 hover:bg-forest-800 dark:hover:bg-gold-400'
                            }`}
                            aria-label={`Add ${item.name} to cart for ₹${item.price}`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-4 h-4" />
                                <span>Added!</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-4 h-4" />
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
          </AnimatePresence>
        </div>

        {/* Explore All CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => handleTabChange('All')}
            className="magnetic-btn inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#0F231C] text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-luxury hover:shadow-luxury-hover transition-all min-h-[48px] h-12"
          >
            <span>Explore All 48 Menu Items</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
