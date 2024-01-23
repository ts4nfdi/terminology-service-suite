import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: "src/index.ts",
    external: ["@elastic/eui", "react", "react-query", "@emotion/react", "axios"],
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true
    },
    plugins: [
      commonjs({
      include: [ "./index.js", "node_modules/**" ],
    }),
      nodeResolve({modulePaths: ["node_modules/@zbmed/treeview-ols"]}),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets: [
          { src: "src/style/32px.png", dest: "dist/esm" }
        ]
      }),
      postcss({
        extensions: [".css"],
        minimize: true,
        extract: true
      })
    ]
  }
];
