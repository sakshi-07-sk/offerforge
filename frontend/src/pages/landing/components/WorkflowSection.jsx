import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, UserPlus, FilePlus, FileText, Send, PenTool, CheckCircle } from 'lucide-react';

const WorkflowSection = () => {
  const steps = [
    { title: "Template Creation", icon: <LayoutTemplate className="w-6 h-6 text-cyan-400" />, delay: 0.1 },
    { title: "Candidate Registration", icon: <UserPlus className="w-6 h-6 text-blue-400" />, delay: 0.2 },
    { title: "Offer Generation", icon: <FilePlus className="w-6 h-6 text-purple-400" />, delay: 0.3 },
    { title: "PDF Export", icon: <FileText className="w-6 h-6 text-pink-400" />, delay: 0.4 },
    { title: "Email Delivery", icon: <Send className="w-6 h-6 text-green-400" />, delay: 0.5 },
    { title: "Digital Signature", icon: <PenTool className="w-6 h-6 text-yellow-400" />, delay: 0.6 },
    { title: "Offer Acceptance", icon: <CheckCircle className="w-6 h-6 text-emerald-400" />, delay: 0.7 },
  ];

  return (
    <section id="workflow" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Seamless Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">From draft to signature in minutes</h3>
          <p className="text-slate-400 text-lg">
            A fully automated pipeline that eliminates manual data entry, reducing human error and speeding up onboarding.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-emerald-500/20 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: step.delay }}
                className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 text-left sm:text-right'} mb-4 sm:mb-0 pl-16 sm:pl-0 relative`}>
                  <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:border-slate-500 transition-colors inline-block w-full max-w-md shadow-xl group">
                    <div className="flex items-center space-x-4 mb-2">
                      {/* Mobile icon inside card */}
                      <div className="sm:hidden bg-slate-900 p-3 rounded-lg border border-slate-700">{step.icon}</div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                    </div>
                    <p className="text-slate-400 text-sm">Automated logic flows directly into the next phase without manual intervention.</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,211,238,0.1)] hidden sm:flex">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
