module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "no-alert": 0,
    "no-param-reassign": [2, { props: false }],
    "no-plusplus": 0,
    "no-iterator": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "func-style": 0,
    quotes: [2, "double", "backtick", { avoidEscape: true }],
    "prettier/prettier": "error",
  },
}
