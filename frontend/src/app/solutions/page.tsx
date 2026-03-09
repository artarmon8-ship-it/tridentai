"use client";
import { motion } from 'framer-motion';
import { Network, Database, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Solutions() {
  const solutions = [
    {
      title: "Enterprise Revenue Automation",
      icon: Network,
      description: "End-to-end automation of the lead-to-close pipeline. Autonomous research agents, dynamic personalized outreach, and strict CRM syncing.",
      features: ["Cognitive Lead Enrichment", "Multi-channel Sequencing", "Contract Generation"]
    },
    {
      title: "Cognitive Supply Chain Ops",
      icon: Layers,
      description: "Agents that monitor inventory APIs, predict stockouts using historical ML models, and autonomously draft vendor POs for human approval.",
      features: ["Predictive Analytics", "ERP Synchronization", "Vendor Communication"]
    },
    {
      title: "Unified Knowledge Graph",
      icon: Database,
      description: "Transform siloed enterprise data (Sharepoint, Slack, Drive) into a single vectorized graph queryable via natural language.",
      features: ["Real-time Vectorization", "RBAC compliance", "Source Citation"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Industry-Specific <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Pre-architected workflows designed to solve the most complex operational bottlenecks across modern enterprises.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {solutions.map((sol, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="glass aspect-video rounded-2xl border border-white/5 flex items-center justify-center p-8 text-primary overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <sol.icon className="w-24 h-24 opacity-50 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 spac-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Architecture Pattern
              </div>
              <h2 className="text-3xl font-bold mb-4">{sol.title}</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {sol.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {sol.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-gray-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/book" className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10 group">
                Discuss Implementation <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
