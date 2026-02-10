import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

// Dùng function để tách cấu hình dev / build
export default defineConfig(({ command }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const basePlugins = [...mochaPlugins(process.env as any), react()];

  // Cloudflare plugin chỉ cần cho build / deploy, không chạy ở dev
  const plugins =
    command === "serve" ? basePlugins : [...basePlugins, cloudflare()];

  return {
    plugins,
    server: {
      allowedHosts: true,
    },
    build: {
      chunkSizeWarningLimit: 5000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
