import typescript from "@rollup/plugin-typescript";
import css from 'rollup-plugin-css-only';

export default [
  {
    input: "src/index.ts",
    external: ["@elastic/eui", "react", "react-query", "@emotion/react", "@zbmed/ols-treeview", "axios"],
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
    },
    plugins: [typescript({ tsconfig: "./tsconfig.json" }), css({ output: 'bundle.css' })],
  },
];
