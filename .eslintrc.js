module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    quotes: ["error", "double"],
    "no-console": ["warn"]
  },
  settings: {
  },
};
