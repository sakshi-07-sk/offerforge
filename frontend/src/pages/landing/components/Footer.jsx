import React from 'react';
import { MessageCircle, Briefcase, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mr-2">
                <span className="font-bold text-white text-lg">O</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">Offer<span className="text-cyan-400">Forge</span></span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Smart Offer Letter Automation for Modern HR Teams. Build, send, and track offers securely.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#workflow" className="text-slate-400 hover:text-white text-sm transition-colors">Workflow</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OfferForge Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
