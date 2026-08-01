import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Bean, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4500);
    }, 600);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-cream-100 dark:bg-forest-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Reduced Height Newsletter Card */}
        <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-forest-900 via-forest-800 to-coffee-950 p-8 sm:p-12 lg:p-14 text-cream-100 shadow-2xl overflow-hidden border border-gold-500/30 flex flex-col justify-center items-center text-center">
          
          {/* Soft Radial Gold Gradient Behind Heading */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_65%)] pointer-events-none" />

          {/* Subtle Corner Coffee Bean Illustrations */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-6 left-6 sm:top-8 sm:left-10 text-gold-400/25 pointer-events-none"
          >
            <Bean className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>

          <motion.div
            animate={{ y: [6, -6, 6], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 text-gold-400/20 pointer-events-none"
          >
            <Sparkles className="w-7 h-7 sm:w-9 sm:h-9" />
          </motion.div>

          {/* Card Content Container */}
          <div className="relative z-10 max-w-xl mx-auto space-y-4 sm:space-y-5">
            
            {/* Handwritten Subtitle */}
            <span className="font-script text-2xl sm:text-3xl text-gold-400 block tracking-wide">
              Join Our Coffee Club
            </span>

            {/* Main Heading (Max 3 lines, scalable font sizes) */}
            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-snug">
              Get Secret Tasting Invites & <span className="text-gold-400 font-script font-normal italic font-serif">15% Off</span> Your First Order
            </h2>

            {/* Description (Smaller, ~2 lines max) */}
            <p className="text-cream-300/90 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto line-clamp-2">
              Subscribe to receive weekly artisanal brew tips, single-origin release dates, and private event passes.
            </p>

            {/* Premium Email Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto pt-2 space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 w-full">
                
                {/* Email Input (Pill Shaped, 56px Height, High Contrast) */}
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  aria-label="Email address for newsletter"
                  className="w-full sm:flex-1 h-14 px-6 rounded-full bg-cream-100/10 border border-gold-500/40 text-white placeholder-cream-300/70 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all backdrop-blur-md font-normal"
                />

                {/* Subscribe Button (56px Height, Subtle Glow & Arrow Slide) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full sm:w-auto h-14 px-8 rounded-full bg-gold-500 text-forest-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-glow-gold hover:shadow-gold-500/30 hover:bg-gold-400 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shrink-0 flex items-center justify-center gap-2.5 disabled:opacity-50 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-forest-950" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>SUBSCRIBE NOW</span>
                      <ArrowRight className="w-4 h-4 text-forest-950 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-rose-300 font-medium flex items-center justify-center gap-1.5 pt-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              {/* Success Alert */}
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-gold-400 font-semibold pt-1"
                >
                  ✓ Welcome to the club! Your 15% discount code has been sent to your inbox.
                </motion.div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
