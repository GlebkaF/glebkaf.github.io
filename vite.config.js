import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    preact(),
    legacy({
      // Tizen 3.0 - Chrome 47
      // https://developer.samsung.com/smarttv/develop/specifications/web-engine-specifications.html#javascript-es6
      targets: ["defaults", "not IE 11", "Chrome 47"],
    }),
  ],
  build: {
    target: "es2015",
    outDir: "docs",
  },
});
