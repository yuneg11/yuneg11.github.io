import { URL, fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { parse } from "smol-toml";
import { defineConfig, type Plugin } from "vite";

function tomlPlugin(): Plugin {
  return {
    name: "vite-plugin-toml",
    transform(code, id) {
      if (!id.endsWith(".toml")) return null;
      const parsed = parse(code);
      return {
        code: `export default ${JSON.stringify(parsed)}`,
        map: null,
      };
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tomlPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
});
