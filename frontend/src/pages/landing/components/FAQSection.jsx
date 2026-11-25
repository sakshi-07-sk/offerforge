import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are the digital signatures legally binding?",
      answer: "Yes. OfferForge digital signatures comply with ESIGN and UETA acts, ensuring that every offer letter signed on our platform is legally binding and secure."
    },
    {
      question: "Can I use my own company templates?",
      answer: "Absolutely. Our dynamic template builder allows you to recreate your existing Word or PDF templates using variables. Once set up, they populate automatically."
    },
    {
      question: "How secure is candidate data?",
      answer: "We employ enterprise-grade encryption (AES-256) at rest and TLS 1.3 in transit. Our database architecture ensures that candidate PII is heavily protected."
    },
    {
      question: "Can multiple HR members use the platform?",
      answer: "Yes, the Professional and Enterprise plans support role-based access. Admins can invite multiple HR representatives, and each has their own secure dashboard."
    },
    {
      question: "Does it integrate with my ATS?",
      answer: "Currently, we offer Zapier integration on the Professional plan. Direct API access and native ATS integrations (like Workable, Greenhouse) are available on the Enterprise plan."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently asked questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-left text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180 text-cyan-400' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
