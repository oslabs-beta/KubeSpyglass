import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: true, // Serve files from the root directory
    serve: {
      base: "/",
    },
    proxy: {
      "/auth/**": {
        target: "http://localhost:3005",
        secure: false,
      },
    },
  },
});
