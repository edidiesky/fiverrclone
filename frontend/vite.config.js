import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "https://fiverrclone-api.vercel.app/",
      },
    },
  },
  plugins: [react()],
});
