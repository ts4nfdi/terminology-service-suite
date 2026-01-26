import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImportPlugin from "eslint-plugin-unused-imports";

export default defineConfig([
  {
    ignores: ["**/node_modules/**", "**/*.config.*"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "unused-imports": unusedImportPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/prop-types": "warn",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "prefer-const": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "react/display-name": "off",
      "unused-imports/no-unused-imports": "warn",
      "import/no-named-as-default-member": "off"
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
