import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    outDir: "./lib/src",
    rollupOptions: {
      external: /^lit/,
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
