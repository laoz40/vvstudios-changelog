import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    ignorePatterns: ["dist/**", ".astro/**", "node_modules/**"],
  },
  fmt: {
    ignorePatterns: ["dist/**", ".astro/**", "node_modules/**"],
    sortPackageJson: true,
  },
  staged: {
    "*": "vp check --fix",
  },
});
