import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">OfferForge 2.0 is now live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Automate Offer Letters. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Accelerate Hiring.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            OfferForge helps HR teams create, manage, sign, and track offer letters with automation, digital signatures, and enterprise-grade workflows.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 flex items-center justify-center"
            >
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center group">
              <Play className="mr-2 h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" /> Watch Demo
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-slate-400"
          >
            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-cyan-400" /> No credit card required</div>
            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-cyan-400" /> 14-day free trial</div>
            <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-cyan-400" /> Cancel anytime</div>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20"></div>
          <div className="relative rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] flex flex-col">
            {/* Fake Browser Header */}
            <div className="h-10 border-b border-slate-800 bg-slate-900 flex items-center px-4 space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <div className="mx-auto bg-slate-800 rounded-md h-5 w-1/3 border border-slate-700"></div>
            </div>
            {/* Dashboard Body Mockup */}
            <div className="flex-1 p-6 flex space-x-6">
              {/* Sidebar */}
              <div className="w-48 hidden md:flex flex-col space-y-4 opacity-50">
                <div className="h-8 bg-slate-800 rounded-md w-full mb-4"></div>
                <div className="h-4 bg-slate-800 rounded-md w-3/4"></div>
                <div className="h-4 bg-slate-800 rounded-md w-full"></div>
                <div className="h-4 bg-slate-800 rounded-md w-5/6"></div>
                <div className="h-4 bg-slate-800 rounded-md w-4/5"></div>
              </div>
              {/* Main Content */}
              <div className="flex-1 flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <div className="h-8 bg-slate-800 rounded-md w-1/4"></div>
                  <div className="h-8 bg-cyan-900/30 border border-cyan-800 rounded-md w-32"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 bg-slate-800/50 rounded-lg border border-slate-700 p-4 flex flex-col justify-between">
                      <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                      <div className="h-6 bg-slate-600 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 bg-slate-800/30 rounded-lg border border-slate-700"></div>
              </div>
            </div>
          </div>
          
          {/* Floating animated elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-8 top-1/4 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl hidden lg:block backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-500/20 p-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Offer Accepted</div>
                <div className="text-xs text-slate-400">Sarah Jenkins</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -left-12 bottom-1/3 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl hidden lg:block backdrop-blur-md"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-cyan-500/20 p-2 rounded-full">
                <div className="h-5 w-5 text-cyan-400 font-bold text-center leading-5">PDF</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Generated</div>
                <div className="text-xs text-slate-400">Software Engineer</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
