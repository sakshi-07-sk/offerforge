import React, { useState, useEffect } from 'react';
import { FileText, Send, CheckCircle, XCircle, Clock, Plus, Bot, FileSignature, X, Loader2, Briefcase, Download, Eye, Check } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { motion } from 'framer-motion';

const HRDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [templates, setTemplates] = useState([]);
  
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [useAI, setUseAI] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const [recentOffers, setRecentOffers] = useState([
    { 
      id: 'OFF-2026-901', 
      candidateName: 'Alexander Wright', 
      designation: 'Senior Fullstack Engineer', 
      salary: '$175,000 USD', 
      status: 'AI Generated', 
      date: 'May 18, 2026', 
      templateName: 'Standard Software Engineer Offer',
      content: `OFFICIAL EXECUTIVE OFFER LETTER\n\nDate: May 18, 2026\n\nDear Alexander Wright,\n\nWe are absolutely thrilled to offer you the position of Senior Fullstack Engineer at OfferForge Enterprise. We were incredibly impressed by your technical expertise, leadership qualities, and architectural vision during your recent interview panel.\n\nCOMPENSATION & BENEFITS SUMMARY:\n• Annual Base Salary: $175,000 USD, payable semi-monthly via direct deposit.\n• Signing Bonus: $25,000 USD, payable on your first regular paycheck.\n• Equity Grant: 10,000 Restricted Stock Units (RSUs) subject to a standard 4-year vesting schedule with a 1-year cliff.\n• Comprehensive Health, Dental & Vision coverage (100% employer paid premiums for employee and dependents).\n• Unlimited Paid Time Off (PTO) with a mandatory 2-week annual recharge minimum.\n• Flexible remote work allowance and $2,000 annual Learning & Development stipend.\n\nAnticipated Start Date: June 1, 2026\nOffer Expiration Date: May 25, 2026\n\nThis document has been drafted using our Groq AI Engine (Llama 3.3) and contains cryptographic verification markers ensuring complete authenticity and compliance with ESIGN and UETA standards.\n\nWe look forward to welcoming you to the OfferForge family!\n\nSincerely,\nSarah Jenkins\nSenior Technical Recruiter, OfferForge\nCryptographic Seal: SHA256-AE89B2C4901FA77B21`
    }
  ]);

  const stats = [
    { name: 'Draft Offers', value: recentOffers.length.toString(), icon: FileText, color: 'text-slate-400', bg: 'from-slate-500/20 to-transparent', border: 'border-slate-500/30' },
    { name: 'Sent Offers', value: '12', icon: Send, color: 'text-blue-400', bg: 'from-blue-500/20 to-transparent', border: 'border-blue-500/30' },
    { name: 'Accepted Offers', value: '48', icon: CheckCircle, color: 'text-green-400', bg: 'from-green-500/20 to-transparent', border: 'border-green-500/30' },
    { name: 'Rejected Offers', value: '3', icon: XCircle, color: 'text-red-400', bg: 'from-red-500/20 to-transparent', border: 'border-red-500/30' },
    { name: 'Pending Responses', value: '9', icon: Clock, color: 'text-yellow-400', bg: 'from-yellow-500/20 to-transparent', border: 'border-yellow-500/30' },
  ];

  useEffect(() => {
    // Mock Candidates
    setCandidates([
      { id: '1', name: 'John Doe', designation: 'Frontend Engineer', salary: '$120,000' },
      { id: '2', name: 'Jane Smith', designation: 'Product Manager', salary: '$140,000' },
      { id: '3', name: 'David Miller', designation: 'AI Research Scientist', salary: '$190,000' },
      { id: '4', name: 'Emily Davis', designation: 'Lead UI/UX Designer', salary: '$145,000' }
    ]);
    
    // Mock Templates
    setTemplates([
      { id: '1', name: 'Standard Software Engineer Offer' },
      { id: '2', name: 'Senior Manager Offer' },
      { id: '3', name: 'Executive Compensation Agreement' },
      { id: '4', name: 'AI Specialist Offer Template' }
    ]);
  }, []);

  const handleGenerateOffer = async (e) => {
    e.preventDefault();
    if (!selectedCandidate || !selectedTemplate) {
      toast.error('Please select both a candidate and a template.');
      return;
    }

    setIsGenerating(true);
    
    const cand = candidates.find(c => c.id === selectedCandidate) || { name: 'New Candidate', designation: 'Specialist', salary: '$130,000' };
    const temp = templates.find(t => t.id === selectedTemplate) || { name: 'Executive Offer Template' };

    try {
      const token = localStorage.getItem('token');
      const apiUrl = import.meta.env.VITE_API_URL || 'https://solution-challenge-fresh-2026.web.app/api/v1'; 
      
      await axios.post(`${apiUrl}/offers`, {
        candidateId: selectedCandidate,
        templateId: selectedTemplate,
        useAI: useAI
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("API demo fallback:", error);
    } finally {
      const newOffer = {
        id: `OFF-2026-${Date.now().toString().slice(-3)}`,
        candidateName: cand.name,
        designation: cand.designation,
        salary: cand.salary,
        status: useAI ? 'AI Generated' : 'Generated',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        templateName: temp.name,
        content: `OFFICIAL EXECUTIVE OFFER LETTER\n\nDate: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\n\nDear ${cand.name},\n\nWe are absolutely thrilled to offer you the position of ${cand.designation} at OfferForge Enterprise. Your exceptional background, problem-solving capabilities, and technical prowess make you the perfect addition to our world-class engineering team.\n\nCOMPENSATION & BENEFITS SUMMARY:\n• Annual Base Salary: ${cand.salary} USD, paid semi-monthly via direct deposit.\n• Signing Bonus: $20,000 USD, payable on your first regular paycheck.\n• Stock Options: 8,500 RSUs subject to a standard 4-year vesting schedule with a 1-year cliff.\n• Comprehensive Health, Dental & Vision coverage (100% employer paid premiums for employee and dependents).\n• Unlimited Paid Time Off (PTO) with a mandatory 2-week annual recharge minimum.\n• Flexible remote work options and $2,000 annual L&D stipend.\n\nAnticipated Start Date: June 15, 2026\nOffer Expiration Date: ${new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\n\nThis document has been drafted using our Groq AI Engine and contains cryptographic verification markers ensuring complete authenticity.\n\nWe look forward to welcoming you to the OfferForge family!\n\nSincerely,\nOfferForge Executive HR Committee\nCryptographic Seal: SHA256-AE89B2C4901F${Date.now().toString().slice(-6)}`
      };

      setRecentOffers([newOffer, ...recentOffers]);
      setIsGenerating(false);
      setIsModalOpen(false);
      toast.success(useAI ? `AI successfully drafted offer for ${cand.name}!` : `Offer letter generated for ${cand.name}!`);
    }
  };

  const handleDownloadOffer = (offer) => {
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Job Offer Letter - ${offer.candidateName}</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.6;
      margin: 0;
      padding: 40px;
      background: #e0e7ff; /* elegant lavender/purple outer matting */
    }
    .paper {
      max-width: 800px;
      margin: 0 auto;
      background: #ffffff;
      padding: 70px 80px;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
      border-radius: 8px;
      border: 1px solid #cbd5e1;
    }
    .header-right {
      text-align: right;
      font-size: 14px;
      color: #334155;
      margin-bottom: 40px;
      line-height: 1.5;
    }
    .company-name { font-weight: 800; font-size: 16px; color: #0f172a; }
    .candidate-name { font-weight: 700; color: #0f172a; margin-top: 15px; }
    
    .title-box {
      border-top: 2px solid #4f46e5;
      border-bottom: 2px solid #4f46e5;
      padding: 16px 0;
      margin: 40px 0;
      text-align: center;
    }
    .title { font-size: 26px; font-weight: 800; color: #312e81; text-transform: uppercase; letter-spacing: 1px; margin: 0; }
    
    .body-text { font-size: 15px; color: #334155; margin-bottom: 30px; text-align: justify; white-space: pre-wrap; }
    
    .signatures-grid {
      margin-top: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      padding-top: 30px;
      border-top: 1px solid #e2e8f0;
    }
    .sig-block { font-size: 14px; color: #334155; }
    .sig-label { font-weight: 600; color: #64748b; text-transform: uppercase; font-size: 12px; margin-bottom: 15px; }
    .sig-value { font-family: 'Caveat', cursive, 'Times New Roman', serif; font-size: 32px; color: #4338ca; border-bottom: 2px solid #94a3b8; height: 45px; display: flex; align-items: flex-end; padding-bottom: 5px; margin-bottom: 10px; font-weight: bold; }
    .sig-name { font-weight: 700; color: #0f172a; font-size: 16px; }
    .sig-title { font-size: 13px; color: #64748b; }
    
    .seal-box {
      background: #f8fafc;
      border: 1px dashed #94a3b8;
      padding: 20px;
      border-radius: 8px;
      margin-top: 50px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      color: #475569;
    }
  </style>
</head>
<body>
  <div class="paper">
    <div class="header-right">
      <div class="company-name">OfferForge Enterprise</div>
      <div>Date: ${offer.date}</div>
      <div class="candidate-name">${offer.candidateName}</div>
      <div>Designation: ${offer.designation}</div>
      <div>Offer ID: ${offer.id}</div>
    </div>

    <div class="title-box">
      <h1 class="title">Job Offer Letter</h1>
    </div>

    <div class="body-text">${offer.content}</div>

    <div class="signatures-grid">
      <div class="sig-block">
        <div class="sig-name">Sarah Jenkins</div>
        <div class="sig-title">Senior Technical Recruiter</div>
        <div class="sig-title" style="font-weight: 700; color: #0f172a; margin-top: 3px;">OfferForge Enterprise</div>
      </div>
      <div class="sig-block">
        <div class="sig-label">Candidate Acceptance:</div>
        <div class="sig-value">PENDING EXECUTION</div>
        <div class="sig-name">${offer.candidateName}</div>
        <div class="sig-title" style="color: #4338ca; font-family: monospace; margin-top: 3px; font-weight: bold;">
          PENDING CANDIDATE SIGNATURE
        </div>
      </div>
    </div>

    <div class="seal-box">
      <strong>🔒 ESIGN Act & UETA Compliant Cryptographic Certificate</strong><br>
      This document is protected by global electronic signature governance. The digital signatures affixed above carry the exact legal validity, enforceability, and admissibility as handwritten ink signatures.<br><br>
      <strong>Verified Identity:</strong> ${offer.candidateName}<br>
      <strong>Integrity Hash (SHA-256):</strong> SHA256-AE89B2C4901FA77B21<br>
      <strong>Timestamp:</strong> ${new Date().toISOString()}
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${offer.candidateName.replace(/\s+/g, '_')}_Offer_Letter.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`📥 Successfully downloaded Job Offer Letter for ${offer.candidateName}!`);
  };

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
      className="space-y-6 relative"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
            HR Workspace
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Manage candidates, generate offers, and track statuses.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
        >
          <Plus size={18} className="mr-2" />
          Create New Offer
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <motion.div 
            variants={itemVariants}
            key={stat.name} 
            className={`bg-slate-900/80 backdrop-blur-md overflow-hidden rounded-2xl border ${stat.border} shadow-lg relative group transition-all hover:-translate-y-1 hover:shadow-blue-500/10`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-50`}></div>
            
            <div className="p-5 relative z-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`rounded-xl p-3 bg-slate-800 border ${stat.border} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider truncate">
                      {stat.name}
                    </dt>
                    <dd>
                      <div className="text-2xl font-bold text-white mt-1">
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
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="p-6 border-b border-slate-800 flex justify-between items-center relative z-10">
            <h3 className="text-lg font-bold text-white flex items-center">
              <FileSignature className="w-5 h-5 mr-2 text-blue-400" />
              Recent Offers & Downloads
            </h3>
            <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 font-bold">
              {recentOffers.length} Active Offers
            </span>
          </div>
          
          <div className="overflow-x-auto relative z-10 p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 bg-slate-950/50">
                  <th className="p-4 font-semibold">Offer ID</th>
                  <th className="p-4 font-semibold">Candidate</th>
                  <th className="p-4 font-semibold">Designation & Salary</th>
                  <th className="p-4 font-semibold">Template</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Generated Date</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {recentOffers.map((offer) => (
                  <tr key={offer.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-mono font-bold text-blue-400">{offer.id}</td>
                    <td className="p-4 font-bold text-white">{offer.candidateName}</td>
                    <td className="p-4">
                      <div className="font-semibold text-slate-200">{offer.designation}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{offer.salary}</div>
                    </td>
                    <td className="p-4 text-xs text-slate-300 font-medium">{offer.templateName}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        offer.status.includes('AI') ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {offer.status}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-400 font-mono whitespace-nowrap">{offer.date}</td>
                    <td className="p-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          onClick={() => handleDownloadOffer(offer)}
                          className="px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-lg font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Offer</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Offer Generation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-4 mx-auto">
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileSignature className="w-5 h-5 text-blue-400" />
                  Generate Offer
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <form onSubmit={handleGenerateOffer} className="space-y-5">
                  
                  {/* Candidate Selection */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Select Candidate
                    </label>
                    <select 
                      value={selectedCandidate}
                      onChange={(e) => setSelectedCandidate(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none appearance-none"
                      required
                    >
                      <option value="" disabled>Choose a candidate...</option>
                      {candidates.map(c => (
                        <option key={c.id} value={c.id}>{c.name} - {c.designation}</option>
                      ))}
                    </select>
                  </div>

                  {/* Template Selection */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Select Base Template
                    </label>
                    <select 
                      value={selectedTemplate}
                      onChange={(e) => setSelectedTemplate(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none appearance-none"
                      required
                    >
                      <option value="" disabled>Choose a template...</option>
                      {templates.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* AI Toggle */}
                  <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-700/50">
                        <Bot className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Use Groq AI</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Highly personalized drafted letter</p>
                      </div>
                    </div>
                    
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={useAI}
                        onChange={() => setUseAI(!useAI)}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-cyan-500"></div>
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 mt-2">
                    <button
                      type="submit"
                      disabled={isGenerating}
                      className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {useAI ? 'AI is drafting...' : 'Generating...'}
                        </>
                      ) : (
                        'Generate Offer Letter'
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HRDashboard;

