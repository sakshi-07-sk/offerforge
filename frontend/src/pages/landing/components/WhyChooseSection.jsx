import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const WhyChooseSection = () => {
  const manual = [
    "Manually editing Word documents",
    "Prone to copy-paste errors",
    "Sending PDFs back and forth via email",
    "No way to track if candidate opened offer",
    "Physical or messy third-party signatures",
    "Scattered data across spreadsheets"
  ];

  const automated = [
    "Dynamic data population instantly",
    "Zero errors with standardized templates",
    "Automated email dispatching",
    "Real-time tracking and analytics",
    "Integrated secure digital signatures",
    "Centralized enterprise dashboard"
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Why OfferForge</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop managing paperwork. Start managing people.</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* Manual Workflow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-slate-800/30 border border-slate-800 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-slate-400 mb-6 flex items-center">
              The Old Way
            </h4>
            <ul className="space-y-4">
              {manual.map((item, i) => (
                <li key={i} className="flex items-start">
                  <XCircle className="w-5 h-5 text-slate-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden lg:flex flex-col items-center justify-center w-12 text-slate-600 font-bold text-xl">
            VS
          </div>

          {/* OfferForge Workflow */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.1)]"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-500/20">The New Way</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
              OfferForge
            </h4>
            <ul className="space-y-4">
              {automated.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
