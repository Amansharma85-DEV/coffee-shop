import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Bean, Sparkles, AlertCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Email Regex Validation
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
      }, 4000);
    }, 600);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Rounded Container */}
        <div className="relative rounded-[44px] bg-gradient-to-br from-forest-900 via-forest-800 to-coffee-950 p-8 sm:p-16 text-cream-100 shadow-2xl overflow-hidden border border-gold-500/30">
          
          {/* Floating Bean Decorations */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-6 left-8 text-gold-400/30 pointer-events-none"
          >
            <Bean className="w-12 h-12" />
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8], rotate: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 right-10 text-gold-400/20 pointer-events-none"
          >
            <Sparkles className="w-10 h-10" />
          </motion.div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <span className="font-script text-3xl sm:text-4xl text-gold-400 block">
              Join Our Coffee Club
            </span>

            <h2 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              Get Secret Tasting Invites & 15% Off Your First Order
            </h2>

            <p className="text-cream-300 text-sm sm:text-base font-light leading-relaxed">
              Subscribe to receive weekly artisanal brew tips, exclusive single-origin release dates, and private event passes.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <div className="relative flex-1">
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
                  className="w-full pl-11 pr-4 py-4 rounded-full bg-cream-100/10 border border-gold-500/40 text-white placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm backdrop-blur-md"
                />
                <Mail className="absolute left-4 top-4.5 w-4 h-4 text-gold-400" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-btn px-8 py-4 rounded-full bg-gold-500 text-forest-950 font-bold text-sm shadow-glow-gold hover:bg-gold-400 transition-all duration-300 transform active:scale-95 shrink-0 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : subscribed ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" /> Subscribed!
                  </span>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </form>

            {/* Error Message Feedback */}
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-rose-400 font-semibold flex items-center justify-center gap-1.5 pt-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMsg}</span>
              </motion.p>
            )}

            {/* Success Message Feedback */}
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-gold-400 font-semibold pt-2"
              >
                ✓ Thank you for subscribing! Your 15% discount code has been sent to your inbox.
              </motion.p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
