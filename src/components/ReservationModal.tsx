import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, AlertCircle } from 'lucide-react';
import type { ReservationDetails } from '../types/cafe';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [details, setDetails] = useState<ReservationDetails>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '06:00 PM',
    guests: 2,
    seatingArea: 'Outdoor Garden (Lanterns)',
    specialRequests: '',
  });

  const [confirmed, setConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!details.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!details.email.trim() || !emailRegex.test(details.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!details.phone.trim() || details.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
    }, 800);
  };

  const handleDone = () => {
    setConfirmed(false);
    onClose();
  };

  const timeSlots = ['10:00 AM', '12:30 PM', '03:00 PM', '06:00 PM', '08:30 PM', '10:00 PM'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card max-w-lg w-full rounded-[36px] p-6 sm:p-8 shadow-2xl relative border border-gold-500/30 overflow-hidden text-left"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-coffee-900 dark:text-cream-200 hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {confirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-3xl text-forest-950 dark:text-cream-100">
                  Table Reserved!
                </h3>
                <p className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300 font-light max-w-sm mx-auto">
                  We look forward to hosting you at Aura & Oak Cafe. A confirmation SMS & email has been dispatched.
                </p>

                {/* VIP Pass */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900 to-coffee-950 text-cream-100 text-left space-y-2 border border-gold-500/40 shadow-lg">
                  <div className="flex justify-between items-center border-b border-gold-500/30 pb-2">
                    <span className="font-serif font-bold text-lg text-gold-400">VIP RESERVATION</span>
                    <span className="text-[10px] font-mono uppercase bg-gold-500 text-forest-950 px-2 py-0.5 rounded font-bold">CONFIRMED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div><span className="text-cream-400 block text-[10px]">GUEST</span><span className="font-semibold">{details.name}</span></div>
                    <div><span className="text-cream-400 block text-[10px]">PARTY SIZE</span><span className="font-semibold">{details.guests} Guests</span></div>
                    <div><span className="text-cream-400 block text-[10px]">DATE & TIME</span><span className="font-semibold">{details.date} @ {details.time}</span></div>
                    <div><span className="text-cream-400 block text-[10px]">SEATING</span><span className="font-semibold">{details.seatingArea}</span></div>
                  </div>
                </div>

                <button
                  onClick={handleDone}
                  className="w-full py-3.5 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-bold text-sm shadow-md"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <span className="font-script text-2xl text-gold-600 dark:text-gold-400">
                    Reserve Your Sanctuary
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-forest-950 dark:text-cream-100">
                    Book a Table
                  </h3>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Gupta"
                      value={details.name}
                      onChange={(e) => setDetails({ ...details, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-200/60 dark:bg-forest-900 border border-cream-300 dark:border-forest-700 text-sm text-forest-950 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ananya@example.com"
                        value={details.email}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-cream-200/60 dark:bg-forest-900 border border-cream-300 dark:border-forest-700 text-sm text-forest-950 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 12345"
                        value={details.phone}
                        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-cream-200/60 dark:bg-forest-900 border border-cream-300 dark:border-forest-700 text-sm text-forest-950 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1">
                      <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1">
                        Guests
                      </label>
                      <select
                        value={details.guests}
                        onChange={(e) => setDetails({ ...details, guests: Number(e.target.value) })}
                        className="w-full px-3 py-2.5 rounded-xl bg-cream-200/60 dark:bg-forest-900 border border-cream-300 dark:border-forest-700 text-sm text-forest-950 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                          <option key={n} value={n}>{n} Guests</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={details.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDetails({ ...details, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-cream-200/60 dark:bg-forest-900 border border-cream-300 dark:border-forest-700 text-sm text-forest-950 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1.5">
                      Select Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setDetails({ ...details, time: slot })}
                          className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                            details.time === slot
                              ? 'bg-gold-500 text-forest-950 border-gold-500'
                              : 'bg-cream-200/50 dark:bg-forest-900 border-cream-300 dark:border-forest-700 text-coffee-900 dark:text-cream-200'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-coffee-800 dark:text-cream-200 mb-1">
                      Seating Preference
                    </label>
                    <select
                      value={details.seatingArea}
                      onChange={(e) => setDetails({ ...details, seatingArea: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-200/60 dark:bg-forest-900 border border-cream-300 dark:border-forest-700 text-sm text-forest-950 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="Outdoor Garden (Lanterns)">Outdoor Garden (Lanterns & Fairy Lights)</option>
                      <option value="Cozy Main Dining">Cozy Main Dining (Warm Booths)</option>
                      <option value="Bar Counter">Barista Counter (Live Roasting View)</option>
                      <option value="Quiet Terrace">Quiet Reading Terrace</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-bold text-sm shadow-luxury hover:shadow-luxury-hover transition-all mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Reserving...' : 'Confirm Table Reservation'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
