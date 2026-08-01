import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, CheckCircle2, Bean, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = email.trim() !== '' && emailRegex.test(email.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
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
          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            
            {/* Handwritten Subtitle */}
            <span className="font-script text-2xl sm:text-3xl text-gold-400 block tracking-wide">
              Join Our Coffee Club
            </span>

            {/* Main Heading (Max 3 lines) */}
            <h2 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-snug">
              Get Secret Tasting Invites & <span className="text-gold-400 font-script font-normal italic font-serif">15% Off</span> Your First Order
            </h2>

            {/* Description (Smaller, ~2 lines max) */}
            <p className="text-cream-300/90 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto line-clamp-2">
              Subscribe to receive weekly artisanal brew tips, single-origin release dates, and private event passes.
            </p>

            {/* Premium Email Form with 56px Matched Heights */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto pt-2 space-y-3">
              
              {/* Responsive Container: Stacks vertically ONLY below 400px */}
              <div className="flex flex-col min-[400px]:flex-row items-center gap-4 w-full">
                
                {/* Email Input Container with Inside Left Icon & Right Checkmark */}
                <div className="relative w-full min-[400px]:flex-1">
                  <Mail className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/80 pointer-events-none z-10" />

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
                    className={`w-full h-14 pl-12 pr-11 text-base text-white placeholder:text-cream-300/75 rounded-full bg-gradient-to-r from-cream-100/15 via-cream-100/10 to-cream-100/15 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] focus:outline-none transition-all duration-300 focus:-translate-y-0.5 ${
                      errorMsg
                        ? 'border-2 border-rose-500/80 focus:ring-2 focus:ring-rose-400'
                        : 'border border-gold-500/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/40 focus:shadow-glow-gold'
                    }`}
                  />

                  {/* Green Check Icon for Valid Email */}
                  {isValidEmail && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  )}
                </div>

                {/* Subscribe Button (Exact 56px Height, Matching Pill Geometry & Glow) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full min-[400px]:w-auto h-14 px-8 rounded-full bg-gold-500 text-forest-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-glow-gold hover:shadow-gold-500/30 hover:bg-gold-400 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 shrink-0 flex items-center justify-center gap-2.5 disabled:opacity-50 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-forest-950 stroke-[3]" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>SUBSCRIBE</span>
                      <ArrowRight className="w-4 h-4 text-forest-950 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>

              {/* Error Alert Banner */}
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

              {/* Success Alert Banner */}
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
