# 📊 Task Management Dashboard

> A modern, full-stack task management application built with React, TypeScript, and Express.js for efficient workflow organization and task tracking.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Now-brightgreen?style=for-the-badge)](https://task-management-dashboard-ochre.vercel.app)
![GitHub repo size](https://img.shields.io/github/repo-size/ayushtripathi-45/Task_Management_Dashboard)
![GitHub stars](https://img.shields.io/github/stars/ayushtripathi-45/Task_Management_Dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/ayushtripathi-45/Task_Management_Dashboard?style=social)

<div align="center">
  <img src="https://img.icons8.com/fluency/48/csv.png" alt="CSV icon" />
  <img src="https://img.icons8.com/fluency/48/data-configuration.png" alt="Data icon" />
</div>

---

## ✨ Features

- 📝 **Create & Manage Tasks** - Easily add, edit, and delete tasks with a clean interface
- 🎯 **Task Status Tracking** - Track tasks through different statuses (Todo, In Progress, Done)
- 🎨 **Intuitive UI** - Beautiful, responsive design with smooth animations
- ⚡ **Real-time Updates** - Instant feedback when performing actions
- 🔄 **Drag & Drop** - Move tasks between different status columns
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎯 **Priority Levels** - Assign priority levels to tasks
- 🏷️ **Task Categories** - Organize tasks with categories and tags
- 🌙 **Dark Mode Support** - Eye-friendly dark theme option

---

## 🏗️ Project Structure

```
Task_Management_Dashboard/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── index.ts              # Express server entry point
│   │   ├── 📁 models/
│   │   │   └── Task.ts           # Task data model schema
│   │   └── 📁 routes/
│   │       └── tasks.ts          # API endpoints for task operations
│   ├── package.json              # Backend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│   └── package-lock.json         # Dependency lock file
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── main.tsx              # React app entry point
│   │   ├── App.tsx               # Main app component
│   │   ├── api.ts                # API client for backend communication
│   │   ├── App.css               # Global styles
│   │   ├── index.css             # Index styles
│   │   ├── 📁 components/
│   │   │   ├── TaskBoard.tsx      # Main task board layout
│   │   │   ├── TaskCard.tsx       # Individual task card component
│   │   │   └── TaskModal.tsx      # Modal for creating/editing tasks
│   │   └── 📁 assets/
│   │       ├── hero.png          # Hero image
│   │       ├── react.svg          # React logo
│   │       └── vite.svg           # Vite logo
│   ├── index.html                # HTML entry point
│   ├── vite.config.ts            # Vite configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── eslint.config.js          # ESLint configuration
│   ├── package.json              # Frontend dependencies
│   └── package-lock.json         # Dependency lock file
│
├── README.md                     # This file
└── .gitignore                    # Git ignore rules
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library for building interactive components |
| **TypeScript** | Type-safe JavaScript for robust development |
| **Vite** | Lightning-fast build tool and dev server |
| **CSS 3** | Styling and animations |
| **Axios** | HTTP client for API communication |
| **ESLint** | Code quality and consistency |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Minimalist web framework for APIs |
| **TypeScript** | Type-safe backend development |
| **RESTful APIs** | Standard API architecture |

### Tools & Environment
| Tool | Purpose |
|------|---------|
| **Git** | Version control |
| **npm** | Package manager |
| **GitHub** | Repository hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ayushtripathi-45/Task_Management_Dashboard.git
cd Task_Management_Dashboard
```

2. **Set up the backend**
```bash
cd backend
npm install
npm run dev
```
The backend server will run on `http://localhost:3000`

3. **Set up the frontend (in a new terminal)**
```bash
cd frontend
npm install
npm run dev
```
The frontend app will run on `http://localhost:5173`

### Build for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
```

---

## 📖 Usage

### Creating a Task
1. Click the **"+ New Task"** button
2. Fill in the task details:
   - Title
   - Description
   - Priority level
   - Category
3. Click **"Create"** to add the task

### Managing Tasks
- **Edit**: Click the edit icon on a task card to modify details
- **Delete**: Click the trash icon to remove a task
- **Drag & Drop**: Move tasks between status columns
- **Update Status**: Drag tasks to change their status (Todo → In Progress → Done)

### Filtering & Sorting
- Filter by priority level
- Filter by category
- Sort by date created or due date
- Search tasks by title or description

---

## 🌟 Functionality

### Task Operations
✅ **Create** - Add new tasks with detailed information  
✅ **Read** - View all tasks in an organized board view  
✅ **Update** - Modify task details and status  
✅ **Delete** - Remove completed or unnecessary tasks  

### Task Properties
- **Title** - Task name/heading
- **Description** - Detailed task information
- **Status** - Todo, In Progress, Done
- **Priority** - High, Medium, Low
- **Category** - Organize tasks by type
- **Due Date** - Set deadlines for tasks
- **Created Date** - Timestamp of creation
- **Tags** - Additional labeling options

### Board Features
- **Kanban View** - Visual status-based organization
- **Card Animations** - Smooth transitions and hover effects
- **Real-time Updates** - Instant UI refresh on actions
- **Responsive Layout** - Adapts to all screen sizes

---

## 🔮 Future Enhancements

### Short Term (Next Release)
- 🔐 **User Authentication** - Login/signup functionality with JWT tokens
- 💾 **Data Persistence** - MongoDB or PostgreSQL integration
- 📧 **Email Notifications** - Task reminders and updates
- 🔔 **In-app Notifications** - Real-time notification system
- 📊 **Task Statistics** - Dashboard with completion rates and charts

### Medium Term
- 👥 **Team Collaboration** - Multi-user task assignment
- 💬 **Comments & Discussion** - Add comments to tasks
- 📎 **File Attachments** - Upload files to tasks
- 🔄 **Recurring Tasks** - Set up repeating tasks
- 📱 **Mobile App** - Native iOS/Android applications
- 🌍 **Internationalization** - Multi-language support

### Long Term
- 🤖 **AI Integration** - Smart task suggestions and automation
- 📅 **Calendar View** - Integrated calendar for due dates
- 🎯 **Goal Tracking** - Link tasks to larger goals
- 📈 **Advanced Analytics** - Detailed productivity insights
- 🔌 **Integrations** - Slack, Outlook, Google Calendar integrations
- 🌙 **Advanced Theming** - Custom themes and personalization

---

## 📦 API Endpoints

### Tasks API
```
GET    /api/tasks              # Get all tasks
POST   /api/tasks              # Create a new task
GET    /api/tasks/:id          # Get a specific task
PUT    /api/tasks/:id          # Update a task
DELETE /api/tasks/:id          # Delete a task
```

### Request/Response Format
```json
{
  "id": "unique-id",
  "title": "Task Title",
  "description": "Task description",
  "status": "todo|in-progress|done",
  "priority": "low|medium|high",
  "category": "Category Name",
  "dueDate": "2024-12-31",
  "createdDate": "2024-01-01",
  "tags": ["tag1", "tag2"]
}
```

---

## 🎨 Styling & Animations

### Color Scheme
- **Primary**: #007BFF (Blue)
- **Success**: #28A745 (Green)
- **Warning**: #FFC107 (Yellow)
- **Danger**: #DC3545 (Red)
- **Background**: #F8F9FA (Light Gray)

### Animations
- ✨ Smooth fade-in/fade-out transitions
- 🎯 Hover effects on interactive elements
- 🔄 Loading spinners and progress indicators
- 🎪 Card flip animations
- 📍 Modal entrance animations

---

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add comments for complex logic
- Ensure code is properly formatted
- Run linting before submitting PR

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Ayush Tripathi**
- GitHub: [@ayushtripathi-45](https://github.com/ayushtripathi-45)
- Project: [Task Management Dashboard](https://github.com/ayushtripathi-45/Task_Management_Dashboard)

---

## 🙏 Acknowledgments

- React community for excellent documentation
- Vite for the amazing build tool
- Express.js for the robust backend framework
- All contributors and users who help improve this project

---

## 📞 Support & Contact

If you encounter any issues or have suggestions:
- Open an issue on [GitHub Issues](https://github.com/ayushtripathi-45/Task_Management_Dashboard/issues)
- Create a discussion in [GitHub Discussions](https://github.com/ayushtripathi-45/Task_Management_Dashboard/discussions)

---

## 🎯 Roadmap

- [x] Project setup and initialization
- [x] Basic frontend UI
- [x] Express backend structure
- [ ] User authentication
- [ ] Database integration
- [ ] Advanced filtering options
- [ ] Real-time collaboration
- [ ] Mobile optimization
- [ ] Deployment to production

---

<div align="center">

### ⭐ If you find this project helpful, please consider giving it a star!

**Made with ❤️ by Ayush Tripathi**

[GitHub](https://github.com/ayushtripathi-45) • [LinkedIn](#) • [Twitter](#)

</div>

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Last Updated**: May 14, 2026  
**Version**: 1.0.0
