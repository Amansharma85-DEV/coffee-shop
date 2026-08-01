import React from 'react';
import { motion } from 'framer-motion';
import { Bean, UserCheck, Zap, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      num: '01',
      icon: Bean,
      title: 'Fresh Beans',
      description: 'Hand-selected single-origin Arabica beans roasted daily in small artisanal batches for peak aroma.',
      bgClass: 'bg-cream-100 dark:bg-forest-900 border-cream-300/60 dark:border-forest-800 blob-card-1',
    },
    {
      num: '02',
      icon: UserCheck,
      title: 'Professional Baristas',
      description: 'Master baristas trained in precision extractions, micro-foam latte art, and specialty pour-overs.',
      bgClass: 'bg-[#F3E9DC] dark:bg-[#1E2E27] border-coffee-900/10 dark:border-forest-700 blob-card-2 sm:translate-y-6',
    },
    {
      num: '03',
      icon: Zap,
      title: 'Fast Service',
      description: 'Digital order ahead system and swift service so your coffee is piping hot right when you arrive.',
      bgClass: 'bg-cream-200 dark:bg-forest-900 border-cream-300/60 dark:border-forest-800 blob-card-1',
    },
    {
      num: '04',
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Uncompromising commitment to organic milk, natural syrups, and gold-standard coffee equipment.',
      bgClass: 'bg-[#E3EAD8] dark:bg-[#20362B] border-forest-900/10 dark:border-forest-700 blob-card-2 sm:translate-y-6',
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-36 relative overflow-hidden bg-cream-50 dark:bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-20 space-y-3">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="font-script text-3xl sm:text-4xl text-coffee-600 dark:text-gold-400">
              The Roastery Standard
            </span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-6xl text-forest-950 dark:text-cream-100 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-coffee-700 dark:text-cream-300 text-base font-light">
            Every cup we serve is a testament to sustainable sourcing, precision extraction, and warmth.
          </p>
        </div>

        {/* 4 Staggered Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative p-8 shadow-luxury hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border overflow-hidden ${feature.bgClass}`}
              >
                {/* Watermark Giant Numerals */}
                <span className="font-serif font-extrabold text-7xl lg:text-8xl text-gold-500/20 absolute -top-4 -right-2 pointer-events-none select-none">
                  {feature.num}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-forest-900 dark:bg-gold-500 text-gold-400 dark:text-forest-950 flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif font-bold text-2xl text-forest-950 dark:text-cream-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
