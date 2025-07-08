import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import commonjs from "@rollup/plugin-commonjs";
import preserveDirectives from "rollup-plugin-preserve-directives";

const external = [
  "@elastic/eui",
  "react",
  "react-query",
  "@emotion/react",
  "react-dom",
]

const plugins = [
  postcss({
    extensions: [".css"],
    minimize: true,
    extract: true,
  })
]

export default [
    {
    input: "src/index.ts",
    external,
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
    plugins: [
        ...plugins,
      typescript({ tsconfig: "./tsconfig.json", outDir: "dist/esm" }),
      copy({
          targets: [{ src: "src/style/32px.png", dest: "dist/esm" }],
      }),
      commonjs({
          include: ["./index.js", "node_modules/**"],
      }),
      preserveDirectives()
    ],
    onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return;
        }
        warn(warning);
    },
  },
  {
    input: "src/components/server/index.ts",
    external,
    output: {
      dir: "dist/server",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
        ...plugins,
      typescript({ tsconfig: "./tsconfig.json", outDir: "dist/server" }),
      copy({
          targets: [{ src: "src/style/32px.png", dest: "dist/server" }],
      }),
      commonjs({
          include: ["./components/server/index.js", "node_modules/**"],
      }),
    ],
  },
];
