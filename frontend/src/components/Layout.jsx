import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LogOut, Menu, LayoutDashboard, FileText, Users, Briefcase, Bell, 
  Settings, UserPlus, Activity, ShieldAlert, BarChart3, Mail, History, 
  PenTool, Search, Download, CheckSquare, Key, HelpCircle, FileSignature
} from 'lucide-react';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const getNavItems = () => {
    if (!user) return [];
    if (user.role === 'Admin') {
      return [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Profile Settings', path: '/admin/profile', icon: Settings },
        { name: 'User Management', path: '/admin/users', icon: Users },
        { name: 'HR Management', path: '/admin/hr', icon: Briefcase },
        { name: 'Candidate Management', path: '/admin/candidates', icon: UserPlus },
        { name: 'Template Management', path: '/admin/templates', icon: FileText },
        { name: 'Offer Management', path: '/admin/offers', icon: FileSignature },
        { name: 'Offer Analytics', path: '/admin/analytics', icon: BarChart3 },
        { name: 'Activity Logs', path: '/admin/activity', icon: Activity },
        { name: 'Audit Trail', path: '/admin/audit', icon: ShieldAlert },
        { name: 'Notifications', path: '/admin/notifications', icon: Bell },
        { name: 'Signature Monitoring', path: '/admin/signatures', icon: PenTool },
        { name: 'System Settings', path: '/admin/settings', icon: Settings },
        { name: 'Role Management', path: '/admin/roles', icon: Key },
        { name: 'Reports & Stats', path: '/admin/reports', icon: BarChart3 },
        { name: 'Version History', path: '/admin/versions', icon: History },
        { name: 'Email Monitoring', path: '/admin/emails', icon: Mail },
      ];
    } else if (user.role === 'HR') {
      return [
        { name: 'Dashboard', path: '/hr/dashboard', icon: LayoutDashboard },
        { name: 'Profile Settings', path: '/hr/profile', icon: Settings },
        { name: 'Template Builder', path: '/hr/template-builder', icon: FileText },
        { name: 'Template List', path: '/hr/templates', icon: FileText },
        { name: 'Candidate Registration', path: '/hr/register-candidate', icon: UserPlus },
        { name: 'Candidate Management', path: '/hr/candidates', icon: Users },
        { name: 'Offer Generation', path: '/hr/generate-offer', icon: FileSignature },
        { name: 'Preview & Edit Offer', path: '/hr/preview-offer', icon: EditIcon },
        { name: 'Offer History', path: '/hr/offer-history', icon: History },
        { name: 'Status Tracking', path: '/hr/status-tracking', icon: Activity },
        { name: 'PDF Downloads', path: '/hr/pdf-downloads', icon: Download },
        { name: 'Email Sending', path: '/hr/emails', icon: Mail },
        { name: 'Notifications', path: '/hr/notifications', icon: Bell },
        { name: 'Signature Tracking', path: '/hr/signatures', icon: PenTool },
        { name: 'Reports Dashboard', path: '/hr/reports', icon: BarChart3 },
        { name: 'Search & Filter', path: '/hr/search', icon: Search },
        { name: 'Activity History', path: '/hr/activity', icon: Activity },
      ];
    } else {
      return [
        { name: 'Dashboard', path: '/candidate/dashboard', icon: LayoutDashboard },
        { name: 'Profile Page', path: '/candidate/profile', icon: Settings },
        { name: 'View Offer Letter', path: '/candidate/view-offer', icon: FileText },
        { name: 'Download PDF', path: '/candidate/download-pdf', icon: Download },
        { name: 'Accept/Reject Offer', path: '/candidate/action-offer', icon: CheckSquare },
        { name: 'Digital Signature', path: '/candidate/signature', icon: PenTool },
        { name: 'Notifications', path: '/candidate/notifications', icon: Bell },
        { name: 'Status Tracking', path: '/candidate/status', icon: Activity },
        { name: 'Offer History', path: '/candidate/history', icon: History },
        { name: 'Email Verification', path: '/candidate/verify-email', icon: Mail },
        { name: 'Password Reset', path: '/candidate/reset-password', icon: Key },
        { name: 'Support / Help', path: '/candidate/support', icon: HelpCircle },
      ];
    }
  };

  // Simple local component for the Edit icon since it wasn't in the import list
  const EditIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  );

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} transition-all duration-300 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shadow-lg z-20`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          {sidebarOpen && (
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mr-2">
                <span className="font-bold text-white text-sm">O</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">Offer<span className="text-cyan-500">Forge</span></span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
            <Menu size={20} />
          </button>
        </div>
        
        {/* Scrollable Nav Items */}
        <nav className="flex-1 py-4 overflow-y-auto space-y-1 px-3 custom-scrollbar">
          {sidebarOpen && <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">Main Menu</div>}
          {getNavItems().map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
                title={!sidebarOpen ? item.name : ""}
              >
                <item.icon size={20} className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} ${isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="font-medium text-sm truncate">{item.name}</span>}
              </button>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors font-medium text-sm"
          >
            <LogOut size={20} className={sidebarOpen ? 'mr-3' : 'mx-auto'} />
            {sidebarOpen && <span>Secure Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-800 dark:text-white capitalize tracking-tight">
              {user?.role} Portal
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-slate-400 hover:text-cyan-500 transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-200 dark:border-slate-700 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-700 dark:text-white">{user?.name || 'Authorized User'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user?.role}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center font-bold shadow-md cursor-pointer border-2 border-white dark:border-slate-800">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(75, 85, 99, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Layout;
