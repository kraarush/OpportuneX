# 🚀 OpportuneX

🔗 **Live Demo**: [OpportuneX Website](https://opportunee.netlify.app)

OpportuneX is a **full-stack job portal** built using the **MERN stack**. It serves as a bridge between recruiters and applicants, allowing recruiters to post job listings and manage applications while enabling applicants to search for jobs and apply seamlessly. 

### 💡 Key Aspects:
- **Recruiter Role**: Post jobs, update or delete job listings, and track applicants.
- **Applicant Role**: Browse jobs, apply, and track the status of applications.
- **Secure Authentication**: Uses JWT-based authentication and cookie sessions for a smooth and secure login experience.
- **Efficient Job Management**: Jobs can be filtered and sorted based on various parameters like location, salary, and company.
- **Scalable & Secure**: Middleware-based validation, error handling, and secure API endpoints ensure a robust system.

## 📌 Features
- 👥 **Role-based access**: Recruiter and Applicant
- 📋 **Job Listings**: Create, update, delete, and search for jobs
- 📝 **Application Management**: Apply for jobs, track status updates
- 🔐 **Authentication & Authorization**: Secure login using JWT & cookies
- 🔍 **Filtering & Sorting**: Search jobs based on criteria
- 🛡️ **Scalability & Security**: Middleware validation & error handling

## 🛠️ Technologies Used
### 🎨 **Frontend**
- ⚛️ React (Vite)
- 🎯 Redux (State Management)
- 🎨 Tailwind CSS (Styling)
- 🚦 React Router (Navigation)
- 📦 ShadCN UI (Component Library)
- ⌨️ React Typed (Auto Typing Effect)
- 🎨 Lucide React & React Icons (UI Enhancements)

### 🏗️ **Backend**
- 🟢 Node.js (Express.js)
- 🗄️ MongoDB (Atlas)
- 🔗 Mongoose (ODM)
- 🔑 JWT (Authentication)
- 🍪 Cookies (Session Management)
- 📂 Multer (File Uploads)
- ✅ Validator (Data Validation)
- 🔐 Bcrypt (Password Encryption)

### 🚀 **DevOps & Deployment**
- 🐳 Docker (Local Testing)
- 🔄 Render (Backend Deployment)
- 🌐 Netlify (Frontend Deployment)

### 🔧 **Other Tools**
- 🛠️ Postman (API Testing)
- 🔗 Git & GitHub (Version Control)

### 🚀 **DevOps**
- 🐳 **Dockerized Setup**: Both frontend and backend are containerized using Docker.
- 📦 **Docker Hub Images**:
  - Frontend: [`kraarush/opportunex-frontend`](https://hub.docker.com/r/kraarush/opportunex-frontend)
  - Backend: [`kraarush/opportunex-backend`](https://hub.docker.com/r/kraarush/opportunex-backend)
- 🔄 **CI/CD Pipeline**: Implemented a Jenkins-based CI/CD pipeline that builds, tests, and pushes Docker images automatically to Docker Hub on every update.

## 📂 Project Structure
```
Opportunex/
├── Backend/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── Dockerfile
│ ├── .env
│ └── index.js
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── redux/
│ │ ├── hooks/
│ │ ├── utils/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── Dockerfile
│ ├── .env
│ └── index.html
├── opportunex.yaml
├── package.json
└── README.md

```

## 🏗️ Setup & Installation
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/kraarush/OpportuneX.git
   ```
2. 📂 Navigate to the project directory:
   ```sh
   cd OpportuneX
   ```
3. 📦 Install dependencies:
   ```sh
   npm install
   ```
4. 🚀 Start the development servers:
   ```sh
   npm run dev  # For frontend
   npm run dev  # For backend
   ```

## 🤝 Contribution
💡 Feel free to open issues or submit pull requests for improvements.

## 📄 License
📜 This project is licensed under the MIT License.

