"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Bot, BrainCircuit, Rocket, Shield, Activity, Users, CheckCircle2, Building2, Store, LineChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Enterprise AI Consulting & Automation
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Transform Your Business <br className="hidden md:block" />
              with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Artificial Intelligence</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl text-center mb-10 leading-relaxed">
              We design and deploy intelligent AI systems, autonomous agents, and process automation to help enterprise organizations scale faster.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/book" className="px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] flex items-center justify-center gap-2">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions" className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all flex items-center justify-center">
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. Trusted AI Partner */}
      <section className="py-24 bg-[#01050b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Partner in Enterprise AI Transformation</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We bridge the gap between cutting-edge AI research and practical business application. Our expert team assesses your operations to implement robust, secure, and highly scalable AI architecture that drives immediate ROI.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic AI Roadmap Development",
                  "Security-first Enterprise Deployment",
                  "Seamless Legacy System Integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden glass border-white/5 p-8 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent"
            >
              {/* Abstract structural representation */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent mix-blend-screen" />
              <BrainCircuit className="w-48 h-48 text-primary/50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our AI Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions tailored to modernize your technological infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: 'AI Strategy', desc: 'Identify high-impact opportunities and develop a custom AI integration roadmap.' },
              { icon: Bot, title: 'AI Agents', desc: 'Deploy autonomous agents that reason and act upon complex business tasks.' },
              { icon: Rocket, title: 'Automation', desc: 'Streamline repetitive processes through intelligent robotic process automation.' },
              { icon: BrainCircuit, title: 'LLM Integration', desc: 'Embed large language models into your proprietary data and workflows securely.' },
              { icon: LineChart, title: 'Data Intelligence', desc: 'Transform unstructured data streams into predictive market intelligence.' },
              { icon: Shield, title: 'AI Security', desc: 'Ensure governance, compliance, and hallucination reduction in AI deployments.' },
            ].map((capability, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{capability.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industries Served */}
      <section className="py-24 bg-[#01050b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries Served</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Enterprise-grade AI frameworks tailored precisely to specific vertical requirements.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Finance', icon: LineChart },
              { name: 'Healthcare', icon: Activity },
              { name: 'Retail', icon: Store },
              { name: 'Restaurants', icon: Users },
              { name: 'SaaS', icon: Rocket },
              { name: 'Enterprise', icon: Building2 },
            ].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center justify-center p-6 glass rounded-xl text-center group"
              >
                <industry.icon className="w-8 h-8 text-gray-500 group-hover:text-primary transition-colors mb-4" />
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured AI Solutions</h2>
              <p className="text-gray-400 max-w-2xl">Off-the-shelf and highly customizable intelligent systems ready for deployment.</p>
            </div>
            <Link href="/solutions" className="text-primary hover:text-blue-400 flex items-center font-medium transition-colors whitespace-nowrap">
              View All Solutions <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'AI Customer Support Agents', desc: 'Support platforms that resolve 80% of tier-1 inquiries instantly using RAG architecture.', highlight: '24/7 Autonomous' },
              { title: 'Restaurant AI Ordering', desc: 'Voice and text-based multi-modal ordering bots that integrate directly with existing POS systems.', highlight: 'Voice & Text' },
              { title: 'AI Business Automation', desc: 'Connecting internal APIs, CRM, and ERPs through cognitive autonomous reasoning loops.', highlight: 'Workflow Sync' },
              { title: 'AI Knowledge Assistants', desc: 'Secure internal portals that instantly surface proprietary company data for employees.', highlight: 'Enterprise RAG' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 pr-24">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.desc}</p>
                <button className="text-sm font-medium text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all flex items-center">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Studies & Testimonials (Placeholders) */}
      <section className="py-24 bg-[#01050b] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Trusted by Forward-Thinking Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { stat: '300%', label: 'Increase in lead response time', company: 'Global SaaS Corp' },
              { stat: '$2.4M', label: 'Saved in operational overhead', company: 'Retail Enterprise' },
              { stat: '10x', label: 'Faster internal data retrieval', company: 'Financial Institution' },
            ].map((study, i) => (
              <div key={i} className="p-8 glass rounded-2xl">
                <div className="text-4xl font-extrabold text-primary mb-2">{study.stat}</div>
                <div className="text-gray-300 font-medium mb-4">{study.label}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{study.company}</div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-xl md:text-2xl font-medium italic text-gray-300 leading-relaxed mb-6">
              "TridentAI entirely redefined our customer infrastructure. The AI agents they deployed act with a level of reasoning and accuracy we didn't think was possible yet."
            </div>
            <div className="font-semibold text-white">Chief Technology Officer</div>
            <div className="text-sm text-gray-500">Fortune 500 Enterprise</div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Ready to Accelerate Your AI Journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Book a free executive consultation to discuss your specific infrastructure, constraints, and AI opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-primary hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_40px_rgba(0,102,255,0.6)] hover:scale-105">
              Book Free AI Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
