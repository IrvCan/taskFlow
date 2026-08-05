---
description: TaskFlow architecture.
applyTo: "src/**/*"
---

# Project architecture

The project structure is:

src/
├── app/
│   ├── core/
│   ├── features/
│   ├── layouts/
│   └── shared/

Rules:

- Never move files between modules unless explicitly requested.
- Keep a clear separation of concerns.
- Reuse existing services whenever possible.
- Avoid duplicated logic.