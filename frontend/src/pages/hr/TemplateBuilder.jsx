import React, { useState } from 'react';
import { LayoutTemplate, Save, FileText, Plus, MousePointerClick, Type, AlignLeft, Bold, Italic } from 'lucide-react';
import { motion } from 'framer-motion';

const TemplateBuilder = () => {
  const [templateName, setTemplateName] = useState('New Software Engineer Offer');
  
  const variables = [
    { id: 1, name: 'Candidate_Name', label: 'Candidate Name' },
    { id: 2, name: 'Role_Title', label: 'Role Title' },
    { id: 3, name: 'Start_Date', label: 'Start Date' },
    { id: 4, name: 'Salary', label: 'Base Salary' },
    { id: 5, name: 'Equity', label: 'Equity/Stock' },
    { id: 6, name: 'Manager_Name', label: 'Manager Name' },
  ];

  const initialContent = `Dear {{Candidate_Name}},\n\nWe are thrilled to offer you the position of {{Role_Title}} at Acme Corp. We were incredibly impressed by your background and are confident you will be a valuable addition to our team.\n\nYour starting salary will be {{Salary}} per year, and you will report directly to {{Manager_Name}}. Your anticipated start date is {{Start_Date}}.\n\nAdditionally, you will receive {{Equity}} in company stock options, subject to our standard vesting schedule.\n\nWe look forward to welcoming you aboard!\n\nSincerely,\nThe HR Team`;
  
  const [content, setContent] = useState(initialContent);

  const insertVariable = (varName) => {
    setContent(prev => prev + ` {{${varName}}} `);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center">
            <LayoutTemplate className="w-6 h-6 mr-3 text-blue-400" />
            Template Builder
          </h2>
          <p className="text-sm text-slate-400 mt-1">Design automated offer templates using dynamic variables.</p>
        </div>
        <button className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25">
          <Save size={18} className="mr-2" />
          Save Template
        </button>
      </div>

      <motion.div variants={itemVariants} className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sidebar - Variables */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-5 flex flex-col h-full shadow-lg">
          <h3 className="text-white font-semibold flex items-center mb-4">
            <MousePointerClick className="w-4 h-4 mr-2 text-cyan-400" />
            Dynamic Variables
          </h3>
          <p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
            Click a variable to insert it into the editor at your cursor's position.
          </p>
          <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {variables.map((v) => (
              <button 
                key={v.id}
                onClick={() => insertVariable(v.name)}
                className="w-full text-left px-3 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/30 text-sm text-slate-300 transition-all flex justify-between items-center group"
              >
                <span>{v.label}</span>
                <Plus className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 mt-4">
            <button className="w-full py-2 bg-slate-800 text-xs font-medium text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-700 border-dashed hover:border-slate-500">
              + Add Custom Variable
            </button>
          </div>
        </div>

        {/* Main Editor */}
        <div className="lg:col-span-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 flex flex-col shadow-lg overflow-hidden relative">
          {/* Document Header */}
          <div className="p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
            <div className="flex items-center space-x-3 w-1/2">
              <FileText className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-white font-semibold w-full text-lg outline-none"
              />
            </div>
            
            {/* Fake Toolbar */}
            <div className="flex items-center space-x-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded"><Type className="w-4 h-4" /></button>
              <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded"><Bold className="w-4 h-4" /></button>
              <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded"><Italic className="w-4 h-4" /></button>
              <div className="w-px h-4 bg-slate-700 mx-1"></div>
              <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded"><AlignLeft className="w-4 h-4" /></button>
            </div>
          </div>
          
          {/* Editor Area */}
          <div className="flex-1 p-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full min-h-[400px] bg-transparent text-slate-300 resize-none outline-none leading-relaxed font-sans z-10 relative custom-scrollbar"
              placeholder="Start typing your offer letter template..."
            />
          </div>
          
          {/* Footer Preview Info */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
            <span>{content.split(/\s+/).filter(w => w.length > 0).length} words</span>
            <span className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div> Auto-saved just now
            </span>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default TemplateBuilder;
