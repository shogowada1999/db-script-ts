export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "error",
    camelcase: ["error", { properties: "never" }],
    "@typescript-eslint/consistent-type-imports": "error"
  },
};
