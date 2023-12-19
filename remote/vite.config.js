import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./ButtonComponent": "./src/components/ButtonComponent.vue",
        "./ComponentA": "./src/components/ComponentA.vue",
        // "./main": "./src/assets/main.css"
      },
      shared: ["vue"],
    }),
  ],
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
