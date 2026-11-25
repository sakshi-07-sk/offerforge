import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Settings, Shield, Bell, Users, FileText, Database, Activity, Lock, 
  BarChart3, Filter, ShieldAlert, Search, CheckCircle, AlertTriangle, 
  Clock, Mail, FileSignature, Download, Briefcase, UserPlus, Eye, 
  Code, RefreshCw, ExternalLink, Calendar, Key, Check, X, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const EnterprisePlaceholder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  
  const [activeTab, setActiveTab] = useState('All');
  const [showJson, setShowJson] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDownloadDoc = (docName = 'Offer_Letter_Document.html', isZip = false) => {
    if (isZip) {
      toast.success(`Successfully initiated secure download for Master Bundle Archive (${docName})!`);
      return;
    }

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${docName} - OfferForge Secure Document</title>
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
      <div>Date: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      <div class="candidate-name">Certified Enterprise Vault</div>
      <div>Status: Verified Cryptographic Record</div>
      <div>Document ID: ${docName}</div>
    </div>

    <div class="title-box">
      <h1 class="title">Official Certified Document</h1>
    </div>

    <div class="body-text">This certified document has been securely retrieved from the OfferForge Enterprise Vault.

Document Title: ${docName}

All terms, compensation figures, and legal stipulations contained herein are cryptographically bound to the verified identity of the recipient.

OfferForge provides immutable audit trails and global compliance under ESIGN and UETA governance.</div>

    <div class="signatures-grid">
      <div class="sig-block">
        <div class="sig-name">Evelyn Montgomery</div>
        <div class="sig-title">Chief System Administrator</div>
        <div class="sig-title" style="font-weight: 700; color: #0f172a; margin-top: 3px;">OfferForge Enterprise</div>
      </div>
      <div class="sig-block">
        <div class="sig-label">Vault Authorization:</div>
        <div class="sig-value">SECURELY EXECUTED</div>
        <div class="sig-name">Enterprise Automated Vault</div>
        <div class="sig-title" style="color: #4338ca; font-family: monospace; margin-top: 3px; font-weight: bold;">
          CRYPTOGRAPHICALLY BOUND
        </div>
      </div>
    </div>

    <div class="seal-box">
      <strong>🔒 ESIGN Act & UETA Compliant Cryptographic Certificate</strong><br>
      This document is protected by global electronic signature governance. The digital signatures affixed above carry the exact legal validity, enforceability, and admissibility as handwritten ink signatures.<br><br>
      <strong>Integrity Hash (SHA-256):</strong> SHA256-AE89B2C4901FA77B21E4649B934CA495991B7852B855<br>
      <strong>Timestamp:</strong> ${new Date().toISOString()}
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = docName.endsWith('.pdf') ? docName.replace('.pdf', '.html') : docName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`📥 Successfully downloaded official document: ${docName}!`);
  };

  // Extract a readable title from the path
  const rawSegment = path.split('/').pop() || 'Dashboard';
  const title = rawSegment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Determine an appropriate icon based on keywords in the path
  let Icon = Settings;
  if (path.includes('user') || path.includes('candidate')) Icon = Users;
  else if (path.includes('template') || path.includes('offer')) Icon = FileText;
  else if (path.includes('audit') || path.includes('security')) Icon = ShieldAlert;
  else if (path.includes('notification') || path.includes('email')) Icon = Bell;
  else if (path.includes('role') || path.includes('permission')) Icon = Lock;
  else if (path.includes('analytics') || path.includes('report')) Icon = BarChart3;
  else if (path.includes('history') || path.includes('activity')) Icon = Activity;
  else if (path.includes('signature')) Icon = FileSignature;

  // ==========================================
  // MODULE 1: PROFILE SETTINGS (/admin/profile)
  // ==========================================
  if (path.includes('/admin/profile')) {
    const adminProfile = {
      name: "Evelyn Montgomery",
      role: "Chief System Administrator",
      company: "OfferForge Enterprise Inc.",
      email: "evelyn.montgomery@offerforge.com",
      phone: "+1 (555) 839-2001",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      lastLogin: "May 18, 2026, 11:42 AM (EST)",
      securityPreferences: "Strict IP Whitelisting (10.0.0.0/24)",
      themePreference: "Dark Mode (System Default)",
      twoFactorStatus: "Enabled (YubiKey Hardware FIDO2)"
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Settings className="w-6 h-6 mr-3 text-cyan-500" /> Profile Settings
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage system administrator identity, security credentials, and preferences.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
            <img src={adminProfile.avatar} alt="Avatar" className="w-28 h-28 rounded-full object-cover border-4 border-cyan-500/30 shadow-xl mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{adminProfile.name}</h3>
            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-1">{adminProfile.role}</p>
            <p className="text-xs text-slate-400 mb-6">{adminProfile.company}</p>
            
            <div className="w-full pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 text-left text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Email:</span> <span className="font-medium text-slate-800 dark:text-slate-200">{adminProfile.email}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Phone:</span> <span className="font-medium text-slate-800 dark:text-slate-200">{adminProfile.phone}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Last Login:</span> <span className="font-medium text-slate-800 dark:text-slate-200">{adminProfile.lastLogin}</span></div>
            </div>
          </div>

          {/* Settings & Security */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-cyan-500" /> Security & System Preferences
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Two-Factor Authentication (2FA)</label>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{adminProfile.twoFactorStatus}</span>
                  </div>
                  <button className="text-xs font-bold text-cyan-500 hover:underline">Configure FIDO2</button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Security Whitelist Preferences</label>
                <input type="text" readOnly value={adminProfile.securityPreferences} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 font-mono" />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Theme Preference</label>
                <input type="text" readOnly value={adminProfile.themePreference} className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200" />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end space-x-4">
                <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Reset Credentials</button>
                <button className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl text-sm font-semibold hover:bg-red-500/20 transition-colors">Revoke All Sessions</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 3: HR MANAGEMENT (/admin/hr)
  // ==========================================
  if (path.includes('/admin/hr')) {
    const hrList = [
      { id: 'HR-01', name: 'Sarah Jenkins', dept: 'Engineering & Tech', activeRecruitments: 14, totalOffers: 142, acceptanceRate: '92.4%', perf: 95, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
      { id: 'HR-02', name: 'Michael Chang', dept: 'Product & Design', activeRecruitments: 8, totalOffers: 98, acceptanceRate: '88.1%', perf: 88, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
      { id: 'HR-03', name: 'David Kim', dept: 'APAC Regional Ops', activeRecruitments: 19, totalOffers: 210, acceptanceRate: '94.0%', perf: 98, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
      { id: 'HR-04', name: 'Emily Rodriguez', dept: 'Sales & Marketing', activeRecruitments: 5, totalOffers: 45, acceptanceRate: '75.5%', perf: 72, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
      { id: 'HR-05', name: 'Alex Johnson', dept: 'Global Remote Ops', activeRecruitments: 12, totalOffers: 115, acceptanceRate: '89.8%', perf: 91, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-cyan-500" /> HR Management
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor HR employee performance, recruitment allocation, and offer acceptance rates.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">
            Onboard HR Rep
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrList.map(hr => (
            <div key={hr.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <img src={hr.avatar} alt={hr.name} className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/30 shadow-md" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{hr.name}</h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">{hr.dept}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">Emp ID: {hr.id}</p>
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4 mb-6 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Active Recruitments:</span> <span className="font-bold text-slate-800 dark:text-slate-200">{hr.activeRecruitments} positions</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Total Offers Sent:</span> <span className="font-bold text-slate-800 dark:text-slate-200">{hr.totalOffers} offers</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Acceptance Rate:</span> <span className="font-bold text-emerald-500">{hr.acceptanceRate}</span></div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400 font-semibold">Performance Metric</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{hr.perf}/100</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full" style={{ width: `${hr.perf}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 4: CANDIDATE MANAGEMENT (/admin/candidates)
  // ==========================================
  if (path.includes('/admin/candidates')) {
    const candidates = [
      { id: 'CND-01', name: 'Marcus Vance', role: 'Senior DevOps Engineer', email: 'marcus.v@gmail.com', phone: '+1 (555) 019-2834', skills: ['Kubernetes', 'AWS', 'Terraform'], exp: '8 Years', score: 98, status: 'Offer Accepted', joinDate: 'June 1, 2026' },
      { id: 'CND-02', name: 'Olivia Reed', role: 'UI/UX Designer', email: 'olivia.reed@designco.io', phone: '+1 (555) 234-5678', skills: ['Figma', 'Design Systems', 'React'], exp: '5 Years', score: 94, status: 'Offer Sent', joinDate: 'June 15, 2026' },
      { id: 'CND-03', name: 'Ethan Hunt', role: 'Security Architect', email: 'ethan.h@imf.gov', phone: '+1 (555) 987-6543', skills: ['Cryptography', 'Zero Trust', 'SIEM'], exp: '12 Years', score: 99, status: 'Offer Accepted', joinDate: 'May 25, 2026' },
      { id: 'CND-04', name: 'Sophia Patel', role: 'Product Manager', email: 's.patel@product.net', phone: '+1 (555) 876-5432', skills: ['Agile', 'Roadmapping', 'Jira'], exp: '7 Years', score: 91, status: 'Offer Drafting', joinDate: 'July 1, 2026' },
      { id: 'CND-05', name: 'Lucas Gray', role: 'QA Automation Engineer', email: 'lucas.gray@qa-labs.org', phone: '+1 (555) 345-6789', skills: ['Selenium', 'Cypress', 'Python'], exp: '4 Years', score: 85, status: 'Offer Rejected', joinDate: 'N/A' },
      { id: 'CND-06', name: 'Maya Lin', role: 'Frontend Developer', email: 'maya.lin@dev.io', phone: '+1 (555) 456-7890', skills: ['Vue.js', 'Nuxt', 'Tailwind'], exp: '3 Years', score: 88, status: 'Screening Passed', joinDate: 'July 15, 2026' },
      { id: 'CND-07', name: 'Viktor Reznov', role: 'Backend Engineer', email: 'v.reznov@vorkuta.ru', phone: '+1 (555) 567-8901', skills: ['Golang', 'PostgreSQL', 'Docker'], exp: '9 Years', score: 96, status: 'Offer Accepted', joinDate: 'June 10, 2026' },
      { id: 'CND-08', name: 'Priya Sharma', role: 'Data Scientist', email: 'priya.s@ai-research.com', phone: '+1 (555) 678-9012', skills: ['PyTorch', 'NLP', 'LLMs'], exp: '6 Years', score: 95, status: 'Offer Sent', joinDate: 'June 20, 2026' },
      { id: 'CND-09', name: "Liam O'Connor", role: 'Engineering Manager', email: 'liam.oc@techlead.org', phone: '+1 (555) 789-0123', skills: ['System Design', 'Leadership'], exp: '10 Years', score: 93, status: 'Offer Accepted', joinDate: 'June 1, 2026' },
      { id: 'CND-10', name: 'Chloe Bennett', role: 'Marketing Specialist', email: 'chloe@growth.co', phone: '+1 (555) 890-1234', skills: ['SEO', 'Google Ads', 'Content'], exp: '4 Years', score: 82, status: 'Offer Drafting', joinDate: 'July 1, 2026' },
      { id: 'CND-11', name: 'Daniel Craig', role: 'Mobile Developer', email: 'daniel@007-dev.uk', phone: '+1 (555) 901-2345', skills: ['Swift', 'Kotlin', 'Flutter'], exp: '7 Years', score: 90, status: 'Offer Sent', joinDate: 'June 15, 2026' },
      { id: 'CND-12', name: 'Zara Larsson', role: 'HR Coordinator', email: 'zara.l@peopleops.net', phone: '+1 (555) 012-3456', skills: ['Workday', 'Onboarding', 'ER'], exp: '3 Years', score: 87, status: 'Offer Accepted', joinDate: 'May 30, 2026' },
      { id: 'CND-13', name: 'Omar Farooq', role: 'Cloud Architect', email: 'omar.f@cloudnative.ae', phone: '+1 (555) 123-4567', skills: ['GCP', 'Multi-cloud', 'BGP'], exp: '11 Years', score: 97, status: 'Offer Accepted', joinDate: 'June 1, 2026' },
      { id: 'CND-14', name: 'Hannah Abbott', role: 'Technical Writer', email: 'hannah@docs-r-us.com', phone: '+1 (555) 234-5678', skills: ['Markdown', 'OpenAPI', 'Git'], exp: '5 Years', score: 89, status: 'Offer Drafting', joinDate: 'July 10, 2026' },
      { id: 'CND-15', name: 'Wyatt Earp', role: 'Security Compliance Lead', email: 'wyatt@lawman.sec', phone: '+1 (555) 345-6789', skills: ['SOC2', 'ISO27001', 'HIPAA'], exp: '14 Years', score: 99, status: 'Offer Accepted', joinDate: 'June 1, 2026' }
    ];

    const filtered = candidates.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.role.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <UserPlus className="w-6 h-6 mr-3 text-cyan-500" /> Candidate Management
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Comprehensive tracking of 15+ enterprise candidates, AI resume scores, and offer pipelines.</p>
          </div>
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search candidates by name or role..." 
              className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Candidate</th>
                  <th className="p-4 font-semibold">Position Applied</th>
                  <th className="p-4 font-semibold">Skills</th>
                  <th className="p-4 font-semibold">Exp.</th>
                  <th className="p-4 font-semibold text-center">Resume Score</th>
                  <th className="p-4 font-semibold">Offer Status</th>
                  <th className="p-4 font-semibold">Joining Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
                {filtered.map(c => (
                  <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{c.name}</div>
                      <div className="text-xs text-slate-400">{c.email} • {c.phone}</div>
                    </td>
                    <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">{c.role}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {c.skills.map(s => <span key={s} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300">{s}</span>)}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">{c.exp}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold ${
                        c.score >= 95 ? 'bg-cyan-500/20 text-cyan-500 border border-cyan-500/30' :
                        c.score >= 90 ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' :
                        'bg-blue-500/20 text-blue-500 border border-blue-500/30'
                      }`}>
                        {c.score}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                        c.status === 'Offer Accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800' :
                        c.status === 'Offer Sent' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
                        c.status === 'Offer Rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800' :
                        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">{c.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 5: TEMPLATE MANAGEMENT (/admin/templates)
  // ==========================================
  if (path.includes('/admin/templates')) {
    const templates = [
      { id: 'TMP-01', name: 'Software Engineer Template', version: 'v3.4', author: 'Sarah Jenkins', lastUpdated: 'May 16, 2026', placeholders: 14, usage: 1420, desc: 'Standard tech agreement with IP assignment and confidentiality clauses.' },
      { id: 'TMP-02', name: 'Product Manager Template', version: 'v2.1', author: 'Michael Chang', lastUpdated: 'May 14, 2026', placeholders: 12, usage: 480, desc: 'Executive compensation structure including KPI bonus targets.' },
      { id: 'TMP-03', name: 'UI/UX Designer Template', version: 'v1.8', author: 'Sarah Jenkins', lastUpdated: 'May 10, 2026', placeholders: 10, usage: 310, desc: 'Creative portfolio rights and remote equipment allowance terms.' },
      { id: 'TMP-04', name: 'Data Analyst Template', version: 'v2.0', author: 'David Kim', lastUpdated: 'May 05, 2026', placeholders: 15, usage: 620, desc: 'Data handling clearance and non-compete stipulations.' },
      { id: 'TMP-05', name: 'HR Executive Template', version: 'v4.0', author: 'Evelyn Montgomery', lastUpdated: 'Apr 28, 2026', placeholders: 18, usage: 145, desc: 'Master executive benefits package with comprehensive severance terms.' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileText className="w-6 h-6 mr-3 text-cyan-500" /> Template Management
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage reusable enterprise offer templates, placeholder configurations, and usage analytics.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Create New Template
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(t => (
            <div key={t.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-cyan-500/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-bold border border-cyan-500/20">{t.version}</span>
                  <span className="text-[10px] font-mono text-slate-400">ID: {t.id}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{t.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{t.desc}</p>
              </div>

              <div className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Created By:</span> <span className="font-medium text-slate-800 dark:text-slate-200">{t.author}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Last Updated:</span> <span className="font-medium text-slate-800 dark:text-slate-200">{t.lastUpdated}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Placeholders:</span> <span className="font-bold text-cyan-500">{t.placeholders} Variables</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Total Usage:</span> <span className="font-bold text-slate-800 dark:text-slate-200">{t.usage.toLocaleString()} Generated</span></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 6: OFFER MANAGEMENT (/admin/offers)
  // ==========================================
  if (path.includes('/admin/offers')) {
    const offers = [
      { id: 'OFF-1092', candidate: 'Marcus Vance', role: 'Senior DevOps Engineer', salary: '$160,000 + 10k RSUs', status: 'Accepted', sentDate: 'May 16, 2026', expiry: 'May 23, 2026', signed: true },
      { id: 'OFF-1091', candidate: 'Olivia Reed', role: 'UI/UX Designer', salary: '$135,000 + 5k RSUs', status: 'Sent', sentDate: 'May 17, 2026', expiry: 'May 24, 2026', signed: false },
      { id: 'OFF-1090', candidate: 'Ethan Hunt', role: 'Security Architect', salary: '$195,000 + 20k RSUs', status: 'Accepted', sentDate: 'May 10, 2026', expiry: 'May 17, 2026', signed: true },
      { id: 'OFF-1089', candidate: 'Sophia Patel', role: 'Product Manager', salary: '$150,000 + 8k RSUs', status: 'Draft', sentDate: 'N/A', expiry: 'N/A', signed: false },
      { id: 'OFF-1088', candidate: 'Lucas Gray', role: 'QA Automation Engineer', salary: '$110,000', status: 'Rejected', sentDate: 'May 12, 2026', expiry: 'May 19, 2026', signed: false },
      { id: 'OFF-1087', candidate: 'Maya Lin', role: 'Frontend Developer', salary: '$125,000 + 3k RSUs', status: 'Sent', sentDate: 'May 18, 2026', expiry: 'May 25, 2026', signed: false },
      { id: 'OFF-1086', candidate: 'Viktor Reznov', role: 'Backend Engineer', salary: '$165,000 + 12k RSUs', status: 'Accepted', sentDate: 'May 08, 2026', expiry: 'May 15, 2026', signed: true },
      { id: 'OFF-1085', candidate: 'Priya Sharma', role: 'Data Scientist', salary: '$170,000 + 15k RSUs', status: 'Sent', sentDate: 'May 15, 2026', expiry: 'May 22, 2026', signed: false }
    ];

    const filteredOffers = activeTab === 'All' ? offers : offers.filter(o => o.status === activeTab);

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileSignature className="w-6 h-6 mr-3 text-cyan-500" /> Offer Management
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track comprehensive offer records, salary packages, expiration dates, and digital signature states.</p>
          </div>
          <div className="flex space-x-2">
            {['All', 'Draft', 'Sent', 'Accepted', 'Rejected'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Offer ID</th>
                  <th className="p-4 font-semibold">Candidate</th>
                  <th className="p-4 font-semibold">Role Offered</th>
                  <th className="p-4 font-semibold">Salary Package</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Sent Date</th>
                  <th className="p-4 font-semibold">Expiry Date</th>
                  <th className="p-4 font-semibold text-center">ESIGN Seal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
                {filteredOffers.map(o => (
                  <tr key={o.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">{o.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{o.candidate}</td>
                    <td className="p-4 text-sm text-slate-700 dark:text-slate-300 font-medium">{o.role}</td>
                    <td className="p-4 text-sm font-semibold text-slate-800 dark:text-slate-200">{o.salary}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                        o.status === 'Accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800' :
                        o.status === 'Sent' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
                        o.status === 'Rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800' :
                        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                      }`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{o.sentDate}</td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">{o.expiry}</td>
                    <td className="p-4 text-center">
                      {o.signed ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <CheckCircle className="w-3 h-3 mr-1" /> Signed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700">
                          Unsigned
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 7: OFFER ANALYTICS (/admin/analytics)
  // ==========================================
  if (path.includes('/admin/analytics')) {
    const analyticsData = {
      monthlyOffersSent: [110, 145, 168, 192, 240],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      acceptanceRate: "89.2%",
      rejectionPercentage: "10.8%",
      averageResponseTime: "14.8 Hours",
      mostHiredRole: "Senior Software Engineer (42 Hired)",
      departmentStats: [
        { dept: "Engineering", hires: 148, rate: "94%" },
        { dept: "Product & Design", hires: 64, rate: "88%" },
        { dept: "Sales & Marketing", hires: 42, rate: "76%" },
        { dept: "Operations & HR", hires: 28, rate: "90%" }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-cyan-500" /> Offer Analytics
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Deep hiring insights, departmental acceptance rates, and chart-ready JSON datasets.</p>
          </div>
          <button 
            onClick={() => setShowJson(!showJson)}
            className="flex items-center px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-cyan-400 border border-cyan-500/30 rounded-xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-colors"
          >
            <Code className="w-4 h-4 mr-2" /> {showJson ? "Hide Chart JSON" : "View Chart-Ready JSON"}
          </button>
        </div>

        {/* Analytics Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Platform Acceptance Rate', val: analyticsData.acceptanceRate, color: 'text-emerald-500' },
            { label: 'Rejection Percentage', val: analyticsData.rejectionPercentage, color: 'text-red-500' },
            { label: 'Average Response Time', val: analyticsData.averageResponseTime, color: 'text-cyan-500' },
            { label: 'Most Hired Role', val: analyticsData.mostHiredRole, color: 'text-purple-500', isLong: true },
          ].map((stat, i) => (
            <div key={i} className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm ${stat.isLong ? 'md:col-span-2 md:row-span-1 md:flex md:flex-col md:justify-center' : ''}`}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className={`text-2xl font-extrabold ${stat.color} truncate`}>{stat.val}</p>
            </div>
          ))}
        </div>

        {/* JSON Viewer Toggle */}
        <AnimatePresence>
          {showJson && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 font-mono text-xs text-cyan-400 shadow-2xl overflow-x-auto">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <span>Chart-Ready JSON Dataset (REST API Export)</span>
                  <button onClick={() => setShowJson(false)} className="text-slate-500 hover:text-white"><X size={16} /></button>
                </div>
                <pre>{JSON.stringify(analyticsData, null, 2)}</pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Department Stats Table */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">Departmental Hiring Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Department</th>
                  <th className="p-4 font-semibold">Total Hires (YTD)</th>
                  <th className="p-4 font-semibold">Acceptance Rate</th>
                  <th className="p-4 font-semibold">Performance Bar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
                {analyticsData.departmentStats.map((d, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{d.dept}</td>
                    <td className="p-4 text-sm font-semibold text-slate-800 dark:text-slate-200">{d.hires} Candidates</td>
                    <td className="p-4 text-sm font-bold text-emerald-500">{d.rate}</td>
                    <td className="p-4 w-1/3">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full" style={{ width: d.rate }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 8: ACTIVITY LOGS (/admin/activity)
  // ==========================================
  if (path.includes('/admin/activity')) {
    const logs = [
      { id: 'LOG-8812', timestamp: '2026-05-18 13:45:12', user: 'Sarah Jenkins (HR)', action: 'Template Created: "Summer Internship v2"', ip: '192.168.1.42' },
      { id: 'LOG-8811', timestamp: '2026-05-18 13:30:05', user: 'Michael Chang (HR)', action: 'Offer Generated: Marcus Vance (Senior DevOps)', ip: '10.0.0.15' },
      { id: 'LOG-8810', timestamp: '2026-05-18 12:15:22', user: 'David Kim (HR)', action: 'Candidate Added: Olivia Reed (UI/UX)', ip: '172.16.0.84' },
      { id: 'LOG-8809', timestamp: '2026-05-18 11:42:01', user: 'System Mailer', action: 'Email Sent: Offer Dispatch to marcus.v@gmail.com', ip: '127.0.0.1' },
      { id: 'LOG-8808', timestamp: '2026-05-18 10:14:33', user: 'Ethan Hunt (Candidate)', action: 'Signature Accepted: Cryptographic Seal Executed', ip: '198.51.100.73' },
      { id: 'LOG-8807', timestamp: '2026-05-18 09:05:19', user: 'Evelyn Montgomery (Admin)', action: 'Status Updated: System Maintenance Mode Completed', ip: '10.0.0.1' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Activity className="w-6 h-6 mr-3 text-cyan-500" /> Activity Logs
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time immutable audit records of system activities, user actions, and IP tracking.</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Live Syncing
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-mono text-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">User / Actor</th>
                  <th className="p-4 font-semibold">Action Performed</th>
                  <th className="p-4 font-semibold">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
                {logs.map(l => (
                  <tr key={l.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{l.timestamp}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">{l.user}</td>
                    <td className="p-4 text-cyan-600 dark:text-cyan-400 font-semibold">{l.action}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{l.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 9: AUDIT TRAIL (/admin/audit)
  // ==========================================
  if (path.includes('/admin/audit')) {
    const auditEntries = [
      { id: 'SEC-901', timestamp: '2026-05-18 13:10:02', user: 'Unknown (IP: 45.33.22.11)', action: 'Unauthorized Access Attempt (/api/v1/salary)', severity: 'High', status: 'Blocked by WAF' },
      { id: 'SEC-902', timestamp: '2026-05-18 11:05:40', user: 'Evelyn Montgomery (Admin)', action: 'Permission Modification: HR Lead -> SuperAdmin', severity: 'Medium', status: 'Authorized' },
      { id: 'SEC-903', timestamp: '2026-05-18 09:14:12', user: 'Emily Rodriguez (HR)', action: 'Deleted Template "Legacy Intern Package"', severity: 'Medium', status: 'Archived' },
      { id: 'SEC-904', timestamp: '2026-05-18 08:30:00', user: 'Michael Chang (HR)', action: 'Password Change Completed Successfully', severity: 'Low', status: 'Success' },
      { id: 'SEC-905', timestamp: '2026-05-18 07:15:22', user: 'System Bot', action: 'Automated Login Attempt (Health Check)', severity: 'Low', status: 'Success' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" /> Security Audit Trail
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor high-security audit logs, unauthorized access attempts, and permission escalations.</p>
          </div>
          <button className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-red-500/20 transition-colors">
            Export Security Incident Report
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Incident ID</th>
                  <th className="p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">User / IP</th>
                  <th className="p-4 font-semibold">Security Action</th>
                  <th className="p-4 font-semibold">Severity</th>
                  <th className="p-4 font-semibold">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {auditEntries.map(a => (
                  <tr key={a.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors font-mono">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{a.id}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{a.timestamp}</td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{a.user}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{a.action}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        a.severity === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        a.severity === 'Medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                      }`}>
                        {a.severity}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap font-bold text-slate-700 dark:text-slate-300">{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 10: NOTIFICATIONS (/admin/notifications)
  // ==========================================
  if (path.includes('/admin/notifications')) {
    const notifs = [
      { id: 'NOT-01', text: 'Offer accepted by Marcus Vance (Senior DevOps)', priority: 'High', read: false, time: '10 mins ago' },
      { id: 'NOT-02', text: 'Signature pending for Olivia Reed (UI/UX Designer)', priority: 'Medium', read: false, time: '1 hour ago' },
      { id: 'NOT-03', text: 'Email delivery success: Offer dispatch to Ethan Hunt', priority: 'Low', read: true, time: '3 hours ago' },
      { id: 'NOT-04', text: 'Offer expiring soon: Sophia Patel (Product Manager)', priority: 'High', read: false, time: '5 hours ago' },
      { id: 'NOT-05', text: 'New candidate added: Lucas Gray (QA Automation)', priority: 'Low', read: true, time: '1 day ago' },
      { id: 'NOT-06', text: 'Failed login alert: Multiple incorrect password attempts (IP: 45.33.22.11)', priority: 'Urgent', read: false, time: '2 days ago' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Bell className="w-6 h-6 mr-3 text-cyan-500" /> System Notifications
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review urgent platform alerts, expiring offers, and security notifications.</p>
          </div>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            Mark All as Read
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
          {notifs.map(n => (
            <div key={n.id} className={`p-6 flex items-start justify-between transition-colors ${n.read ? 'bg-white dark:bg-slate-900' : 'bg-cyan-50/50 dark:bg-cyan-950/20'}`}>
              <div className="flex items-start space-x-4">
                <div className={`p-2.5 rounded-xl mt-0.5 ${
                  n.priority === 'Urgent' ? 'bg-red-500/10 text-red-500' :
                  n.priority === 'High' ? 'bg-amber-500/10 text-amber-500' :
                  'bg-cyan-500/10 text-cyan-500'
                }`}>
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{n.text}</h4>
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {n.time}</span>
                    <span>•</span>
                    <span className={`font-bold ${
                      n.priority === 'Urgent' ? 'text-red-500' : n.priority === 'High' ? 'text-amber-500' : 'text-slate-500'
                    }`}>Priority: {n.priority}</span>
                  </div>
                </div>
              </div>
              {!n.read && <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0"></span>}
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 11: SIGNATURE MONITORING (/admin/signatures)
  // ==========================================
  if (path.includes('/admin/signatures')) {
    const signatures = [
      { id: 'SIG-501', candidate: 'Ethan Hunt', status: 'Verified', timestamp: '2026-05-18 10:14:33', ip: '198.51.100.73 (MacBook Pro)', verification: 'Cryptographic Hash Match (ESIGN Compliant)' },
      { id: 'SIG-502', candidate: 'Marcus Vance', status: 'Verified', timestamp: '2026-05-16 14:22:10', ip: '192.168.1.42 (Apple iPad)', verification: 'Biometric TouchID Handshake Validated' },
      { id: 'SIG-503', candidate: 'Olivia Reed', status: 'Pending', timestamp: 'N/A', ip: 'Awaiting Candidate Handshake', verification: 'Document Delivered - Unsigned' },
      { id: 'SIG-504', candidate: 'Viktor Reznov', status: 'Verified', timestamp: '2026-05-08 16:45:00', ip: '10.0.0.12 (Windows 11)', verification: 'Cryptographic Hash Match (UETA Compliant)' },
      { id: 'SIG-505', candidate: 'Lucas Gray', status: 'Failed', timestamp: '2026-05-12 11:30:15', ip: 'Unknown IP', verification: 'Certificate Tamper Mismatch' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileSignature className="w-6 h-6 mr-3 text-cyan-500" /> Signature Monitoring
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time ESIGN/UETA digital signature tracking, IP logging, and cryptographic seal verification.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Verify Blockchain Anchors
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Record ID</th>
                  <th className="p-4 font-semibold">Candidate Name</th>
                  <th className="p-4 font-semibold">Signature Status</th>
                  <th className="p-4 font-semibold">Signed Timestamp</th>
                  <th className="p-4 font-semibold">IP / Device Info</th>
                  <th className="p-4 font-semibold">Verification Seal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {signatures.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{s.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{s.candidate}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        s.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        s.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{s.timestamp}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-mono">{s.ip}</td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{s.verification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 12: SYSTEM SETTINGS (/admin/settings)
  // ==========================================
  if (path.includes('/admin/settings')) {
    const settingsCategories = [
      { name: "SMTP Configuration", val: "smtp.sendgrid.net (Port 587 - TLS)", desc: "Primary mail delivery relay for offer letters and magic links." },
      { name: "JWT Expiry Duration", val: "15 Minutes (Strict Enterprise Policy)", desc: "Security token lifespan before requiring silent refresh." },
      { name: "Company Branding", val: "OfferForge Enterprise Inc. (Logo: Active)", desc: "Corporate watermarks and PDF header customizations." },
      { name: "Notification Settings", val: "Instant Webhooks & Email Digests", desc: "Event-driven dispatch for candidate acceptances." },
      { name: "PDF Generation Settings", val: "Engine: Puppeteer Chromium (256-bit Encrypted)", desc: "High-fidelity rendering engine for legal contracts." },
      { name: "Security Policies", val: "OWASP Top 10 WAF + FIDO2 Hardware Keys", desc: "Mandatory multi-factor authentication policies." }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Settings className="w-6 h-6 mr-3 text-cyan-500" /> System Settings
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Configure global SMTP relays, security token lifespans, branding, and PDF engine parameters.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Apply Configurations
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {settingsCategories.map((s, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{s.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{s.desc}</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                {s.val}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 13: ROLE MANAGEMENT (/admin/roles)
  // ==========================================
  if (path.includes('/admin/roles')) {
    const rolesMatrix = [
      { role: "Enterprise Admin", create: true, edit: true, delete: true, view: true, approve: true, count: 3 },
      { role: "HR Department Head", create: true, edit: true, delete: false, view: true, approve: true, count: 12 },
      { role: "Standard Recruiter", create: true, edit: true, delete: false, view: true, approve: false, count: 45 },
      { role: "Candidate Account", create: false, edit: false, delete: false, view: true, approve: false, count: 1248 }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Key className="w-6 h-6 mr-3 text-cyan-500" /> Role Management & Permissions Matrix
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Granular access control matrix defining capabilities across Admins, HR representatives, and Candidates.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Save Permissions Matrix
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-5 font-semibold">Role Name</th>
                  <th className="p-5 font-semibold text-center">Create</th>
                  <th className="p-5 font-semibold text-center">Edit</th>
                  <th className="p-5 font-semibold text-center">Delete</th>
                  <th className="p-5 font-semibold text-center">View</th>
                  <th className="p-5 font-semibold text-center">Approve</th>
                  <th className="p-5 font-semibold text-right">Active Accounts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
                {rolesMatrix.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-5 font-bold text-slate-900 dark:text-white text-sm">{r.role}</td>
                    {[r.create, r.edit, r.delete, r.view, r.approve].map((perm, idx) => (
                      <td key={idx} className="p-5 text-center">
                        {perm ? (
                          <span className="inline-flex p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"><Check size={16} /></span>
                        ) : (
                          <span className="inline-flex p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700"><X size={16} /></span>
                        )}
                      </td>
                    ))}
                    <td className="p-5 text-right font-bold text-cyan-600 dark:text-cyan-400">{r.count} Accounts</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 14: REPORTS & STATS (/admin/reports)
  // ==========================================
  if (path.includes('/admin/reports')) {
    const reportCards = [
      { title: "Hiring Trends (Q2 2026)", val: "+24.5% MoM Growth", desc: "Significant acceleration in engineering recruitment." },
      { title: "Offer Acceptance Trends", val: "89.2% Average", desc: "Exceeding enterprise benchmark of 85.0%." },
      { title: "Monthly Onboarding Stats", val: "142 New Hires", desc: "Fully automated digital signature completion." },
      { title: "HR Productivity Performance", val: "94.8% SLA Met", desc: "Average time-to-draft offer reduced to 12 minutes." },
      { title: "Candidate Pipeline Health", val: "1,248 Active", desc: "Robust top-of-funnel across 14 global regions." }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-cyan-500" /> Reports & Analytics Dashboard
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Graph-ready analytics data blocks, hiring trends, and HR performance reporting.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Export Master PDF Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportCards.map((r, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{r.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{r.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 font-extrabold text-2xl text-cyan-600 dark:text-cyan-400">
                {r.val}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 15: VERSION HISTORY (/admin/versions)
  // ==========================================
  if (path.includes('/admin/versions')) {
    const versions = [
      { id: 'OFF-1092', version: 'v2.4', editor: 'Sarah Jenkins (HR)', changes: 'Updated base salary from $150k to $160k after candidate negotiation.', time: 'May 16, 2026 14:22', notes: 'Approved by VP Engineering.' },
      { id: 'OFF-1090', version: 'v1.2', editor: 'Michael Chang (HR)', changes: 'Added relocation assistance package ($10,000 lump sum).', time: 'May 10, 2026 11:15', notes: 'Standard out-of-state transfer policy.' },
      { id: 'OFF-1088', version: 'v1.1', editor: 'David Kim (HR)', changes: 'Corrected stock option vesting schedule typo (4-year vesting).', time: 'May 12, 2026 09:30', notes: 'Flagged by AI placeholder validation.' },
      { id: 'OFF-1086', version: 'v3.0', editor: 'Evelyn Montgomery (Admin)', changes: 'Merged Master Executive Agreement clauses into offer addendum.', time: 'May 08, 2026 16:00', notes: 'Legal compliance update.' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Clock className="w-6 h-6 mr-3 text-cyan-500" /> Offer Version History
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Immutable audit trail of template revisions, salary negotiations, and change notes.</p>
          </div>
          <button className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            Archive History Logs
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Offer ID</th>
                  <th className="p-4 font-semibold">Version</th>
                  <th className="p-4 font-semibold">Edited By</th>
                  <th className="p-4 font-semibold">Changes Made</th>
                  <th className="p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">Change Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {versions.map((v, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{v.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white"><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">{v.version}</span></td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{v.editor}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{v.changes}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{v.time}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 italic">{v.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // MODULE 16: EMAIL MONITORING (/admin/emails)
  // ==========================================
  if (path.includes('/admin/emails')) {
    const emails = [
      { id: 'EML-101', recipient: 'marcus.v@gmail.com', subject: 'Offer Letter: Senior DevOps Engineer', status: 'Delivered', openRate: 'Opened (3 times)', time: 'May 18, 2026 11:42', attachment: 'Offer_AcmeCorp.pdf (Attached)' },
      { id: 'EML-102', recipient: 'olivia.reed@designco.io', subject: 'Your Magic Login Link for OfferForge', status: 'Delivered', openRate: 'Opened (1 time)', time: 'May 17, 2026 09:15', attachment: 'None' },
      { id: 'EML-103', recipient: 'ethan.h@imf.gov', subject: 'Offer Letter Fully Executed & Countersigned', status: 'Delivered', openRate: 'Opened (5 times)', time: 'May 10, 2026 10:14', attachment: 'Executed_Agreement.pdf (Attached)' },
      { id: 'EML-104', recipient: 'lucas.gray@qa-labs.org', subject: 'Update Regarding Your Candidacy', status: 'Bounced', openRate: 'Unopened (550 Error)', time: 'May 12, 2026 14:20', attachment: 'None' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Mail className="w-6 h-6 mr-3 text-cyan-500" /> Email Monitoring Log
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time SMTP dispatch logs, delivery statuses, open rates, and attachment verification.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Check SendGrid Webhooks
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Dispatch ID</th>
                  <th className="p-4 font-semibold">Recipient</th>
                  <th className="p-4 font-semibold">Subject Line</th>
                  <th className="p-4 font-semibold">Delivery Status</th>
                  <th className="p-4 font-semibold">Open Tracking</th>
                  <th className="p-4 font-semibold">Sent Timestamp</th>
                  <th className="p-4 font-semibold">Attachment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {emails.map((e, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{e.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{e.recipient}</td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{e.subject}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        e.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {e.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">{e.openRate}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{e.time}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-mono">{e.attachment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 1: TEMPLATE LIST (/hr/templates)
  // ==========================================
  if (path.includes('/hr/templates')) {
    const hrTemplates = [
      { id: 'TMP-001', name: 'Software Engineer Offer Template', dept: 'Engineering', version: 'v3.4', author: 'Sarah Jenkins', lastUpdated: 'May 18, 2026', placeholders: 14, usage: 1420, status: 'Active', desc: 'Standard tech agreement with IP assignment and confidentiality clauses.' },
      { id: 'TMP-002', name: 'UI/UX Designer Offer Template', dept: 'Design & Product', version: 'v2.1', author: 'Michael Chang', lastUpdated: 'May 17, 2026', placeholders: 12, usage: 480, status: 'Active', desc: 'Creative portfolio rights and remote equipment allowance terms.' },
      { id: 'TMP-003', name: 'HR Executive Template', dept: 'Human Resources', version: 'v4.0', author: 'Evelyn Montgomery', lastUpdated: 'May 15, 2026', placeholders: 18, usage: 145, status: 'Active', desc: 'Master executive benefits package with comprehensive severance terms.' },
      { id: 'TMP-004', name: 'Data Analyst Template', dept: 'Data Science', version: 'v1.8', author: 'David Kim', lastUpdated: 'May 14, 2026', placeholders: 15, usage: 620, status: 'Active', desc: 'Data handling clearance and non-compete stipulations.' },
      { id: 'TMP-005', name: 'Product Manager Template', dept: 'Product Management', version: 'v2.5', author: 'Michael Chang', lastUpdated: 'May 12, 2026', placeholders: 16, usage: 390, status: 'Active', desc: 'Executive compensation structure including KPI bonus targets.' },
      { id: 'TMP-006', name: 'QA Automation Engineer Template', dept: 'Quality Assurance', version: 'v1.2', author: 'Sarah Jenkins', lastUpdated: 'May 10, 2026', placeholders: 11, usage: 210, status: 'Draft', desc: 'Standard testing automation terms and hardware allocations.' },
      { id: 'TMP-007', name: 'DevOps Lead Offer Template', dept: 'Infrastructure', version: 'v3.0', author: 'David Kim', lastUpdated: 'May 08, 2026', placeholders: 17, usage: 180, status: 'Active', desc: 'On-call compensation addendum and cloud access clearance.' },
      { id: 'TMP-008', name: 'Marketing Director Template', dept: 'Marketing', version: 'v2.0', author: 'Emily Rodriguez', lastUpdated: 'May 05, 2026', placeholders: 15, usage: 95, status: 'Active', desc: 'Performance marketing bonus tiers and PR confidentiality.' },
      { id: 'TMP-009', name: 'Sales Executive Offer Template', dept: 'Sales', version: 'v1.5', author: 'Alex Johnson', lastUpdated: 'May 02, 2026', placeholders: 13, usage: 540, status: 'Active', desc: 'Commission structure, quota requirements, and clawback clauses.' },
      { id: 'TMP-010', name: 'Security Architect Template', dept: 'Security & Compliance', version: 'v2.2', author: 'Evelyn Montgomery', lastUpdated: 'Apr 28, 2026', placeholders: 19, usage: 75, status: 'Archived', desc: 'Strict background checks, security clearance mandates, and NDA.' }
    ];

    const filteredTemplates = hrTemplates.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.dept.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileText className="w-6 h-6 mr-3 text-cyan-500" /> Professional Template List
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Explore 10+ active corporate offer templates, placeholder configurations, and usage analytics.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search templates by name or dept..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              + New Template
            </button>
          </div>
        </div>

        {/* Dynamic Placeholders Highlight Card */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 p-6 rounded-2xl border border-cyan-500/30 shadow-xl text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg text-cyan-400 flex items-center mb-2">
              <Code className="w-5 h-5 mr-2" /> Dynamic AI Placeholders Supported
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Our AI rendering engine automatically scans and binds candidate metadata to these tokens during PDF generation. Ensure your custom templates include appropriate placeholder syntax.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0 font-mono text-xs font-bold">
            {['{{candidate_name}}', '{{salary}}', '{{joining_date}}', '{{department}}', '{{stock_rsus}}'].map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-inner">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map(t => (
            <div key={t.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                    t.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                    t.status === 'Draft' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                    'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
                  }`}>
                    {t.status}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">{t.id}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{t.name}</h3>
                <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3">{t.dept} Department • {t.version}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{t.desc}</p>
              </div>

              <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs font-medium">
                <div className="flex justify-between"><span className="text-slate-400">Created By:</span> <span className="text-slate-800 dark:text-slate-200">{t.author}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Last Updated:</span> <span className="text-slate-800 dark:text-slate-200 font-mono">{t.lastUpdated}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Placeholders:</span> <span className="font-bold text-cyan-500">{t.placeholders} Variables</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Usage Count:</span> <span className="font-bold text-slate-900 dark:text-white">{t.usage.toLocaleString()} Generated</span></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 2: CANDIDATE REGISTRATION (/hr/register-candidate)
  // ==========================================
  if (path.includes('/hr/register-candidate')) {
    const regCandidates = [
      { id: 'CR-101', name: 'Alexander Wright', email: 'alex.wright@gmail.com', phone: '+1 (555) 123-4567', position: 'Senior Fullstack Engineer', dept: 'Engineering', salary: '$175,000', exp: '8 Years', resume: 'Uploaded (Parsed)', time: 'May 18, 2026 14:10' },
      { id: 'CR-102', name: 'Beatrice Chen', email: 'b.chen@designco.io', phone: '+1 (555) 234-5678', position: 'Lead UI/UX Designer', dept: 'Design & Product', salary: '$150,000', exp: '6 Years', resume: 'Uploaded (Parsed)', time: 'May 18, 2026 13:45' },
      { id: 'CR-103', name: 'Charles Gomez', email: 'cgomez@data-labs.org', phone: '+1 (555) 345-6789', position: 'Senior Data Analyst', dept: 'Data Science', salary: '$140,000', exp: '5 Years', resume: 'Uploaded (Parsed)', time: 'May 18, 2026 12:30' },
      { id: 'CR-104', name: 'Diana Prince', email: 'diana@amazon.com', phone: '+1 (555) 456-7890', position: 'VP of Product', dept: 'Product Management', salary: '$240,000', exp: '12 Years', resume: 'Uploaded (Parsed)', time: 'May 18, 2026 11:15' },
      { id: 'CR-105', name: 'Evan Peters', email: 'evan.p@qa-testing.net', phone: '+1 (555) 567-8901', position: 'QA Automation Lead', dept: 'Quality Assurance', salary: '$130,000', exp: '7 Years', resume: 'Uploaded (Parsed)', time: 'May 18, 2026 10:05' },
      { id: 'CR-106', name: 'Fiona Gallagher', email: 'fiona@chicago-ops.com', phone: '+1 (555) 678-9012', position: 'HR Operations Manager', dept: 'Human Resources', salary: '$125,000', exp: '6 Years', resume: 'Pending Upload', time: 'May 18, 2026 09:20' },
      { id: 'CR-107', name: 'George Miller', email: 'george@furyroad.au', phone: '+1 (555) 789-0123', position: 'Principal DevOps Architect', dept: 'Infrastructure', salary: '$210,000', exp: '14 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 17:40' },
      { id: 'CR-108', name: 'Hannah Abbott', email: 'hannah@hufflepuff.uk', phone: '+1 (555) 890-1234', position: 'Growth Marketing Director', dept: 'Marketing', salary: '$165,000', exp: '9 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 16:15' },
      { id: 'CR-109', name: 'Ian Malcolm', email: 'ian@chaos-theory.edu', phone: '+1 (555) 901-2345', position: 'Chief Data Scientist', dept: 'Data Science', salary: '$260,000', exp: '15 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 15:10' },
      { id: 'CR-110', name: 'Julia Roberts', email: 'julia@hollywood.org', phone: '+1 (555) 012-3456', position: 'Enterprise Sales Executive', dept: 'Sales', salary: '$180,000', exp: '10 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 14:00' },
      { id: 'CR-111', name: 'Kevin Mitnick', email: 'kevin@security.net', phone: '+1 (555) 123-9876', position: 'Lead Security Architect', dept: 'Security & Compliance', salary: '$220,000', exp: '12 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 13:25' },
      { id: 'CR-112', name: 'Laura Croft', email: 'laura@tomb-raider.co.uk', phone: '+1 (555) 234-8765', position: 'Senior Mobile Engineer (iOS)', dept: 'Engineering', salary: '$160,000', exp: '7 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 11:50' },
      { id: 'CR-113', name: 'Michael Scott', email: 'mscott@dundermifflin.com', phone: '+1 (555) 345-7654', position: 'Regional Sales Director', dept: 'Sales', salary: '$145,000', exp: '11 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 10:30' },
      { id: 'CR-114', name: 'Nina Simone', email: 'nina@jazz-tech.fr', phone: '+1 (555) 456-6543', position: 'Senior Product Designer', dept: 'Design & Product', salary: '$155,000', exp: '8 Years', resume: 'Uploaded (Parsed)', time: 'May 17, 2026 09:15' },
      { id: 'CR-115', name: 'Oscar Martinez', email: 'oscar@accounting-plus.com', phone: '+1 (555) 567-5432', position: 'Senior Financial Analyst', dept: 'Finance', salary: '$135,000', exp: '6 Years', resume: 'Uploaded (Parsed)', time: 'May 16, 2026 16:45' }
    ];

    const filteredReg = regCandidates.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.position.toLowerCase().includes(searchQuery.toLowerCase()) || c.dept.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <UserPlus className="w-6 h-6 mr-3 text-cyan-500" /> Candidate Registration Logs
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review 15+ demo registration entries, expected salary benchmarks, and AI resume parsing states.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or dept..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              Register New Candidate
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Candidate</th>
                  <th className="p-4 font-semibold">Position Applied</th>
                  <th className="p-4 font-semibold">Department</th>
                  <th className="p-4 font-semibold">Expected Salary</th>
                  <th className="p-4 font-semibold">Exp. Level</th>
                  <th className="p-4 font-semibold">Resume Status</th>
                  <th className="p-4 font-semibold">Registered Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {filteredReg.map(c => (
                  <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{c.name}</div>
                      <div className="text-slate-400">{c.email} • {c.phone}</div>
                      <div className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">ID: {c.id}</div>
                    </td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200 text-sm">{c.position}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{c.dept}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{c.salary}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">{c.exp}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        c.resume.includes('Uploaded') ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}>
                        {c.resume}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{c.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 3: CANDIDATE MANAGEMENT (/hr/candidates)
  // ==========================================
  if (path.includes('/hr/candidates')) {
    const hrCandidates = [
      { name: 'Alexander Wright', email: 'alex.wright@gmail.com', stage: 'Technical Round 2', hr: 'Sarah Jenkins', score: 98, interview: 'Passed', eligibility: 'Highly Eligible', status: 'Selected', joinDate: 'June 1, 2026' },
      { name: 'Beatrice Chen', email: 'b.chen@designco.io', stage: 'Portfolio Review', hr: 'Michael Chang', score: 94, interview: 'Scheduled', eligibility: 'Eligible', status: 'Interview Scheduled', joinDate: 'June 15, 2026' },
      { name: 'Charles Gomez', email: 'cgomez@data-labs.org', stage: 'HR Screening', hr: 'David Kim', score: 88, interview: 'Pending', eligibility: 'Eligible', status: 'Screening', joinDate: 'June 15, 2026' },
      { name: 'Diana Prince', email: 'diana@amazon.com', stage: 'Executive Panel', hr: 'Evelyn Montgomery', score: 99, interview: 'Passed', eligibility: 'Highly Eligible', status: 'Offer Sent', joinDate: 'May 25, 2026' },
      { name: 'Evan Peters', email: 'evan.p@qa-testing.net', stage: 'Technical Round 1', hr: 'Sarah Jenkins', score: 85, interview: 'Failed', eligibility: 'Not Eligible', status: 'Rejected', joinDate: 'N/A' },
      { name: 'Fiona Gallagher', email: 'fiona@chicago-ops.com', stage: 'HR Screening', hr: 'Emily Rodriguez', score: 79, interview: 'Pending', eligibility: 'Reviewing', status: 'Screening', joinDate: 'July 1, 2026' },
      { name: 'George Miller', email: 'george@furyroad.au', stage: 'Final Fitment', hr: 'David Kim', score: 96, interview: 'Passed', eligibility: 'Highly Eligible', status: 'Offer Sent', joinDate: 'June 10, 2026' },
      { name: 'Hannah Abbott', email: 'hannah@hufflepuff.uk', stage: 'Marketing Pitch', hr: 'Emily Rodriguez', score: 92, interview: 'Passed', eligibility: 'Eligible', status: 'Selected', joinDate: 'June 20, 2026' },
      { name: 'Ian Malcolm', email: 'ian@chaos-theory.edu', stage: 'Research Defense', hr: 'Michael Chang', score: 97, interview: 'Passed', eligibility: 'Highly Eligible', status: 'Offer Sent', joinDate: 'June 1, 2026' },
      { name: 'Julia Roberts', email: 'julia@hollywood.org', stage: 'Sales Mock Pitch', hr: 'Alex Johnson', score: 91, interview: 'Scheduled', eligibility: 'Eligible', status: 'Interview Scheduled', joinDate: 'July 1, 2026' },
      { name: 'Kevin Mitnick', email: 'kevin@security.net', stage: 'System Design', hr: 'Evelyn Montgomery', score: 95, interview: 'Passed', eligibility: 'Highly Eligible', status: 'Selected', joinDate: 'June 15, 2026' },
      { name: 'Laura Croft', email: 'laura@tomb-raider.co.uk', stage: 'Coding Assessment', hr: 'Sarah Jenkins', score: 90, interview: 'Passed', eligibility: 'Eligible', status: 'Offer Sent', joinDate: 'June 15, 2026' },
      { name: 'Michael Scott', email: 'mscott@dundermifflin.com', stage: 'Cultural Fit', hr: 'Alex Johnson', score: 82, interview: 'Failed', eligibility: 'Not Eligible', status: 'Rejected', joinDate: 'N/A' },
      { name: 'Nina Simone', email: 'nina@jazz-tech.fr', stage: 'Design Challenge', hr: 'Michael Chang', score: 93, interview: 'Passed', eligibility: 'Eligible', status: 'Selected', joinDate: 'June 1, 2026' },
      { name: 'Oscar Martinez', email: 'oscar@accounting-plus.com', stage: 'Case Study', hr: 'David Kim', score: 87, interview: 'Scheduled', eligibility: 'Eligible', status: 'Interview Scheduled', joinDate: 'June 30, 2026' }
    ];

    const filteredMgmt = activeTab === 'All' ? hrCandidates : hrCandidates.filter(c => c.status === activeTab);
    const finalFiltered = filteredMgmt.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.stage.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Users className="w-6 h-6 mr-3 text-cyan-500" /> Candidate Management & Pipelines
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage application stages, assigned HR representatives, AI resume scores, and interview statuses.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by name or stage..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {['All', 'Screening', 'Interview Scheduled', 'Selected', 'Rejected', 'Offer Sent'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20' : 
                'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Candidate Profile</th>
                  <th className="p-4 font-semibold">Application Stage</th>
                  <th className="p-4 font-semibold">HR Assigned</th>
                  <th className="p-4 font-semibold text-center">Resume Score</th>
                  <th className="p-4 font-semibold">Interview Status</th>
                  <th className="p-4 font-semibold">Offer Eligibility</th>
                  <th className="p-4 font-semibold">Current Status</th>
                  <th className="p-4 font-semibold">Joining Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {finalFiltered.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{c.name}</div>
                      <div className="text-slate-400">{c.email}</div>
                    </td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200 text-sm">{c.stage}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{c.hr}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                        c.score >= 95 ? 'bg-cyan-500/20 text-cyan-500 border border-cyan-500/30' :
                        c.score >= 90 ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' :
                        'bg-blue-500/20 text-blue-500 border border-blue-500/30'
                      }`}>
                        {c.score}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">{c.interview}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        c.eligibility.includes('Highly') ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                        c.eligibility.includes('Eligible') ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}>
                        {c.eligibility}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        c.status === 'Selected' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        c.status === 'Offer Sent' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                        c.status === 'Interview Scheduled' ? 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20' :
                        c.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{c.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 4: OFFER GENERATION (/hr/generate-offer)
  // ==========================================
  if (path.includes('/hr/generate-offer')) {
    const genOffers = [
      { id: 'OFF-2010', name: 'Diana Prince', position: 'VP of Product', template: 'Product Manager Template', hr: 'Evelyn Montgomery', salary: '$240,000 + 50k RSUs', joinDate: 'May 25, 2026', created: 'May 18, 2026', status: 'Accepted' },
      { id: 'OFF-2009', name: 'George Miller', position: 'Principal DevOps Architect', template: 'DevOps Lead Offer Template', hr: 'David Kim', salary: '$210,000 + 30k RSUs', joinDate: 'June 10, 2026', created: 'May 17, 2026', status: 'Sent' },
      { id: 'OFF-2008', name: 'Ian Malcolm', position: 'Chief Data Scientist', template: 'Data Analyst Template', hr: 'Michael Chang', salary: '$260,000 + 40k RSUs', joinDate: 'June 1, 2026', created: 'May 17, 2026', status: 'Accepted' },
      { id: 'OFF-2007', name: 'Laura Croft', position: 'Senior Mobile Engineer (iOS)', template: 'Software Engineer Offer Template', hr: 'Sarah Jenkins', salary: '$160,000 + 15k RSUs', joinDate: 'June 15, 2026', created: 'May 16, 2026', status: 'Sent' },
      { id: 'OFF-2006', name: 'Alexander Wright', position: 'Senior Fullstack Engineer', template: 'Software Engineer Offer Template', hr: 'Sarah Jenkins', salary: '$175,000 + 20k RSUs', joinDate: 'June 1, 2026', created: 'May 18, 2026', status: 'Draft' },
      { id: 'OFF-2005', name: 'Hannah Abbott', position: 'Growth Marketing Director', template: 'Marketing Director Template', hr: 'Emily Rodriguez', salary: '$165,000 + 10k RSUs', joinDate: 'June 20, 2026', created: 'May 17, 2026', status: 'Draft' },
      { id: 'OFF-2004', name: 'Kevin Mitnick', position: 'Lead Security Architect', template: 'Security Architect Template', hr: 'Evelyn Montgomery', salary: '$220,000 + 25k RSUs', joinDate: 'June 15, 2026', created: 'May 17, 2026', status: 'Draft' },
      { id: 'OFF-2003', name: 'Nina Simone', position: 'Senior Product Designer', template: 'UI/UX Designer Offer Template', hr: 'Michael Chang', salary: '$155,000 + 12k RSUs', joinDate: 'June 1, 2026', created: 'May 16, 2026', status: 'Draft' },
      { id: 'OFF-2002', name: 'Evan Peters', position: 'QA Automation Lead', template: 'QA Automation Engineer Template', hr: 'Sarah Jenkins', salary: '$130,000', joinDate: 'N/A', created: 'May 15, 2026', status: 'Rejected' },
      { id: 'OFF-2001', name: 'Michael Scott', position: 'Regional Sales Director', template: 'Sales Executive Offer Template', hr: 'Alex Johnson', salary: '$145,000', joinDate: 'N/A', created: 'May 14, 2026', status: 'Rejected' }
    ];

    const filteredGen = activeTab === 'All' ? genOffers : genOffers.filter(o => o.status === activeTab);

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileSignature className="w-6 h-6 mr-3 text-cyan-500" /> Offer Generation Records
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review generated offers, template bindings, salary packages, and current lifecycle states.</p>
          </div>
          <div className="flex space-x-2">
            {['All', 'Draft', 'Sent', 'Accepted', 'Rejected'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20' : 
                  'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Offer ID</th>
                  <th className="p-4 font-semibold">Candidate Name</th>
                  <th className="p-4 font-semibold">Position</th>
                  <th className="p-4 font-semibold">Template Used</th>
                  <th className="p-4 font-semibold">Generated By HR</th>
                  <th className="p-4 font-semibold">Salary Package</th>
                  <th className="p-4 font-semibold">Joining Date</th>
                  <th className="p-4 font-semibold">Creation Date</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {filteredGen.map((o, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{o.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{o.name}</td>
                    <td className="p-4 font-semibold text-slate-800 dark:text-slate-200 text-sm">{o.position}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{o.template}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{o.hr}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{o.salary}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{o.joinDate}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{o.created}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        o.status === 'Accepted' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        o.status === 'Sent' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                        o.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 5: PREVIEW & EDIT OFFER (/hr/preview-offer)
  // ==========================================
  if (path.includes('/hr/preview-offer')) {
    const previewData = {
      candidateName: "Alexander Wright",
      position: "Senior Fullstack Engineer",
      companyName: "OfferForge Enterprise Inc.",
      companyAddress: "100 Innovation Way, Suite 400, Tech City, CA 94016",
      baseSalary: "$175,000 USD",
      signingBonus: "$15,000 USD (Payable on first payroll cycle)",
      stockOptions: "20,000 RSUs (4-year vesting schedule, 1-year cliff)",
      joiningDate: "June 1, 2026",
      offerValidity: "May 25, 2026 (5:00 PM EST)",
      termsAndConditions: [
        "1. Employment Relationship: Your employment with OfferForge Enterprise Inc. will be 'at will', meaning either you or the Company may terminate the relationship at any time.",
        "2. Confidentiality & IP Assignment: You agree to sign and comply with the Company's standard Employee Non-Disclosure and Proprietary Rights Assignment Agreement.",
        "3. Full-time Commitment: During your employment, you shall devote your full business efforts and time to the Company.",
        "4. Background Check: This offer is contingent upon the successful completion of a comprehensive background and reference check."
      ],
      versionHistory: [
        { version: "v2.0", editor: "Sarah Jenkins (HR Lead)", time: "May 18, 2026 14:30", notes: "Updated base salary from $165k to $175k and added $15k signing bonus after VP approval." },
        { version: "v1.0", editor: "Sarah Jenkins (HR Lead)", time: "May 18, 2026 11:00", notes: "Initial draft generation using Software Engineer Offer Template v3.4." }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Eye className="w-6 h-6 mr-3 text-cyan-500" /> Preview & Edit Offer Letter
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Rich-text formatted preview, dynamic placeholder verification, and edited version history.</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Save Draft
            </button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              Publish & Dispatch Offer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Preview Document */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 font-serif text-slate-800 dark:text-slate-200">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex justify-between items-start font-sans">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{previewData.companyName}</h3>
                <p className="text-xs text-slate-400 mt-1">{previewData.companyAddress}</p>
              </div>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-bold font-mono">
                OFFER ID: OFF-2006
              </span>
            </div>

            <div className="space-y-4 font-sans text-sm">
              <p className="font-bold text-slate-900 dark:text-white text-base">Dear {previewData.candidateName},</p>
              <p className="leading-relaxed">
                We are thrilled to offer you the position of <strong className="text-cyan-600 dark:text-cyan-400">{previewData.position}</strong> at {previewData.companyName}. We were incredibly impressed by your experience and believe you will be a phenomenal addition to our engineering team.
              </p>

              <h4 className="font-bold text-slate-900 dark:text-white text-base pt-2 border-b border-slate-100 dark:border-slate-800 pb-1">Salary & Compensation Breakdown</h4>
              <ul className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 font-mono text-xs">
                <li><strong className="text-slate-500">Annual Base Salary:</strong> <span className="font-bold text-slate-900 dark:text-white">{previewData.baseSalary}</span></li>
                <li><strong className="text-slate-500">Signing Bonus:</strong> <span className="font-bold text-slate-900 dark:text-white">{previewData.signingBonus}</span></li>
                <li><strong className="text-slate-500">Stock Options (RSUs):</strong> <span className="font-bold text-slate-900 dark:text-white">{previewData.stockOptions}</span></li>
              </ul>

              <h4 className="font-bold text-slate-900 dark:text-white text-base pt-2 border-b border-slate-100 dark:border-slate-800 pb-1">Key Terms & Conditions</h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                {previewData.termsAndConditions.map((term, i) => <p key={i}>{term}</p>)}
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
                <span><strong>Joining Date:</strong> {previewData.joiningDate}</span>
                <span><strong>Offer Validity:</strong> {previewData.offerValidity}</span>
              </div>
            </div>
          </div>

          {/* Sidebar Metadata & Version History */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-500" /> Edited Version History
              </h3>
              <div className="space-y-4 divide-y divide-slate-200 dark:divide-slate-800">
                {previewData.versionHistory.map((v, i) => (
                  <div key={i} className="pt-4 first:pt-0 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">{v.version}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{v.time}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{v.editor}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">{v.notes}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-cyan-500" /> Dynamic Placeholders
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                All 14 placeholders successfully resolved. Zero missing variables detected by AI Validator.
              </p>
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center text-emerald-500 text-xs font-bold">
                <CheckCircle className="w-4 h-4 mr-2" /> Pre-Flight Validation Passed
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 6: OFFER HISTORY (/hr/offer-history)
  // ==========================================
  if (path.includes('/hr/offer-history')) {
    const offerHistoryLogs = [
      { id: 'OFF-2010', candidate: 'Diana Prince', version: 'v3.1', editor: 'Evelyn Montgomery', prevSalary: '$220,000', newSalary: '$240,000 + 50k RSUs', time: 'May 18, 2026 12:15', notes: 'Final executive compensation alignment matching competing tier-1 offer.' },
      { id: 'OFF-2009', candidate: 'George Miller', version: 'v2.0', editor: 'David Kim', prevSalary: '$190,000', newSalary: '$210,000 + 30k RSUs', time: 'May 17, 2026 18:00', notes: 'Added 30k RSUs to bridge base salary expectations.' },
      { id: 'OFF-2008', candidate: 'Ian Malcolm', version: 'v2.2', editor: 'Michael Chang', prevSalary: '$250,000', newSalary: '$260,000 + 40k RSUs', time: 'May 17, 2026 16:30', notes: 'Adjusted signing bonus and stock vesting schedule.' },
      { id: 'OFF-2006', candidate: 'Alexander Wright', version: 'v2.0', editor: 'Sarah Jenkins', prevSalary: '$165,000', newSalary: '$175,000 + 20k RSUs', time: 'May 18, 2026 14:30', notes: 'Increased base by $10k following stellar technical round feedback.' },
      { id: 'OFF-2004', candidate: 'Kevin Mitnick', version: 'v1.5', editor: 'Evelyn Montgomery', prevSalary: '$200,000', newSalary: '$220,000 + 25k RSUs', time: 'May 17, 2026 14:10', notes: 'Seniority level bumped from Architect to Lead Architect.' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <History className="w-6 h-6 mr-3 text-cyan-500" /> Historical Offer Revisions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Detailed audit records of salary escalations, previous packages, and negotiation notes.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Export History Logs
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Offer ID</th>
                  <th className="p-4 font-semibold">Candidate</th>
                  <th className="p-4 font-semibold">Version</th>
                  <th className="p-4 font-semibold">Edited By</th>
                  <th className="p-4 font-semibold">Previous Salary</th>
                  <th className="p-4 font-semibold">Updated Salary</th>
                  <th className="p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">Change Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {offerHistoryLogs.map((h, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{h.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{h.candidate}</td>
                    <td className="p-4"><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold text-slate-600 dark:text-slate-300">{h.version}</span></td>
                    <td className="p-4 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">{h.editor}</td>
                    <td className="p-4 font-mono text-slate-400 line-through">{h.prevSalary}</td>
                    <td className="p-4 font-mono font-bold text-emerald-500">{h.newSalary}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{h.time}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400 italic">{h.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 7: STATUS TRACKING (/hr/status-tracking)
  // ==========================================
  if (path.includes('/hr/status-tracking')) {
    const trackingWorkflows = [
      { id: 'OFF-2010', candidate: 'Diana Prince', role: 'VP of Product', status: 'Accepted', progress: 100, time: 'May 18, 2026 13:00', responseTime: '2.5 Hours', comments: 'Cryptographic ESIGN seal verified. Onboarding workflow initiated.' },
      { id: 'OFF-2008', candidate: 'Ian Malcolm', role: 'Chief Data Scientist', status: 'Accepted', progress: 100, time: 'May 17, 2026 17:15', responseTime: '4.2 Hours', comments: 'Countersigned by HR Head. Welcome kit dispatched.' },
      { id: 'OFF-2009', candidate: 'George Miller', role: 'Principal DevOps Architect', status: 'Signed', progress: 85, time: 'May 18, 2026 11:30', responseTime: '14.1 Hours', comments: 'Candidate signed. Awaiting final HR countersignature.' },
      { id: 'OFF-2007', candidate: 'Laura Croft', role: 'Senior Mobile Engineer (iOS)', status: 'Viewed', progress: 60, time: 'May 17, 2026 09:45', responseTime: 'Viewed 4 times', comments: 'Candidate reviewed salary breakdown. Follow-up call scheduled.' },
      { id: 'OFF-2006', candidate: 'Alexander Wright', role: 'Senior Fullstack Engineer', status: 'Sent', progress: 40, time: 'May 18, 2026 14:35', responseTime: 'Awaiting View', comments: 'Magic link dispatched via SendGrid.' },
      { id: 'OFF-2005', candidate: 'Hannah Abbott', role: 'Growth Marketing Director', status: 'Draft', progress: 20, time: 'May 17, 2026 16:20', responseTime: 'Drafting in progress', comments: 'Awaiting VP Marketing budget approval.' },
      { id: 'OFF-2002', candidate: 'Evan Peters', role: 'QA Automation Lead', status: 'Rejected', progress: 100, time: 'May 16, 2026 12:00', responseTime: '1.5 Days', comments: 'Candidate declined due to remote work policy preferences.' },
      { id: 'OFF-1999', candidate: 'Arthur Pendelton', role: 'Legacy Systems Engineer', status: 'Expired', progress: 100, time: 'May 10, 2026 17:00', responseTime: 'No response (7 Days)', comments: 'Offer validity window lapsed. Reopened requisition.' }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Activity className="w-6 h-6 mr-3 text-cyan-500" /> Offer Status Tracking & Workflows
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time candidate response times, HR comments, and multi-stage progress bars.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Sync View Counters
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Offer ID</th>
                  <th className="p-4 font-semibold">Candidate Name</th>
                  <th className="p-4 font-semibold">Current Status</th>
                  <th className="p-4 font-semibold">Workflow Progress</th>
                  <th className="p-4 font-semibold">Response Time</th>
                  <th className="p-4 font-semibold">Last Updated</th>
                  <th className="p-4 font-semibold">HR Comments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {trackingWorkflows.map((w, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{w.id}</td>
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{w.candidate}</div>
                      <div className="text-slate-400">{w.role}</div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        w.status === 'Accepted' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        w.status === 'Signed' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                        w.status === 'Viewed' ? 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20' :
                        w.status === 'Sent' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                        w.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        w.status === 'Expired' ? 'bg-slate-500/10 text-slate-500 border border-slate-500/20' :
                        'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}>
                        {w.status}
                      </span>
                    </td>
                    <td className="p-4 w-32">
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${
                            w.status === 'Rejected' || w.status === 'Expired' ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                          }`} style={{ width: `${w.progress}%` }}></div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500">{w.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">{w.responseTime}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{w.time}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400 italic">{w.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // HR MODULE 8: PDF DOWNLOADS (/hr/pdf-downloads)
  // ==========================================
  if (path.includes('/hr/pdf-downloads')) {
    const pdfRecords = [
      { id: 'PDF-901', candidate: 'Diana Prince', filename: 'Offer_Diana_Prince_VP_Product_SIGNED.pdf', count: 4, time: 'May 18, 2026 13:05', size: '2.4 MB', by: 'Diana Prince (Candidate)', lastAccessed: 'May 18, 2026 13:45', signed: true },
      { id: 'PDF-902', candidate: 'Ian Malcolm', filename: 'Offer_Ian_Malcolm_ChiefDataSci_SIGNED.pdf', count: 6, time: 'May 17, 2026 17:20', size: '3.1 MB', by: 'Michael Chang (HR)', lastAccessed: 'May 18, 2026 10:15', signed: true },
      { id: 'PDF-903', candidate: 'George Miller', filename: 'Offer_George_Miller_DevOps_SIGNED.pdf', count: 2, time: 'May 18, 2026 11:35', size: '2.2 MB', by: 'George Miller (Candidate)', lastAccessed: 'May 18, 2026 11:35', signed: true },
      { id: 'PDF-904', candidate: 'Laura Croft', filename: 'Offer_Laura_Croft_SeniorMobile_UNSIGNED.pdf', count: 3, time: 'May 16, 2026 15:10', size: '1.8 MB', by: 'Laura Croft (Candidate)', lastAccessed: 'May 17, 2026 14:20', signed: false },
      { id: 'PDF-905', candidate: 'Alexander Wright', filename: 'Offer_Alexander_Wright_Fullstack_PREVIEW.pdf', count: 1, time: 'May 18, 2026 14:30', size: '1.9 MB', by: 'Sarah Jenkins (HR)', lastAccessed: 'May 18, 2026 14:30', signed: false },
      { id: 'PDF-906', candidate: 'Kevin Mitnick', filename: 'Offer_Kevin_Mitnick_SecArchitect_DRAFT.pdf', count: 5, time: 'May 17, 2026 14:15', size: '2.1 MB', by: 'Evelyn Montgomery (Admin)', lastAccessed: 'May 17, 2026 16:40', signed: false }
    ];

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Download className="w-6 h-6 mr-3 text-cyan-500" /> PDF Download Records
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Audit logs of signed and unsigned offer PDFs, download counts, and file access timestamps.</p>
          </div>
          <button 
            onClick={() => handleDownloadDoc('Master_HR_Offer_Archive.zip', true)}
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20"
          >
            Export Master Zip Archive
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Record ID</th>
                  <th className="p-4 font-semibold">Candidate Name</th>
                  <th className="p-4 font-semibold">PDF Filename</th>
                  <th className="p-4 font-semibold">ESIGN Seal</th>
                  <th className="p-4 font-semibold text-center">Downloads</th>
                  <th className="p-4 font-semibold">File Size</th>
                  <th className="p-4 font-semibold">Downloaded By</th>
                  <th className="p-4 font-semibold">Last Accessed</th>
                  <th className="p-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {pdfRecords.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{p.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{p.candidate}</td>
                    <td className="p-4 font-mono text-slate-700 dark:text-slate-300 font-medium">{p.filename}</td>
                    <td className="p-4 whitespace-nowrap">
                      {p.signed ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <CheckCircle className="w-3 h-3 mr-1" /> Signed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700">
                          Unsigned
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center font-bold text-slate-900 dark:text-white">{p.count}x</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{p.size}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">{p.by}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{p.lastAccessed}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleDownloadDoc(p.filename)}
                        className="p-2 text-cyan-600 hover:text-cyan-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors" 
                        title="Download"
                      >
                        <Download size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // ADDITIONAL HR MODULES (/hr/profile, /hr/emails, /hr/notifications, /hr/signatures, /hr/reports, /hr/search, /hr/activity)
  // ==========================================
  if (path.includes('/hr/profile')) {
    const hrProfile = {
      name: "Sarah Jenkins",
      role: "Senior Talent Acquisition Lead",
      dept: "Engineering & Tech Recruitment",
      email: "sarah.j@offerforge.com",
      phone: "+1 (555) 392-8819",
      activeRecruitments: 14,
      totalOffers: 142,
      acceptanceRate: "92.4%",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    };
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Settings className="w-6 h-6 mr-3 text-cyan-500" /> HR Profile & Calendar Integration
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage recruiter identity, scheduling links, and performance metrics.</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
            Save Preferences
          </button>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <img src={hrProfile.avatar} alt="Avatar" className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500/30 shadow-xl shrink-0" />
          <div className="space-y-3 flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{hrProfile.name}</h3>
            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold">{hrProfile.role} • {hrProfile.dept}</p>
            <p className="text-xs text-slate-400">{hrProfile.email} | {hrProfile.phone}</p>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-6 justify-center md:justify-start">
              <div><span className="text-xs text-slate-400 block">Active Recruitments</span><span className="text-lg font-bold text-slate-800 dark:text-slate-200">{hrProfile.activeRecruitments} Positions</span></div>
              <div><span className="text-xs text-slate-400 block">Total Offers Sent</span><span className="text-lg font-bold text-slate-800 dark:text-slate-200">{hrProfile.totalOffers} Offers</span></div>
              <div><span className="text-xs text-slate-400 block">Acceptance Rate</span><span className="text-lg font-bold text-emerald-500">{hrProfile.acceptanceRate}</span></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/hr/emails')) {
    const hrEmails = [
      { id: 'HRE-201', recipient: 'alex.wright@gmail.com', subject: 'Offer Letter: Senior Fullstack Engineer', status: 'Delivered', open: 'Opened (3 times)', time: 'May 18, 2026 14:35', ip: '192.168.1.42', event: 'open' },
      { id: 'HRE-202', recipient: 'b.chen@designco.io', subject: 'Interview Invitation: Lead UI/UX Designer', status: 'Delivered', open: 'Opened (1 time)', time: 'May 18, 2026 13:50', ip: '10.0.0.15', event: 'delivered' },
      { id: 'HRE-203', recipient: 'cgomez@data-labs.org', subject: 'OfferForge Magic Handshake Link', status: 'Delivered', open: 'Unopened', time: 'May 18, 2026 12:35', ip: '172.16.0.84', event: 'processed' },
      { id: 'HRE-204', recipient: 'evan.p@qa-testing.net', subject: 'Action Required: Update Regarding Your Application', status: 'Bounced', open: 'Unopened (550 Mailbox unavailable)', time: 'May 16, 2026 12:10', ip: '198.51.100.3', event: 'bounce' },
      { id: 'HRE-205', recipient: 'diana@amazon.com', subject: 'Offer Letter: VP of Product (High Priority)', status: 'Delivered', open: 'Opened (5 times)', time: 'May 18, 2026 11:15', ip: '10.0.0.1', event: 'click' },
      { id: 'HRE-206', recipient: 'george@furyroad.au', subject: 'Offer Letter: Principal DevOps Architect', status: 'Delivered', open: 'Opened (2 times)', time: 'May 17, 2026 17:40', ip: '192.168.1.99', event: 'open' },
      { id: 'HRE-207', recipient: 'hannah@hufflepuff.uk', subject: 'Offer Letter: Growth Marketing Director', status: 'Delivered', open: 'Opened (1 time)', time: 'May 17, 2026 16:15', ip: '172.16.0.50', event: 'delivered' },
      { id: 'HRE-208', recipient: 'ian@chaos-theory.edu', subject: 'Offer Letter: Chief Data Scientist', status: 'Delivered', open: 'Opened (4 times)', time: 'May 17, 2026 15:10', ip: '10.0.0.202', event: 'click' },
      { id: 'HRE-209', recipient: 'julia@hollywood.org', subject: 'Interview Invitation: Enterprise Sales Executive', status: 'Delivered', open: 'Unopened', time: 'May 17, 2026 14:00', ip: '198.51.100.15', event: 'processed' },
      { id: 'HRE-210', recipient: 'kevin@security.net', subject: 'Offer Letter: Lead Security Architect', status: 'Delivered', open: 'Opened (2 times)', time: 'May 17, 2026 13:25', ip: '10.0.0.88', event: 'open' },
      { id: 'HRE-211', recipient: 'laura@tomb-raider.co.uk', subject: 'Offer Letter: Senior Mobile Engineer (iOS)', status: 'Delivered', open: 'Opened (1 time)', time: 'May 17, 2026 11:50', ip: '192.168.1.105', event: 'delivered' },
      { id: 'HRE-212', recipient: 'mscott@dundermifflin.com', subject: 'Update Regarding Your Sales Application', status: 'Bounced', open: 'Unopened (554 Relay Access Denied)', time: 'May 17, 2026 10:30', ip: '172.16.0.12', event: 'bounce' }
    ];

    const mockSendGridWebhook = [
      {
        "email": "alex.wright@gmail.com",
        "timestamp": 1779110100,
        "smtp-id": "<4d2b1a3c-5e6f-7a8b@offerforge.com>",
        "event": "open",
        "category": ["offer_dispatch", "engineering"],
        "sg_event_id": "sg_event_8f9a0b1c2d3e",
        "sg_message_id": "1a2b3c4d5e.filter0001p1las1",
        "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        "ip": "192.168.1.42"
      },
      {
        "email": "evan.p@qa-testing.net",
        "timestamp": 1778937000,
        "smtp-id": "<9f8e7d6c-5b4a-3f2e@offerforge.com>",
        "event": "bounce",
        "category": ["status_update", "qa"],
        "reason": "550 5.1.1 The email account that you tried to reach does not exist.",
        "status": "5.1.1",
        "sg_event_id": "sg_event_3f2e1d0c9b8a",
        "ip": "198.51.100.3"
      }
    ];

    const filteredEmails = hrEmails.filter(e => e.recipient.toLowerCase().includes(searchQuery.toLowerCase()) || e.subject.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Mail className="w-6 h-6 mr-3 text-cyan-500" /> HR Email Sending & SMTP Monitoring
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time SendGrid SMTP dispatch records, open rate tracking, bounce diagnostics, and API webhook payloads.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search recipient or subject..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Webhook JSON' : 'View SendGrid Webhook'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              Sync SendGrid Relay
            </button>
          </div>
        </div>

        {/* Webhook JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden font-mono text-xs text-cyan-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-cyan-400" /> SendGrid Event Webhook Payload (Live Simulation)</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/30 font-bold">POST /api/v1/webhooks/sendgrid</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockSendGridWebhook, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">SMTP ID</th>
                  <th className="p-4 font-semibold">Recipient Email</th>
                  <th className="p-4 font-semibold">Subject Line</th>
                  <th className="p-4 font-semibold">Delivery Status</th>
                  <th className="p-4 font-semibold">Open Rate Tracking</th>
                  <th className="p-4 font-semibold">IP Address</th>
                  <th className="p-4 font-semibold">Dispatch Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {filteredEmails.map((e, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{e.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{e.recipient}</td>
                    <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{e.subject}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        e.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {e.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">{e.open}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{e.ip}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{e.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/hr/notifications')) {
    const hrNotifs = [
      { id: 'HRN-01', text: 'Offer accepted by Diana Prince (VP of Product)', time: '10 mins ago', priority: 'High', read: false, type: 'Candidate Acceptance', details: 'Candidate digitally signed the executive offer letter. Countersignature workflow triggered.' },
      { id: 'HRN-02', text: 'George Miller signed offer letter. Awaiting countersignature.', time: '1 hour ago', priority: 'Medium', read: false, type: 'Signature Trigger', details: 'ESIGN verification seal applied from IP 192.168.1.99.' },
      { id: 'HRN-03', text: 'Alexander Wright viewed offer letter (3 times).', time: '3 hours ago', priority: 'Low', read: true, type: 'Activity Alert', details: 'Candidate opened the magic link and reviewed salary breakdown.' },
      { id: 'HRN-04', text: 'Offer expired for Arthur Pendelton (Legacy Systems).', time: '1 day ago', priority: 'High', read: true, type: 'Offer Expiration', details: '7-day validity window lapsed. Requisition automatically re-opened.' },
      { id: 'HRN-05', text: 'System Maintenance Notice: DocuSign API Sandbox Upgrade', time: '2 days ago', priority: 'Medium', read: true, type: 'System Notice', details: 'Scheduled maintenance on May 20, 2026. Expect 15 minutes of webhook latency.' },
      { id: 'HRN-06', text: 'Ian Malcolm accepted Chief Data Scientist offer package.', time: '2 days ago', priority: 'High', read: true, type: 'Candidate Acceptance', details: 'Candidate accepted $260k + 40k RSUs package.' },
      { id: 'HRN-07', text: 'SMTP Bounce Warning: evan.p@qa-testing.net (550 Mailbox unavailable)', time: '3 days ago', priority: 'High', read: true, type: 'SMTP Alert', details: 'SendGrid relay reported hard bounce. Check email address validity.' },
      { id: 'HRN-08', text: 'Beatrice Chen scheduled interview for Lead UI/UX Designer.', time: '3 days ago', priority: 'Low', read: true, type: 'Interview Alert', details: 'Calendar invite successfully synced with Michael Chang.' },
      { id: 'HRN-09', text: 'New Template Published: HR Executive Template v4.0', time: '4 days ago', priority: 'Low', read: true, type: 'Template Notice', details: 'Evelyn Montgomery updated master executive benefits package.' },
      { id: 'HRN-10', text: 'Kevin Mitnick signed Lead Security Architect agreement.', time: '5 days ago', priority: 'Medium', read: true, type: 'Signature Trigger', details: 'FIDO2 hardware key verified during signing handshake.' }
    ];

    const filteredNotifs = activeTab === 'All' ? hrNotifs : hrNotifs.filter(n => n.priority === activeTab);
    const finalNotifs = filteredNotifs.filter(n => n.text.toLowerCase().includes(searchQuery.toLowerCase()) || n.type.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Bell className="w-6 h-6 mr-3 text-cyan-500" /> Real-Time HR Notifications & Feed
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Live candidate acceptance alerts, signature triggers, offer expiration warnings, and system notices.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search notification text..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Mark All Read
            </button>
          </div>
        </div>

        {/* Priority Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {['All', 'High', 'Medium', 'Low'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20' : 
                'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Priorities' : `${tab} Priority`}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
          {finalNotifs.map(n => (
            <div key={n.id} className={`p-6 flex items-start justify-between transition-colors ${n.read ? 'bg-white dark:bg-slate-900' : 'bg-cyan-50/50 dark:bg-cyan-950/20'}`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-2xl mt-0.5 ${
                  n.priority === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                  n.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                  'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20'
                }`}>
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400">{n.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      n.priority === 'High' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                      n.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}>
                      {n.priority} Priority
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {n.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{n.text}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">{n.details}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{n.time}</p>
                </div>
              </div>
              {!n.read && <span className="w-3 h-3 rounded-full bg-cyan-500 shrink-0 shadow-md shadow-cyan-500/50 animate-pulse"></span>}
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (path.includes('/hr/signatures')) {
    const hrSigs = [
      { id: 'HRS-301', candidate: 'Diana Prince', status: 'Verified', time: 'May 18, 2026 13:00', ip: '198.51.100.42', hash: 'sha256-8f92a1b3c4d5e6f7', device: 'Chrome 125.0 (macOS)', envelopeId: 'env_9a8b7c6d5e4f' },
      { id: 'HRS-302', candidate: 'George Miller', status: 'Verified', time: 'May 18, 2026 11:30', ip: '192.168.1.99', hash: 'sha256-4b5c6d7e8f9a0b1c', device: 'Safari 17.4 (iOS)', envelopeId: 'env_1b2c3d4e5f6a' },
      { id: 'HRS-303', candidate: 'Ian Malcolm', status: 'Verified', time: 'May 17, 2026 17:15', ip: '10.0.0.202', hash: 'sha256-1a2b3c4d5e6f7a8b', device: 'Firefox 126.0 (Windows)', envelopeId: 'env_5f6e7d8c9b0a' },
      { id: 'HRS-304', candidate: 'Laura Croft', status: 'Pending', time: 'Awaiting Handshake', ip: 'Pending IP Bind', hash: 'Unsigned Document', device: 'Awaiting Device Bind', envelopeId: 'env_3c4d5e6f7a8b' },
      { id: 'HRS-305', candidate: 'Alexander Wright', status: 'Pending', time: 'Awaiting Handshake', ip: 'Pending IP Bind', hash: 'Unsigned Document', device: 'Awaiting Device Bind', envelopeId: 'env_7a8b9c0d1e2f' },
      { id: 'HRS-306', candidate: 'Kevin Mitnick', status: 'Verified', time: 'May 17, 2026 13:30', ip: '10.0.0.88', hash: 'sha256-9d8e7f6a5b4c3d2e', device: 'Edge 124.0 (Windows)', envelopeId: 'env_2e3f4a5b6c7d' },
      { id: 'HRS-307', candidate: 'Hannah Abbott', status: 'Pending', time: 'Awaiting Handshake', ip: 'Pending IP Bind', hash: 'Unsigned Document', device: 'Awaiting Device Bind', envelopeId: 'env_8c9b0a1f2e3d' },
      { id: 'HRS-308', candidate: 'Evan Peters', status: 'Disputed', time: 'May 16, 2026 12:05', ip: '198.51.100.3', hash: 'sha256-invalid_seal_match', device: 'Unknown Browser', envelopeId: 'env_4d5e6f7a8b9c' }
    ];

    const mockDocusignWebhook = {
      "event": "envelope-completed",
      "apiVersion": "v2.1",
      "uri": "/accounts/acc_123456/envelopes/env_9a8b7c6d5e4f",
      "retryCount": 0,
      "configurationId": 987654,
      "generatedDateTime": "2026-05-18T13:00:00.0000000Z",
      "data": {
        "accountId": "acc_123456",
        "recipientId": "rec_001",
        "envelopeId": "env_9a8b7c6d5e4f",
        "envelopeSummary": {
          "status": "completed",
          "emailSubject": "Complete with DocuSign: Offer Letter - VP of Product",
          "emailBlurb": "Please sign your executive offer letter.",
          "signingLocation": "online",
          "customFields": {
            "textCustomFields": [
              { "name": "CandidateID", "value": "CR-104" },
              { "name": "Department", "value": "Product Management" }
            ]
          },
          "recipients": {
            "signers": [
              {
                "name": "Diana Prince",
                "email": "diana@amazon.com",
                "status": "completed",
                "deliveredDateTime": "2026-05-18T11:15:00.0000000Z",
                "signedDateTime": "2026-05-18T13:00:00.0000000Z",
                "clientIPAddress": "198.51.100.42"
              }
            ]
          }
        }
      }
    };

    const filteredSigs = hrSigs.filter(s => s.candidate.toLowerCase().includes(searchQuery.toLowerCase()) || s.status.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileSignature className="w-6 h-6 mr-3 text-cyan-500" /> Cryptographic ESIGN/UETA Signature Tracking
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Immutable verification logs, SHA-256 document anchors, candidate IP/device tracking, and DocuSign API webhook monitoring.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search candidate or status..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Webhook JSON' : 'View DocuSign Webhook'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              Audit Blockchain Anchor
            </button>
          </div>
        </div>

        {/* Webhook JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden font-mono text-xs text-cyan-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-cyan-400" /> DocuSign Connect Webhook Payload (Live Simulation)</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/30 font-bold">POST /api/v1/webhooks/docusign</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockDocusignWebhook, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Log ID</th>
                  <th className="p-4 font-semibold">Candidate Name</th>
                  <th className="p-4 font-semibold">Verification Status</th>
                  <th className="p-4 font-semibold">Signature Timestamp</th>
                  <th className="p-4 font-semibold">Device & Browser Info</th>
                  <th className="p-4 font-semibold">IP Address</th>
                  <th className="p-4 font-semibold">Cryptographic Hash (SHA-256)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {filteredSigs.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{s.id}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{s.candidate}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        s.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 
                        s.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{s.time}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">{s.device}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-mono whitespace-nowrap">{s.ip}</td>
                    <td className="p-4 font-mono text-slate-500 dark:text-slate-400 max-w-xs truncate">{s.hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/hr/reports')) {
    const hrReports = [
      { title: "Average Time-to-Offer", val: "1.2 Days", desc: "Decreased by 45% using AI template binding.", change: "-45%", positive: true },
      { title: "Candidate Acceptance Rate", val: "92.4% YTD", desc: "Exceeding corporate benchmark of 85%.", change: "+7.4%", positive: true },
      { title: "Active Offer Pipelines", val: "15 Candidates", desc: "Across Engineering, Product, and Sales.", change: "Stable", positive: true },
      { title: "Monthly Hiring Growth", val: "+28% MoM", desc: "Highest velocity recorded in Q2 2026.", change: "+28%", positive: true },
      { title: "Average Response Time", val: "4.2 Hours", desc: "From magic link dispatch to initial view.", change: "-1.5h", positive: true },
      { title: "Recruiter AI Adoption", val: "98.5%", desc: "Recruiters utilizing dynamic token binding.", change: "+12%", positive: true }
    ];

    const chartReadyJson = {
      "monthly_hiring_trends": [
        { "month": "Jan 2026", "offers_sent": 45, "accepted": 38, "acceptance_rate": 84.4 },
        { "month": "Feb 2026", "offers_sent": 52, "accepted": 47, "acceptance_rate": 90.3 },
        { "month": "Mar 2026", "offers_sent": 68, "accepted": 61, "acceptance_rate": 89.7 },
        { "month": "Apr 2026", "offers_sent": 85, "accepted": 79, "acceptance_rate": 92.9 },
        { "month": "May 2026", "offers_sent": 95, "accepted": 88, "acceptance_rate": 92.6 }
      ],
      "department_wise_hiring": [
        { "department": "Engineering & Tech", "active_candidates": 14, "offers_sent": 142, "avg_salary": "$175,000" },
        { "department": "Product & Design", "active_candidates": 8, "offers_sent": 98, "avg_salary": "$160,000" },
        { "department": "Sales & Marketing", "active_candidates": 5, "offers_sent": 45, "avg_salary": "$150,000" },
        { "department": "Data Science", "active_candidates": 6, "offers_sent": 62, "avg_salary": "$190,000" },
        { "department": "Security & Compliance", "active_candidates": 4, "offers_sent": 35, "avg_salary": "$210,000" }
      ],
      "hr_performance_metrics": [
        { "recruiter": "Sarah Jenkins", "offers_generated": 142, "acceptance_rate": "92.4%", "avg_time_to_offer": "1.1 days" },
        { "recruiter": "Michael Chang", "offers_generated": 98, "acceptance_rate": "88.1%", "avg_time_to_offer": "1.4 days" },
        { "recruiter": "David Kim", "offers_generated": 210, "acceptance_rate": "94.0%", "avg_time_to_offer": "0.9 days" },
        { "recruiter": "Emily Rodriguez", "offers_generated": 45, "acceptance_rate": "75.5%", "avg_time_to_offer": "2.1 days" },
        { "recruiter": "Alex Johnson", "offers_generated": 115, "acceptance_rate": "89.8%", "avg_time_to_offer": "1.3 days" }
      ],
      "candidate_pipeline_stats": {
        "total_active": 37,
        "screening": 12,
        "interviewing": 10,
        "offer_drafting": 5,
        "offer_sent": 6,
        "offer_accepted": 4
      }
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-cyan-500" /> HR Reports & Analytics Dashboard
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monthly hiring trends, offer acceptance rates, department-wise velocity, average response times, and recruiter leaderboards.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Chart JSON' : 'View Chart-Ready JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              Export Full PDF Report
            </button>
          </div>
        </div>

        {/* Chart JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden font-mono text-xs text-cyan-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-cyan-400" /> Chart-Ready Analytics JSON Datasets (Direct API Feed)</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/30 font-bold">GET /api/v1/analytics/master</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(chartReadyJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrReports.map((r, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{r.title}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    r.positive ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}>
                    {r.change}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{r.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 font-extrabold text-3xl text-cyan-600 dark:text-cyan-400 tracking-tight">
                {r.val}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Leaderboard Table */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-cyan-500" /> Recruiter Productivity Leaderboard
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Recruiter Name</th>
                  <th className="p-4 font-semibold text-center">Offers Generated</th>
                  <th className="p-4 font-semibold">Acceptance Rate</th>
                  <th className="p-4 font-semibold">Avg Time-to-Offer</th>
                  <th className="p-4 font-semibold">Performance Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs font-medium">
                {chartReadyJson.hr_performance_metrics.map((h, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 dark:text-white text-sm flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                        {h.recruiter.split(' ').map(w => w[0]).join('')}
                      </div>
                      <span>{h.recruiter}</span>
                    </td>
                    <td className="p-4 text-center font-bold text-slate-900 dark:text-white text-sm">{h.offers_generated}</td>
                    <td className="p-4 font-bold text-emerald-500 text-sm">{h.acceptance_rate}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-mono">{h.avg_time_to_offer}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full" style={{ width: `${parseFloat(h.acceptance_rate)}%` }}></div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500">{h.acceptance_rate}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/hr/search')) {
    const searchResults = [
      { id: 'SRC-01', name: 'Alexander Wright', category: 'Candidate', dept: 'Engineering', status: 'Selected', joinDate: 'June 1, 2026', salary: '$175,000', match: '98% Match', details: 'Senior Fullstack Engineer candidate pipeline record.' },
      { id: 'SRC-02', name: 'Software Engineer Offer Template', category: 'Template', dept: 'Engineering', status: 'Active', joinDate: 'N/A', salary: 'N/A', match: '14 Placeholders', details: 'Master template v3.4 used in 1,420 generations.' },
      { id: 'SRC-03', name: 'Diana Prince', category: 'Offer', dept: 'Product Management', status: 'Accepted', joinDate: 'May 25, 2026', salary: '$240,000', match: '100% Match', details: 'Executive VP of Product signed offer contract.' },
      { id: 'SRC-04', name: 'Beatrice Chen', category: 'Candidate', dept: 'Design & Product', status: 'Interviewing', joinDate: 'June 15, 2026', salary: '$150,000', match: '94% Match', details: 'Lead UI/UX Designer portfolio assessment stage.' },
      { id: 'SRC-05', name: 'HR Executive Template', category: 'Template', dept: 'Human Resources', status: 'Active', joinDate: 'N/A', salary: 'N/A', match: '18 Placeholders', details: 'Executive benefits package with severance clauses.' },
      { id: 'SRC-06', name: 'George Miller', category: 'Offer', dept: 'Infrastructure', status: 'Signed', joinDate: 'June 10, 2026', salary: '$210,000', match: '96% Match', details: 'Principal DevOps Architect awaiting countersignature.' },
      { id: 'SRC-07', name: 'Charles Gomez', category: 'Candidate', dept: 'Data Science', status: 'Screening', joinDate: 'June 15, 2026', salary: '$140,000', match: '88% Match', screening: 'HR Screening round in progress.' },
      { id: 'SRC-08', name: 'Data Analyst Template', category: 'Template', dept: 'Data Science', status: 'Active', joinDate: 'N/A', salary: 'N/A', match: '15 Placeholders', details: 'Data handling clearance stipulations.' },
      { id: 'SRC-09', name: 'Ian Malcolm', category: 'Offer', dept: 'Data Science', status: 'Accepted', joinDate: 'June 1, 2026', salary: '$260,000', match: '99% Match', details: 'Chief Data Scientist countersigned agreement.' },
      { id: 'SRC-10', name: 'Evan Peters', category: 'Candidate', dept: 'Quality Assurance', status: 'Rejected', joinDate: 'N/A', salary: '$130,000', match: '85% Match', details: 'QA Automation Lead technical round 1 failed.' },
      { id: 'SRC-11', name: 'Product Manager Template', category: 'Template', dept: 'Product Management', status: 'Active', joinDate: 'N/A', salary: 'N/A', match: '16 Placeholders', details: 'Executive KPI bonus structure.' },
      { id: 'SRC-12', name: 'Laura Croft', category: 'Offer', dept: 'Engineering', status: 'Sent', joinDate: 'June 15, 2026', salary: '$160,000', match: '90% Match', details: 'Senior Mobile Engineer (iOS) magic link dispatched.' },
      { id: 'SRC-13', name: 'Fiona Gallagher', category: 'Candidate', dept: 'Human Resources', status: 'Screening', joinDate: 'July 1, 2026', salary: '$125,000', match: '79% Match', details: 'HR Operations Manager background screening.' },
      { id: 'SRC-14', name: 'QA Automation Engineer Template', category: 'Template', dept: 'Quality Assurance', status: 'Draft', joinDate: 'N/A', salary: 'N/A', match: '11 Placeholders', details: 'Standard testing automation terms.' },
      { id: 'SRC-15', name: 'Kevin Mitnick', category: 'Offer', dept: 'Security & Compliance', status: 'Draft', joinDate: 'June 15, 2026', salary: '$220,000', match: '95% Match', details: 'Lead Security Architect draft pending review.' }
    ];

    const filterConfigurationsJson = {
      "search_indexes": ["candidate_names", "departments", "statuses", "joining_dates", "salary_ranges", "offer_types"],
      "active_filters": {
        "category": activeTab === 'All' ? null : activeTab,
        "query_string": searchQuery || null
      },
      "facets": {
        "categories": ["Candidate", "Template", "Offer"],
        "departments": ["Engineering", "Design & Product", "Human Resources", "Data Science", "Product Management", "Infrastructure", "Quality Assurance", "Security & Compliance"],
        "statuses": ["Selected", "Active", "Accepted", "Interviewing", "Signed", "Screening", "Rejected", "Sent", "Draft"]
      }
    };

    const filteredSearch = activeTab === 'All' ? searchResults : searchResults.filter(s => s.category === activeTab);
    const finalSearch = filteredSearch.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.dept.toLowerCase().includes(searchQuery.toLowerCase()) || s.status.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Search className="w-6 h-6 mr-3 text-cyan-500" /> Advanced HR Search & Filter Master Index
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Cross-module querying across candidate names, departments, workflow statuses, joining dates, salary ranges, and offer types.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search candidates, depts, statuses..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Filter Configs' : 'View Filter Configs JSON'}</span>
            </button>
          </div>
        </div>

        {/* Filter Configs JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden font-mono text-xs text-cyan-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-cyan-400" /> Active Search & Filter Configurations JSON (Elasticsearch Query Simulation)</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/30 font-bold">POST /api/v1/search/query</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(filterConfigurationsJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {['All', 'Candidate', 'Template', 'Offer'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20' : 
                'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Categories' : `${tab}s`}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-4 font-semibold">Result ID</th>
                  <th className="p-4 font-semibold">Entity Name</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold">Department</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Joining Date</th>
                  <th className="p-4 font-semibold">Salary / Package</th>
                  <th className="p-4 font-semibold">Metadata Match</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {finalSearch.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors font-medium">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{s.id}</td>
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{s.name}</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">{s.details}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        s.category === 'Offer' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                        s.category === 'Candidate' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                        'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20'
                      }`}>
                        {s.category}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-semibold">{s.dept}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        s.status === 'Selected' || s.status === 'Accepted' || s.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        s.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        s.status === 'Signed' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                        'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{s.joinDate}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">{s.salary}</td>
                    <td className="p-4 font-mono font-bold text-emerald-500 whitespace-nowrap">{s.match}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/hr/activity')) {
    const hrActivityLogs = [
      { id: 'ACT-401', time: 'May 18, 2026 14:35', user: 'Sarah Jenkins', action: 'Offer Dispatched: Alexander Wright (Senior Fullstack)', module: 'Offer Generation', ip: '192.168.1.42', hash: 'sha256-a1b2c3d4' },
      { id: 'ACT-402', time: 'May 18, 2026 13:50', user: 'Michael Chang', action: 'Interview Scheduled: Beatrice Chen (Lead UI/UX)', module: 'Candidate Management', ip: '10.0.0.15', hash: 'sha256-b2c3d4e5' },
      { id: 'ACT-403', time: 'May 18, 2026 12:35', user: 'David Kim', action: 'Candidate Registered: Charles Gomez (Data Analyst)', module: 'Candidate Registration', ip: '172.16.0.84', hash: 'sha256-c3d4e5f6' },
      { id: 'ACT-404', time: 'May 18, 2026 11:15', user: 'Evelyn Montgomery', action: 'Offer Countersigned: Diana Prince (VP Product)', module: 'Offer Generation', ip: '10.0.0.1', hash: 'sha256-d4e5f6a7' },
      { id: 'ACT-405', time: 'May 18, 2026 10:20', user: 'Sarah Jenkins', action: 'Template Edited: Software Engineer Offer Template v3.4', module: 'Template Builder', ip: '192.168.1.42', hash: 'sha256-e5f6a7b8' },
      { id: 'ACT-406', time: 'May 17, 2026 18:00', user: 'David Kim', action: 'Offer Revised: George Miller (Principal DevOps Architect)', module: 'Preview & Edit Offer', ip: '172.16.0.84', hash: 'sha256-f6a7b8c9' },
      { id: 'ACT-407', time: 'May 17, 2026 16:30', user: 'Michael Chang', action: 'Offer Revised: Ian Malcolm (Chief Data Scientist)', module: 'Preview & Edit Offer', ip: '10.0.0.15', hash: 'sha256-a7b8c9d0' },
      { id: 'ACT-408', time: 'May 17, 2026 14:15', user: 'Evelyn Montgomery', action: 'Offer Draft Generated: Kevin Mitnick (Lead Security Architect)', module: 'Offer Generation', ip: '10.0.0.1', hash: 'sha256-b8c9d0e1' },
      { id: 'ACT-409', time: 'May 17, 2026 11:50', user: 'Sarah Jenkins', action: 'Offer Dispatched: Laura Croft (Senior Mobile Engineer)', module: 'Offer Generation', ip: '192.168.1.42', hash: 'sha256-c9d0e1f2' },
      { id: 'ACT-410', time: 'May 17, 2026 09:30', user: 'Emily Rodriguez', action: 'Candidate Registered: Hannah Abbott (Growth Marketing)', module: 'Candidate Registration', ip: '172.16.0.50', hash: 'sha256-d0e1f2g3' },
      { id: 'ACT-411', time: 'May 16, 2026 16:45', user: 'David Kim', action: 'Candidate Registered: Oscar Martinez (Senior Financial Analyst)', module: 'Candidate Registration', ip: '172.16.0.84', hash: 'sha256-e1f2g3h4' },
      { id: 'ACT-412', time: 'May 16, 2026 15:10', user: 'Sarah Jenkins', action: 'PDF Downloaded: Offer_Laura_Croft_SeniorMobile_UNSIGNED.pdf', module: 'PDF Downloads', ip: '192.168.1.42', hash: 'sha256-f2g3h4i5' },
      { id: 'ACT-413', time: 'May 16, 2026 12:00', user: 'Sarah Jenkins', action: 'Offer Rejected: Evan Peters (QA Automation Lead)', module: 'Status Tracking', ip: '192.168.1.42', hash: 'sha256-g3h4i5j6' },
      { id: 'ACT-414', time: 'May 15, 2026 14:20', user: 'Evelyn Montgomery', action: 'Template Published: HR Executive Template v4.0', module: 'Template Builder', ip: '10.0.0.1', hash: 'sha256-h4i5j6k7' },
      { id: 'ACT-415', time: 'May 14, 2026 11:00', user: 'Alex Johnson', action: 'Offer Rejected: Michael Scott (Regional Sales Director)', module: 'Status Tracking', ip: '10.0.0.111', hash: 'sha256-i5j6k7l8' }
    ];

    const mockAuditTrailJson = {
      "audit_summary": {
        "total_events": 15,
        "time_window": "May 14, 2026 - May 18, 2026",
        "blockchain_verification_anchor": "0x8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a",
        "integrity_status": "VERIFIED_SECURE"
      },
      "events": hrActivityLogs
    };

    const filteredLogs = hrActivityLogs.filter(l => l.user.toLowerCase().includes(searchQuery.toLowerCase()) || l.action.toLowerCase().includes(searchQuery.toLowerCase()) || l.module.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Activity className="w-6 h-6 mr-3 text-cyan-500" /> Immutable HR Activity & Audit History
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time immutable logs of recruiter actions, modules accessed, IP tracking, and cryptographic audit anchors.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search recruiter, action, module..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white"
              />
            </div>
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Audit JSON' : 'View Audit Trail JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
              Export Signed CSV Audit
            </button>
          </div>
        </div>

        {/* Audit Trail JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden font-mono text-xs text-cyan-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-cyan-400" /> Cryptographic Audit Trail JSON (Blockchain Anchor Verification)</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/30 font-bold">GET /api/v1/audit/trail</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockAuditTrailJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden font-mono text-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider text-slate-400 bg-slate-50 dark:bg-slate-800/30 font-sans text-xs">
                  <th className="p-4 font-semibold">Log ID</th>
                  <th className="p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">Recruiter Name</th>
                  <th className="p-4 font-semibold">Action Performed</th>
                  <th className="p-4 font-semibold">Module Accessed</th>
                  <th className="p-4 font-semibold">IP Address</th>
                  <th className="p-4 font-semibold">Cryptographic Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
                {filteredLogs.map(l => (
                  <tr key={l.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-cyan-600 dark:text-cyan-400 whitespace-nowrap">{l.id}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{l.time}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white whitespace-nowrap font-sans">{l.user}</td>
                    <td className="p-4 text-cyan-600 dark:text-cyan-400 font-semibold font-sans">{l.action}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-sans font-bold text-[10px]">
                        {l.module}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{l.ip}</td>
                    <td className="p-4 text-slate-400 text-[10px] whitespace-nowrap">{l.hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // CANDIDATE PORTAL ROUTES (10 MODULES)
  // ==========================================

  if (path.includes('/candidate/profile')) {
    const mockProfileJson = {
      "candidate_id": "CND-90210",
      "full_name": "Alexander Wright",
      "applied_role": "Senior Fullstack Engineer",
      "department": "Engineering & Tech",
      "verification_status": "VERIFIED_SECURE",
      "identity_provider": "ID.me Biometric Auth",
      "contact_info": {
        "email": "alexander.wright@gmail.com",
        "phone": "+1 (555) 019-2834",
        "shipping_address": "123 Tech Lane, Suite 400, Austin, TX 78701",
        "emergency_contact": "Sarah Wright (Spouse) - +1 (555) 019-2835"
      },
      "preferences": {
        "hardware_selection": "16-inch MacBook Pro M3 Max (64GB RAM, 2TB SSD)",
        "swag_size": "Men's Large (L)",
        "dietary_restrictions": "None"
      }
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Settings className="w-6 h-6 mr-3 text-purple-500" /> Candidate Profile & Verification Settings
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your verified legal identity, shipping address for equipment/swag dispatch, and emergency contact details.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Profile JSON' : 'View Profile JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Update Profile Details
            </button>
          </div>
        </div>

        {/* Profile JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Candidate Profile REST API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/profile</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockProfileJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-3xl shadow-lg shadow-purple-500/30">
                AW
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Alexander Wright</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold flex items-center">
                    <Shield className="w-3.5 h-3.5 mr-1 text-emerald-500" /> Verified via ID.me
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Senior Fullstack Engineer • Engineering & Tech Department</p>
                <p className="text-xs text-slate-400 font-mono mt-1">Candidate ID: CND-90210</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 sm:items-end font-mono text-xs text-slate-500 dark:text-slate-400">
              <div>Account Created: <span className="font-bold text-slate-800 dark:text-slate-200">May 1, 2026</span></div>
              <div>Last Login: <span className="font-bold text-slate-800 dark:text-slate-200">May 18, 2026 15:10</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                <Mail className="w-4 h-4 mr-2 text-purple-500" /> Contact & Shipping Information
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Primary Email Address</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80">alexander.wright@gmail.com</div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Phone Number</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80">+1 (555) 019-2834</div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Equipment Shipping Address</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 leading-relaxed">
                    123 Tech Lane, Suite 400<br />Austin, TX 78701
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center border-b border-slate-100 dark:border-slate-800 pb-2">
                <Shield className="w-4 h-4 mr-2 text-purple-500" /> Onboarding Preferences & Emergency
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Hardware Selection</label>
                  <div className="font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 px-4 py-2.5 rounded-xl border border-purple-200 dark:border-purple-900/30">
                    16-inch MacBook Pro M3 Max (64GB RAM, 2TB SSD)
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Welcome Swag T-Shirt Size</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80">Men's Large (L)</div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Emergency Contact</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80">
                    Sarah Wright (Spouse) • +1 (555) 019-2835
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/view-offer')) {
    const mockOfferDetailsJson = {
      "offer_id": "OFF-2026-90210",
      "candidate_name": "Alexander Wright",
      "role": "Senior Fullstack Engineer",
      "department": "Engineering & Tech",
      "compensation": {
        "base_salary": "$175,000 USD",
        "payment_frequency": "Semi-monthly",
        "signing_bonus": "$25,000 USD (Payable on first regular paycheck)",
        "stock_options": "10,000 RSUs (4-year vesting, 1-year cliff)",
        "target_bonus": "15% Annual Bonus based on corporate milestones",
        "relocation_allowance": "$10,000 Premium Executive Move Package"
      },
      "benefits_summary": [
        "401(k) retirement plan with 6% dollar-for-dollar corporate match",
        "100% company-paid Health, Dental, and Vision premiums for employee & dependents",
        "Unlimited Paid Time Off (PTO) with mandatory 2-week minimum recharge",
        "Annual $2,000 L&D and conference stipend",
        "$500 monthly wellness & gym allowance"
      ],
      "anticipated_start_date": "June 1, 2026",
      "expiration_date": "May 25, 2026 17:00 EST"
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-500" /> Official Offer Letter & Compensation Package
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review your executive compensation breakdown, equity grants, signing bonuses, and corporate benefits package.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Package JSON' : 'View Offer Package JSON'}</span>
            </button>
            <button 
              onClick={() => handleDownloadDoc('Job_Offer_Letter_AcmeCorp.html')}
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20"
            >
              Download Offer Letter
            </button>
          </div>
        </div>

        {/* Offer Package JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Offer Package & Compensation API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/offer/details</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockOfferDetailsJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Document Content Wrapper - Elegant Lavender Matting Background */}
            <div className="p-8 md:p-12 bg-indigo-100 dark:bg-indigo-950/40 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner flex justify-center items-start min-h-[650px] overflow-x-auto">
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
                        <span className="text-xs font-sans font-normal text-slate-400">Unsigned (Pending Execution)</span>
                      </div>
                      <div className="text-xs text-slate-700 font-medium mt-1">Alexander Wright</div>
                      <div className="text-[10px] text-indigo-600 font-mono mt-0.5 font-bold">
                        PENDING EXECUTION
                      </div>
                    </div>
                  </div>
                  
                  {/* Cryptographic Compliance Seal */}
                  <div className="mt-12 pt-6 border-t border-slate-200 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-bold text-slate-700 flex items-center">
                        <Shield className="w-4 h-4 mr-1 text-indigo-600" />
                        ESIGN / UETA Compliance Record
                      </span>
                      <span className="font-mono text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">SHA-256 SECURE</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-600 break-all bg-white p-2.5 rounded border border-slate-200 shadow-sm select-all">
                      Document Hash: e3b0c44298fc1c14.9afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </div>
                    <div className="text-[10px] text-slate-400 mt-2 flex items-center justify-between">
                      <span>Issuer: OfferForge Document Authority</span>
                      <span>Status: Awaiting Countersignature</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-500" /> Key Milestones & Expiry
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Anticipated Start Date</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">{mockOfferDetailsJson.anticipated_start_date}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-700 dark:text-amber-400 font-medium">
                  <span>Offer Expiration</span>
                  <span className="font-bold font-mono">{mockOfferDetailsJson.expiration_date}</span>
                </div>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => navigate('/candidate/signature')}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Proceed to Digital Signature</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-purple-950 text-white p-6 rounded-2xl border border-purple-500/30 shadow-xl space-y-4">
              <h4 className="font-bold text-lg flex items-center text-purple-300">
                <Lock className="w-5 h-5 mr-2 text-purple-400" /> Confidentiality Notice
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                This offer letter and its compensation terms are strictly confidential. Sharing these details publicly or with unauthorized third parties prior to countersignature violates corporate NDA stipulations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/download-pdf')) {
    const mockDownloadManifestJson = {
      "candidate_id": "CND-90210",
      "manifest_generated_at": "2026-05-18T15:10:00Z",
      "total_documents": 4,
      "secure_bundle_archive": "https://offerforge-artifacts.s3.amazonaws.com/bundles/bundle_cnd90210.zip",
      "documents": [
        { "id": "DOC-101", "name": "Offer_Alexander_Wright_SWE_FINAL.pdf", "type": "Official Offer Letter", "size": "4.2 MB", "status": "Cryptographically Signed", "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        { "id": "DOC-102", "name": "Acme_Employee_Handbook_2026.pdf", "type": "Corporate Policy", "size": "12.8 MB", "status": "Required Reading", "sha256": "a1b2c3d4e5f6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2" },
        { "id": "DOC-103", "name": "Benefits_Summary_Guide_2026.pdf", "type": "Health & 401k Guide", "size": "6.5 MB", "status": "Available", "sha256": "f1e2d3c4b5a69786756453423120192837465564738291029384756abcde1234" },
        { "id": "DOC-104", "name": "NDA_Confidentiality_Agreement.pdf", "type": "Legal Agreement", "size": "1.8 MB", "status": "Countersigned", "sha256": "9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b" }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Download className="w-6 h-6 mr-3 text-purple-500" /> Secure Document Download Center
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Access your official cryptographically signed offer letter, employee handbook, benefits guide, and countersigned agreements.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Metadata JSON' : 'View Document Metadata JSON'}</span>
            </button>
            <button 
              onClick={() => handleDownloadDoc('Master_Candidate_Bundle_CND90210.zip', true)}
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download All as Secure ZIP</span>
            </button>
          </div>
        </div>

        {/* Manifest JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Secure Document Manifest & SHA-256 Hashes API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/documents/manifest</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockDownloadManifestJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 font-semibold">
                  <th className="p-4">Document ID</th>
                  <th className="p-4">File Name & Type</th>
                  <th className="p-4">File Size</th>
                  <th className="p-4">Verification Status</th>
                  <th className="p-4">Cryptographic Checksum (SHA-256)</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
                {mockDownloadManifestJson.documents.map((d, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors font-medium">
                    <td className="p-4 font-mono font-bold text-purple-600 dark:text-purple-400">{d.id}</td>
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-purple-500 shrink-0" /> {d.name}
                      </div>
                      <div className="text-slate-400 text-[10px] mt-0.5">{d.type}</div>
                    </td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{d.size}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        d.status.includes('Signed') || d.status.includes('Countersigned') ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                        d.status.includes('Required') ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-slate-400 max-w-xs truncate">{d.sha256}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleDownloadDoc(d.name)}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-purple-500 hover:text-white text-slate-700 dark:text-slate-300 rounded-lg font-bold transition-all flex items-center space-x-1.5 ml-auto shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/action-offer')) {
    const mockChecklistStateJson = {
      "candidate_id": "CND-90210",
      "overall_status": "PENDING_FINAL_STEP",
      "completion_percentage": 75,
      "steps": [
        { "step_number": 1, "name": "Review Compensation & Benefits Package", "status": "COMPLETED", "completed_at": "May 17, 2026 14:20 EST", "verified_by": "Alexander Wright" },
        { "step_number": 2, "name": "Background Check Consent & SSN Submission", "status": "COMPLETED", "completed_at": "May 17, 2026 15:05 EST", "verified_by": "Checkr API Automation" },
        { "step_number": 3, "name": "Cryptographic ESIGN Digital Signature Handshake", "status": "COMPLETED", "completed_at": "May 18, 2026 13:00 EST", "verified_by": "DocuSign Connect Webhook" },
        { "step_number": 4, "name": "Confirm Start Date & Hardware Selection", "status": "ACTION_REQUIRED", "target_date": "June 1, 2026", "pending_action": "Awaiting candidate confirmation" }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-purple-500" /> Multi-Step Offer Acceptance Checklist
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track your mandatory onboarding milestones, background check verifications, ESIGN handshakes, and hardware selection.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Checklist JSON' : 'View Onboarding Checklist JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Complete Final Step
            </button>
          </div>
        </div>

        {/* Checklist JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Onboarding Checklist State API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/onboarding/state</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockChecklistStateJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Onboarding Progress: 75% Completed</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">3 of 4 mandatory steps successfully verified. Complete Step 4 to initiate hardware dispatch.</p>
            </div>
            <div className="w-full sm:w-64 bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="space-y-4">
            {mockChecklistStateJson.steps.map((s, i) => (
              <div key={i} className={`p-6 rounded-2xl border transition-all flex items-start justify-between ${
                s.status === 'COMPLETED' ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800' :
                'bg-purple-50/50 dark:bg-purple-950/20 border-purple-500/30 shadow-md shadow-purple-500/5'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                    s.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                    'bg-purple-500 text-white shadow-lg shadow-purple-500/30 animate-pulse'
                  }`}>
                    {s.status === 'COMPLETED' ? <CheckCircle className="w-4 h-4" /> : s.step_number}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">{s.name}</h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        s.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                      }`}>
                        {s.status === 'COMPLETED' ? 'Verified Completed' : 'Action Required'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
                      {s.status === 'COMPLETED' ? `Successfully verified by ${s.verified_by}.` : s.pending_action}
                    </p>
                    <div className="text-[10px] font-mono text-slate-400">
                      {s.status === 'COMPLETED' ? `Timestamp: ${s.completed_at}` : `Target Date: ${s.target_date}`}
                    </div>
                  </div>
                </div>
                {s.status === 'ACTION_REQUIRED' && (
                  <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-xs font-bold shadow-md transition-all">
                    Start Step 4
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/notifications')) {
    const mockCandidateNotifsJson = [
      { id: 'NOTIF-901', priority: 'High', type: 'Offer Letter', text: 'Official Offer Letter Dispatched by HR', details: 'Sarah Jenkins extended an official Senior Fullstack Engineer offer contract.', time: 'May 17, 2026 14:15', read: false },
      { id: 'NOTIF-902', priority: 'Medium', type: 'Authentication', text: 'Magic Link Handshake Successfully Verified', details: 'Secure biometric login handshake established from IP 192.168.1.42.', time: 'May 18, 2026 14:30', read: true },
      { id: 'NOTIF-903', priority: 'Medium', type: 'Onboarding', text: 'Equipment Preference Form Available', details: 'Select your preferred M3 Max MacBook Pro hardware and swag T-shirt size.', time: 'May 18, 2026 10:00', read: true },
      { id: 'NOTIF-904', priority: 'High', type: 'Background Check', text: 'Background Check Cleared Successfully', details: 'Checkr API automation verified your background screening and SSN validation.', time: 'May 17, 2026 15:05', read: true },
      { id: 'NOTIF-905', priority: 'Low', type: 'HR Schedule', text: 'HR Welcome Call Scheduled with Sarah Jenkins', details: 'Initial 15-minute onboarding sync scheduled for June 1, 2026 at 10:00 AM EST.', time: 'May 16, 2026 09:30', read: true }
    ];

    const filteredNotifs = activeTab === 'All' ? mockCandidateNotifsJson : mockCandidateNotifsJson.filter(n => n.priority === activeTab);

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Bell className="w-6 h-6 mr-3 text-purple-500" /> Candidate Notification Inbox & Alerts
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time alerts for offer dispatches, background check clearances, magic link handshakes, and onboarding tasks.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Alerts JSON' : 'View Notifications Feed JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Mark All as Read
            </button>
          </div>
        </div>

        {/* Notifications JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Candidate Notifications Feed API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/notifications</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockCandidateNotifsJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Priority Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          {['All', 'High', 'Medium', 'Low'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20' : 
                'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Priorities' : `${tab} Priority`}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
          {filteredNotifs.map(n => (
            <div key={n.id} className={`p-6 flex items-start justify-between transition-colors ${n.read ? 'bg-white dark:bg-slate-900' : 'bg-purple-50/50 dark:bg-purple-950/20'}`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-2xl mt-0.5 ${
                  n.priority === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                  n.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                  'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                }`}>
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400">{n.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      n.priority === 'High' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                      n.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}>
                      {n.priority} Priority
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      {n.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{n.text}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">{n.details}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{n.time}</p>
                </div>
              </div>
              {!n.read && <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0 shadow-md shadow-purple-500/50 animate-pulse"></span>}
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/status')) {
    const mockProgressionJson = {
      "candidate_id": "CND-90210",
      "current_stage_index": 5,
      "stages": [
        { "stage": 1, "name": "Application & AI Resume Screening", "status": "PASSED", "score": "98/100 AI Match", "date": "May 10, 2026", "desc": "Automated Llama 3.3 resume parser matched core fullstack competencies." },
        { "stage": 2, "name": "Technical & Cultural Interview Panels", "status": "PASSED", "score": "L3/L4 Panel Cleared", "date": "May 14, 2026", "desc": "Passed system design and behavioral rounds with unanimous hire recommendation." },
        { "stage": 3, "name": "Offer Package & Compensation Drafting", "status": "PASSED", "score": "Compensation Committee Approved", "date": "May 16, 2026", "desc": "$175k base + 10k RSUs equity package drafted by HR executive team." },
        { "stage": 4, "name": "Executive VP & Department Head Approval", "status": "PASSED", "score": "Signed by Diana Prince (VP)", "date": "May 17, 2026", "desc": "Official corporate seal and cryptographic envelope generated." },
        { "stage": 5, "name": "Candidate ESIGN Digital Signature Handshake", "status": "AWAITING_CANDIDATE", "score": "Pending IP Bind", "date": "Current Stage", "desc": "Awaiting candidate review, background check consent, and final ESIGN submission." }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Activity className="w-6 h-6 mr-3 text-purple-500" /> 5-Stage Approval & Signature Progression Tracker
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time transparency into your hiring pipeline progression, interview panel clearances, executive approvals, and pending handshakes.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Progression JSON' : 'View Progression Timeline JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Refresh Live Status
            </button>
          </div>
        </div>

        {/* Progression JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Progression Timeline REST API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/progression</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockProgressionJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="relative border-l-2 border-purple-500/30 ml-4 space-y-8 pl-8 py-2">
            {mockProgressionJson.stages.map((s, i) => (
              <div key={i} className="relative group">
                <div className={`absolute -left-[41px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs shadow-md transition-transform group-hover:scale-110 ${
                  s.status === 'PASSED' ? 'bg-emerald-500 border-white dark:border-slate-900 text-white shadow-emerald-500/30' :
                  'bg-purple-500 border-white dark:border-slate-900 text-white shadow-purple-500/30 animate-pulse'
                }`}>
                  {s.status === 'PASSED' ? <CheckCircle className="w-4 h-4" /> : s.stage}
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 border-b border-slate-200 dark:border-slate-800/60 pb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">{s.name}</h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        s.status === 'PASSED' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                      }`}>
                        {s.status === 'PASSED' ? 'Stage Cleared' : 'Current Stage'}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">{s.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{s.desc}</p>
                  <div className="inline-block px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-xs font-bold text-purple-600 dark:text-purple-400 shadow-sm">
                    {s.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/history')) {
    const mockAppHistoryJson = [
      { id: 'APP-2026-1', company: 'Acme Corp', role: 'Senior Fullstack Engineer', dept: 'Engineering & Tech', appliedDate: 'May 1, 2026', status: 'Active Offer', salary: '$175,000 + RSUs', details: 'Active offer contract awaiting candidate digital signature.' },
      { id: 'APP-2025-2', company: 'Acme Corp', role: 'Staff Software Engineer', dept: 'Engineering & Tech', appliedDate: 'Oct 12, 2025', status: 'Archived', salary: '$210,000 + RSUs', details: 'Final round completed; position put on hold due to Q4 headcount freeze.' },
      { id: 'APP-2024-3', company: 'Globex Corp', role: 'Lead Frontend Architect', dept: 'Product & Design', appliedDate: 'Aug 14, 2024', status: 'Offer Declined', salary: '$165,000', details: 'Offer declined by candidate due to competing compensation package.' },
      { id: 'APP-2024-4', company: 'Initech Corp', role: 'Senior Backend Engineer', dept: 'Infrastructure', appliedDate: 'Jan 20, 2024', status: 'Withdrawn', salary: '$150,000', details: 'Application withdrawn by candidate prior to technical screening round.' }
    ];

    const filteredHistory = mockAppHistoryJson.filter(h => h.company.toLowerCase().includes(searchQuery.toLowerCase()) || h.role.toLowerCase().includes(searchQuery.toLowerCase()) || h.status.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Clock className="w-6 h-6 mr-3 text-purple-500" /> Historical Application Milestones & Records
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review your lifetime application history, archived interview rounds, past compensation packages, and decision logs.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search company, role, status..." 
                className="pl-9 pr-4 py-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 dark:text-white"
              />
            </div>
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide History JSON' : 'View Historical Milestones JSON'}</span>
            </button>
          </div>
        </div>

        {/* History JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Historical Applications REST API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/history</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockAppHistoryJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 font-semibold">
                  <th className="p-4">Application ID</th>
                  <th className="p-4">Company & Role</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Applied Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Compensation Package</th>
                  <th className="p-4">Decision Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs font-medium">
                {filteredHistory.map((h, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-purple-600 dark:text-purple-400">{h.id}</td>
                    <td className="p-4">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{h.company}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{h.role}</div>
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-semibold">{h.dept}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{h.appliedDate}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        h.status === 'Active Offer' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                        h.status === 'Archived' ? 'bg-slate-500/10 text-slate-500 border border-slate-500/20' :
                        h.status === 'Offer Declined' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {h.status}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">{h.salary}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 max-w-xs truncate">{h.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/verify-email')) {
    const mockMagicLinkVerifyJson = {
      "candidate_id": "CND-90210",
      "verification_status": "VERIFIED_SECURE",
      "active_sessions_count": 2,
      "recent_handshakes": [
        { "handshake_id": "HS-701", "timestamp": "May 18, 2026 14:30 EST", "ip_address": "192.168.1.42", "device_fingerprint": "Chrome 125.0 (macOS)", "status": "VERIFIED_SECURE", "token_hash": "tok_9a8b7c6d5e4f" },
        { "handshake_id": "HS-702", "timestamp": "May 17, 2026 11:15 EST", "ip_address": "192.168.1.42", "device_fingerprint": "Safari 17.4 (macOS)", "status": "VERIFIED_SECURE", "token_hash": "tok_1b2c3d4e5f6a" },
        { "handshake_id": "HS-703", "timestamp": "May 15, 2026 09:00 EST", "ip_address": "10.0.0.88", "device_fingerprint": "iPhone 15 Pro (iOS 17)", "status": "EXPIRED", "token_hash": "tok_5f6e7d8c9b0a" }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Mail className="w-6 h-6 mr-3 text-purple-500" /> Magic Link Handshakes & Authentication Fingerprints
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Audit your passwordless authentication dispatches, active browser sessions, IP addresses, and cryptographic handshake tokens.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Auth JSON' : 'View Auth Handshake JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Invalidate All Active Sessions
            </button>
          </div>
        </div>

        {/* Magic Link JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Magic Link Verification REST API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">POST /api/v1/auth/magic-link/verify</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockMagicLinkVerifyJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 font-semibold">
                  <th className="p-4">Handshake ID</th>
                  <th className="p-4">Timestamp</th>
                  <th className="p-4">IP Address</th>
                  <th className="p-4">Device & Browser Fingerprint</th>
                  <th className="p-4">Handshake Status</th>
                  <th className="p-4">Cryptographic Token Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs font-medium">
                {mockMagicLinkVerifyJson.recent_handshakes.map((h, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-purple-600 dark:text-purple-400">{h.handshake_id}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{h.timestamp}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-mono whitespace-nowrap">{h.ip_address}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">{h.device_fingerprint}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        h.status === 'VERIFIED_SECURE' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {h.status}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-slate-400 max-w-xs truncate">{h.token_hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/reset-password')) {
    const mockPasswordAuditJson = {
      "candidate_id": "CND-90210",
      "key_derivation_function": "Argon2id",
      "argon2id_parameters": {
        "memory_cost_kb": 65536,
        "time_iterations": 3,
        "parallelism": 4,
        "salt_length_bytes": 32
      },
      "audit_logs": [
        { "audit_id": "SEC-501", "timestamp": "May 16, 2026 15:45 EST", "ip_address": "192.168.1.42", "event": "Password Updated Successfully", "algorithm_used": "Argon2id (m=65536, t=3, p=4)", "previous_tokens": "Invalidated (4 active sessions)" },
        { "audit_id": "SEC-502", "timestamp": "Jan 10, 2026 12:20 EST", "ip_address": "10.0.0.205", "event": "Password Updated Successfully", "algorithm_used": "Argon2id (m=65536, t=3, p=4)", "previous_tokens": "Invalidated (2 active sessions)" }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <Key className="w-6 h-6 mr-3 text-purple-500" /> Argon2id Credential Hashing & Token Invalidations
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review your credential modification history, cryptographic key derivation parameters, and automated session invalidation logs.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Security JSON' : 'View Security Audit JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Request Password Reset
            </button>
          </div>
        </div>

        {/* Password Audit JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Credential Management & Audit API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">POST /api/v1/auth/credentials/audit</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockPasswordAuditJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 font-semibold">
                  <th className="p-4">Audit ID</th>
                  <th className="p-4">Timestamp</th>
                  <th className="p-4">IP Address</th>
                  <th className="p-4">Security Event</th>
                  <th className="p-4">Algorithm & Parameters</th>
                  <th className="p-4">Session Invalidation Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs font-medium">
                {mockPasswordAuditJson.audit_logs.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-purple-600 dark:text-purple-400">{a.audit_id}</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{a.timestamp}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300 font-mono whitespace-nowrap">{a.ip_address}</td>
                    <td className="p-4 font-bold text-slate-900 dark:text-white whitespace-nowrap flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> {a.event}
                    </td>
                    <td className="p-4 font-mono text-purple-600 dark:text-purple-400 whitespace-nowrap">{a.algorithm_used}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-full font-bold text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        {a.previous_tokens}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    );
  }

  if (path.includes('/candidate/support')) {
    const mockSupportTicketsJson = {
      "candidate_id": "CND-90210",
      "assigned_hr_coordinator": {
        "name": "Sarah Jenkins",
        "title": "Senior Technical Recruiter",
        "email": "sarah.jenkins@acmecorp.com",
        "phone": "+1 (555) 019-8832",
        "office_hours": "Mon-Fri 9:00 AM - 5:00 PM EST"
      },
      "active_tickets": [
        { "ticket_id": "SUP-101", "subject": "Hardware Delivery Confirmation", "status": "RESOLVED", "created_at": "May 17, 2026 10:00 EST", "resolution": "M3 Max MacBook Pro scheduled for dispatch upon Step 4 completion." },
        { "ticket_id": "SUP-102", "subject": "Relocation Stipend Disbursement", "status": "OPEN", "created_at": "May 18, 2026 11:30 EST", "resolution": "Awaiting finance team approval for executive white-glove move package." }
      ],
      "faq_database": [
        { "q": "How do I negotiate my compensation package?", "a": "You can discuss adjustments directly with your assigned HR Coordinator or schedule a compensation review call." },
        { "q": "When will I receive my company laptop and equipment?", "a": "Once you complete Step 4 of the Onboarding Checklist (Confirm Start Date & Equipment), your M3 Max MacBook Pro will be dispatched to your shipping address." },
        { "q": "Can I adjust my anticipated start date?", "a": "Yes, start dates can be adjusted up to 14 days prior to joining by contacting HR." },
        { "q": "How does the 4-year RSU vesting schedule operate?", "a": "RSUs vest over 4 years with a 1-year cliff (25% vesting at 12 months), followed by equal monthly vesting over the remaining 36 months." }
      ]
    };

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-purple-500" /> Help Center FAQs & Live Support Chat
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Get immediate answers to onboarding FAQs, manage your active helpdesk tickets, and connect directly with your assigned HR Coordinator.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowJson(!showJson)} 
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all ${
                showJson ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Code className="w-4 h-4 mr-1.5" />
              <span>{showJson ? 'Hide Support JSON' : 'View Support Tickets JSON'}</span>
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20">
              Open New Support Ticket
            </button>
          </div>
        </div>

        {/* Support JSON Drawer */}
        <AnimatePresence>
          {showJson && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden font-mono text-xs text-purple-300"
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <span className="font-bold flex items-center text-white"><Code className="w-4 h-4 mr-2 text-purple-400" /> Helpdesk Tickets & FAQ REST API Payload</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2.5 py-0.5 rounded border border-purple-500/30 font-bold">GET /api/v1/candidate/support/tickets</span>
              </div>
              <pre className="overflow-x-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-200 leading-relaxed max-h-96">
                {JSON.stringify(mockSupportTicketsJson, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-purple-500" /> Frequently Asked Questions (FAQs)
              </h3>
              <div className="space-y-4">
                {mockSupportTicketsJson.faq_database.map((faq, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-purple-500/30 transition-colors">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-start">
                      <span className="text-purple-500 mr-2 font-mono font-extrabold">Q:</span> {faq.q}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-purple-500/20">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-purple-500" /> My Active Helpdesk Tickets
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 font-semibold">
                      <th className="p-4">Ticket ID</th>
                      <th className="p-4">Subject</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Created At</th>
                      <th className="p-4">Resolution Summary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs font-medium">
                    {mockSupportTicketsJson.active_tickets.map((t, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4 font-mono font-bold text-purple-600 dark:text-purple-400">{t.ticket_id}</td>
                        <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{t.subject}</td>
                        <td className="p-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                            t.status === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                          }`}>
                            {t.status}
                          </span>
                        </td>
                        <td className="p-4 text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">{t.created_at}</td>
                        <td className="p-4 text-slate-600 dark:text-slate-300 max-w-xs truncate">{t.resolution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-500" /> Assigned HR Coordinator
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-purple-500/30">
                  SJ
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base">{mockSupportTicketsJson.assigned_hr_coordinator.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{mockSupportTicketsJson.assigned_hr_coordinator.title}</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900/40 text-[10px] font-bold font-mono">
                    Direct HR Contact
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs border-t border-slate-200 dark:border-slate-800 pt-4">
                <div>
                  <label className="text-slate-400 block mb-1 font-medium">Email Address</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800/80">{mockSupportTicketsJson.assigned_hr_coordinator.email}</div>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1 font-medium">Direct Phone</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800/80">{mockSupportTicketsJson.assigned_hr_coordinator.phone}</div>
                </div>
                <div>
                  <label className="text-slate-400 block mb-1 font-medium">Office Hours</label>
                  <div className="font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800/80 font-mono">{mockSupportTicketsJson.assigned_hr_coordinator.office_hours}</div>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Message to HR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // ==========================================
  // FALLBACK FOR ANY UNLISTED ROUTES
  // ==========================================
  const fallbackData = [
    { id: 'CND-801', name: 'Digital Signature Verification', status: 'Active', date: 'May 18, 2026', user: 'Assigned: ESIGN Engine' },
    { id: 'CND-802', name: 'Offer Letter PDF Export', status: 'Active', date: 'May 18, 2026', user: 'Assigned: Puppeteer Engine' },
    { id: 'CND-803', name: 'Magic Link Authentication Handshake', status: 'Pending', date: 'May 18, 2026', user: 'Assigned: SendGrid Relay' },
    { id: 'CND-804', name: 'Candidate Onboarding Checklist', status: 'Pending', date: 'May 18, 2026', user: 'Assigned: HR Operations' }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
            <Icon className="w-6 h-6 mr-3 text-cyan-500" /> {title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your enterprise {title.toLowerCase()} configurations and settings securely.</p>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/20">
          Create New Entry
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                <th className="p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Description</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Assigned To</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 text-xs">
              {fallbackData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">#{row.id}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white text-sm">{row.name}</td>
                  <td className="p-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                      row.status === 'Active' ? 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20' :
                      row.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                      'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap font-mono">{row.date}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300 font-medium">{row.user}</td>
                  <td className="p-4 text-right"><button className="text-cyan-500 hover:underline font-bold">View Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default EnterprisePlaceholder;
