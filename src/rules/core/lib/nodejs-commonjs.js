/**
 * @module core/nodejs-commonjs
 */
module.exports = {
  /**
   * @namespace
   */
  rules: {
    /**
     * Require return statements after callbacks.
     *
     * NOTES:
     * - Since our callback are often asyncronous, we shouldn't expect return
     *   statements. As a result, disable this rule.
     *
     * https://eslint.org/docs/rules/callback-return
     *
     * @example
     * ["off", [
     *  "callback",
     *  "cb",
     *  "errback",
     *  "eb",
     *  "next",
     *  "fn",
     *  "func",
     *  "f",
     * ]]
     */
    "callback-return": ["off", [
      "callback",
      "cb",
      "errback",
      "eb",
      "next",
      "fn",
      "func",
      "f"
    ]],

    /**
     * Require require() calls to be placed at top-level module scope.
     *
     * NOTES:
     * - Since we use require() calls in our reducer, when its hot reloaded, we
     *   need to disable this rule.
     *
     * https://eslint.org/docs/rules/global-require
     *
     * @example
     * "off"
     */
    "global-require": "off",

    /**
     * Require error handling in callbacks.
     *
     * https://eslint.org/docs/rules/handle-callback-err
     *
     * @example
     * ["error", "err"]
     */
    "handle-callback-err": ["error", "err"],

    /**
     * Disallow use of the Buffer() constructor
     *
     * https://eslint.org/docs/rules/no-buffer-constructor
     *
     * @example
     * "error"
     */
    "no-buffer-constructor": "error",

    /**
     * Disallow require calls to be mixed with regular variable declarations.
     *
     * https://eslint.org/docs/rules/no-mixed-requires
     *
     * @example
     * ["error", {
     *  grouping: false,
     *  allowCall: false,
     * }]
     */
    "no-mixed-requires": ["error", {
      grouping: false,
      allowCall: false,
    }],

    /**
     * Disallow new operators with calls to require.
     *
     * https://eslint.org/docs/rules/no-new-require
     *
     * @example
     * "error"
     */
    "no-new-require": "error",

    /**
     * Disallow string concatenation with __dirname and __filename.
     *
     * https://eslint.org/docs/rules/no-path-concat
     *
     * @example
     * "error"
     */
    "no-path-concat": "error",

    /**
     * Disallow the use of process.env.
     *
     * NOTES:
     * - Since we use process.env for webpack configs, we need to disable this
     *   rule.
     *
     * https://eslint.org/docs/rules/no-process-env
     *
     * @example
     * "off"
     */
    "no-process-env": "off",

    /**
     * Disallow the use of process.exit().
     *
     * https://eslint.org/docs/rules/no-process-exit
     *
     * @example
     * "error"
     */
    "no-process-exit": "error",

    /**
     * Disallow specified modules when loaded by require.
     *
     * NOTES:
     * - Since we arent specifying any modules, by default, we don't need to
     *   enable this rule.
     *
     * https://eslint.org/docs/rules/no-restricted-modules
     *
     * @example
     * ["off", {
     *  paths: [[,
     *  patterns: [],
     * }]
     */
    "no-restricted-modules": ["off", {
      paths: [],
      patterns: [],
    }],

    /**
     * Disallow synchronous methods.
     *
     * NOTES:
     * - We use syncronous methods in some node packages, so we should disable
     *   this rule.
     *
     * https://eslint.org/docs/rules/no-sync
     *
     * @example
     * ["off", {
     *  allowAtRootLevel: false
     * }]
     */
    "no-sync": ["off", {
      allowAtRootLevel: false
    }],
  }
}
