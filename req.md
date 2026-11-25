Offer Letter Builder System - Requirements Document
Project Overview

The Offer Letter Builder System is a web-based HR automation platform designed to streamline and automate the process of creating, managing, and tracking employee offer letters. The platform eliminates repetitive manual work by enabling reusable templates, automated document generation, PDF export, email integration, digital signatures, and workflow tracking.

The system is developed for HR teams to efficiently manage recruitment documentation and improve onboarding workflows.

Project Information
Field	Details
Project Name	Offer Letter Builder System
Domain	HR Technology / Workflow Automation
Platform Type	Full Stack Web Application
Duration	8-Hour Hackathon
Frontend	React.js + Vite
Backend	Node.js + Express.js
Database	MySQL/PostgreSQL
Problem Statement

Many organizations still generate offer letters manually using traditional document editors. This process is repetitive, time-consuming, and prone to errors.

Common challenges include:

Repetitive editing of documents
Formatting inconsistencies
Human errors in candidate details
Lack of centralized management
No proper version tracking
Manual approval and signing process
Difficulty managing large-scale recruitment

The project aims to automate the complete offer-letter lifecycle through a centralized digital platform.

Objectives
Automate offer-letter generation
Create reusable templates
Reduce manual HR effort
Improve document consistency
Enable PDF export
Provide digital approval workflow
Maintain revision history
Enable email communication with candidates
Improve onboarding efficiency
Functional Requirements
1. Authentication Module
Requirements
Secure login system
JWT-based authentication
Role-based access control
Password encryption
Session management
2. Dashboard Module
Requirements
Display total offers
Show draft/sent/accepted/rejected counts
Recent activity tracking
Quick navigation actions
Notification panel
Search and filter options
3. Template Builder Module
Requirements
Rich text editor
Placeholder insertion support
Save reusable templates
Edit existing templates
Clone templates
Delete templates
Template validation
Example Placeholders
{{candidate_name}}
{{salary}}
{{designation}}
{{joining_date}}
4. Candidate Management Module
Requirements
Add candidate details
Edit candidate records
Delete candidate information
Candidate search and filtering
Email validation
Unique candidate records
Candidate Fields
Full name
Email
Phone number
Designation
Department
Joining date
Salary
5. Offer Generation Module
Requirements
Select candidate and template
Replace placeholders dynamically
Generate personalized offer letters
Store generated offers
Prevent invalid data submission
6. Offer Preview & Editing Module
Requirements
Live preview functionality
Inline editing support
Formatting controls
Version snapshot creation
Read-only lock after acceptance
7. PDF Generation Module
Requirements
Server-side PDF generation
Professional document formatting
Download functionality
Multi-page support
Header and footer support
Technologies
Puppeteer
PDFKit
8. Email Integration Module
Requirements
Send offer letters through email
Attach PDF documents
Professional email templates
Automatic email notifications
Candidate communication tracking
Technologies
Nodemailer
SMTP Services
9. Digital Signature Module
Requirements
Secure offer acceptance link
Online digital signing
Timestamp recording
Store signed documents
Auto status update after acceptance
10. Status Management Module
Requirements
Track offer lifecycle
Update statuses
Store status logs
Restrict invalid transitions
Statuses
Draft
Sent
Accepted
Rejected
11. Version History Module
Requirements
Maintain revision history
Track all changes
Store snapshots
View previous versions
Compare versions
Non-Functional Requirements
Performance Requirements
Fast API response time
Efficient database queries
Smooth UI interactions
Optimized PDF generation
Security Requirements
JWT authentication
Password hashing
Secure API routes
Input validation
Role-based permissions
Scalability Requirements
Modular backend architecture
Scalable database design
Expandable feature support
Usability Requirements
Responsive UI
User-friendly workflow
Simple navigation
Professional design
User Roles
Admin
Permissions
Manage HR users
Access all offers and templates
Override restricted actions
Monitor workflow
Access analytics
HR User
Permissions
Create templates
Add candidates
Generate offers
Send emails
Manage statuses
Track offers
Candidate
Permissions
View offer letter
Accept or reject offer
Submit digital signature
Download signed copy
Workflow
HR Login
    ↓
Template Creation
    ↓
Candidate Registration
    ↓
Offer Generation
    ↓
Preview & Editing
    ↓
PDF Generation
    ↓
Email Sending
    ↓
Candidate Review
    ↓
Digital Signature Acceptance
    ↓
Status Tracking
    ↓
Version History Management
Database Requirements
Main Tables
Table Name	Purpose
users	Stores user authentication data
templates	Stores reusable templates
candidates	Stores candidate information
offers	Stores generated offer letters
offer_versions	Stores revision history
offer_status_log	Stores status transitions
API Requirements
Method	Endpoint	Purpose
POST	/api/templates	Create template
GET	/api/templates	Fetch templates
PUT	/api/templates/:id	Update template
DELETE	/api/templates/:id	Delete template
POST	/api/candidates	Add candidate
GET	/api/candidates	Fetch candidates
POST	/api/offers	Generate offer
PUT	/api/offers/:id	Edit offer
GET	/api/offers/:id/pdf	Download PDF
PATCH	/api/offers/:id/status	Update status
Deployment Requirements
Docker Deployment

The application should support containerized deployment using Docker to ensure portability, scalability, and simplified setup.

Docker Requirements
Separate containers for frontend, backend, and database
Docker Compose support for multi-container orchestration
Environment variable management using .env files
Persistent database storage using Docker volumes
Container networking between services
Production-ready build configuration
Docker Architecture
React Frontend Container
            ↓
Node.js Backend Container
            ↓
MySQL/PostgreSQL Database Container
Required Docker Files
Frontend Dockerfile
Build React application
Configure production server
Expose frontend port
Backend Dockerfile
Install backend dependencies
Configure Express server
Expose backend API port
Docker Compose File
Manage all containers together
Configure networking
Configure environment variables
Define database service
Deployment Workflow
Code Development
        ↓
GitHub Repository Push
        ↓
Docker Image Build
        ↓
Docker Compose Setup
        ↓
Container Deployment
        ↓
Database Initialization
        ↓
Application Hosting
        ↓
Production Access
Deployment Platforms

The application can be deployed using:

Docker
Render
Railway
AWS
Azure
DigitalOcean
Vercel (Frontend)
VPS Hosting
Deployment Steps
Step 1: Clone Repository
git clone <repository-link>
Step 2: Configure Environment Variables

Create .env files for backend and database configuration.

Step 3: Build Docker Containers
docker-compose build
Step 4: Run Containers
docker-compose up
Step 5: Access Application
Frontend: http://localhost:3000
Backend API: http://localhost:5000
Database: Docker Container
Deployment Benefits
Simplified setup process
Consistent development environment
Easy scalability
Faster deployment
Better portability
Improved resource management
Production-ready infrastructure
Future Enhancements
AI-based template suggestions
Cloud deployment
Multi-language support
Analytics dashboard
OTP verification
Aadhaar/e-sign integration
Bulk offer generation
Advanced workflow approvals
Expected Outcome

The final system should provide:

Automated offer-letter generation
Reduced HR workload
Centralized document management
Secure digital signing workflow
Professional PDF generation
Faster onboarding process
Better recruitment workflow management
Conclusion

The Offer Letter Builder System is designed to modernize HR recruitment workflows through automation, centralized management, and secure digital processes. The platform improves efficiency, reduces manual errors, and provides a scalable solution for managing offer letters professionally.