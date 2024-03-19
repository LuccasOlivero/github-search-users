import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./queryClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="bg-black w-full h-full">
        <App />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
