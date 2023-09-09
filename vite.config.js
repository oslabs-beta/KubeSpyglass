import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        proxy: {
            "/auth/**": {
                target: "http://localhost:3000",
                secure: false
            }
        }
    }
})