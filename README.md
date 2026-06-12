# 📊 Task Management Dashboard

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=280&color=0:4F46E5,50:7C3AED,100:06B6D4&text=Task%20Management%20Dashboard&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=40" width="100%" />

<h3>🚀 Modern Full-Stack Productivity Platform</h3>

<p>
A feature-rich task management application built with React, TypeScript, Node.js, and Express.js to streamline workflows, organize projects, and boost productivity.
</p>

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=24&duration=2500&pause=1000&color=7C3AED&center=true&vCenter=true&width=800&lines=Create+Tasks;Manage+Workflows;Track+Progress;Boost+Productivity;Kanban+Board+Experience;Built+With+React+%26+TypeScript" />

<br><br>

<a href="https://task-management-dashboard-ochre.vercel.app">
<img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-success?style=for-the-badge" />
</a>

<img src="https://img.shields.io/github/stars/ayushtripathi-45/Task_Management_Dashboard?style=for-the-badge" />


<img src="https://img.shields.io/github/repo-size/ayushtripathi-45/Task_Management_Dashboard?style=for-the-badge" />

<img src="https://img.shields.io/github/last-commit/ayushtripathi-45/Task_Management_Dashboard?style=for-the-badge" />

<img src="https://komarev.com/ghpvc/?username=ayushtripathi-45&repo=Task_Management_Dashboard&label=Repository%20Views&color=7C3AED&style=for-the-badge" />

</div>

---

# 🎥 Live Demo

<p align="center">
  <img src="./assets/demo.gif" width="100%" alt="Project Demo">
</p>

> Replace `demo.gif` with your dashboard walkthrough recording.

---

# ✨ Overview

Task Management Dashboard is a modern productivity-focused web application that allows users to efficiently organize, prioritize, track, and manage tasks through a clean and intuitive Kanban board interface.

---

# 🏆 Key Features

<table>
<tr>

<td width="50%">

## 📝 Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Update Task Status
* Task Categories
* Priority Levels
* Due Dates

</td>

<td width="50%">

## 🎨 User Experience

* Responsive Design
* Smooth Animations
* Modern UI
* Dark Mode Support
* Drag & Drop
* Interactive Components

</td>

</tr>
</table>

---

# 📸 Screenshots

<img width="1363" height="634" alt="image" src="https://github.com/user-attachments/assets/4ffe91d0-5305-4f16-9389-46c0216e364f" />

---

# ⚙️ Built With

<p align="center">

<img src="https://skillicons.dev/icons?i=react,typescript,nodejs,express,vite,html,css,js,git,github,npm,vscode" />

</p>

---

# 🛠 Tech Stack

| Category           | Technologies |
| ------------------ | ------------ |
| Frontend           | React 18     |
| Styling            | CSS3         |
| Build Tool         | Vite         |
| HTTP Client        | Axios        |
| Backend            | Node.js      |
| Version Control    | Git          |
| Repository Hosting | GitHub       |

---

# 🏗 System Architecture


### Architecture Flow

```text
React Frontend
      │
      ▼
Axios API Layer
      │
      ▼
   Backend
      │
      ▼
Task Routes
      │
      ▼
Task Model
      │
      ▼
Database
```

---

# 🔄 Application Workflow


```text
User
 ↓
Create Task
 ↓
Assign Priority
 ↓
Manage Progress
 ↓
Move Between Columns
 ↓
Complete Task
 ↓
Productivity Improved 🚀
```

---

# 📂 Project Structure

```bash
Task_Management_Dashboard/
│
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── models/
│   │   └── routes/
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── assets/
│   ├── demo.gif
│   ├── light-mode.png
│   ├── dark-mode.png
│   ├── architecture.png
│   └── workflow.png
│
└── README.md
```

---

---

## Clone Repository

```bash
git clone https://github.com/ayushtripathi-45/Task_Management_Dashboard.git

cd Task_Management_Dashboard
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs at:

```bash
http://localhost:3000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# 🎯 Core Functionalities

## CRUD Operations

✅ Create Tasks

✅ Read Tasks

✅ Update Tasks

✅ Delete Tasks

---

## Task Properties

| Property     | Description             |
| ------------ | ----------------------- |
| Title        | Task Name               |
| Description  | Detailed Information    |
| Status       | Todo, In Progress, Done |
| Priority     | Low, Medium, High       |
| Category     | Task Classification     |
| Due Date     | Deadline                |
| Created Date | Creation Timestamp      |
| Tags         | Custom Labels           |

---

## Board Features

* 📋 Kanban Board Layout
* 🎯 Priority Management
* 🏷 Categories & Tags
* ⚡ Real-Time Updates
* 🎨 Smooth Animations
* 📱 Mobile Responsive

---

# 📦 API Endpoints

### Tasks

```http
GET     /api/tasks
POST    /api/tasks
GET     /api/tasks/:id
PUT     /api/tasks/:id
DELETE  /api/tasks/:id
```

### Example Response

```json
{
  "id": "123",
  "title": "Build Dashboard",
  "description": "Create task management UI",
  "status": "in-progress",
  "priority": "high",
  "category": "Development",
  "dueDate": "2026-12-31"
}
```

---

# 📊 Project Status

| Feature              | Status     |
| -------------------- | ---------- |
| Task CRUD            | ✅ Complete |
| Drag & Drop          | ✅ Complete |
| Categories           | ✅ Complete |
| Priorities           | ✅ Complete |
| Responsive UI        | ✅ Complete |
| Dark Mode            | ✅ Complete |
| Authentication       | 🚧 Planned |
| Database Integration | 🚧 Planned |
| Analytics Dashboard  | 🚧 Planned |
| Team Collaboration   | 🚧 Planned |

---

# 🔮 Future Roadmap

## Version 2.0

### 🔐 Authentication

* Login System
* User Registration
* JWT Security
* Profile Management

### 📊 Analytics

* Productivity Charts
* Completion Metrics
* Weekly Reports
* Dashboard Insights

### 🤝 Collaboration

* Team Workspaces
* Shared Boards
* Task Assignment
* User Mentions

### 🤖 AI Features

* Smart Recommendations
* AI Task Prioritization
* Auto Categorization
* Productivity Suggestions

### 📱 Mobile Experience

* Native App
* Push Notifications
* Offline Support

---

# 📈 GitHub Activity

<p align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=ayushtripathi-45&theme=react-dark&hide_border=true"/>

</p>

---

# 📊 GitHub Statistics

<p align="center">

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=ayushtripathi-45&show_icons=true&theme=tokyonight"/>

<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayushtripathi-45&layout=compact&theme=tokyonight"/>

</p>

---

# 🤝 Contributing

Contributions are welcome.

```bash
1. Fork Repository
2. Create Feature Branch
3. Commit Changes
4. Push Branch
5. Open Pull Request
```

---

# ⭐ Support

If you found this project useful:

⭐ Star this Repository

🍴 Fork this Repository

📢 Share it with Developers

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=180&section=footer&color=0:4F46E5,50:7C3AED,100:06B6D4"/>

## Made with ❤️ by Ayush Tripathi

### 🚀 Building Projects • Learning Daily • Growing Consistently

</div>

---

**Version:** 1.0.0

**Last Updated:** May 2026
