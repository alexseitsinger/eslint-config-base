/**
 * @description The ESLint config object for base, and imports.
 * @return {Object} The ESLint config object to extend from.
 * @example
 * // eslintrc.js
 *
 * module.exports = {
 *   root: true,
 *   extends: [
 *     "@alexseitsinger/eslint-config-base",
 *   ],
 * }
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    commonjs: true,
  },
  globals: {
    // Add some globals for Jest.
    describe: "readonly",
    it: "readonly",
    test: "readonly",
    expect: "readonly",
    shallow: "readonly",
    mount: "readonly",
    render: "readonly",
  },
  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  extends: [
    "./rules/base",
    "./rules/import",
  ].map(require.resolve)
}
