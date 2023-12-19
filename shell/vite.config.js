import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "shell",
      // filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        remote: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
