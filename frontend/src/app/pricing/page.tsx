"use client";
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Starter",
    desc: "For small businesses exploring AI agency capabilities.",
    price: "$19.89",
    period: "per agent / month",
    setup: "$250 one-time setup fee",
    features: [
      "1 AI Agent Deployment",
      "Standard LLM Models (GPT-3.5/Claude Haiku)",
      "Basic RAG functionality",
      "Email Support",
      "Standard Analytics"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    desc: "For growing companies needing integrated automation.",
    price: "$299",
    period: "per month",
    setup: "$950 one-time setup fee",
    features: [
      "Up to 5 AI Agents",
      "Custom Workflow Automation",
      "Advanced LLM Models (GPT-4/Claude Opus)",
      "CRM & ERP Integrations",
      "Priority Email & Chat Support",
      "Advanced Analytics & Logging"
    ],
    cta: "Contact Sales",
    popular: true
  },
  {
    name: "Enterprise",
    desc: "Custom deployment on dedicated infrastructure.",
    price: "Custom",
    period: "annual contract",
    setup: "Tailored implementation",
    features: [
      "Unlimited AI Agents",
      "On-premise / VPC Deployment",
      "Fine-tuned Open Source Models",
      "Compliance & Security Audits",
      "Dedicated Success Manager",
      "24/7 Phone Support"
    ],
    cta: "Book Consultation",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Transparent, scalable <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Simple pricing models designed to grow with your architectural needs. No hidden tokens or usage spikes.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-8 border flex flex-col relative ${tier.popular ? 'border-primary shadow-[0_0_30px_rgba(0,102,255,0.15)] shadow-primary/20 scale-105 z-10' : 'border-white/5'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 flex justify-center -mt-3.5">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8 block">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-400 min-h-[40px]">{tier.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  {tier.period && <span className="text-sm text-gray-400">{tier.period}</span>}
                </div>
                <div className="text-xs text-primary font-medium mt-2 flex items-center">
                  <Info className="w-3 h-3 mr-1" /> {tier.setup}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-300">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={tier.name === 'Enterprise' ? '/book' : '/contact'} 
                className={`w-full py-3 rounded-xl font-medium text-center transition-all ${tier.popular ? 'bg-primary text-white hover:bg-blue-600' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <h2 className="text-2xl font-bold text-center mb-12">Detailed Feature Comparison</h2>
        <div className="glass rounded-2xl overflow-hidden border border-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-6 font-semibold text-white">Features</th>
                <th className="p-6 font-semibold text-center text-white">Starter</th>
                <th className="p-6 font-semibold text-center text-primary">Professional</th>
                <th className="p-6 font-semibold text-center text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: "Agent Limit", starter: "1", pro: "5", ent: "Unlimited" },
                { name: "Custom Tool Integration", starter: "-", pro: "Up to 3", ent: "Unlimited" },
                { name: "Vector Database Support", starter: "Shared", pro: "Dedicated", ent: "Dedicated / On-Prem" },
                { name: "SLA Guarantee", starter: "-", pro: "99.9%", ent: "99.99%" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 text-sm text-gray-300">{row.name}</td>
                  <td className="p-6 text-sm text-center text-gray-400">{row.starter}</td>
                  <td className="p-6 text-sm text-center font-medium text-gray-200">{row.pro}</td>
                  <td className="p-6 text-sm text-center text-gray-400">{row.ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
