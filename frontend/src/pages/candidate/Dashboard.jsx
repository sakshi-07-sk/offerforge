import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Clock, CheckCircle, XCircle, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    { name: 'Total Offers', value: '2', icon: FileText, color: 'text-purple-400', bg: 'from-purple-500/20 to-transparent', border: 'border-purple-500/30' },
    { name: 'Pending Offers', value: '1', icon: Clock, color: 'text-yellow-400', bg: 'from-yellow-500/20 to-transparent', border: 'border-yellow-500/30' },
    { name: 'Accepted Offers', value: '1', icon: CheckCircle, color: 'text-green-400', bg: 'from-green-500/20 to-transparent', border: 'border-green-500/30' },
    { name: 'Rejected Offers', value: '0', icon: XCircle, color: 'text-red-400', bg: 'from-red-500/20 to-transparent', border: 'border-red-500/30' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center">
            <User className="w-6 h-6 mr-3 text-purple-400" />
            My Candidate Profile
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Review your offers, sign digitally, and track onboarding.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div 
            variants={itemVariants}
            key={stat.name} 
            className={`bg-slate-900/80 backdrop-blur-md overflow-hidden rounded-2xl border ${stat.border} shadow-lg relative group transition-all hover:-translate-y-1 hover:shadow-purple-500/10`}
          >
            {/* Subtle Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-50`}></div>
            
            <div className="p-6 relative z-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`rounded-xl p-3 bg-slate-800 border ${stat.border} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-slate-400 truncate">
                      {stat.name}
                    </dt>
                    <dd>
                      <div className="text-3xl font-bold text-white mt-1">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="mt-8">
        <div className="bg-slate-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-slate-800 p-0 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="p-6 border-b border-slate-800 flex justify-between items-center relative z-10">
            <h3 className="text-lg font-bold text-white flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-400" />
              My Official Offers
            </h3>
          </div>
          
          <div className="p-6 relative z-10">
            <div 
              onClick={() => navigate('/candidate/view-offer')}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:bg-slate-800 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                    A
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors">Acme Corp - Senior Engineer</h4>
                    <p className="text-slate-400 text-sm">Issued on May 17, 2026</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-900/30 text-yellow-400 border border-yellow-700/50">Action Required</span>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => navigate('/candidate/view-offer')}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:bg-slate-800 transition-colors cursor-pointer group mt-4 opacity-70"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                    G
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Globex - Frontend Developer</h4>
                    <p className="text-slate-400 text-sm">Accepted on April 12, 2026</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-900/30 text-green-400 border border-green-700/50">Accepted</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CandidateDashboard;
