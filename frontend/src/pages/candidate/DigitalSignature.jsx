import React, { useState, useEffect } from 'react';
import { 
  FileSignature, Download, ShieldCheck, PenTool, CheckCircle, 
  FileText, Lock, Award, Clock, ArrowRight, Check, Sparkles, 
  ExternalLink, FileCode, Terminal, AlertCircle, Building2, User,
  Briefcase, Calendar, DollarSign, Percent, FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const DigitalSignature = () => {
  const [signature, setSignature] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [activeTab, setActiveTab] = useState('preview'); // 'preview', 'terms', 'legal'
  const [cryptoHash, setCryptoHash] = useState('SHA256-PENDING...');

  // Generate a live simulated cryptographic hash as the user types their signature
  useEffect(() => {
    if (signature.trim().length > 0) {
      const pseudoHash = 'SHA256-' + Array.from(signature)
        .map(c => c.charCodeAt(0).toString(16))
        .join('')
        .padEnd(32, '0A1B2C3D4E5F6')
        .toUpperCase()
        .slice(0, 32);
      setCryptoHash(pseudoHash);
    } else {
      setCryptoHash('SHA256-PENDING...');
    }
  }, [signature]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 28 } }
  };

  const handleSign = (e) => {
    e.preventDefault();
    if (signature.trim().length > 0) {
      setIsSigned(true);
      toast.success('🎉 Offer successfully signed! Welcome to the team!');
    } else {
      toast.error('Please enter your full legal name to sign.');
    }
  };

  const handleDownload = (filename = 'Job_Offer_Letter_AcmeCorp.html', isCountersigned = false) => {
    const statusText = isCountersigned ? 'COUNTERSIGNED & EXECUTED' : 'PENDING CANDIDATE SIGNATURE';
    const sigDisplay = isCountersigned ? signature : 'PENDING EXECUTION';

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Job Offer Letter - Acme Corp</title>
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
    
    .body-text { font-size: 15px; color: #334155; margin-bottom: 20px; text-align: justify; }
    .salutation { font-weight: 600; font-size: 16px; color: #0f172a; margin-bottom: 25px; }
    
    .bullet-list { margin: 15px 0 25px 0; padding-left: 25px; color: #334155; font-size: 15px; line-height: 1.6; }
    .bullet-list li { margin-bottom: 8px; }
    
    .closing { margin-top: 40px; font-size: 15px; color: #334155; margin-bottom: 40px; }
    
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
      <div class="company-name">Acme Corp</div>
      <div>May 18, 2026</div>
      <div class="candidate-name">Alexander Wright</div>
      <div>123 Tech Boulevard, Apt 4B</div>
      <div>San Francisco, CA 94107</div>
    </div>

    <div class="title-box">
      <h1 class="title">Job Offer Letter</h1>
    </div>

    <div class="salutation">Dear Alexander Wright,</div>

    <div class="body-text">We are pleased to offer you the position of Senior Software Engineer at Acme Corp. We believe your skills and experience make you an excellent fit and a valuable addition to our organization. We look forward to welcoming you to our team.</div>

    <div class="body-text">Your starting date will be June 1, 2026, and your initial salary will be $175,000 USD per year. Your salary will be paid on a semi-monthly basis, starting on the date of the next regular pay period.</div>

    <div class="body-text">As part of your compensation package, we're also offering:</div>
    <ul class="bullet-list">
      <li>$25,000 USD Signing Bonus paid on your first regular pay cycle.</li>
      <li>10,000 Restricted Stock Units (RSUs) with a 4-year vesting schedule.</li>
      <li>Comprehensive Platinum Health, Dental, and Vision insurance (100% premium covered) and 401(k) matching.</li>
    </ul>

    <div class="body-text">As a Senior Software Engineer, your key responsibilities will be as follows:</div>
    <ul class="bullet-list">
      <li>Architecting and scaling core distributed backend services and cloud infrastructure.</li>
      <li>Collaborating with cross-functional product and design teams to deliver high-impact enterprise features.</li>
      <li>Mentoring junior engineers and setting best-in-class standards for code quality and testing.</li>
    </ul>

    <div class="body-text">You will report to Sarah Jenkins, VP of Engineering, and your work schedule will be Monday through Friday, operating under a flexible hybrid remote work scheduling model.</div>

    <div class="body-text">Please review the attached documents, including the employee handbook and employment agreement, and let us know if you have any questions or concerns. To accept this offer, please sign and return a copy of this letter by May 25, 2026. If we do not receive your acceptance by this date, we will assume that you have declined the offer.</div>

    <div class="body-text">Please note that your employment with Acme Corp is contingent upon your compliance with all applicable laws, regulations, and company policies, including but not limited to our Code of Conduct and Confidentiality Agreement.</div>

    <div class="closing">
      Thank you for your interest in Acme Corp. We look forward to working with you.<br><br>
      Sincerely,
    </div>

    <div class="signatures-grid">
      <div class="sig-block">
        <div class="sig-name">Marcus Vance</div>
        <div class="sig-title">Chief Talent Officer</div>
        <div class="sig-title" style="font-weight: 700; color: #0f172a; margin-top: 3px;">Acme Corp</div>
      </div>
      <div class="sig-block">
        <div class="sig-label">Candidate Acceptance:</div>
        <div class="sig-value">${sigDisplay}</div>
        <div class="sig-name">Alexander Wright</div>
        <div class="sig-title" style="color: #4338ca; font-family: monospace; margin-top: 3px; font-weight: bold;">
          ${isCountersigned ? 'ESIGN VERIFIED & BOUND' : 'PENDING EXECUTION'}
        </div>
      </div>
    </div>

    <div class="seal-box">
      <strong>🔒 ESIGN Act & UETA Compliant Cryptographic Certificate</strong><br>
      This document is protected by global electronic signature governance. The digital signatures affixed above carry the exact legal validity, enforceability, and admissibility as handwritten ink signatures.<br><br>
      <strong>Cryptographic Checksum (SHA-256):</strong><br>
      ${cryptoHash}<br>
      <strong>Timestamp:</strong> ${new Date().toISOString()}
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`📥 Successfully downloaded Job Offer Letter: ${filename}!`);
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="show" 
      className="space-y-8 h-full flex flex-col relative"
    >
      {/* Immersive Cyberpunk / Executive Glowing Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header Section */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500" />
        
        <div className="flex items-center space-x-4 pl-2">
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-2xl shadow-inner">
            <FileSignature className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Sign Your Offer Letter
              </h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center space-x-1 shadow-sm ${
                isSigned 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-emerald-500/10' 
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-amber-500/10'
              }`}>
                <Sparkles className="w-3 h-3 mr-1" />
                {isSigned ? 'Countersigned & Active' : 'Action Required'}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1 flex items-center">
              <Building2 className="w-4 h-4 mr-1.5 text-slate-500" /> Acme Corp • Senior Software Engineer • ID: OFF-2026-90210
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => handleDownload('Job_Offer_Letter_AcmeCorp.html', isSigned)}
            className="px-5 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 hover:border-slate-600 rounded-2xl font-bold text-sm transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Download Pristine Copy</span>
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <motion.div variants={itemVariants} className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Ultra-Premium Document Viewer (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden relative group">
          
          {/* macOS / Windows Window Bar */}
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex justify-between items-center px-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 font-medium pl-2 flex items-center">
                <FileText className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                Job_Offer_Letter_AcmeCorp.pdf
              </span>
            </div>
            
            {/* Tab Selector for Viewer */}
            <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 space-x-1">
              <button 
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'preview' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Job Offer Letter
              </button>
              <button 
                onClick={() => setActiveTab('terms')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'terms' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Compensation
              </button>
              <button 
                onClick={() => setActiveTab('legal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'legal' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ESIGN & NDA
              </button>
            </div>
          </div>

          {/* Document Content Wrapper - Elegant Lavender Matting Background */}
          <div className="flex-1 p-6 md:p-12 bg-indigo-100 dark:bg-indigo-950/40 relative overflow-y-auto custom-scrollbar flex justify-center items-start min-h-[650px]">
            
            {/* Pristine White Paper Sheet matching User Image exactly */}
            <div className="w-full max-w-2xl bg-white text-slate-900 p-8 md:p-14 rounded-xl shadow-2xl border border-slate-300 font-sans relative overflow-hidden transition-all duration-300">
              
              {/* Top Right Header */}
              <div className="text-right text-xs md:text-sm text-slate-700 space-y-1 mb-10">
                <div className="font-extrabold text-base text-slate-900">Acme Corp</div>
                <div>May 18, 2026</div>
                <div className="pt-4 font-bold text-slate-900">Alexander Wright</div>
                <div>123 Tech Boulevard, Apt 4B</div>
                <div>San Francisco, CA 94107</div>
              </div>

              {/* Dynamic Tab Rendering */}
              {activeTab === 'preview' && (
                <div className="space-y-6 text-sm text-slate-800 leading-relaxed relative z-10">
                  
                  {/* Centered Title with Top and Bottom Borders */}
                  <div className="border-t-2 border-b-2 border-indigo-600 py-4 my-8 text-center">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-900 tracking-wide uppercase">Job Offer Letter</h1>
                  </div>
                  
                  <p className="font-semibold text-slate-900 mb-6">Dear Alexander Wright,</p>
                  
                  <p className="text-justify mb-4">
                    We are pleased to offer you the position of <strong>Senior Software Engineer</strong> at <strong>Acme Corp</strong>. We believe your skills and experience make you an excellent fit and a valuable addition to our organization. We look forward to welcoming you to our team.
                  </p>

                  <p className="text-justify mb-4">
                    Your starting date will be <strong>June 1, 2026</strong>, and your initial salary will be <strong>$175,000 USD per year</strong>. Your salary will be paid on a semi-monthly basis, starting on the date of the next regular pay period.
                  </p>

                  <p className="mb-2 font-medium text-slate-900">As part of your compensation package, we're also offering:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-1.5 text-slate-700">
                    <li>$25,000 USD Signing Bonus paid on your first regular pay cycle.</li>
                    <li>10,000 Restricted Stock Units (RSUs) with a 4-year vesting schedule.</li>
                    <li>Comprehensive Platinum Health, Dental, and Vision insurance (100% premium covered) and 401(k) matching.</li>
                  </ul>

                  <p className="mb-2 font-medium text-slate-900">As a Senior Software Engineer, your key responsibilities will be as follows:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-1.5 text-slate-700">
                    <li>Architecting and scaling core distributed backend services and cloud infrastructure.</li>
                    <li>Collaborating with cross-functional product and design teams to deliver high-impact enterprise features.</li>
                    <li>Mentoring junior engineers and setting best-in-class standards for code quality and testing.</li>
                  </ul>

                  <p className="text-justify mb-4">
                    You will report to <strong>Sarah Jenkins, VP of Engineering</strong>, and your work schedule will be Monday through Friday, operating under a flexible hybrid remote work scheduling model.
                  </p>

                  <p className="text-justify mb-4">
                    Please review the attached documents, including the employee handbook and employment agreement, and let us know if you have any questions or concerns. To accept this offer, please sign and return a copy of this letter by <strong>May 25, 2026</strong>. If we do not receive your acceptance by this date, we will assume that you have declined the offer.
                  </p>

                  <p className="text-justify mb-6">
                    Please note that your employment with Acme Corp is contingent upon your compliance with all applicable laws, regulations, and company policies, including but not limited to our Code of Conduct and Confidentiality Agreement.
                  </p>

                  <div className="mb-12 text-justify">
                    Thank you for your interest in Acme Corp. We look forward to working with you.<br /><br />
                    Sincerely,
                  </div>

                  {/* Signatures Block */}
                  <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8">
                    <div>
                      <div className="font-bold text-lg text-slate-900 font-serif mb-0.5">Marcus Vance</div>
                      <div className="text-xs text-slate-600">Chief Talent Officer</div>
                      <div className="text-xs text-slate-900 font-bold mt-1">Acme Corp</div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Candidate Acceptance:</span>
                      <div className="h-12 border-b-2 border-slate-400 flex items-end pb-1 font-[Caveat,cursive] text-3xl text-indigo-700 font-bold overflow-hidden">
                        {isSigned ? signature : <span className="text-xs font-sans font-normal text-slate-400">Sign on right panel...</span>}
                      </div>
                      <div className="text-xs text-slate-700 font-medium mt-1">{isSigned ? signature : 'Alexander Wright'}</div>
                      <div className="text-[10px] text-indigo-600 font-mono mt-0.5 font-bold">
                        {isSigned ? 'ESIGN VERIFIED & BOUND' : 'PENDING EXECUTION'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="space-y-6 text-sm text-slate-700 leading-relaxed relative z-10">
                  <h2 className="text-xl font-bold text-slate-900 border-b pb-2 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-indigo-600" /> Total Target Compensation & Equity Breakdown
                  </h2>
                  <p>
                    Acme Corp designs compensation packages to attract and retain elite global talent. Below is the itemized breakdown of your year-one total target compensation value.
                  </p>

                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900 text-xs uppercase tracking-wider font-bold">
                          <th className="p-4 border-b border-slate-200">Component</th>
                          <th className="p-4 border-b border-slate-200">Payment Frequency / Vesting</th>
                          <th className="p-4 border-b border-slate-200 text-right">Year 1 Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs md:text-sm font-medium">
                        <tr>
                          <td className="p-4 font-bold text-slate-900">Annual Base Salary</td>
                          <td className="p-4 text-slate-600">Paid semi-monthly via direct deposit</td>
                          <td className="p-4 text-right font-extrabold text-slate-900">$175,000 USD</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">Signing Bonus</td>
                          <td className="p-4 text-slate-600">Lump sum on first regular paycheck</td>
                          <td className="p-4 text-right font-extrabold text-indigo-600">$25,000 USD</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">Restricted Stock Units (RSUs)</td>
                          <td className="p-4 text-slate-600">10,000 RSUs (4-year vest, 1-year cliff)</td>
                          <td className="p-4 text-right font-extrabold text-slate-900">Est. $100,000 USD</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">Relocation Allowance</td>
                          <td className="p-4 text-slate-600">Executive white-glove moving & transit</td>
                          <td className="p-4 text-right font-extrabold text-slate-900">$10,000 USD</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">Annual Target Bonus</td>
                          <td className="p-4 text-slate-600">Targeted at 20% of base salary</td>
                          <td className="p-4 text-right font-extrabold text-slate-900">$35,000 USD</td>
                        </tr>
                        <tr className="bg-indigo-50/50 font-bold text-slate-900 border-t-2 border-slate-300">
                          <td className="p-4">Total Year-One Target Cash + Equity</td>
                          <td className="p-4 text-indigo-700 text-xs">Excludes premium health benefits value ($15k+)</td>
                          <td className="p-4 text-right text-base text-indigo-700 font-black">$345,000 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 mt-6 text-xs text-slate-600">
                    <h4 className="font-bold text-slate-900 text-sm">Vesting Schedule Details</h4>
                    <p>
                      The 10,000 RSUs granted will vest over a four-year period. 25% of the shares (2,500 RSUs) will vest on the one-year anniversary of your start date (the "Cliff"). The remaining 7,500 RSUs will vest in equal monthly installments over the subsequent 36 months, subject to continued service to Acme Corp.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'legal' && (
                <div className="space-y-6 text-sm text-slate-700 leading-relaxed relative z-10">
                  <h2 className="text-xl font-bold text-slate-900 border-b pb-2 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-indigo-600" /> ESIGN Act & UETA Compliance Governance
                  </h2>

                  <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl space-y-3">
                    <h3 className="font-bold text-indigo-950 text-base flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-indigo-700" /> Legal Enforceability Notice
                    </h3>
                    <p className="text-xs text-indigo-900 leading-relaxed text-justify">
                      Under the Electronic Signatures in Global and National Commerce (ESIGN) Act (15 U.S.C. § 7001 et seq.) and the Uniform Electronic Transactions Act (UETA), electronic signatures possess the identical legal validity, enforceability, and admissibility as traditional wet ink signatures. By entering your name and submitting the form, you agree to conduct this transaction electronically.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs text-slate-600">
                    <div className="border-l-4 border-indigo-600 pl-4 py-1 bg-slate-50 p-3 rounded-r-xl shadow-sm">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">1. Non-Disclosure & Confidentiality</h4>
                      <p>During your employment and at all times thereafter, you agree to maintain the strict confidentiality of Acme Corp's proprietary technology, trade secrets, financial models, customer lists, and strategic roadmaps.</p>
                    </div>

                    <div className="border-l-4 border-indigo-600 pl-4 py-1 bg-slate-50 p-3 rounded-r-xl shadow-sm">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">2. At-Will Employment Status</h4>
                      <p>Your employment with Acme Corp is "at-will." This means that either you or Acme Corp may terminate the employment relationship at any time, with or without cause, and with or without advance notice.</p>
                    </div>

                    <div className="border-l-4 border-indigo-600 pl-4 py-1 bg-slate-50 p-3 rounded-r-xl shadow-sm">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">3. Dispute Resolution & Arbitration</h4>
                      <p>Any controversy or claim arising out of or relating to this agreement or breach thereof shall be settled by binding confidential arbitration administered by the American Arbitration Association in San Francisco, California.</p>
                    </div>
                  </div>

                  {/* Cryptographic Verification Box */}
                  <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-xs space-y-2 shadow-inner mt-8">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-white font-bold">
                      <span className="flex items-center"><Terminal className="w-4 h-4 mr-2 text-indigo-400" /> LIVE CRYPTOGRAPHIC RECORDING</span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded border border-indigo-500/30">SECURE VAULT</span>
                    </div>
                    <div><span className="text-indigo-400">Integrity Checksum:</span> {cryptoHash}</div>
                    <div><span className="text-indigo-400">Signature Status:</span> {isSigned ? `BOUND (${signature})` : 'AWAITING CANDIDATE INPUT'}</div>
                    <div><span className="text-indigo-400">Timestamp:</span> {new Date().toUTCString()}</div>
                    <div><span className="text-indigo-400">Client IP (Simulated):</span> 192.168.1.42</div>
                  </div>
                </div>
              )}

              {/* Bottom Document Footer */}
              <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between text-xs text-slate-400 font-medium relative z-10">
                <span>Acme Corp HR Automation System • Confidential</span>
                <span>Page 1 of 1 • Official Vault Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ultra-Premium Signature & Verification Console (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          
          {/* Main Action Glassmorphic Card */}
          <div className="bg-slate-900/60 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden group">
            
            {/* Ambient Inner Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 blur-[70px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-purple-500/30" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/20 blur-[70px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-cyan-500/30" />

            {/* Step Progress Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800 relative z-10">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shadow-md ${
                  isSigned ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-purple-600 text-white shadow-purple-500/25'
                }`}>
                  {isSigned ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <span className="text-sm font-bold text-white">Review Terms</span>
              </div>
              <div className="w-8 h-0.5 bg-slate-800" />
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shadow-md ${
                  isSigned ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-purple-600 text-white shadow-purple-500/25'
                }`}>
                  {isSigned ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <span className="text-sm font-bold text-white">ESIGN Execute</span>
              </div>
              <div className="w-8 h-0.5 bg-slate-800" />
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shadow-md ${
                  isSigned ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {isSigned ? <Check className="w-4 h-4" /> : '3'}
                </div>
                <span className="text-sm font-bold text-white">Onboard</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSigned ? (
                <motion.div 
                  key="signed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-6 text-center relative z-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: [1.2, 1] }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-400 animate-bounce" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-white tracking-tight mb-2">Offer Accepted & Sealed!</h3>
                  <p className="text-sm text-slate-300 mb-8 max-w-sm leading-relaxed">
                    Your digital signature has been cryptographically bound to this agreement and officially submitted to Acme Corp HR.
                  </p>

                  {/* Summary Hash Card */}
                  <div className="w-full bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-5 mb-8 text-left font-mono text-xs space-y-2.5 shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-emerald-400 font-bold">
                      <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5" /> ESIGN VERIFICATION SUMMARY</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">VALIDATED</span>
                    </div>
                    <div className="text-slate-300"><span className="text-slate-500">Signatory:</span> {signature}</div>
                    <div className="text-slate-300 truncate"><span className="text-slate-500">Hash:</span> {cryptoHash}</div>
                    <div className="text-slate-300"><span className="text-slate-500">Timestamp:</span> {new Date().toLocaleTimeString()}</div>
                  </div>

                  <div className="w-full space-y-4">
                    <button 
                      onClick={() => handleDownload('Job_Offer_Letter_AcmeCorp_Countersigned.html', true)}
                      className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white rounded-2xl font-extrabold text-base transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
                    >
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Download Countersigned Package</span>
                    </button>

                    <button 
                      onClick={() => toast.info('Navigating to Onboarding Portal...')}
                      className="w-full py-4 px-6 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 hover:border-slate-600 rounded-2xl font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <span>Proceed to Onboarding Checklist</span>
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSign} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 relative z-10"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      <PenTool className="w-5 h-5 mr-2 text-purple-400" />
                      Execute Digital Signature
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      By typing your full legal name below, you officially accept the Senior Software Engineer position and agree to the binding ESIGN Act stipulations.
                    </p>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Type Your Full Legal Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={signature}
                          onChange={(e) => setSignature(e.target.value)}
                          placeholder="e.g. Alexander Wright"
                          className="w-full bg-slate-950/90 border-2 border-slate-700/80 focus:border-purple-500 rounded-2xl px-5 py-4 text-white font-[Caveat,cursive] text-3xl focus:ring-4 focus:ring-purple-500/20 transition-all outline-none shadow-inner placeholder:font-sans placeholder:text-sm placeholder:text-slate-600"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <PenTool className={`w-5 h-5 ${signature.length > 0 ? 'text-purple-400 animate-bounce' : 'text-slate-600'}`} />
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 flex items-center pt-1">
                        <AlertCircle className="w-3.5 h-3.5 mr-1 text-purple-400 shrink-0" />
                        This signature represents your legal electronic acceptance under federal law.
                      </p>
                    </div>
                  </div>

                  {/* Live Hash Preview Badge */}
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 font-mono text-xs space-y-1 shadow-inner">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <span>Cryptographic Integrity Checksum</span>
                      <span className="text-purple-400 animate-pulse">● LIVE SHA-256</span>
                    </div>
                    <div className="text-purple-300 font-bold truncate">{cryptoHash}</div>
                  </div>

                  {/* ESIGN Guarantee Box */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-5 flex items-start space-x-4 shadow-lg">
                    <ShieldCheck className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold text-purple-200">100% ESIGN Act & UETA Compliant</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Your cryptographic signature creates a legally binding contract backed by full non-repudiation, tamper-evident sealing, and global compliance audit trails.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={signature.trim().length === 0}
                    className="w-full py-5 px-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white rounded-2xl font-extrabold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 flex items-center justify-center space-x-3 group active:scale-95"
                  >
                    <span>Accept & Execute Offer Letter</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Quick FAQ / Security Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-5 rounded-2xl shadow-lg space-y-2">
              <div className="flex items-center text-purple-400 font-bold text-sm">
                <Lock className="w-4 h-4 mr-2" /> Bank-Grade Encryption
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All offer documents and personal data are secured using 256-bit AES encryption at rest and TLS 1.3 in transit across OfferForge Enterprise Vaults.
              </p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-5 rounded-2xl shadow-lg space-y-2">
              <div className="flex items-center text-cyan-400 font-bold text-sm">
                <Award className="w-4 h-4 mr-2" /> Non-Repudiation Guarantee
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each signature event captures client IP, browser user agent, and precise atomic clock timestamps to ensure absolute legal enforceability.
              </p>
            </div>
          </div>

          {/* Need Help Support Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-purple-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h6 className="text-sm font-bold text-white">Have questions about your offer?</h6>
                <p className="text-xs text-slate-400 mt-0.5">Contact your Acme Corp recruiter directly for immediate assistance.</p>
              </div>
            </div>
            <button 
              onClick={() => toast.info('Connecting to Acme Corp HR Support...')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white border border-slate-700 rounded-xl text-xs font-bold transition-all shadow"
            >
              Contact HR
            </button>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default DigitalSignature;
