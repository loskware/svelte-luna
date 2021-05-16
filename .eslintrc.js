module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
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
    quotes: ["error", "double"]
  },
  settings: {
    "svelte3/ignore-styles": ({ lang }) => lang === "scss",
  },
};
