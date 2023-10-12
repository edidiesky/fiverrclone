import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: import.meta.env.VITE_API_BASE_URLS,
      },
    },
  },
  plugins: [react()],
});
