/**
 * The ESLint config object for base, and imports.
 *
 * @module eslint-config-base
 *
 * @return {Object}
 * The ESLint config object to extend from.
 *
 * @example
 * module.exports = {
 *   root: true,
 *   extends: [
 *     "@alexseitsinger/eslint-config-base",
 *   ],
 * }
 */
module.exports = {
  extends: [
    "./core",
    "./import",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
}
