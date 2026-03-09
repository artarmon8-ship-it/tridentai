"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#020815]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
              TridentAI
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link href="/agents" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">AI Agents</Link>
            <Link href="/solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Solutions</Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden lg:block">Contact</Link>
            <Link href="/book" className="px-5 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white text-sm font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,102,255,0.4)]">
              Book Consultation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col mt-2">
              <Link onClick={() => setIsOpen(false)} href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About</Link>
              <Link onClick={() => setIsOpen(false)} href="/services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Services</Link>
              <Link onClick={() => setIsOpen(false)} href="/agents" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">AI Agents</Link>
              <Link onClick={() => setIsOpen(false)} href="/solutions" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Solutions</Link>
              <Link onClick={() => setIsOpen(false)} href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Pricing</Link>
              <Link onClick={() => setIsOpen(false)} href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Contact</Link>
              <Link onClick={() => setIsOpen(false)} href="/book" className="block px-3 py-3 mt-4 text-center rounded-md bg-primary text-white font-medium shadow-lg">Book Consultation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
