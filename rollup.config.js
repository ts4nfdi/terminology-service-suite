import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import commonjs from '@rollup/plugin-commonjs';


export default [
  {
    input: "src/index.ts",
    external: ["@elastic/eui", "react", "react-query", "@emotion/react", "react-dom"],
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true
    },
    plugins: [
      commonjs({
      include: [ "./index.js", "node_modules/**" ],
    }),
      copy({
        targets: [
          { src: "src/style/32px.png", dest: "dist/esm" }
        ]
      }),
      postcss({
        extensions: [".css"],
        minimize: true,
        extract: true
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ]
  }
];
