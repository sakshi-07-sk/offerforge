import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-blue-900/40"></div>
      
      {/* Moving gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen"
      ></motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Transform Your Hiring Workflow Today
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of modern HR teams who have eliminated manual paperwork and accelerated their onboarding process.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] transform hover:-translate-y-1 transition-all flex items-center justify-center"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold rounded-full border border-slate-600 hover:bg-slate-800 transition-all">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-slate-400 text-sm">14-day free trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
