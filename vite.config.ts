import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

export default defineConfig(({ command }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const basePlugins = [...mochaPlugins(process.env as any), react()];

  // Bỏ Cloudflare plugin khi dev hoặc khi build trên Vercel (tránh 404 do build lỗi)
  const useCloudflare =
    command !== "serve" && !process.env.VERCEL;
  const plugins = useCloudflare ? [...basePlugins, cloudflare()] : basePlugins;

  return {
    root: "src/react-app",
    plugins,
    server: {
      allowedHosts: true,
    },
    build: {
      outDir: "../../dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 5000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});