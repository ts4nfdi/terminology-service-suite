module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jsx-a11y"],
  root: true,
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    '@typescript-eslint/no-explicit-any': "off",
    "react/prop-types": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "prefer-const": "warn",
    "@typescript-eslint/no-empty-function": ["warn"],
    "react/display-name": "warn",
  },
};
