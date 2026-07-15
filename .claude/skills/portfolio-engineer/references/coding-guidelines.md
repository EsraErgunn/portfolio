# Coding Guidelines

## Purpose

This document defines the engineering standards for the entire project.

Every implementation must follow these rules.

Code should always prioritize maintainability, readability, accessibility, scalability and performance over writing fewer lines of code.

---

# Core Engineering Principles

Always follow:

- SOLID
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- YAGNI (You Aren't Gonna Need It)
- Separation of Concerns
- Composition over Inheritance
- Single Source of Truth

Never sacrifice maintainability for clever code.

---

# General Rules

Always:

- Write readable code.
- Prefer explicit code over implicit code.
- Keep functions small.
- Keep components focused.
- Remove dead code.
- Remove unused imports.
- Document non-obvious decisions.

Never:

- Duplicate logic.
- Use magic numbers.
- Leave TODOs in production code.
- Comment obvious code.
- Disable ESLint without explanation.

---

# TypeScript

Always:

- Enable strict mode.
- Type every prop.
- Type every function return when appropriate.
- Use readonly where possible.
- Prefer interfaces for object contracts.
- Prefer type aliases for unions and utility types.

Never:

- Use any.
- Ignore compiler errors.
- Suppress types unnecessarily.

Example:

Good

```ts
interface ProjectCardProps {
  project: Project;
}
```

Bad

```ts
const ProjectCard = (props: any) => {}
```

---

# React

Use:

- Functional Components
- Hooks
- Composition
- Controlled Components
- Lazy Loading

Never use:

- Class Components
- Large monolithic components
- Business logic inside JSX

Each component should have a single responsibility.

---

# Component Guidelines

Components must:

- Be reusable.
- Be testable.
- Be accessible.
- Be independent.

Keep components small.

If a component exceeds roughly 200–300 lines, consider splitting it.

---

# Props

Always:

- Keep props minimal.
- Avoid unnecessary prop drilling.
- Prefer composition over passing many props.

---

# State Management

Choose the correct tool:

Local UI State

- useState
- useReducer

Global Client State

- Context API

Server State

- TanStack Query

Do not misuse Context API as a server-state solution.

---

# Hooks

Custom hooks should:

- Start with "use"
- Encapsulate reusable logic
- Never render UI
- Avoid side effects unless necessary

Example:

```
useTheme()

useScroll()

useIntersectionObserver()
```

---

# Services

All HTTP communication belongs in the service layer.

Never call fetch() or axios directly inside React components.

Good

```
Component

↓

ProjectService

↓

API
```

Bad

```
Component

↓

fetch()
```

---

# Styling

Use:

- Tailwind CSS

Avoid:

- Inline styles
- !important
- Random spacing values

Always use design-system tokens.

---

# Animations

Use:

- Framer Motion

Animations should:

- Improve usability.
- Support hierarchy.
- Feel smooth.
- Respect prefers-reduced-motion.

Avoid:

- Excessive animations.
- Long animation chains.
- Layout-shifting animations.

---

# Accessibility

Every component must:

- Be keyboard accessible.
- Use semantic HTML.
- Have visible focus states.
- Support screen readers.
- Meet WCAG AA.

Never sacrifice accessibility for aesthetics.

---

# Performance

Always:

- Lazy load routes.
- Optimize images.
- Memoize expensive calculations.
- Use dynamic imports when appropriate.

Avoid premature optimization.

Optimize only when there is measurable benefit.

---

# Error Handling

Never ignore errors.

Always:

- Display user-friendly messages.
- Log unexpected errors.
- Handle loading and error states.

---

# File Naming

Components

PascalCase

```
HeroSection.tsx
```

Hooks

camelCase with "use"

```
useTheme.ts
```

Utilities

camelCase

```
formatDate.ts
```

Constants

UPPER_SNAKE_CASE where appropriate.

---

# Folder Rules

Features own feature-specific code.

Shared code belongs in:

- components/
- hooks/
- utils/
- services/

Never copy files between features.

---

# Imports

Import order:

1. React
2. Third-party libraries
3. Internal modules
4. Types
5. Styles

Avoid deep relative paths when aliases are available.

---

# Git Commit Convention

Use Conventional Commits.

Examples:

```
feat: add hero section

fix: resolve navbar layout issue

refactor: simplify project card component

docs: update architecture

test: add hero component tests

style: improve button spacing

chore: configure eslint
```

---

# Code Review Checklist

Before every commit, verify:

- SOLID principles respected
- No duplicated code
- No unused imports
- No any types
- Responsive design works
- Accessibility requirements met
- Performance considered
- Components remain reusable
- Tests pass
- Lint passes
- Build succeeds

---

# Definition of Done

A task is complete only if:

- Code builds successfully.
- ESLint passes.
- TypeScript has no errors.
- Accessibility requirements are satisfied.
- Responsive layout is verified.
- Code follows the architecture.
- Components are reusable.
- Performance impact is acceptable.
- Documentation is updated if necessary.

---

# Final Principle

Every line of code should be written as if it will be maintained by another engineer years later.

Prefer clarity over cleverness.

Write code that is easy to understand, easy to extend and easy to trust.