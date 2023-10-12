import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5000/",
      },
    },
  },
  plugins: [react()],
});
