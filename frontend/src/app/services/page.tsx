"use client";
import { motion } from 'framer-motion';
import { Target, Bot, Workflow, Cpu, Code2, Repeat, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Target,
    title: "AI Strategy Consulting",
    desc: "Comprehensive audits of your current technical operations to identify high-ROI automation opportunities and develop a phased AI adoption roadmap.",
    benefits: ["Risk-free phased adoption", "Clear ROI projections", "Executive alignment"],
    useCase: "Evaluating readiness for generative AI deployment across enterprise departments."
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    desc: "Custom-built autonomous agents capable of complex reasoning, tool use, and long-term memory to handle sophisticated business processes.",
    benefits: ["24/7 autonomous operation", "Reduced human error", "Infinite scalability"],
    useCase: "Customer service agents that resolve complex multi-step technical support tickets."
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Connecting disparate software systems using intelligent middleware and cognitive loops to remove manual data entry and repetitive tasks.",
    benefits: ["90% reduction in manual tasks", "Real-time data synchronization", "Lower operational costs"],
    useCase: "Automated invoice processing and reconciliation into ERP systems."
  },
  {
    icon: Cpu,
    title: "LLM Integration",
    desc: "Embed Large Language Models (LLMs) securely within your proprietary data ecosystems boundaries, utilizing RAG (Retrieval-Augmented Generation).",
    benefits: ["Zero data leakage to public models", "Context-aware outputs", "Customizable model behavior"],
    useCase: "Internal HR chatbot that instantly answers employee questions based on company handbooks."
  },
  {
    icon: Code2,
    title: "Custom AI Software",
    desc: "End-to-end development of bespoke, AI-native applications that serve as your core product offering or internal tooling platform.",
    benefits: ["Competitive moat", "Native ML integration", "Cloud-scale architecture"],
    useCase: "Building an entirely new predictive analytics SaaS platform for the logistics industry."
  },
  {
    icon: Repeat,
    title: "AI Workflow Automation",
    desc: "Orchestrating agentic workflows where multiple specialized AI agents collaborate to achieve comprehensive business goals.",
    benefits: ["Multi-stage reasoning", "Self-correcting pipelines", "Human-in-the-loop controls"],
    useCase: "Automated content generation, review, and publishing pipeline for marketing teams."
  },
  {
    icon: ShieldCheck,
    title: "AI Security & Governance",
    desc: "Establishing strict guardrails, compliance protocols, and hallucination-prevention systems for production grade AI deployments.",
    benefits: ["Regulatory compliance", "Brand safety", "Predictable model outcomes"],
    useCase: "Ensuring an AI financial advisor adheres strictly to SEC guidelines without hallucinating advice."
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Enterprise AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Capabilities</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
        >
          We engineer sophisticated automation architectures that transform how your organization operates. Discover our core consulting and development services.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group border border-white/5 hover:border-primary/30 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-3xl">{service.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-5 border border-white/5 text-sm">
                    <h4 className="font-semibold text-white uppercase tracking-wider mb-2">Example Use Case</h4>
                    <p className="text-gray-400 italic">"{service.useCase}"</p>
                  </div>
                </div>

                <Link href="/book" className="inline-flex items-center text-primary font-medium hover:text-blue-400 transition-colors group/link">
                  Discuss this capability <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-32 px-4 text-center">
        <Link href="/book" className="px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]">
          Schedule Technical Discovery Call
        </Link>
      </section>
    </div>
  );
}
