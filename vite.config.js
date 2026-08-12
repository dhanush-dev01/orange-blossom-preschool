import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Set VITE_BASE_URL="/repo-name/" in CI to serve from a project-pages sub-path.
// Defaults to "/" so local dev and root deployments continue to work.
export default defineConfig({
  base: process.env.VITE_BASE_URL || "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
