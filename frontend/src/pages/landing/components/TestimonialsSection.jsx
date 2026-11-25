import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "VP of HR, TechFlow Inc.",
      image: "https://i.pravatar.cc/150?img=47",
      content: "OfferForge completely transformed our hiring process. What used to take our team hours of manual formatting and email follow-ups now happens automatically in seconds."
    },
    {
      name: "David Chen",
      role: "Founder, StartupX",
      image: "https://i.pravatar.cc/150?img=11",
      content: "As a fast-growing startup, we needed a scalable way to send offers without looking unprofessional. The dynamic PDF generation and digital signatures are flawless."
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Recruiter, Global Systems",
      image: "https://i.pravatar.cc/150?img=5",
      content: "The candidate portal is a game changer. Candidates constantly praise how smooth and modern our onboarding feels. Best HR tool investment we've made this year."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Customer Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by modern HR teams</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl relative group hover:bg-slate-800 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700 group-hover:text-cyan-900/40 transition-colors" />
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-slate-700" />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
