import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite'; // Import mergeConfig
import * as globals from "../src/app/globals";

const config: StorybookConfig = {
  // no ts files included here to not include html stories
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen",
  },
    async viteFinal(config, { configType }) {
    // Return the merged configuration
    return mergeConfig(config, {
      server: {
        proxy: {
          '/antelope': {
            target: globals.TIB_ANNOTATION_API_ENDPOINT + 'annotation/entitylinking/text?iconclass=true', // The address of your backend server
            changeOrigin: true,
            secure: false,
            // Optional: Rewrite the path to remove the /api prefix if needed by your backend
            rewrite: (path: any) => path.replace(/^\/antelope/, ''),
            configure: (proxy: any, options) => {
              proxy.on('error', (err: any, _req:any, _res:any) => {
                console.log('proxy error', err);
              });
              proxy.on('proxyReq', (proxyReq:any, req:any, res:any) => {
                // Add or modify headers here
                proxyReq.setHeader('accept', 'application/json');
                proxyReq.setHeader('Content-Type', 'application/json');
                console.log('Sending Request to the Target (main.ts):', req.method, req.url, req.body);
              });
              proxy.on('proxyRes', (proxyRes: any, req:any, _res:any) => {
                console.log('Received Response from the Target (main.ts):', proxyRes.statusCode, req.url);
                console.log('proxyRes', proxyRes);
                //console.log('_res',_res);
              });
        },
          },
        },
      },
    });
  },
  
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
