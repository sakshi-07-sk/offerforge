import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Briefcase, User, Shield, Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';

const AuthForm = ({ role, type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = type === 'login';

  const roleTheme = {
    Admin: {
      text: 'text-cyan-400',
      icon: <Shield className="h-12 w-12 text-cyan-400 mx-auto" />,
      btn: 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400',
      border: 'border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/20'
    },
    HR: {
      text: 'text-blue-400',
      icon: <Briefcase className="h-12 w-12 text-blue-400 mx-auto" />,
      btn: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400',
      border: 'border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/20'
    },
    Candidate: {
      text: 'text-purple-400',
      icon: <User className="h-12 w-12 text-purple-400 mx-auto" />,
      btn: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400',
      border: 'border-purple-500/30 focus:border-purple-400 focus:ring-purple-400/20'
    }
  };

  const theme = roleTheme[role];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const endpoint = isLogin ? '/api/v1/auth/login' : '/api/v1/auth/signup';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : { ...formData, role };
        
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isLogin) {
        // Mock successful login
        const mockUser = { id: '1', name: 'Test User', email: formData.email, role };
        localStorage.setItem('token', 'mock_token_123');
        localStorage.setItem('user', JSON.stringify(mockUser));
        toast.success(`Welcome back to the ${role} Portal!`);
        navigate(`/${role.toLowerCase()}/dashboard`);
      } else {
        toast.success('Account created successfully! Please log in.');
        navigate(`/${role.toLowerCase()}/login`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div className={`absolute inset-0 ${role === 'Admin' ? 'bg-cyan-500' : role === 'HR' ? 'bg-blue-500' : 'bg-purple-500'} blur-[150px] mix-blend-screen rounded-full`}></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/50 p-4 rounded-full inline-block mx-auto border border-slate-800 shadow-xl mb-4 text-center w-24 h-24 flex items-center justify-center">
          {theme.icon}
        </div>
        <h2 className={`mt-2 text-center text-3xl font-extrabold text-white`}>
          {role} Portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          {isLogin ? 'Sign in to access your secure workspace' : 'Create an account to join the platform'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-slate-800/80">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <div className="mt-2 relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-11 bg-slate-950 border text-white rounded-xl py-3 shadow-inner focus:outline-none focus:ring-2 transition-all ${theme.border}`}
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <div className="mt-2 relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-11 bg-slate-950 border text-white rounded-xl py-3 shadow-inner focus:outline-none focus:ring-2 transition-all ${theme.border}`}
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="mt-2 relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full pl-11 bg-slate-950 border text-white rounded-xl py-3 shadow-inner focus:outline-none focus:ring-2 transition-all ${theme.border}`}
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white ${theme.btn} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                    Processing...
                  </>
                ) : (
                  isLogin ? 'Secure Sign In' : 'Create Account'
                )}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-slate-500">Authentication</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate(isLogin ? `/${role.toLowerCase()}/signup` : `/${role.toLowerCase()}/login`)}
                className={`font-medium ${theme.text} hover:text-white transition-colors flex items-center justify-center w-full`}
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center pt-6 border-t border-slate-800/50">
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors"
            >
              &larr; Back to Portal Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
