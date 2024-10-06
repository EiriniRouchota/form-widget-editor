# Form Widget Editor

## Description
Form Widget Editor is a web-based tool that allows users to create and manage form widgets dynamically. The project consists of a backend API built with Node.js, Express, and MongoDB, and a frontend application built with Angular.

## Tech Stack

### Frontend
- **Angular**: For building the user interface and managing form editing features.
- **TypeScript**: Used for type safety and better development experience.
  
### Backend
- **Node.js**: JavaScript runtime for building scalable backend services.
- **Express**: A minimal web framework for handling HTTP requests.
- **MongoDB**: A NoSQL database for storing form widget data.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB, used to interact with the database.

## Bonus Points
 ### 1. Deployment

**Frontend URL**: [https://y-akglrmz5s-eirinis-projects.vercel.app/](https://y-akglrmz5s-eirinis-projects.vercel.app/)

The frontend of the application is deployed on **Vercel**. For full functionality of the application, including backend interactions, it is recommended to follow the instructions below to set up locally. 

### 2. CSS Framework

The frontend utilizes **Bootstrap** to create a responsive and clean UI. This framework ensures that the application looks great on all device sizes without much custom styling.

### 3. TypeScript on Both Backend and Frontend

The project uses TypeScript on both the frontend and backend for better type safety, enhanced development experience, and cleaner code.

**Frontend**: Angular comes pre-configured with TypeScript, ensuring type safety across the application.

**Backend**: The backend was refactored from JavaScript to TypeScript, improving error handling, request/response type safety, and scalability.

## Prerequisites
- **Node.js** (>= 14.x)
- **npm** (Node Package Manager)
- **Angular CLI** (>= 12.x)

## Installation Instructions

### 1. Clone the Repository
To begin, clone the repository to your local machine and navigate into the project directory:
```bash
git clone https://github.com/EiriniRouchota/form-widget-editor.git
```
```bash
cd form-widget-editor 
```
### 2. Backend Setup
 1. Navigate to the backend folder:
```bash
cd backend/form-widget-api

```
 2. Install backend dependencies:
```bash
npm install
```

 3. Start the backend server:
```bash
npm start
```

The backend server will start on ```http://localhost:3000 ``` and connect to MongoDB:

`Server is running on port 3000`

`MongoDB connected`

### 3. Frontend Setup

 1. Open a new terminal and navigate to the frontend folder:
```bash
cd form-widget-editor/frontend/form-widget-editor
```

2. Install frontend dependencies:
```bash
npm install
```
3. Start the frontend application:
```bash
ng serve
```

The Angular development server will start on `http://localhost:4200`

You should now have both the backend and frontend running locally. 

Open your browser and navigate to `http://localhost:4200` to start using the Form Widget Editor!
