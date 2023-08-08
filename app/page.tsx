"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StarWarsCharacters from "@/components/StarWarsCharacters";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <StarWarsCharacters />  
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}