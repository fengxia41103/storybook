import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import css from "rollup-plugin-import-css";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodePolyfills from "rollup-plugin-polyfill-node";

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
    nodeResolve({
      browser: true,
      extensions: [".js", ".jsx"],
      preferBuiltins: false,
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    nodePolyfills(),
    babel({
      exclude: "./node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-runtime"],
      babelHelpers: "runtime",
    }),
    svgr({ svgo: false }),
    css(),
    url(),
  ],
};
