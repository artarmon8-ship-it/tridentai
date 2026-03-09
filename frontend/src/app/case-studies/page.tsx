"use client";
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const studies = [
    {
      metric: "80%",
      metricDesc: "Reduction in Support Tickets",
      title: "Global Fintech Automates Compliance Routing",
      desc: "By deploying a network of 5 autonomous agents across Zendesk and internal Slack, we reduced manual compliance routing by 80%, saving 12,000 human-hours annually."
    },
    {
      metric: "$4.2M",
      metricDesc: "Annual Revenue Recaptured",
      title: "National Restaurant Chain Voice Ordering",
      desc: "Implemented a sub-500ms latency voice AI agent that took drive-thru orders with 99.4% accuracy, directly syncing to Toast POS during peak volume hours."
    },
    {
      metric: "10x",
      metricDesc: "Faster Code Review Cycles",
      title: "SaaS Enterprise Code-Review Agents",
      desc: "Engineered specialized LLM agents integrated via GitHub Actions to perform preliminary security audits and architectural reviews on all new PRs."
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
          Proven <span className="text-primary">Outcomes</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          We measure success not in parameters or tokens, but in raw operational efficiency and measurable ROI.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/5 flex flex-col"
            >
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="text-5xl font-extrabold text-white mb-2">{study.metric}</div>
                <div className="text-primary font-medium tracking-wide uppercase text-sm">{study.metricDesc}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{study.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
