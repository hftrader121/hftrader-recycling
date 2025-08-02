import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/hftrader-recycling/", // 👈 ADD THIS LINE
});
