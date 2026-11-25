import React, { useState } from 'react';
import { Users, Search, Filter, MoreVertical, Shield, UserPlus, Edit2, Trash2, Calendar, Clock, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 'USR-001', name: 'Sarah Jenkins', email: 'sarah.j@offerforge.com', role: 'Admin', department: 'Executive', status: 'Active', lastActive: '2 mins ago', joinedDate: 'Jan 12, 2025' },
    { id: 'USR-002', name: 'Michael Chang', email: 'michael.c@offerforge.com', role: 'HR', department: 'Engineering Recruitment', status: 'Active', lastActive: '12 mins ago', joinedDate: 'Feb 15, 2025' },
    { id: 'USR-003', name: 'Emily Rodriguez', email: 'emily.r@offerforge.com', role: 'HR', department: 'Design & Product', status: 'Suspended', lastActive: '5 days ago', joinedDate: 'Mar 10, 2025' },
    { id: 'USR-004', name: 'David Kim', email: 'david.k@offerforge.com', role: 'HR', department: 'APAC Operations', status: 'Active', lastActive: '1 hour ago', joinedDate: 'Apr 04, 2025' },
    { id: 'USR-005', name: 'Marcus Vance', email: 'marcus.v@gmail.com', role: 'Candidate', department: 'Engineering (DevOps)', status: 'Active', lastActive: '10 mins ago', joinedDate: 'May 01, 2026' },
    { id: 'USR-006', name: 'Olivia Reed', email: 'olivia.reed@designco.io', role: 'Candidate', department: 'Design (UI/UX)', status: 'Active', lastActive: '3 hours ago', joinedDate: 'May 02, 2026' },
    { id: 'USR-007', name: 'Ethan Hunt', email: 'ethan.h@imf.gov', role: 'Candidate', department: 'Security Architecture', status: 'Active', lastActive: '1 day ago', joinedDate: 'May 05, 2026' },
    { id: 'USR-008', name: 'Sophia Patel', email: 's.patel@product.net', role: 'Candidate', department: 'Product Management', status: 'Active', lastActive: '4 hours ago', joinedDate: 'May 08, 2026' },
    { id: 'USR-009', name: 'Lucas Gray', email: 'lucas.gray@qa-labs.org', role: 'Candidate', department: 'Quality Assurance', status: 'Suspended', lastActive: '2 weeks ago', joinedDate: 'May 10, 2026' },
    { id: 'USR-010', name: 'Alex Johnson', email: 'alex.j@offerforge.com', role: 'HR', department: 'Global Remote Ops', status: 'Active', lastActive: '30 mins ago', joinedDate: 'May 12, 2026' },
    { id: 'USR-011', name: 'Elena Rostova', email: 'elena.r@offerforge.com', role: 'HR', department: 'EU Compliance', status: 'Active', lastActive: '3 mins ago', joinedDate: 'May 14, 2026' },
    { id: 'USR-012', name: 'Marcus Brody', email: 'brody@museum.org', role: 'Candidate', department: 'Research & Archiving', status: 'Active', lastActive: '5 hours ago', joinedDate: 'May 16, 2026' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
            <Users className="w-6 h-6 mr-3 text-cyan-500" />
            User Management
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage system administrators, HR representatives, and candidate accounts.</p>
        </div>
        <button className="flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-cyan-500/20">
          <UserPlus size={18} className="mr-2" />
          Add New User
        </button>
      </div>

      <motion.div variants={itemVariants}>
        <div className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative">
          
          {/* Toolbar */}
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-wrap gap-4 justify-between items-center relative z-10">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search users by name, email, or department..." 
                className="pl-9 pr-4 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 dark:text-white transition-all w-full"
              />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Filter Role:</span>
              {['All', 'Admin', 'HR', 'Candidate'].map(role => (
                <button
                  key={role}
                  onClick={() => setFilterRole(role)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    filterRole === role 
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
          
          {/* Datatable */}
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30">
                  <th className="p-5 font-semibold">User</th>
                  <th className="p-5 font-semibold">Role</th>
                  <th className="p-5 font-semibold">Department</th>
                  <th className="p-5 font-semibold">Status</th>
                  <th className="p-5 font-semibold">Last Active</th>
                  <th className="p-5 font-semibold">Joined Date</th>
                  <th className="p-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50 bg-white dark:bg-slate-900/40">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group">
                    <td className="p-5">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mr-4 shadow-md ${
                          user.role === 'Admin' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 
                          user.role === 'HR' ? 'bg-gradient-to-br from-cyan-500 to-blue-600' :
                          'bg-gradient-to-br from-amber-500 to-orange-600'
                        }`}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{user.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{user.email}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className={`flex items-center w-max px-2.5 py-1 text-xs font-semibold rounded-full border ${
                        user.role === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800' : 
                        user.role === 'HR' ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800' :
                        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                      }`}>
                        {user.role === 'Admin' && <Shield className="w-3 h-3 mr-1.5" />}
                        {user.role}
                      </span>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <Briefcase className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                        {user.department}
                      </div>
                    </td>
                    <td className="p-5">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800' : 
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-5 whitespace-nowrap">
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {user.lastActive}
                      </div>
                    </td>
                    <td className="p-5 whitespace-nowrap">
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {user.joinedDate}
                      </div>
                    </td>
                    <td className="p-5 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="p-2 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all" title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 dark:hover:text-red-400 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-xs text-slate-500 flex justify-between items-center">
            <span>Showing {filteredUsers.length} of {users.length} users</span>
            <div className="flex space-x-1">
              <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-400 cursor-not-allowed">Prev</button>
              <button className="px-3 py-1.5 border border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg font-medium">1</button>
              <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">Next</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserManagement;
