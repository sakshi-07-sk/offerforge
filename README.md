# Offer Letter Builder System

A full-stack HR automation web application built with React, Node.js, Express, and PostgreSQL (via Prisma ORM), containerized with Docker.

## Project Structure
- **/frontend**: React.js application using Vite and Tailwind CSS.
- **/backend**: Node.js API with Express.js and Prisma.
- **docker-compose.yml**: Orchestrates the multi-container setup (Frontend, Backend, Postgres).

## Prerequisites
- Docker and Docker Compose
- Node.js (if running locally without Docker)

## How to Run (Using Docker)

1. Make sure Docker is running on your machine.
2. In the root directory (where \`docker-compose.yml\` is), run:
   \`\`\`bash
   docker-compose up --build
   \`\`\`
3. Wait for the containers to build and start. The database will initialize automatically.
4. Access the applications:
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:5000
   
## Available API Routes (Backend)

### Auth
- \`POST /api/v1/auth/login\`
- \`POST /api/v1/auth/setup\` (Creates an initial Admin user)

### Templates (Requires JWT)
- \`GET /api/v1/templates\`
- \`POST /api/v1/templates\`
- \`PUT /api/v1/templates/:id\`
- \`DELETE /api/v1/templates/:id\`

### Candidates (Requires JWT)
- \`GET /api/v1/candidates\`
- \`POST /api/v1/candidates\`
- \`PUT /api/v1/candidates/:id\`
- \`DELETE /api/v1/candidates/:id\`

### Offers (Requires JWT)
- \`GET /api/v1/offers\`
- \`POST /api/v1/offers\` (Generates offer and replaces placeholders)
- \`PUT /api/v1/offers/:id\`
- \`GET /api/v1/offers/:id/pdf\` (Downloads PDF)
- \`POST /api/v1/offers/:id/send\` (Sends email with PDF)
- \`PATCH /api/v1/offers/:id/status\` (Updates status to Accepted/Rejected)

## Frontend Pages
- \`/login\` - Mock Authentication page
- \`/admin\` - Admin Dashboard
- \`/hr\` - HR Dashboard
- \`/hr/templates\` - Template Management
- \`/candidate\` - Candidate Portal
