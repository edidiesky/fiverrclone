import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
console.log(VITE_API_BASE_URL_DEV);
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target:'https://eddy-fiverr-clone.vercel.app/api/v1',
      },
    },
  },
  plugins: [react()],
});
