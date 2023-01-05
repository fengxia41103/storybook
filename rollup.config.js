import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import postcssImport from "postcss-import";
import postcss from "rollup-plugin-postcss";

const lessToJs = require("less-vars-to-js");

const path = require("path");
const fs = require("fs");

export default {
  input: "index.js",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
  ],
  // All the used libs needs to be here
  external: ["react", "react-proptypes"],
  plugins: [
    commonjs(),
    nodeResolve({
      main: true,
      extensions: [".jsx"],
      preferBuiltins: false,
    }),
    babel({
      exclude: "./node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-runtime"],
      babelHelpers: "runtime",
    }),
    json(),
    postcss({
      config: false,
      plugins: [postcssImport()],
      extract: true,
      use: [
        "sass",
        [
          "less",
          {
            javascriptEnabled: true,
            // modifyVars: themeVariables,
          },
        ],
      ],
    }),
    url(),
    svgr({ svgo: false }),
  ],
};
