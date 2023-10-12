import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "https://eddy-fiverr-clone.vercel.app/api/v1",
      },
    },
  },
  plugins: [react()],
});
