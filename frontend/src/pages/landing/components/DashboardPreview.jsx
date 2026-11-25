import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Briefcase, User, Users, FileText, Lock, Plug, CreditCard, LayoutDashboard, Send, ClipboardList, CheckCircle2, AlertCircle } from 'lucide-react';

const portalContent = {
  admin: {
    sidebarLabel: 'Admin settings',
    navItems: ['Organizations', 'Roles & permissions', 'Security policies', 'API keys'],
    title: 'Platform overview',
    subtitle: 'Tenant health, access, and compliance in one place.',
    stats: [
      { label: 'Active orgs', value: '128', hint: '+4 this week' },
      { label: 'Seats in use', value: '2.4k', hint: '92% of plan' },
      { label: 'SSO enforced', value: '100%', hint: 'All tenants' },
      { label: 'Audit events (24h)', value: '18.2k', hint: 'No alerts' },
    ],
    panelTitle: 'Recent security activity',
    rows: [
      { left: 'Policy "MFA required" applied to Acme Corp', right: '2m ago', tone: 'ok' },
      { left: 'New admin invite — Northwind HR', right: '14m ago', tone: 'ok' },
      { left: 'Failed login burst — IP masked (auto-blocked)', right: '1h ago', tone: 'warn' },
    ],
  },
  hr: {
    sidebarLabel: 'HR Dashboard',
    navItems: ['Offers & letters', 'Templates', 'Candidates', 'Reports'],
    title: 'Offers in flight',
    subtitle: 'Track signatures, versions, and deadlines without leaving the portal.',
    stats: [
      { label: 'Awaiting signature', value: '12', hint: '3 due this week' },
      { label: 'Accepted (30d)', value: '47', hint: 'Avg 1.8 days' },
      { label: 'Templates live', value: '8', hint: 'Legal approved' },
    ],
    cards: [
      { title: 'Pipeline', lines: ['Screening — 24', 'Offer sent — 12', 'Signed — 47'] },
      { title: 'This week', lines: ['5 new offers', '2 counter-offers', '0 expiring unsigned'] },
    ],
    tableTitle: 'Latest offers',
    rows: [
      { role: 'Senior Product Designer', candidate: 'A. Martinez', status: 'Sent', meta: 'Due Fri' },
      { role: 'Backend Engineer', candidate: 'J. Kim', status: 'Viewed', meta: 'Reminder scheduled' },
      { role: 'People Ops Lead', candidate: 'S. Okafor', status: 'Signed', meta: 'Completed today' },
    ],
  },
  candidate: {
    headline: 'Your offer from Northwind Labs',
    sub: 'Review the letter, then sign securely. You can download a PDF after signing.',
    bullets: ['Compensation & equity summary included', 'Start date: June 9, 2026', 'Questions? Reply from this portal'],
    cta: 'Review & sign offer',
    footerNote: 'Signed documents are stored with tamper-evident audit trail.',
  },
};

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('hr');

  const tabs = [
    { id: 'admin', label: 'Admin Portal', icon: <Shield className="w-5 h-5" /> },
    { id: 'hr', label: 'HR Portal', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'candidate', label: 'Candidate Portal', icon: <User className="w-5 h-5" /> },
  ];

  const data = portalContent[activeTab];

  const sidebarAccentClass =
    activeTab === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400';

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-500 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Designed for every stakeholder</h2>
          <p className="text-slate-400 text-lg">
            OfferForge provides dedicated, secure portals ensuring everyone sees exactly what they need, and nothing they don't.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-slate-800 p-1 rounded-xl border border-slate-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-700 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Window */}
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-slate-700/50 bg-slate-900 shadow-2xl overflow-hidden aspect-[16/10] flex flex-col relative min-h-[320px] sm:min-h-0">

            {/* Window Header */}
            <div className="h-12 border-b border-slate-800 bg-slate-900 flex items-center px-4 space-x-4 shrink-0">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="bg-slate-800 rounded-md h-6 min-w-0 flex-1 max-w-md flex items-center justify-center border border-slate-700 px-2">
                <span className="text-[10px] text-slate-500 font-mono truncate">offerforge.com/portal/{activeTab}</span>
              </div>
            </div>

            {/* Dashboard Content Container */}
            <div className="flex-1 bg-slate-950 flex relative min-h-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex min-h-0 overflow-auto"
                >
                  {/* Admin */}
                  {activeTab === 'admin' && (
                    <>
                      <div className="w-52 sm:w-64 shrink-0 bg-slate-900 border-r border-slate-800 p-4 flex flex-col gap-2">
                        <div className={`h-8 rounded text-xs flex items-center px-3 mb-2 ${sidebarAccentClass}`}>
                          <Users className="w-3.5 h-3.5 mr-2 shrink-0" />
                          {data.sidebarLabel}
                        </div>
                        {data.navItems.map((item, i) => (
                          <div
                            key={item}
                            className={`h-8 rounded w-full flex items-center px-3 text-xs text-slate-400 border border-transparent ${
                              i === 0 ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-800/60'
                            }`}
                          >
                            {i === 0 && <Lock className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            {i === 1 && <FileText className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            {i === 2 && <Shield className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            {i === 3 && <Plug className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                        <div className="mt-auto pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] text-slate-500">
                          <CreditCard className="w-3 h-3" />
                          Billing & plans
                        </div>
                      </div>
                      <div className="flex-1 p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 min-w-0">
                        <div>
                          <h3 className="text-white font-semibold text-lg">{data.title}</h3>
                          <p className="text-slate-500 text-sm mt-1">{data.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                          {data.stats.map((s) => (
                            <div key={s.label} className="h-auto min-h-[5.5rem] bg-slate-800 rounded-xl border border-slate-700 p-3 flex flex-col justify-center">
                              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">{s.label}</p>
                              <p className="text-xl sm:text-2xl font-bold text-white mt-1">{s.value}</p>
                              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">{s.hint}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 min-h-[120px] bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col">
                          <div className="text-sm font-medium text-slate-200 mb-3">{data.panelTitle}</div>
                          <div className="space-y-2 flex-1">
                            {data.rows.map((row, i) => (
                              <div
                                key={i}
                                className="h-auto min-h-12 bg-slate-900 rounded-lg border border-slate-700/80 px-3 py-2 flex items-center justify-between gap-2"
                              >
                                <span className="text-xs text-slate-300 truncate">{row.left}</span>
                                <span className="text-[10px] text-slate-500 shrink-0 flex items-center gap-1">
                                  {row.tone === 'warn' ? <AlertCircle className="w-3 h-3 text-amber-500" /> : <CheckCircle2 className="w-3 h-3 text-emerald-500/70" />}
                                  {row.right}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* HR */}
                  {activeTab === 'hr' && (
                    <>
                      <div className="w-52 sm:w-64 shrink-0 bg-slate-900 border-r border-slate-800 p-4 flex flex-col gap-2">
                        <div className={`h-8 rounded text-xs flex items-center px-3 mb-2 ${sidebarAccentClass}`}>
                          <LayoutDashboard className="w-3.5 h-3.5 mr-2 shrink-0" />
                          {data.sidebarLabel}
                        </div>
                        {data.navItems.map((item, i) => (
                          <div
                            key={item}
                            className={`h-8 rounded w-full flex items-center px-3 text-xs text-slate-400 border border-transparent ${
                              i === 0 ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-800/60'
                            }`}
                          >
                            {i === 0 && <Send className="w-3 h-3 mr-2 text-blue-400 shrink-0" />}
                            {i === 1 && <FileText className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            {i === 2 && <Users className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            {i === 3 && <ClipboardList className="w-3 h-3 mr-2 text-slate-500 shrink-0" />}
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                          <div>
                            <h3 className="text-white font-semibold text-lg">{data.title}</h3>
                            <p className="text-slate-500 text-sm mt-1">{data.subtitle}</p>
                          </div>
                          <button type="button" className="h-10 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 shrink-0 self-start">
                            New offer
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                          {data.stats.map((s) => (
                            <div key={s.label} className="h-auto min-h-[4.5rem] sm:min-h-[5.25rem] bg-slate-800 rounded-xl border border-slate-700 p-2 sm:p-3 flex flex-col justify-center">
                              <p className="text-[9px] sm:text-xs text-slate-500 leading-tight">{s.label}</p>
                              <p className="text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1">{s.value}</p>
                              <p className="text-[9px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 truncate">{s.hint}</p>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 min-h-0">
                          {data.cards.map((c) => (
                            <div key={c.title} className="min-h-[7rem] bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col">
                              <p className="text-sm font-medium text-slate-200 mb-3">{c.title}</p>
                              <ul className="space-y-2 text-xs text-slate-400">
                                {c.lines.map((line) => (
                                  <li key={line} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shrink-0" />
                                    {line}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-xl border border-slate-700 overflow-hidden shrink-0">
                          <div className="bg-slate-800 px-4 py-2 text-xs font-medium text-slate-300 border-b border-slate-700">{data.tableTitle}</div>
                          <div className="divide-y divide-slate-800 bg-slate-900">
                            {data.rows.map((row) => (
                              <div key={row.role + row.candidate} className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                                <div className="min-w-0">
                                  <p className="text-slate-200 font-medium truncate">{row.role}</p>
                                  <p className="text-slate-500 truncate">{row.candidate}</p>
                                </div>
                                <div className="text-right shrink-0">
                                  <span
                                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${
                                      row.status === 'Signed'
                                        ? 'bg-emerald-500/15 text-emerald-400'
                                        : row.status === 'Viewed'
                                          ? 'bg-amber-500/15 text-amber-400'
                                          : 'bg-blue-500/15 text-blue-400'
                                    }`}
                                  >
                                    {row.status}
                                  </span>
                                  <p className="text-slate-500 mt-1">{row.meta}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Candidate */}
                  {activeTab === 'candidate' && (
                    <div className="flex-1 p-4 sm:p-8 flex flex-col items-center justify-center min-h-0">
                      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-green-500/20 rounded-full flex items-center justify-center">
                            <User className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">{data.headline}</h3>
                            <p className="text-slate-400 text-sm mt-2">{data.sub}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-6 text-sm text-slate-400">
                          {data.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500/80 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="w-full bg-slate-800 rounded-xl border border-slate-700 p-4 mb-6">
                          <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-2">Offer letter preview</p>
                          <div className="space-y-2">
                            <div className="h-2 bg-slate-700 rounded w-full" />
                            <div className="h-2 bg-slate-700 rounded w-11/12" />
                            <div className="h-2 bg-slate-700 rounded w-4/5" />
                            <div className="h-2 bg-slate-700 rounded w-full" />
                            <div className="h-2 bg-slate-700 rounded w-2/3" />
                          </div>
                          <p className="text-xs text-slate-500 mt-3">{data.footerNote}</p>
                        </div>
                        <button type="button" className="h-12 bg-green-600 hover:bg-green-500 rounded-lg w-full text-white text-sm font-semibold shadow-lg shadow-green-500/20 transition-colors">
                          {data.cta}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
