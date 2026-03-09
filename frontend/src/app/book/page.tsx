"use client";
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Book() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
        >
          <Calendar className="w-4 h-4" /> Discovery Protocol
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Book a <span className="text-primary">Consultation</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Schedule a 30-minute discovery call with our lead architects to discuss your infrastructure, bottlenecks, and automation potential.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl mx-auto h-[600px] glass rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          {/* Placeholder for real iframe (Calendly / Cal.com) */}
          <div className="text-center z-10">
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Calendar Integration Placeholder</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-8">
              In production, a tool like Calendly or Cal.com embed would be rendered here for seamless booking.
            </p>
            <div className="flex gap-4 justify-center">
              <div className="px-6 py-2 rounded bg-white/5 border border-white/10 text-gray-400 font-medium">
                Example: &lt;iframe src="https://calendly.com/..." /&gt;
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
