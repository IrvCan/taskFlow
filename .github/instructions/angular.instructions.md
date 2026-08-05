---
description: Angular 22 conventions.
applyTo: "src/**/*.ts"
---

# Angular conventions

This project uses Angular 22.

Rules:

- Use standalone components.
- Prefer signals over RxJS when possible.
- Use computed signals.
- Use effects only when necessary.
- Use inject() instead of constructor injection.
- Keep components small.
- Use strict typing.

Never introduce deprecated APIs.