import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import postcssImport from "postcss-import";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const lessToJs = require("less-vars-to-js");

const path = require("path");
const fs = require("fs");

export default {
  input: "src/index.ts",
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
    typescript({ useTsconfigDeclarationDir: true }),
    json(),
    nodeResolve(),
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
    babel({
      plugins: [["import", { libraryName: "antd", style: true }]],
      exclude: ["node_modules/**", "public/**"],
      presets: ["@babel/preset-react"],
    }),
    url(),
    svgr({ svgo: false }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
};
