import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "../server/db";
import { createAuthClient } from "better-auth/react";

// This code initializes the authentication system using the better-auth library.
// It configures the database adapter to use Prisma with a PostgreSQL provider.
// It also enables email and password authentication.
// For more detailed configurations, please refer to the better-auth documentation.
// https://www.better-auth.com/docs/introduction

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },
});

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL, // the base url of your auth server
});
