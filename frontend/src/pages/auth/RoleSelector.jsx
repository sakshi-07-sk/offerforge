import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Briefcase, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RoleSelector = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'admin',
      title: 'Admin Portal',
      description: 'System management, audits, and configuration.',
      icon: <Shield className="h-10 w-10 text-cyan-400" />,
      glowColor: 'bg-cyan-500/20',
      btnColor: 'bg-cyan-600 hover:bg-cyan-500',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
      path: '/admin/login'
    },
    {
      id: 'hr',
      title: 'HR Portal',
      description: 'Generate offers, track status, and candidate comms.',
      icon: <Briefcase className="h-10 w-10 text-blue-400" />,
      glowColor: 'bg-blue-500/20',
      btnColor: 'bg-blue-600 hover:bg-blue-500',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
      path: '/hr/login'
    },
    {
      id: 'candidate',
      title: 'Candidate Portal',
      description: 'View offers, sign digitally, and track onboarding.',
      icon: <User className="h-10 w-10 text-purple-400" />,
      glowColor: 'bg-purple-500/20',
      btnColor: 'bg-purple-600 hover:bg-purple-500',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60',
      path: '/candidate/login'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-500 blur-[150px] mix-blend-screen rounded-full"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-2 bg-slate-900 border border-slate-800 rounded-full mb-6 shadow-xl cursor-pointer" onClick={() => navigate('/')}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mr-3">
              <span className="font-bold text-white text-sm">O</span>
            </div>
            <span className="font-bold text-white tracking-tight pr-4">Offer<span className="text-cyan-400">Forge</span></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4">
            Select Your Workspace
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Secure, role-based access for your entire recruitment ecosystem.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full grid grid-cols-1 gap-8 md:grid-cols-3 relative z-10"
      >
        {portals.map((portal) => (
          <motion.div
            variants={itemVariants}
            key={portal.id}
            onClick={() => navigate(portal.path)}
            className={`cursor-pointer rounded-2xl border bg-slate-900/50 backdrop-blur-xl p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg relative overflow-hidden group ${portal.borderColor}`}
          >
            {/* Inner Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 blur-[50px] ${portal.glowColor} transition-all duration-500 group-hover:scale-150`}></div>
            
            <div className="bg-slate-800/80 p-5 rounded-2xl shadow-inner mb-8 border border-slate-700/50 relative z-10 group-hover:scale-110 transition-transform duration-300">
              {portal.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
              {portal.title}
            </h3>
            
            <p className="text-slate-400 mb-10 flex-grow relative z-10 text-sm leading-relaxed">
              {portal.description}
            </p>
            
            <button
              className={`w-full py-4 px-4 rounded-xl text-white font-bold flex items-center justify-center transition-all duration-300 shadow-lg relative z-10 ${portal.btnColor}`}
            >
              Enter Portal <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center relative z-10">
        <button
          onClick={() => navigate('/')}
          className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center mx-auto"
        >
          &larr; Back to Landing Page
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
