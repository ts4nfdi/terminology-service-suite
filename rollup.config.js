import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    external: ["@elastic/eui", "react", "react-query"],
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
    },
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
