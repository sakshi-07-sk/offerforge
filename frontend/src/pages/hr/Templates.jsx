import React, { useState } from 'react';
import { Plus, Edit, Trash2, FileText, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Templates = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Standard Software Engineer Offer', createdAt: '2026-05-10', type: 'Engineering' },
    { id: 2, name: 'Senior Manager Offer', createdAt: '2026-05-12', type: 'Management' },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
            <FileText className="w-6 h-6 mr-3 text-cyan-400" />
            Offer Templates
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Manage your reusable offer letter templates.
          </p>
        </div>
        <button className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5">
          <Plus size={18} className="mr-2" />
          Create Template
        </button>
      </div>

      <motion.div variants={itemVariants}>
        <div className="bg-slate-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-slate-800 overflow-hidden relative">
          
          <div className="p-5 border-b border-slate-800 bg-slate-900 flex justify-between items-center relative z-10">
            <h3 className="font-semibold text-white">Active Templates</h3>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search templates..." 
                className="pl-9 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white transition-all w-64"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500 bg-slate-800/30">
                  <th className="p-5 font-semibold">Template Name</th>
                  <th className="p-5 font-semibold">Category</th>
                  <th className="p-5 font-semibold">Created Date</th>
                  <th className="p-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 bg-slate-900/40">
                {templates.map((template) => (
                  <tr key={template.id} className="hover:bg-slate-800/60 transition-colors group">
                    <td className="p-5">
                      <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-slate-500" />
                        {template.name}
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {template.type}
                      </span>
                    </td>
                    <td className="p-5 whitespace-nowrap">
                      <div className="text-sm text-slate-400">
                        {template.createdAt}
                      </div>
                    </td>
                    <td className="p-5 whitespace-nowrap text-right text-sm font-medium">
                      <button className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-800/50 hover:bg-slate-800 rounded-lg mr-2 transition-all">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-400 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {templates.length === 0 && (
              <div className="p-10 text-center text-slate-500">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-20" />
                No templates found. Create one to get started.
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-slate-800 bg-slate-900/50 text-xs text-slate-500 flex justify-between items-center">
            <span>Showing {templates.length} templates</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Templates;
