import { build } from "esbuild";
import DynamicImport from "@ts4nfdi/esbuild-dynamic-import";

let define = {};
for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

console.log("### Building terminology-service-suite.js");
build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "browser",
  outfile: "dist_plainjs/terminology-service-suite.js",
  define,
  plugins: [DynamicImport({ transformExtensions: [""], filter: /@elastic/ })],
  loader: { ".png": "dataurl" },
  logLevel: "info",
  sourcemap: "inline",
});

console.log("### Building terminology-service-suite.min.js");
build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "browser",
  outfile: "dist_plainjs/terminology-service-suite.min.js",
  define,
  plugins: [DynamicImport({ transformExtensions: [""], filter: /@elastic/ })],
  loader: { ".png": "dataurl" },
  logLevel: "info",
  minify: true,
  sourcemap: false,
});
