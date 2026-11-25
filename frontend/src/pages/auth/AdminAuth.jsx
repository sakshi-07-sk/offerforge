import React from 'react';
import AuthForm from '../../components/AuthForm';

export const AdminLogin = () => <AuthForm role="Admin" type="login" />;
export const AdminSignup = () => <AuthForm role="Admin" type="signup" />;
