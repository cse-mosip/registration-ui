import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    envPrefix: "REACT_APP_",

    plugins: [react()],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    build: {
        outDir: "build",
    },
    server: {
        port: 8080,
        open: true,
    },
    base: "/frontend-service/registration/",
});