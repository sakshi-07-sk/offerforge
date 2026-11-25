import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSignature, FileText, Send, Users, 
  History, ShieldCheck, Activity, PieChart, LayoutTemplate 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <LayoutTemplate className="h-6 w-6 text-cyan-400" />,
      title: "Dynamic Template Builder",
      description: "Create offer letter templates using dynamic variables that automatically populate with candidate data."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      title: "Automated PDF Generation",
      description: "Convert offers instantly to professional, secure PDFs ready for signature."
    },
    {
      icon: <FileSignature className="h-6 w-6 text-purple-400" />,
      title: "Digital Signatures",
      description: "Built-in digital signature workflows for candidates to legally bind offers."
    },
    {
      icon: <Send className="h-6 w-6 text-green-400" />,
      title: "Email Automation",
      description: "Automatically dispatch offers and tracking links directly to candidates' inboxes."
    },
    {
      icon: <Users className="h-6 w-6 text-orange-400" />,
      title: "Role-Based Dashboards",
      description: "Distinct, secure portals for Admins, HR teams, and Candidates."
    },
    {
      icon: <Activity className="h-6 w-6 text-red-400" />,
      title: "Real-Time Tracking",
      description: "Monitor offer status (Pending, Sent, Accepted, Rejected) in real-time."
    },
    {
      icon: <History className="h-6 w-6 text-yellow-400" />,
      title: "Version History",
      description: "Maintain a complete audit trail of template revisions and offer changes."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: "Secure Authentication",
      description: "Enterprise-grade security securing your most sensitive HR data."
    },
    {
      icon: <PieChart className="h-6 w-6 text-indigo-400" />,
      title: "Analytics Dashboard",
      description: "Get insights into hiring velocities, offer acceptance rates, and team performance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Enterprise Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Everything you need to scale hiring</h3>
          <p className="text-slate-400 text-lg">
            OfferForge replaces manual document creation and messy email threads with a streamlined, intelligent workflow.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative p-1 rounded-2xl bg-slate-800 hover:bg-gradient-to-b hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-600/0 group-hover:from-cyan-400/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-slate-900 p-8 rounded-xl border border-slate-700/50 group-hover:border-slate-600/50 transition-colors">
                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
