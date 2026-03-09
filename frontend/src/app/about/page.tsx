"use client";
import { motion } from 'framer-motion';
import { Users, Target, Shield, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Pragmatic Architecture",
    desc: "We don't build toys. Every system we design is built for production, scalable, and directly tied to measurable business ROI."
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Enterprise data is sacred. Our deployments utilize strict RBAC, isolated VPCs, and zero-retention policies for foundation models."
  },
  {
    icon: Zap,
    title: "Iterative Velocity",
    desc: "We move fast. By leveraging compound AI systems, we deploy minimum viable agents in weeks, not months."
  },
  {
    icon: Users,
    title: "Human-AI Symbiosis",
    desc: "We build systems that empower your workforce, eliminating mundane tasks so humans can focus on high-leverage creative work."
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          Architecting the <span className="text-primary">Autonomous</span> Enterprise
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          TridentAI was founded on a singular premise: the future of work is not software that demands human operation, but intelligent agents that operate themselves. We are a premier engineering collective bridging the gap between cutting-edge AI research and Fortune 500 deployment.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video w-full rounded-2xl overflow-hidden relative glass border border-white/5"
        >
          {/* Office/Team Placeholder Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020815] via-transparent to-transparent" />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Tenets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The engineering philosophy that drives every client engagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
