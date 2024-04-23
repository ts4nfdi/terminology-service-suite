import { build } from "esbuild";
import DynamicImport from '@zbmed/esbuild-dynamic-import';

let define = {}
for (const k in process.env) { define[`process.env.${k}`] = JSON.stringify(process.env[k]) }

console.log('### Building semlookp_widgets.js')
build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	platform: 'browser',
	outfile: "dist_plainjs/semlookp_widgets.js",
	define,
	plugins: [
		DynamicImport({ transformExtensions: [''], filter: /@elastic/ })
	],
	loader: { '.png': 'dataurl' },
	logLevel: 'info',
	sourcemap: 'inline'
});

console.log('### Building semlookp_widgets.min.js')
build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	platform: 'browser',
	outfile: "dist_plainjs/semlookp_widgets.min.js",
	define,
	plugins: [
		DynamicImport({ transformExtensions: [''], filter: /@elastic/ })
	],
	loader: { '.png': 'dataurl' },
	logLevel: 'info',
	minify: true,
	sourcemap: false
});


