"use client";
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    title: "The Future of AI Agents in Enterprise Architecture",
    excerpt: "Why static software is dying, and how autonomous agents that reason and act are replacing traditional API architectures.",
    category: "Architecture",
    date: "Oct 24, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "How AI Automation Saves Businesses Millions",
    excerpt: "A deep dive into cognitive workflow automation and the exact ROI metrics we're seeing across Fortune 500 deployments.",
    category: "Case Study",
    date: "Oct 18, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Voice AI for Restaurants: The End of Missed Calls",
    excerpt: "Implementing multi-modal voice agents that integrate directly with POS systems to capture every order during peak hours.",
    category: "Industry",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Deploying LLMs in the Enterprise Securely",
    excerpt: "How to prevent data leakage and hallucination using advanced Retrieval-Augmented Generation (RAG) and RBAC.",
    category: "Security",
    date: "Sep 29, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Trident AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Insights</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Deep technical research, case studies, and thought leadership from our team of AI engineers.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                {/* Fallback pattern if image fails */}
                <div className="absolute inset-0 bg-primary/20 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                  <span className="text-xl font-bold uppercase tracking-widest">{post.category}</span>
                </div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" 
                  style={{ backgroundImage: `url(${post.image})` }} 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <span className="text-primary">{post.category}</span>
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-white hover:text-primary transition-colors w-fit">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-24 text-center px-4">
        <div className="glass max-w-3xl mx-auto rounded-3xl p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Subscribe to our Engineering Newsletter</h3>
          <p className="text-gray-400 mb-8 relative z-10">Get notified when we publish new architectural breakdowns.</p>
          <form className="relative z-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
            />
            <button type="submit" className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
