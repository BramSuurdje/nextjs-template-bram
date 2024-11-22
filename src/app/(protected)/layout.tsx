import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * This component is used to create a layout for protected routes.
 * It checks the user's session using the auth API and headers.
 * If the session is valid, it returns the children, otherwise it redirects to the login page.
 */

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { children };
}
