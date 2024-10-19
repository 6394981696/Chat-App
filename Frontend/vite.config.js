import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:4002", // Make sure your backend is running on this port
        changeOrigin: true,
        // secure: false, // Uncomment if needed for self-signed certs
      },
    },
  },
});
