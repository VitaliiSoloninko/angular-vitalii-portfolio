# 🚀 Angular Vitalii Soloninko Portfolio

Modern portfolio application built with **Angular 21**, **Signals**, and **SCSS**

## ✨ Features

- **⚡ Angular 21** - with Signals and new Control Flow
- **🎯 Feature-based Architecture** - scalable and maintainable structure
- **🚀 Standalone Components** - full standalone architecture
- **🔄 Signals** - reactive state management with Angular Signals
- **🎨 SCSS** - modular styles with mixins and animations
- **📱 Responsive Design** - optimized for all devices
- **🎭 Scroll Animations** - intersection observer with fade, slide, and scale effects

## 🛠 Tech Stack

### Core Technologies

- **[Angular 21](https://angular.dev)**
- **[TypeScript 5.9](https://www.typescriptlang.org/)**
- **[SCSS](https://sass-lang.com/)**
- **[RxJS 7.8](https://rxjs.dev/)**

### Angular Features

- **Signals** - `input()`, `output()`, `computed()`, `signal()`
- **Control Flow** - `@for`, `@if`, `@switch` syntax
- **Standalone Components** - no NgModules
- **Dependency Injection** - `inject()` function
- **Router** - lazy loading with feature routes
- **Directives** - custom scroll animation directive

### Development & Deployment

- **Angular CLI** - build and development tools
- **Firebase Hosting** - production deployment
- **Conventional Commits** - standardized commit messages

## 🎯 Features Overview

### 🏠 Home Page

Multi-section landing page with scroll animations:

- **About** - introduction with photo
- **Portfolio** - filterable project showcase with tags
- **Career Timeline** - professional experience with navigation
- **Skills** - education and technical skills (Frontend, Backend, Extra)

### 📂 Project Detail Page

Comprehensive project information:

- **Hero Section** - project title and main image
- **Tech Stack** - technologies used with badges
- **Features** - key features and functionality
- **Pages** - project page screenshots
- **Description** - detailed project description

## 🎨 Animations

Custom scroll animation system using **Intersection Observer API**:

### Animation Types

- **fade-up** - fade in from bottom
- **fade-down** - fade in from top
- **fade-left** - fade in from right
- **fade-right** - fade in from left
- **fade-in** - simple opacity fade
- **scale-in** - scale from 90% to 100%

### Usage

```html
<div appScrollAnimation animationType="fade-up" [delay]="200">Content</div>
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Angular CLI** (`npm install -g @angular/cli`)

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`.

### Build for Production

```bash
# Build for production
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 📐 Architecture & Best Practices

### Feature-Based Architecture

The project uses a **feature-based structure**, organizing code by business features rather than technical layers:

- **`core/`** - singleton services, models, constants, and shared data
- **`features/`** - lazy-loaded feature modules with their own routes
- **`shared/`** - reusable components and directives used across features
- **`layout/`** - app-wide layout components (header, footer)

### Git Commit Conventions

Use **[Conventional Commits](https://www.conventionalcommits.org/)** format:

```bash
# Feature
feat(home): add scroll animations to sections

# Fix
fix(portfolio): resolve tag filtering issue

# Refactor
refactor(signals): migrate components to signal inputs

# Documentation
docs(readme): update installation instructions

# Style
style(scss): improve button hover effects

# Test
test(service): add unit tests for ProjectService

# Chore
chore(deps): update Angular to version 21
```

## 🎨 Styling Guidelines

### SCSS Structure

- **`ui/null.scss`** - CSS reset and normalization
- **`ui/mixins.scss`** - reusable SCSS mixins
- **`ui/shared.scss`** - shared styles and variables
- **`ui/animations.scss`** - animation mixins and classes

## 📱 Responsive Design

Breakpoints:

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1199px`
- **Desktop**: `≥ 1200px`

## 🚀 Deployment

### Firebase Hosting

The project is configured for Firebase Hosting.

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## 📞 Contact & Links

- **Live Demo**: [soloninko-portfolio.web.app](https://soloninko-portfolio.web.app)

## 📄 License

This project is private and proprietary.

---

**Made with ❤️ using Angular 21, Signals, and SCSS**
