import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import posthtml from "rollup-plugin-posthtml";
import include from "posthtml-include";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/js/main.js",

  output: {
    file: "dist/js/bundle.js",
    format: "iife",
    sourcemap: true,
  },

  plugins: [
    resolve(),
    commonjs(),

    posthtml({
      include: true,
      plugins: [include()],
      extract: true,
    }),

    scss({
      output: "dist/css/main.css",
      sourceMap: true,
      outputStyle: "expanded",
    }),

    terser(),
  ],
};
