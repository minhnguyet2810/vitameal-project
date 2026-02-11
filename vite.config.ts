import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";

// Không dùng Cloudflare plugin trong Vite để build luôn ra static (Vercel/Netlify ok)
export default defineConfig(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugins = [...mochaPlugins(process.env as any), react()];

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