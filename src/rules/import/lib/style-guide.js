/**
 * @module import/style-guide
 */
module.exports = {
  /**
   * @namespace
   */
  rules: {
    /**
     * Ensure all imports appear before other statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     *
     * @example
     * "error"
     */
    "import/first": "error",

    /**
     * Ensure all exports appear after other statements,
     *
     * NOTES:
     * - With React, we sometimes export stateless functional components, then
     *   define its propType below, so disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
     *
     * @example
     * "off"
     */
    "import/exports-last": "off",

    /**
     * Report repeated import of the same module in multiple places.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     *
     * @example
     * "error"
     */
    "import/no-duplicates": "error",

    /**
     * Report namespace imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     *
     * @example
     * "off"
     */
    "import/no-namespace": "off",

    /**
     * Ensure consistent use of file extension within the import path.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     *
     * @example
     * ["error", {
     *  js: "never",
     *  jsx: "never",
     *  json: "always",
     *  css: "always",
     *  ico: "always",
     *  svg: "always",
     *  png: "always",
     *  jpg: "always",
     *  gif: "always",
     *  ttf: "always",
     *  otf: "always",
     * }]
     */
    "import/extensions": ["error", {
      js: "never",
      jsx: "never",
      json: "always",
      css: "always",
      ico: "always",
      svg: "always",
      png: "always",
      jpg: "always",
      gif: "always",
      ttf: "always",
      otf: "always",
    }],

    /**
     * Enforce a convention in module import order.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     *
     * @example
     * ["error", {
     *  groups: [
     *    ["builtin", "external"],
     *    ["internal", "parent", "sibling", "index"],
     *  ],
     *  "nexlines-between": "always",
     * }]
     */
    "import/order": ["error", {
      groups: [
        ["builtin", "external"],
        ["internal", "parent", "sibling", "index"]
      ],
      "newlines-between": "always",
    }],

    /**
     * Enforce a newline after import statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     *
     * @example
     * ["error", {
     *  count: 1,
     * }]
     */
    "import/newline-after-import": ["error", {
      count: 1,
    }],

    /**
     * Prefer a default export if module exports a single name.
     *
     * NOTES:
     * - Using named exports in packages allows for more flexibility when the
     *   package grows and functionality is added later on. As a result, disable
     *   this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     *
     * @example
     * "off"
     */
    "import/prefer-default-export": "off",

    /**
     * Limit the maximum number of dependencies a module can have.
     *
     * NOTES:
     * - Some modules use a lot of dependencies, so either increase this to a
     *   larger number, or disable it completely.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     *
     * @example
     * ["error", {
     *  max: 40,
     * }]
     */
    "import/max-dependencies": ["error", {
      max: 40,
    }],

    /**
     * Forbid unassigned imports.
     *
     * NOTES:
     * - We might need to disable this rule completely, if we find that we
     *   continue to use a larger number of unassigned modules.
     * - Sometimes, we import CSS as modules without assigning them a name. So,
     *   disable this rule completely.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     *
     * @example
     * ["off", {
     *  allow: [
     *    "core-js/stable",
     *    "url-search-params-polyfill",
     *  ]
     * }]
     */
    "import/no-unassigned-import": ["off", {
      allow: [
        "core-js/stable",
        "url-search-params-polyfill",
      ],
    }],

    /**
     * Forbid named default exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
     *
     * @example
     * "off"
     */
    "import/no-named-default": "off",

    /**
     * Forbid default exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     *
     * @example
     * "off"
     */
    "import/no-default-export": "off",

    /**
     * Forbid named exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
     *
     * @example
     * "off"
     */
    "import/no-named-export": "off",

    /**
     * Forbid anonymous values as default exports,
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
     *
     * @example
     * ["off", {
     *  allowArray: false,
     *  allowArrowFunction: false,
     *  allowAnonymousClass: false,
     *  allowAnonymousFunction: false,
     *  allowLiteral: false,
     *  allowObject: false,
     * }]
     */
    "import/no-anonymous-default-export": ["off", {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    /**
     * Prefer named exports to be grouped together in a single export
     * declaration.
     *
     * NOTES:
     * - Since we sometimes export functions as we define them throughout a
     *   module, its probably better to disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
     *
     * @example
     * "off"
     */
    "import/group-exports": "off",

    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
     *
     * @example
     * ["error", {
     *  importFunctions: [],
     *  webpackChunknameFormat: "[a-zA-Z0-9-/_.]",
     * }]
     */
    "import/dynamic-import-chunkname": ["error", {
      importFunctions: [],
      webpackChunknameFormat: "[a-zA-Z0-9-/_.]",
    }],
  }
}
