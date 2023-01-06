import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import postcssImport from "postcss-import";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  // All the used libs needs to be here
  external: ["react", "react-proptypes"],
  plugins: [
    peerDepsExternal(),
    resolve(),
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
