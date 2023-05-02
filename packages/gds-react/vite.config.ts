import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    outDir: "./dist",
    rollupOptions: {
      external: [/^react/, /^lit/],
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
