/**
 * @module import/static-analysis
 */
module.exports = {
  /**
   * @namespace
   */
  rules: {
    /**
     * Ensure imports point to a file/module that can be resolved.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     *
     * @example
     * ["error", {
     *  commonjs: true,
     *  amd: false,
     *  caseSensitive: true,
     * }]
     */
    "import/no-unresolved": ["error", {
      commonjs: true,
      amd: false,
      //ignore: [],
      caseSensitive: true,
    }],

    /**
     * Ensure named imports correspond to a named export in the remote file.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     *
     * @example
     * "error"
     */
    "import/named": "error",

    /**
     * Ensure a default export is present, given a default import.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     *
     * @example
     * "off"
     */
    "import/default": "off",

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     *
     * @example
     * ["off", {
     *  allowComputed: false,
     * }]
     */
    "import/namespace": ["off", {
      allowComputed: false,
    }],

    /**
     * Restrict which files can be imported in a given folder.
     *
     * NOTES:
     * - Since we split the frontend bundles into two (client, server) we could
     *   add zones to prevent importing server bundles from client.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     *
     * @example
     * ["off", {
     *  zones: [],
     * }]
     */
    "import/no-restricted-paths": ["off", {
      zones: []
    }],

    /**
     * Forbid import of modules using absolute paths.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     *
     * @example
     * ["error", {
     *  esmodule: true,
     *  commonjs: true,
     *  amd: true,
     * }]
     */
    "import/no-absolute-path": ["error", {
      esmodule: true,
      commonjs: true,
      amd: true,
    }],

    /**
     * Forbid require() calls with expressions.
     *
     * NOTES:
     * - We use dynamic requires for packages, so disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     *
     * @example
     * "off"
     */
    "import/no-dynamic-require": "off",

    /**
     * Prevent importing the submodules of other modules.
     *
     * NOTES:
     * - We often import components from subdirectories, we disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     *
     * @example
     * ["off", {
     *  allow: [],
     * }]
     */
    "import/no-internal-modules": ["off", {
      allow: [],
    }],

    /**
     * Forbid webpack loader syntax in imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     *
     * @example
     * "error"
     */
    "import/no-webpack-loader-syntax": "error",

    /**
     * Forbid a module from importing itself.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
     *
     * @example
     * "error"
     */
    "import/no-self-import": "error",

    /**
     * Forbid a module from importing a module with a dependency path back to
     * itself.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
     *
     * @example
     * ["error", {
     *  maxDepth: Infinity,
     * }]
     */
    "import/no-cycle": ["error", {
      maxDepth: Infinity,
    }],

    /**
     * Prevent unnecessary path segments in import and require statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
     *
     * @export
     * ["error", {
     *  noUselessIndex: true,
     * }]
     */
    "import/no-useless-path-segments": ["error", {
      noUselessIndex: true,
    }],

    /**
     * Forbid importing modules from parent directories.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
     *
     * @example
     * "off"
     */
    "import/no-relative-parent-imports": "off",

    /**
     * Forbid modules without any export, and exports not imported by any
     * modules.
     *
     * NOTES:
     * - We always have unused exports in project and package entry points, as
     *   well as javascript config files. So, we add them to the ignoredExports
     *   list.
     * - missingExports doesnt count module.exports so disable that part of the
     *   rule.
     * - Each eslint config should define the ignored files.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
     *
     * @example
     * ["error", {
     *  unusedExports: true,
     *  missingExports: false,
     *  ignoreExports: [],
     * }]
     */
    "import/no-unused-modules": ["error", {
      //src: [],
      missingExports: false,
      unusedExports: true,
      ignoreExports: [],
    }],
  }
}
