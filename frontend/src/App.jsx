import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoleSelector from './pages/auth/RoleSelector';
import LandingPage from './pages/landing/LandingPage';
import AuthForm from './components/AuthForm';
import AdminDashboard from './pages/admin/Dashboard';
import HRDashboard from './pages/hr/Dashboard';
import CandidateDashboard from './pages/candidate/Dashboard';
import Layout from './components/Layout';
import EnterprisePlaceholder from './components/EnterprisePlaceholder';

// New Key Features
import TemplateBuilder from './pages/hr/TemplateBuilder';
import UserManagement from './pages/admin/UserManagement';
import DigitalSignature from './pages/candidate/DigitalSignature';

// Mock Auth Context setup
const isAuthenticated = () => !!localStorage.getItem('token');
const getRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.role : null;
};

const ProtectedRoute = ({ allowedRoles }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(getRole())) {
    return <Navigate to="/login" replace />; 
  }
  return <Layout><Outlet /></Layout>;
};

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<RoleSelector />} />
        
        {/* Auth Routes */}
        <Route path="/admin/login" element={<AuthForm role="Admin" type="login" />} />
        <Route path="/admin/signup" element={<AuthForm role="Admin" type="signup" />} />
        
        <Route path="/hr/login" element={<AuthForm role="HR" type="login" />} />
        <Route path="/hr/signup" element={<AuthForm role="HR" type="signup" />} />
        
        <Route path="/candidate/login" element={<AuthForm role="Candidate" type="login" />} />
        <Route path="/candidate/signup" element={<AuthForm role="Candidate" type="signup" />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute allowedRoles={['Admin']} />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="*" element={<EnterprisePlaceholder />} />
        </Route>
        
        {/* HR Routes */}
        <Route path="/hr" element={<ProtectedRoute allowedRoles={['Admin', 'HR']} />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<HRDashboard />} />
          <Route path="template-builder" element={<TemplateBuilder />} />
          <Route path="*" element={<EnterprisePlaceholder />} />
        </Route>
        
        {/* Candidate Routes */}
        <Route path="/candidate" element={<ProtectedRoute allowedRoles={['Candidate']} />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="signature" element={<DigitalSignature />} />
          <Route path="*" element={<EnterprisePlaceholder />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
