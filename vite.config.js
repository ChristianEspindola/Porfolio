import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Esto asegura que los recursos se busquen en la raíz relativa
  build: {
    outDir: "dist", // Directorio donde se guardará la compilación final
  },
});
