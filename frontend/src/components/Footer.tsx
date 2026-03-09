import React from 'react';
import Link from 'next/link';
import { Bot, Hexagon, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020815] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-1 lg:pr-8">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
              <Hexagon className="text-primary w-6 h-6" />
              TridentAI
            </Link>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              We design and deploy intelligent AI systems, agents, and automation to help organizations scale faster.
            </p>
            <div className="mt-8">
              <Link href="/book" className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-400 transition-colors">
                Book a consultation <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider mb-6">Capabilities</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">AI Strategy</Link></li>
              <li><Link href="/agents" className="text-gray-400 hover:text-white transition-colors text-sm">AI Agents</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Automation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">LLM Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TridentAI Space. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
