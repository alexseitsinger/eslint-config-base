module.exports = {
  rules: {
    /**
     * Report potentially ambiguous parse goal (script vs. module).
     *
     * NOTES:
     * - This gets thrown from our webpack configs, so disable it.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     *
     * @example
     * "off"
     */
    "import/unambiguous": "off",

    /**
     * Report CommonJS require calls and module.exports or exports.*.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     *
     * @example
     * ["off", {
     *  allowRequire: true,
     *  allowPrimitiveModules: true,
     * }]
     */
    "import/no-commonjs": ["off", {
      allowRequire: true,
      allowPrimitiveModules: true,
    }],

    /**
     * Report AMD require and define calls.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     *
     * #example
     * "error"
     */
    "import/no-amd": "error",

    /**
     * No Node.js builtin modules.
     *
     * NOTES:
     * - We might need to disable this rule completely, if we find that we
     *   continue to use a larger number of builtin modules.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     *
     * @example
     * ["error", {
     *  allow: ["fs", "path", "child_process"],
     * }]
     */
    "import/no-nodejs-modules": ["error", {
      allow: ["fs", "path", "child_process"],
    }],
  }
}
