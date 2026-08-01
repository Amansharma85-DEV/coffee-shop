import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Coffee, Heart, Star, Sparkles, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden flex items-center bg-cream-100 dark:bg-forest-950">
      
      {/* Large Ambient Blur Glow Orbs for Depth */}
      <div className="absolute top-10 left-[-100px] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-80px] w-[600px] h-[600px] bg-forest-900/15 dark:bg-forest-700/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Decorative Bean & Leaf Graphics */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 right-[48%] hidden xl:block text-gold-500/25 pointer-events-none z-10"
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Asymmetric 12-Column Grid (7 cols left, 5 cols right with overlapping negative margin) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column (7 cols) - Giant Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Handwritten Subtitle with Vintage Hand-Drawn Accent */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="h-[1px] w-10 bg-gold-500/60" />
                <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-coffee-600 dark:text-gold-400">
                  Life Happens, Coffee Helps
                </span>
              </motion.div>

              {/* Giant Editorial Heading (48px to 80px) */}
              <h1 className="font-serif font-extrabold text-5xl sm:text-7xl lg:text-8xl text-forest-950 dark:text-cream-100 leading-[1.02] tracking-tight">
                Sweet Moments <br />
                Start <span className="font-script font-normal text-gold-500 dark:text-gold-400 italic font-serif ml-1">Here.</span>
              </h1>
            </div>

            {/* Paragraph (Limited to max ~25 words for editorial readability) */}
            <p className="text-coffee-700 dark:text-cream-300 text-base sm:text-xl max-w-lg leading-relaxed font-light">
              Indulge in handcrafted single-origin coffee and gourmet treats baked fresh to warm your heart.
            </p>

            {/* CTAs with Equal 56px Height & Perfect Alignment */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
              <a
                href="#menu"
                className="magnetic-btn group relative inline-flex items-center gap-4 px-9 h-14 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-semibold text-sm sm:text-base tracking-wider uppercase shadow-luxury min-h-[44px]"
              >
                <span>EXPLORE MENU</span>
                <div className="w-9 h-9 rounded-full bg-cream-100/20 dark:bg-forest-950/20 flex items-center justify-center transition-transform group-hover:translate-x-1.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              {/* Redesigned Premium Secondary Button: "Reserve Your Table" */}
              <button
                onClick={onOpenReservation}
                className="group relative inline-flex items-center gap-3 px-8 h-14 rounded-full bg-cream-50 dark:bg-forest-900 border border-gold-500/50 dark:border-gold-500/40 text-forest-950 dark:text-cream-100 font-semibold text-sm sm:text-base tracking-wide shadow-sm hover:border-gold-500 hover:shadow-glow-gold hover:bg-cream-200/80 dark:hover:bg-forest-800 hover:-translate-y-0.5 hover:shadow-luxury-hover transition-all duration-300 active:scale-95 min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-gold-600 dark:text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Reserve Your Table</span>
              </button>
            </div>

            {/* Staggered Line Icon Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-coffee-900/10 dark:border-cream-100/10">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-cream-200/50 dark:bg-forest-900/40 border border-cream-300/40 dark:border-forest-800 hover:-translate-y-1 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-forest-900 dark:bg-gold-500 flex items-center justify-center text-gold-400 dark:text-forest-950 shrink-0 shadow-md">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest-950 dark:text-cream-100">Finest Ingredients</h4>
                  <p className="text-[11px] text-coffee-600 dark:text-cream-400 font-light">100% Organic Farms</p>
                </div>
              </div>

              {/* Feature 2 (Offset translateY for asymmetric flow) */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-cream-200/50 dark:bg-forest-900/40 border border-cream-300/40 dark:border-forest-800 hover:-translate-y-1 transition-transform sm:translate-y-2">
                <div className="w-11 h-11 rounded-xl bg-coffee-800 dark:bg-gold-500 flex items-center justify-center text-gold-400 dark:text-forest-950 shrink-0 shadow-md">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest-950 dark:text-cream-100">Expertly Brewed</h4>
                  <p className="text-[11px] text-coffee-600 dark:text-cream-400 font-light">Precision Extraction</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-cream-200/50 dark:bg-forest-900/40 border border-cream-300/40 dark:border-forest-800 hover:-translate-y-1 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-forest-900 dark:bg-gold-500 flex items-center justify-center text-gold-400 dark:text-forest-950 shrink-0 shadow-md">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-forest-950 dark:text-cream-100">Made with Love</h4>
                  <p className="text-[11px] text-coffee-600 dark:text-cream-400 font-light">Handcrafted Daily</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols) - Asymmetric Organic Container & Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Oversized Asymmetric Blob Background */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[50px_20px_60px_30px] bg-gradient-to-br from-forest-900 via-forest-800 to-coffee-950 p-6 sm:p-7 shadow-2xl border border-gold-500/30 flex items-center justify-center overflow-visible">
              
              {/* Background Ambient Rays & Smoke */}
              <div className="absolute inset-0 rounded-[50px_20px_60px_30px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.2),transparent_70%)]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-xl animate-pulse-glow" />
              </div>

              {/* Overlapping Coffee Glass Image extending outside card boundaries */}
              <div className="relative z-10 w-full h-full transform hover:scale-105 transition-transform duration-700">
                <img
                  src="images/hero_coffee.jpg"
                  alt="Artisanal Specialty Latte"
                  className="w-full h-full object-cover rounded-[36px_16px_40px_20px] shadow-2xl border-2 border-gold-500/40"
                />
              </div>

              {/* Asymmetric Floating Badge 1: Wax Stamp Label */}
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20 wax-stamp text-forest-950 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-gold-400/50"
              >
                <Star className="w-4 h-4 fill-forest-950 text-forest-950" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-forest-950">RESERVE</span>
                  <span className="text-xs font-serif font-bold text-forest-950">★ Best Seller</span>
                </div>
              </motion.div>

              {/* Asymmetric Floating Badge 2: Organic 100% Arabica */}
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 z-20 glass-card px-5 py-3 rounded-2xl shadow-luxury flex items-center gap-3 border border-gold-500/40"
              >
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-coffee-500 dark:text-gold-400 font-semibold block uppercase">ROAST</span>
                  <span className="text-xs font-bold text-forest-950 dark:text-cream-100">100% Single Origin</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
