import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, FileText, CheckCircle, AlertTriangle, TrendingUp, 
  Mail, MessageSquare, FileSearch, ShieldAlert, BarChart2, 
  Mic, ThumbsUp, ShieldCheck, Heart, Clock, Cpu, ArrowRight
} from 'lucide-react';

const AIFeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Generation & NLP', 'Automation & Workflow', 'Intelligent Screening', 'Security & Validation', 'Analytics & Decision'];

  const aiFeatures = [
    {
      id: 1,
      category: 'Generation & NLP',
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      title: "AI Offer Letter Generator",
      badge: "Llama 3 Powered",
      description: "Generate professional offer letters automatically from simple prompts.",
      exampleTitle: "Prompt-to-Offer Example",
      exampleInput: "HR enters: Role (Senior SWE), Salary ($160k), Dept (Engineering), Candidate Name (Marcus Vance).",
      exampleOutput: "AI generates: Full professional offer content, custom terms & conditions, personalized formatting, and benefits summary.",
      benefits: "Saves HR time • Reduces manual writing • Guarantees professional consistency"
    },
    {
      id: 2,
      category: 'Generation & NLP',
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      title: "Smart Template Recommendation",
      badge: "Context Aware",
      description: "AI suggests the absolute best template based on job role, department, experience level, and employment type.",
      exampleTitle: "Smart Match Example",
      exampleInput: "Role: Software Engineer | Dept: Engineering | Type: Full-Time",
      exampleOutput: "AI Recommendation: Standard Tech Hiring Template v2.4 with IP Assignment & Confidentiality clauses.",
      benefits: "Eliminates guesswork • Ensures legal alignment • Faster onboarding"
    },
    {
      id: 3,
      category: 'Generation & NLP',
      icon: <CheckCircle className="h-6 w-6 text-emerald-400" />,
      title: "AI Grammar & Tone Checker",
      badge: "Real-time Polish",
      description: "AI scans generated offer letters and improves grammar, tone, professional wording, and formatting.",
      exampleTitle: "Correction Example",
      exampleInput: "Draft: 'You will get 10k bonus if you do good work.'",
      exampleOutput: "AI Polish: 'The candidate will be eligible for an annual performance-based bonus of up to $10,000, contingent upon achieving defined departmental objectives.'",
      benefits: "Error-free documents • Better communication quality • Premium brand perception"
    },
    {
      id: 4,
      category: 'Security & Validation',
      icon: <AlertTriangle className="h-6 w-6 text-amber-400" />,
      title: "AI Placeholder Validation",
      badge: "Pre-Flight Check",
      description: "AI detects missing placeholders, incorrect salary formats, invalid dates, and empty candidate fields before sending.",
      exampleTitle: "Validation Alert",
      exampleInput: "Template contains {{salary}} but HR forgot to input the salary value.",
      exampleOutput: "AI Warning: 'Missing value for {{salary}}. Please provide compensation details before generating PDF.'",
      benefits: "Prevents embarrassing mistakes • Zero broken variables • Bulletproof compliance"
    },
    {
      id: 5,
      category: 'Analytics & Decision',
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "AI Candidate Risk Analysis",
      badge: "Predictive ML",
      description: "AI predicts offer acceptance probability using salary range, response time, candidate behavior, and previous patterns.",
      exampleTitle: "Dashboard Output",
      exampleInput: "Candidate response time: 4 hours | Salary percentile: 85th",
      exampleOutput: "Risk Score: High Acceptance Probability (92%) • Recommended Action: Fast-track digital signature.",
      benefits: "Proactive negotiation • Reduced offer rejection rates • Optimized salary bands"
    },
    {
      id: 6,
      category: 'Automation & Workflow',
      icon: <Mail className="h-6 w-6 text-indigo-400" />,
      title: "AI Smart Email Generator",
      badge: "Auto-Drafting",
      description: "Generate personalized HR emails automatically including offer subject lines, professional body content, and follow-ups.",
      exampleTitle: "Email Generation",
      exampleInput: "Trigger: Offer Generated for Marcus Vance",
      exampleOutput: "Subject: Welcome to Acme Corp - Your Offer Letter Inside | Body: 'Dear Marcus, We are thrilled to invite you...'",
      benefits: "Zero email drafting time • Automated follow-up reminders • Professional rejection/acceptance flows"
    },
    {
      id: 7,
      category: 'Intelligent Screening',
      icon: <MessageSquare className="h-6 w-6 text-pink-400" />,
      title: "AI Chatbot Assistant",
      badge: "Interactive Bot",
      description: "Add an HR assistant chatbot inside the platform to help generate offers, answer candidate questions, and explain onboarding.",
      exampleTitle: "HR Chatbot Interaction",
      exampleInput: "HR Prompt: 'Generate backend developer offer for 8 LPA'",
      exampleOutput: "Chatbot: 'Drafting offer for Backend Developer at 8 LPA. Would you like to use the Standard Tech template?'",
      benefits: "Instant workflow guidance • 24/7 candidate query handling • Seamless onboarding steps"
    },
    {
      id: 8,
      category: 'Intelligent Screening',
      icon: <FileSearch className="h-6 w-6 text-teal-400" />,
      title: "AI Resume Parsing",
      badge: "Instant Extraction",
      description: "Upload any resume and AI instantly extracts Name, Skills, Experience, Email, and Education to auto-fill candidate forms.",
      exampleTitle: "Extraction Results",
      exampleInput: "Uploaded: Marcus_Vance_DevOps_Resume.pdf",
      exampleOutput: "Extracted: Name: Marcus Vance | Email: marcus@... | Exp: 8 Years | Skills: Kubernetes, AWS, Terraform.",
      benefits: "No manual data entry • 100% accurate field mapping • Speeds up candidate intake"
    },
    {
      id: 9,
      category: 'Security & Validation',
      icon: <ShieldAlert className="h-6 w-6 text-red-400" />,
      title: "AI Fraud Detection",
      badge: "Security Guardian",
      description: "AI continuously detects suspicious activities including fake signatures, duplicate candidate entries, and suspicious logins.",
      exampleTitle: "Fraud Alert",
      exampleInput: "Same candidate SSN used across two different email registrations.",
      exampleOutput: "Security Flag: 'Duplicate candidate entity detected. Verification hold placed on onboarding workflow.'",
      benefits: "Protects enterprise data • Prevents identity spoofing • Secures hiring pipeline"
    },
    {
      id: 10,
      category: 'Analytics & Decision',
      icon: <BarChart2 className="h-6 w-6 text-yellow-400" />,
      title: "AI Analytics Dashboard",
      badge: "Deep Insights",
      description: "AI provides deep hiring insights, offer acceptance trends, departmental hiring rates, and HR productivity analysis.",
      exampleTitle: "AI Generated Insights",
      exampleInput: "Aggregate Q2 Hiring Data",
      exampleOutput: "Insight 1: 'Tech candidates accept offers 35% faster.' | Insight 2: 'Most rejections are due to salary mismatch.'",
      benefits: "Data-driven hiring strategy • Bottleneck identification • Executive reporting"
    },
    {
      id: 11,
      category: 'Automation & Workflow',
      icon: <Mic className="h-6 w-6 text-violet-400" />,
      title: "AI Voice Assistant",
      badge: "Hands-Free HR",
      description: "Voice-controlled HR workflow allowing recruiters to execute tasks and navigate the platform using simple speech commands.",
      exampleTitle: "Voice Commands",
      exampleInput: "Recruiter speaks: 'Generate offer for frontend developer.'",
      exampleOutput: "System: 'Opening template builder for Frontend Developer with default salary bands.'",
      benefits: "Next-gen user experience • Blistering navigation speed • Multi-tasking efficiency"
    },
    {
      id: 12,
      category: 'Analytics & Decision',
      icon: <ThumbsUp className="h-6 w-6 text-blue-400" />,
      title: "AI Smart Approval System",
      badge: "Budget Guardian",
      description: "AI recommends whether to approve offers based on salary budgets, candidate experience, and historical hiring patterns.",
      exampleTitle: "Approval Recommendation",
      exampleInput: "Proposed Salary: $175k | Department Budget Cap: $180k",
      exampleOutput: "AI Recommendation: 'Approve. Salary is within 95% of budget cap and aligns with Senior DevOps market median.'",
      benefits: "Maintains budget discipline • Speeds up executive sign-off • Prevents rogue compensation"
    },
    {
      id: 13,
      category: 'Security & Validation',
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: "AI Signature Verification",
      badge: "Biometric & Hash Match",
      description: "AI verifies whether the digital signature matches previous records, biometric touch patterns, and cryptographic hashes.",
      exampleTitle: "Verification Log",
      exampleInput: "Document signed by Candidate IP 10.0.0.44",
      exampleOutput: "Verification: 'Match Confirmed. Cryptographic hash aligns with candidate session certificate. Validated for legal archiving.'",
      benefits: "Absolute legal validation • ESIGN & UETA compliance • Non-repudiation guarantee"
    },
    {
      id: 14,
      category: 'Intelligent Screening',
      icon: <Heart className="h-6 w-6 text-rose-400" />,
      title: "AI Candidate Sentiment Analysis",
      badge: "NLP Emotion Scan",
      description: "Analyze candidate email responses and detect positive, neutral, or negative sentiment to gauge negotiation friction.",
      exampleTitle: "Sentiment Scan",
      exampleInput: "Candidate Email: 'I received the offer. The role looks interesting but I need to review the base numbers.'",
      exampleOutput: "Sentiment: Neutral / Hesitant • AI Note: 'Candidate seems uncertain about compensation. Recommend scheduling a quick call.'",
      benefits: "Saves at-risk candidates • Tailored negotiation tactics • Higher closing rates"
    },
    {
      id: 15,
      category: 'Automation & Workflow',
      icon: <Clock className="h-6 w-6 text-orange-400" />,
      title: "AI Auto Reminder System",
      badge: "Smart Follow-ups",
      description: "AI automatically schedules and dispatches reminders for pending signatures, expiring offers, and unanswered emails.",
      exampleTitle: "Automated Dispatch",
      exampleInput: "Offer sent 3 days ago with zero candidate action.",
      exampleOutput: "Action: Sent SMS & Email Reminder: 'Hi Marcus, a quick reminder that your offer with Acme Corp expires in 4 days.'",
      benefits: "Zero manual follow-up • Higher conversion rates • Keeps hiring pipeline moving"
    }
  ];

  const filteredFeatures = activeCategory === 'All' 
    ? aiFeatures 
    : aiFeatures.filter(f => f.category === activeCategory);

  return (
    <section id="ai-hub" className="py-28 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-4">
            <Cpu className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">OfferForge AI Hub</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Supercharged by <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">15 Advanced AI Engines</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Experience the future of enterprise recruitment. Our proprietary AI models eliminate manual friction, secure compliance, and predict candidate success with unparalleled accuracy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 shadow-lg scale-105'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AI Features Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredFeatures.map((feature) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={feature.id}
                className="group relative p-1 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="p-8 flex-1 flex flex-col">
                  {/* Header & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {feature.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {feature.description}
                  </p>

                  {/* Example Box */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 mb-6 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{feature.exampleTitle}</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-400 font-mono bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                      <p className="text-slate-300"><span className="text-blue-400 font-bold">Input:</span> {feature.exampleInput}</p>
                      <p className="text-cyan-400"><span className="text-purple-400 font-bold">Output:</span> {feature.exampleOutput}</p>
                    </div>
                  </div>
                </div>

                {/* Footer / Benefits */}
                <div className="px-8 py-4 bg-slate-950/60 rounded-b-3xl border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="truncate pr-4">{feature.benefits}</span>
                  <ArrowRight className="h-4 w-4 text-cyan-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
