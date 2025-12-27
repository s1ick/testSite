import { defineConfig } from "rollup";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

// ПРАВИЛЬНЫЙ импорт для posthtml-include
import posthtml from "rollup-plugin-posthtml";
import posthtmlInclude from "posthtml-include";

export default defineConfig({
  input: "src/js/main.js",
  output: {
    file: "build/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    // 1. Обработка HTML ДО копирования
    posthtml({
      plugins: [posthtmlInclude()],
      include: "**/*.html",
    }),

    // 2. Копируем обработанный HTML
    copy({
      targets: [
        {
          src: "index.html",
          dest: "build/",
          // transform больше не нужен, posthtml обработал
        },
      ],
      hook: "writeBundle",
      verbose: true,
    }),

    // 3. SCSS
    scss({
      output: "build/bundle.css",
      outputStyle: "expanded",
      sourceMap: true,
      watch: "src/scss/",
    }),

    // 4. Сервер и livereload
    serve({
      open: true,
      contentBase: "build",
      port: 3000,
      host: "localhost",
    }),

    livereload({
      watch: "build",
      delay: 300,
    }),
  ],
  watch: {
    exclude: "node_modules/**",
  },
});
