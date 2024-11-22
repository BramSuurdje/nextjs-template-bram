// app/providers.jsx
"use client";

/**
 * This component wraps the application with the QueryClientProvider from @tanstack/react-query.
 * It initializes a new QueryClient instance and passes it to the QueryClientProvider.
 * This setup enables the use of React Query for managing and caching data fetching within the application.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
