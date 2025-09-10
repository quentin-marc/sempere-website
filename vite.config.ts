import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Recréer __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Vite config
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@sections": path.resolve(__dirname, "src/common/sections"),
            "@components": path.resolve(__dirname, "src/common/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },
});
