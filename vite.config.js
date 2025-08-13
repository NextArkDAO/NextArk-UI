// ==========================
// ✅ vite.config.js — CPR v3 (GitHub Pages + Custom Domain + PWA Safe)
// ==========================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { fileURLToPath } from "url";

// 🔧 ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // 🔭 Custom domain on GitHub Pages => always root
  base: "/",

  plugins: [
    react(),

    // 🧭 PWA — uses /public/manifest.webmanifest (we already CPR’d it)
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script",
      manifest: false, // keep public/manifest.webmanifest as source of truth
      workbox: {
        // SPA fallback so deep links work offline too
        navigateFallback: "index.html",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,gif}"],
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: false, // keep SW disabled in dev to avoid cache confusion
      },
    }),

    // ⚠️ Note: GitHub Pages does NOT serve .br/.gz automatically.
    // If you still want precompressed artifacts in /dist for other hosts,
    // you can re-enable a compression plugin later.
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    port: 5173,
    open: true,
  },

  preview: {
    port: 4173,
    open: true,
  },

  build: {
    target: "es2020",
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 0, // keep assets as files for better cacheability
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) return "react-router";
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
  },
});
