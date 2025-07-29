# My Tasks App

A comprehensive task management mobile application built with React Native, Expo, and local storage. Features a beautiful Material Design UI with local notifications and complete task management capabilities.

## 🌟 Features

- **🔐 Local Authentication**: Email/password authentication with proper validation and local storage
- **📝 Complete Task Management**: Create, edit, delete, and organize tasks with priorities and due dates
- **🔔 Smart Notifications**: Local notifications scheduled 30 minutes before task due times
- **🎯 Advanced Filtering**: Filter tasks by priority (Low, Medium, High) and completion status
- **📊 Task Statistics**: Comprehensive stats showing completion rates, overdue tasks, and priority breakdown
- **📱 Responsive Design**: Beautiful Material Design UI optimized for all mobile devices
- **💾 Local Storage**: Tasks and user data persist locally using AsyncStorage
- **👤 Profile Management**: Edit user profile information with validation

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or later)
- Expo CLI: `npm install -g @expo/cli`

### Installation

1. **Clone and setup**:
   ```bash
   git clone <repository-url>
   cd my-tasks-app
   npm install
   ```

2. **Run the app**:
   ```bash
   npx expo start
   ```

## 📱 App Structure

### Authentication Flow
- **Splash Screen**: Auto-redirects based on authentication status
- **Login Screen**: Email/password authentication with proper email format validation
- **Register Screen**: New user registration with comprehensive form validation

### Main App
- **Task List Screen**: Grouped tasks (Today, Tomorrow, This Week, Later) with filtering
- **Statistics Screen**: Detailed task analytics and productivity insights
- **Profile Screen**: User information management with edit capabilities

### Task Management
- **Task Form Modal**: Add/edit tasks with priority selection and date picker
- **Task Operations**: Complete, edit, delete tasks with confirmation dialogs
- **Smart Grouping**: Tasks automatically grouped by due date for better organization

## 🎨 Design Features

- **Purple Gradient Theme**: Beautiful #6366F1 to #8B5CF6 gradient matching modern design trends
- **Material Design**: Cards, floating action buttons, and consistent spacing
- **Responsive Layout**: Optimized for different screen sizes
- **Smooth Animations**: Micro-interactions for enhanced user experience
- **Visual Feedback**: Clear priority indicators, completion states, and overdue warnings

## 🔧 Technical Architecture

### Frontend
- **React Native + Expo**: Cross-platform mobile development
- **Expo Router**: File-based navigation with tab layout
- **TypeScript**: Type-safe development with proper interfaces
- **Lucide Icons**: Consistent iconography throughout the app

### Data Storage
- **AsyncStorage**: Local persistence for user accounts and tasks
- **Local Authentication**: Secure user management without external dependencies
- **Data Validation**: Comprehensive input validation for all forms

### Notifications
- **Expo Notifications**: Local notifications scheduled automatically
- **Smart Scheduling**: Notifications 30 minutes before due time
- **Auto-cancellation**: Notifications canceled when tasks are completed

## 📊 Data Models

### Task Interface
```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
  createdAt: string;
  notificationId?: string;
  userId: string;
}
```

### User Interface
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  avatar?: string;
}
```

### Statistics Interface
```typescript
interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  overdue: number;
  byPriority: {
    low: number;
    medium: number;
    high: number;
  };
}
```

## 🛠️ Key Features Implemented

1. **Email Validation**: Real-time email format validation with error display
2. **Task CRUD Operations**: Complete create, read, update, delete functionality
3. **Priority Management**: Three-level priority system (Low, Medium, High)
4. **Statistics Dashboard**: Comprehensive task analytics and insights
5. **Profile Editing**: In-app profile management with validation
6. **Local Notifications**: Smart notification scheduling and cancellation
7. **Responsive Design**: Adaptive layouts for different screen sizes
8. **Data Persistence**: Reliable local storage with error handling

## 🔐 Security Features

- Email format validation with regex patterns
- Password strength requirements (minimum 6 characters)
- Input sanitization and validation
- Secure local data storage
- User session management

## 📈 Performance Optimizations

- Efficient task filtering and grouping
- Optimized re-renders using React hooks
- Local storage caching for faster app startup
- Lazy loading of components
- Memory-efficient data structures

## 🎯 App Screens

1. **Splash Screen**: Loading and authentication check
2. **Login Screen**: User authentication with validation
3. **Register Screen**: New user registration
4. **Task List**: Main task management interface
5. **Statistics**: Task analytics and insights
6. **Profile**: User profile management

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using modern React Native development practices and local storage solutions.