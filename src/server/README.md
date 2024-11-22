# Server Directory

This directory is intended for creating server actions. Server actions are a way to handle server-side logic in a Next.js application. They can be used to handle tasks such as authentication, data fetching, and more.

> [!WARNING]
When working with server actions, it's crucial to remember that they are essentially open API routes under the hood. This means that authentication checks should be performed on every request to ensure the security and integrity of your application.

**Using Prisma**

For database operations, you can import Prisma from `@db.ts`. This file exports a singleton instance of the Prisma client, which can be used throughout your application for database interactions.

> [!NOTE]
Remember to always follow best practices for security and authentication when working with server actions and Prisma.
