"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'AI Strategy Consulting',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', service: 'AI Strategy', message: '' });
    } catch (err) {
      setError('An error occurred submitting your request. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Discuss your technical requirements with our engineering and integration team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Email Us</h3>
                  <p className="mt-2 text-gray-400">Our team will respond within 24 hours.</p>
                  <a href="mailto:hello@tridentai.space" className="mt-2 block text-primary hover:text-blue-400 transition-colors">hello@tridentai.space</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Call Us</h3>
                  <p className="mt-2 text-gray-400">Mon-Fri from 9am to 6pm EST.</p>
                  <a href="tel:+18005550198" className="mt-2 block text-primary hover:text-blue-400 transition-colors">+1 (800) 555-0198</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Enterprise HQ</h3>
                  <p className="mt-2 text-gray-400">100 AI Innovation Way<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 border border-white/5"
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-gray-400">Thank you for reaching out. An engineer will be in touch shortly to discuss your infrastructure.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input required type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input required type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input type="text" id="company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                  <select id="service" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="AI Strategy Consulting" className="bg-[#020815]">AI Strategy Consulting</option>
                    <option value="AI Agent Development" className="bg-[#020815]">AI Agent Development</option>
                    <option value="Business Process Automation" className="bg-[#020815]">Business Process Automation</option>
                    <option value="LLM Integration" className="bg-[#020815]">LLM Integration</option>
                    <option value="Other" className="bg-[#020815]">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                  <textarea required id="message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>Send Request <Send className="w-4 h-4 ml-2" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
