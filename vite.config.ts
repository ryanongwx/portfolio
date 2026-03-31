import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** GitHub Pages: project sites use /repo-name/; user/org site *.github.io uses /. */
function githubPagesBase(): string {
  if (process.env.GITHUB_PAGES !== "true") return "/";
  const name = process.env.GITHUB_REPOSITORY_NAME ?? "";
  if (name.endsWith(".github.io")) return "/";
  return name ? `/${name}/` : "/";
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: githubPagesBase(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
