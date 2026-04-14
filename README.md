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
\`\`\`
