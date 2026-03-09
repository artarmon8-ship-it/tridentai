"use client";
import { motion } from 'framer-motion';
import { Bot, MessageSquare, ShoppingBag, Smartphone, Mic, Database, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const agents = [
  {
    icon: MessageSquare,
    title: "Customer Support AI",
    desc: "Autonomous support agents that handle 80% of tier-1 and tier-2 inquiries via email, chat, or social media.",
    capabilities: ["Multi-turn reasoning", "Action execution (refunds, edits)", "Seamless human-handoff", "Sentiment analysis"]
  },
  {
    icon: ShoppingBag,
    title: "Restaurant Ordering AI",
    desc: "Voice and text agents specialized in handling complex menu modifications, upselling, and direct POS integration.",
    capabilities: ["Natural conversational flow", "Allergies & custom logic", "Direct sync with Toast/Square", "Peak-hour queue handling"]
  },
  {
    icon: Smartphone,
    title: "WhatsApp AI Assistant",
    desc: "Reach your customers where they are. Full-featured AI agents living directly inside WhatsApp for commerce or support.",
    capabilities: ["Rich media handling", "Appointment scheduling", "Secure payment links", "Proactive outbounding"]
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    desc: "Inbound and outbound telephony agents that sound human, understand interruption, and synthesize emotion.",
    capabilities: ["Sub-500ms latency", "Dynamic interruptions", "Lead qualification", "CRM data ingestion"]
  },
  {
    icon: Database,
    title: "Internal Knowledge Agents",
    desc: "Private enterprise search that connects to your Notion, Slack, Drive, and JIRA to instantly serve employee queries.",
    capabilities: ["Enterprise RBAC compliance", "Source citation generation", "Cross-platform aggregation", "Real-time syncing"]
  },
  {
    icon: BarChart3,
    title: "Sales Automation Agents",
    desc: "Agents that research leads, personalize outreach scripts, manage inbox replies, and book calendar meetings automatically.",
    capabilities: ["Deep web lead research", "Multi-channel sequencing", "Objection handling loops", "Meeting orchestration"]
  }
];

export default function Agents() {
  return (
    <div className="pt-32 pb-24 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
        >
          <Bot className="w-4 h-4" /> Next-Generation Cognitive Systems
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Deploy <span className="text-white relative">
            Autonomous Agents
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/40 -z-10 rounded-sm" />
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Move beyond chatbots. We deploy goal-oriented AI agents capable of reasoning, tool use, and complex task execution across any industry.
        </motion.p>
      </section>

      {/* Architecture Diagram Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full aspect-video glass rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 text-center bg-[#010308] overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
          <h3 className="text-xl font-semibold mb-4 text-white z-10">Typical Agentic Architecture Flow</h3>
          <p className="text-gray-500 mb-8 max-w-lg z-10">
            Intake -> Intent Classification -> RAG Search -> Memory Retrieval -> Tool Execution -> Output Generation
          </p>
          <div className="flex gap-4 opacity-50 z-10">
            <div className="w-16 h-16 rounded border border-dashed border-gray-600 flex items-center justify-center">[ LLM ]</div>
            <div className="w-16 h-16 rounded border border-dashed border-gray-600 flex items-center justify-center">[ RAG ]</div>
            <div className="w-16 h-16 rounded border border-dashed border-gray-600 flex items-center justify-center">[ API ]</div>
          </div>
        </motion.div>
      </section>

      {/* Agents Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-8 border border-white/5 hover:bg-white/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
              <agent.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{agent.title}</h3>
            <p className="text-gray-400 text-sm mb-6 h-20">{agent.desc}</p>
            
            <div className="space-y-2 mb-8">
              {agent.capabilities.map((cap, j) => (
                <div key={j} className="flex items-center text-xs text-gray-300">
                  <span className="mr-2 text-primary px-1 bg-primary/20 rounded">✓</span>
                  {cap}
                </div>
              ))}
            </div>

            <Link href="/book" className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center mt-auto">
              Discuss deployment <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
