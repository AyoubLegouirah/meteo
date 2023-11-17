import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "/meteo/", // Remplacez '/chemin-de-votre-application/' par la base souhaitée

  build: {
    rollupOptions: {
      output: {
        dir: "dist",
      },
    },
  },

  plugins: [

    copy({
      targets: [ 
        { src: "images", dest: "dist" }, // Copier le répertoire "images" dans "dist/images"
      ],
      hook: "writeBundle",
    }),
  ],
});