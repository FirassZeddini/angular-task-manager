# Task Manager

A clean task management application built with Angular 21. It supports creating tasks, viewing task details, filtering tasks by status, and deleting tasks.

## Features

- View all tasks
- Add a new task
- Filter tasks by All, Active, or Completed
- View individual task details
- Delete tasks
- Reactive form validation
- Responsive layout
- Route-based navigation
- Formatted task dates
- Angular Signals and computed values

## Tech Stack

- Angular 21
- TypeScript
- RxJS
- Angular Reactive Forms
- Angular Router
- Vitest
- CSS

## Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI

### Installation

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
```

### Development Server

```bash
npm start
```

Open `http://localhost:4200/`.

### Production Build

```bash
npm run build
```

The production output will be placed in `dist/`.

### Running Tests

```bash
npm test
```

## Routes

| Route | Page |
|---|---|
| `/` | Task list |
| `/add-task` | Add task form |
| `/task/:id` | Task details |

## Project Structure

```text
src/app/
├── pages/
│   ├── task-list/
│   ├── task-form/
│   └── task-details/
├── services/
│   └── task-service.ts
├── app.routes.ts
├── app.config.ts
├── app.html
└── app.ts
```

## Data

Tasks are stored in an Angular signal inside `TaskService`. The application currently uses in-memory data, so task changes are reset when the page is refreshed.

## License

This project is available for educational use.
