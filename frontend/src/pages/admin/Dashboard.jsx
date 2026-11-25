import React from 'react';
import { Users, FileText, CheckCircle, XCircle, Activity, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  // Mock data for dashboard
  const stats = [
    { name: 'Total HR Users', value: '12', icon: Users, color: 'text-cyan-400', bg: 'from-cyan-500/20 to-transparent', border: 'border-cyan-500/30' },
    { name: 'Total Candidates', value: '156', icon: Users, color: 'text-purple-400', bg: 'from-purple-500/20 to-transparent', border: 'border-purple-500/30' },
    { name: 'Total Offers', value: '142', icon: FileText, color: 'text-blue-400', bg: 'from-blue-500/20 to-transparent', border: 'border-blue-500/30' },
    { name: 'Accepted Offers', value: '98', icon: CheckCircle, color: 'text-green-400', bg: 'from-green-500/20 to-transparent', border: 'border-green-500/30' },
    { name: 'Rejected Offers', value: '12', icon: XCircle, color: 'text-red-400', bg: 'from-red-500/20 to-transparent', border: 'border-red-500/30' },
    { name: 'Pending Signatures', value: '32', icon: FileText, color: 'text-yellow-400', bg: 'from-yellow-500/20 to-transparent', border: 'border-yellow-500/30' },
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
            <Shield className="w-6 h-6 mr-3 text-cyan-400" />
            Admin Command Center
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            System overview and top-level metrics.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <motion.div 
            variants={itemVariants}
            key={stat.name} 
            className={`bg-slate-900/80 backdrop-blur-md overflow-hidden rounded-2xl border ${stat.border} shadow-lg relative group transition-all hover:-translate-y-1 hover:shadow-cyan-500/10`}
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
        <div className="bg-slate-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-slate-800 p-6 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-lg font-bold text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-cyan-400" />
              Recent System Activity
            </h3>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium">View All Logs &rarr;</button>
          </div>
          
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500 bg-slate-800/30">
                  <th className="p-4 font-semibold rounded-tl-lg">Event</th>
                  <th className="p-4 font-semibold">User</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold rounded-tr-lg">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm text-white font-medium">New HR Account Created</td>
                  <td className="p-4 text-sm text-slate-400">admin@offerforge.com</td>
                  <td className="p-4"><span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">Success</span></td>
                  <td className="p-4 text-sm text-slate-500">2 mins ago</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm text-white font-medium">System Configuration Updated</td>
                  <td className="p-4 text-sm text-slate-400">admin@offerforge.com</td>
                  <td className="p-4"><span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-900/30 text-green-400 border border-green-800">Success</span></td>
                  <td className="p-4 text-sm text-slate-500">1 hour ago</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-sm text-white font-medium">Failed Login Attempt</td>
                  <td className="p-4 text-sm text-slate-400">unknown IP</td>
                  <td className="p-4"><span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-900/30 text-red-400 border border-red-800">Warning</span></td>
                  <td className="p-4 text-sm text-slate-500">3 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;
