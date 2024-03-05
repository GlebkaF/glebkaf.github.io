import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    preact(),
    legacy({
      targets: ["defaults", "not IE 11", "Chrome 47"],
    }),
  ],
  build: {
    target: "es2015",
    outDir: "docs",
  },
});
