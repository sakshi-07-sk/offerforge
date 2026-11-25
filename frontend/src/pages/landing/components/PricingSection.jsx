import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams hiring up to 10 candidates per month.",
      features: [
        "Up to 10 offers/month",
        "3 dynamic templates",
        "Basic email automation",
        "PDF generation",
        "Community support"
      ],
      buttonText: "Start Free Trial",
      isPopular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing startups scaling their recruitment operations.",
      features: [
        "Up to 100 offers/month",
        "Unlimited templates",
        "Digital signatures",
        "Role-based dashboards",
        "Real-time tracking",
        "Priority email support"
      ],
      buttonText: "Get Professional",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex workflows and security needs.",
      features: [
        "Unlimited offers",
        "Custom branding",
        "API access",
        "SSO authentication",
        "Dedicated account manager",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-blue-500 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Scale your hiring without breaking the bank</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.isPopular 
                  ? 'bg-slate-800 border-2 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] transform md:-translate-y-4' 
                  : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
              } transition-all`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.isPopular ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
