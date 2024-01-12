import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "src/index.ts",
    external: ["@elastic/eui", "react", "react-query", "@emotion/react", "@zbmed/ols-treeview", "axios"],
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true
    },
    plugins: [
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
