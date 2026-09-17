# Express.js Basics

A simple Express.js backend project for learning how a basic REST API works with MongoDB.

The project uses three MongoDB collections:

- **Students**
- **Subjects**
- **Exams**

## Basic Workflow

```text
Request
   ↓
Route
   ↓
Controller
   ↓
MongoDB
   ↓
Response
```

### 1. Routes

Routes handle specific API endpoints and connect them to the correct controller.

```text
/routes
  ├── studentRoutes
  ├── subjectRoutes
  └── examRoutes
```

### 2. Controllers

Each collection has its own controller.

For example, the **Student Controller** handles:

```text
Create
Get All
Get One
Update
Delete
```

The same basic idea can be applied to Subjects and Exams.

### 3. MongoDB Queries

The controllers use simple MongoDB/Mongoose operations:

```text
find()        → Get all data
findOne()     → Get specific data
create()      → Create new data
findByIdAndUpdate() → Update data
findByIdAndDelete() → Delete data
```

### 4. Utilities

Utilities contain reusable logic that doesn't belong directly inside a controller.

For example:

```text
Exam Marks
   ↓
Calculate Grade
   ↓
Return Result
```

This keeps the controllers cleaner and easier to understand.

## Project Structure

```text
src/
├── controllers/
│   ├── studentController.js
│   ├── subjectController.js
│   └── examController.js
│
├── routes/
│   ├── studentRoutes.js
│   ├── subjectRoutes.js
│   └── examRoutes.js
│
├── models/
│   ├── Student.js
│   ├── Subject.js
│   └── Exam.js
│
├── utils/
│   └── gradeCalculator.js
│
└── server.js
```

## Learning Goal

This project is mainly for understanding the basic Express.js backend workflow:

**Routes → Controllers → Models → MongoDB → Response**

Students can use this structure to learn how CRUD operations and API organization work before moving into more advanced Express.js concepts.