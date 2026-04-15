# Node.js CI/CD Pipeline Project

A simple Node.js Express API with an automated CI/CD pipeline using GitHub Actions.

## 🚀 What This Project Does
- A REST API built with Node.js and Express
- Automated testing with Jest and Supertest
- CI/CD pipeline that runs tests automatically on every push to main

## 🛠️ Tech Stack
- Node.js
- Express.js
- Jest (testing)
- Supertest (API testing)
- GitHub Actions (CI/CD)

## 📦 Installation

Clone the repository:
\`\`\`bash
git clone https://github.com/aderonke-gif/node-cicd-project.git
cd node-cicd-project
\`\`\`

Install dependencies:
\`\`\`bash
npm install
\`\`\`

## ▶️ Run the App
\`\`\`bash
npm start
\`\`\`
App runs on http://localhost:3000

## 🧪 Run Tests
\`\`\`bash
npm test
\`\`\`

## ⚙️ CI/CD Pipeline
Every push to the main branch automatically:
1. Checks out the code
2. Sets up Node.js 18
3. Installs dependencies
4. Runs all tests

## 📁 Project Structure
\`\`\`
node-cicd-project/
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions workflow
├── index.js              # Main application
├── index.test.js         # Tests
└── package.json
\`\`\
# Node.js CI/CD Pipeline with Docker

A Node.js Express API with automated CI/CD pipeline, containerized with Docker and connected to MongoDB.

## 🚀 What This Project Does
- A REST API built with Node.js and Express
- Automated testing with Jest and Supertest
- CI/CD pipeline that runs tests automatically on every push to main
- Fully containerized with Docker
- Multi-service setup with MongoDB using Docker Compose

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Docker & Docker Compose
- Jest (testing)
- Supertest (API testing)
- GitHub Actions (CI/CD)

## 📦 Installation

Clone the repository:
\`\`\`bash
git clone https://github.com/aderonke-gif/node-cicd-project.git
cd node-cicd-project
\`\`\`

## ▶️ Run with Docker (Recommended)
\`\`\`bash
docker compose up -d
\`\`\`
App runs on http://localhost:3000
MongoDB runs on localhost:27017

## ▶️ Run Locally Without Docker
\`\`\`bash
npm install
npm start
\`\`\`

## 🧪 Run Tests
\`\`\`bash
npm test
\`\`\`

## 🐳 Docker Setup

### Dockerfile
The Dockerfile packages the Node.js app into a container:
- Uses Node.js 18 Alpine as base image
- Sets /app as working directory
- Copies and installs dependencies
- Exposes port 3000

### Docker Compose
Runs two services together:
- **app** - The Node.js API container built from the Dockerfile
- **mongo** - Official MongoDB 6 container with persistent volume storage

Both containers run on the same Docker network so the app can communicate with MongoDB using the hostname `mongo`

## ⚙️ CI/CD Pipeline
Every push to the main branch automatically:
1. Checks out the code
2. Sets up Node.js 18
3. Installs dependencies
4. Runs all tests

## 📁 Project Structure
\`\`\`
node-cicd-project/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── Dockerfile              # Container blueprint
├── docker-compose.yml      # Multi-service setup
├── .dockerignore           # Files to exclude from container
├── index.js                # Main application
├── index.test.js           # Tests
└── package.json
\`\`\`

## 🏗️ Architecture
\`\`\`
Your Browser
     ↓
localhost:3000
     ↓
[ app container ]  ←→  [ mongo container ]
  Node.js app            MongoDB database
\`\`\`
