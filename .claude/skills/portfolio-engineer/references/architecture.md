# Architecture

## Overview

This project follows a combination of Feature-Based Architecture and Layered Architecture to ensure scalability, maintainability, readability, testability, and long-term extensibility.

The architecture prioritizes clean separation of concerns, reusable components, predictable dependencies, and production-ready engineering practices.

The goal is to create a portfolio that reflects enterprise-grade software engineering standards rather than a simple personal website.

---

# Architecture Principles

The project follows these principles:

- SOLID
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Separation of Concerns
- Composition over Inheritance
- Dependency Inversion
- Single Responsibility
- Reusability
- Accessibility First
- Performance First

---

# Repository Structure

This project uses a monorepo structure.

```
portfolio/
│
├── frontend/
├── backend/
├── docs/
├── shared/
└── .claude/
```

## Frontend

- React
- TypeScript
- Vite

## Backend

- ASP.NET Core Web API
- Entity Framework Core
- PostgreSQL

## Shared

Contains shared DTOs, contracts, and documentation if needed.

The frontend must never depend directly on backend implementation details.

Communication always happens through HTTP APIs.

---

# Frontend Folder Structure

```
src/

app/
pages/
layouts/

features/

components/
    ui/
    common/
    layout/

hooks/

services/

contexts/

animations/

lib/

types/

utils/

constants/

styles/

assets/
```

---

# Feature Structure

Every feature owns its implementation.

Example:

```
features/

hero/

Hero.tsx

HeroTitle.tsx

HeroDescription.tsx

HeroButtons.tsx

HeroImage.tsx

HeroStats.tsx

hooks/

services/

constants.ts

types.ts

index.ts
```

Each feature should be self-contained.

Features must not import files from other features.

Shared logic belongs in shared folders.

---

# Layer Responsibilities

The project uses clear dependency boundaries.

```
App

↓

Pages

↓

Features

↓

Shared Components

↓

Hooks

↓

Services

↓

External APIs

↓

Utilities

↓

Constants
```

## Rules

Pages compose Features.

Features compose Shared Components.

Features may use:

- Hooks
- Services
- Utilities
- Constants

Shared Components must never import Features.

Services never import React components.

Utilities never import Services.

Dependencies must always point downward.

Never create circular dependencies.

---

# Application Layer

Responsible for:

- Providers
- Routing
- Theme
- Global configuration
- Error boundaries

Located in

```
app/
```

---

# Pages Layer

Pages are responsible for composing features.

Pages should never contain business logic.

Example

```
HomePage

↓

Hero

↓

Projects

↓

Contact
```

---

# Feature Layer

Business logic lives here.

Each feature contains:

- Components
- Hooks
- Types
- Constants
- Feature-specific services

Every feature must have a single responsibility.

---

# Shared Components

Shared UI components are reusable.

Examples

```
Button

Card

Input

Modal

Tooltip

Badge

Avatar

Dialog

Spinner

Skeleton
```

Shared components should never know where they are used.

---

# Hooks

Hooks contain reusable client-side logic.

Examples

```
useTheme()

useScroll()

useMediaQuery()

useIntersectionObserver()

useMousePosition()

useAnimation()
```

Hooks should not contain rendering logic.

---

# Service Layer

All external communication happens here.

Examples

```
GitHubService

ProjectService

BlogService

EmailService
```

Never call fetch() directly inside components.

Components always consume services.

Services return typed data.

---

# State Management

State is separated into three categories.

## Local State

Used for component-specific interactions.

Tools

- useState
- useReducer

---

## Global Client State

Used for global UI state.

Examples

- Theme
- Authentication
- Settings

Implementation

Context API

---

## Server State

Used for remote data.

Implementation

TanStack Query

Responsibilities

- Fetching
- Caching
- Synchronization
- Invalidation

These state categories are independent.

Never replace one with another without a valid reason.

---

# Routing

Routing uses React Router.

Public routes

```
/

about

projects

blog

contact
```

Protected routes

```
/login

/admin

/dashboard
```

All admin routes require authentication.

---

# Authentication

Authentication uses:

- JWT Access Token
- Refresh Token

## Access Token

- Short lifetime
- Stored only in memory

## Refresh Token

- Stored as HttpOnly Secure Cookie

Never store access tokens inside Local Storage.

---

# Content Strategy

Phase 1

```
Mock Data

↓

Services

↓

TanStack Query

↓

UI
```

Phase 2

```
ASP.NET Core API

↓

Services

↓

TanStack Query

↓

UI
```

UI components must never know whether data comes from mock JSON or the real API.

---

# Error Handling

Use centralized error handling.

API errors must be transformed into user-friendly messages.

Never expose internal exceptions directly to users.

---

# Performance

Use

- Route-based code splitting
- Lazy Loading
- Dynamic Imports
- Memoization
- Image Optimization
- Tree Shaking

Images should use

- WebP
- AVIF

Animations should only improve user experience.

Avoid unnecessary animations.

---

# Accessibility

Target

WCAG AA

Requirements

- Semantic HTML
- Keyboard Navigation
- Visible Focus States
- Screen Reader Compatibility
- Proper ARIA attributes
- Sufficient Color Contrast
- Reduced Motion Support

Accessibility is mandatory.

---

# Testing Strategy

Unit Testing

- Vitest

Component Testing

- React Testing Library

End-to-End Testing

- Playwright

Accessibility Testing

- axe-core

Testing should cover critical business functionality.

---

# Deployment

Frontend

- Vercel

Backend

- Render or Azure

Database

- Neon PostgreSQL

Media Storage

- Cloudinary

---

# Dependency Rules

Allowed

```
Page

↓

Feature

↓

Shared UI

↓

Hooks

↓

Services

↓

Utilities
```

Forbidden

- Feature → Feature
- Service → Component
- Utility → Service
- UI → Feature

Avoid circular imports.

---

# Engineering Goals

Every implementation should aim for:

- Production-ready quality
- Clean architecture
- Reusable components
- Strict TypeScript
- Excellent performance
- High accessibility
- Responsive design
- Enterprise maintainability

Whenever multiple implementation choices exist, prefer the solution that is easier to maintain over the one that is merely shorter.