# Quizlets - Learning Management System

## Overview

Quizlets is a role-based Learning Management System built with React that enables online education through course management and quiz administration. The platform serves two primary user roles (Teachers and Students) with distinct interfaces and functionalities. Teachers can create and manage courses and quizzes, while students can enroll in courses, take quizzes, and track their performance.

## Technologies

### Core Stack
- **React 19.2.0** - Frontend framework
- **React Router 7.9.4** - Client-side routing and navigation
- **Material-UI 7.3.4** - Component library with Material Design
- **Tailwind CSS 3.4.18** - Utility-first CSS framework

### Development Tools
- **Create React App** - Build toolchain and configuration
- **PostCSS & Autoprefixer** - CSS processing

## Main Features

### Student Features
- **Course Enrollment** - Browse and enroll in available courses
- **Quiz Taking** - Interactive quiz interface with automatic scoring
- **Performance Tracking** - View scores, completion status, and course performance (dummy data)
- **Dashboard** - Overview of enrolled courses and performance metrics (dummy data)

### Teacher Features
- **Course Management** - Create, edit, and manage courses with image uploads
- **Quiz Creation** - Design and publish quizzes for courses
- **Analytics Dashboard** - View recent activity and pending submissions (dummy data)

### Shared Features
- **Authentication & Authorization** - Role-based access control
- **Profile Management** - User profile updates
- **Protected Routes** - Secure, role-specific navigation

## Architecture

### Design Pattern
- **Component-Based Architecture** with modular design
- **Context API** for global state management (Authentication & Enrollment)
- **Role-Based Access Control (RBAC)** with protected routes
- **Hybrid Styling** approach combining Tailwind CSS and Material-UI

### Project Structure
```
src/
├── components/      # Reusable UI components (Student/Teacher variants)
├── pages/          # Page-level components (Student/Teacher pages)
├── context/        # React Context providers (Auth, Enrollment)
├── data/           # Mock data and static content
└── App.js          # Root component with routing configuration
```

### Key Architectural Features
- **Two Context Providers**: AuthContext for authentication, EnrollmentContext for course/quiz data
- **Protected Routing**: Route guards ensuring role-based access
- **Dynamic Layouts**: Role-specific sidebars and navigation

## Team Contributions
### Razi Chaaban - [https://github.com/AuricX](https://github.com/AuricX)
- Pages and components related to students (courses listing, course enroll, quiz taking, dashboard, sidebar, navbar)
- Protected Routing System
- Authentication System (auth context)

### Mohammad Abdullah - [https://github.com/redlol12345](https://github.com/redlol12345)
- Pages and components related to teachers (course management, course adding, quiz creation, dashboard, sidebar, navbar)
- Login page

## Link

**Repository**: [https://github.com/AuricX/quizlets](https://github.com/AuricX/quizlets)

**Live Demo**: _[To be added when deployed]_

---

**Last Updated**: November 24, 2025
