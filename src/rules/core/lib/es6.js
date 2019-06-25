/**
 * @module core/es6
 */
module.exports = {
  /**
   * @namespace
   */
  rules: {
    /**
     * Require braces around arrow function bodies.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/arrow-body-style
     *
     * @example
     * ["error", "as-needed"]
     */
    "arrow-body-style": ["error", "as-needed"],

    /**
     * Require parentheses around arrow function arguments.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/arrow-parens
     *
     * @example
     * ["error", "as-needed", {
     *  requireForBlockBody: false
     * }]
     */
    "arrow-parens": ["error", "as-needed", {
      requireForBlockBody: false,
    }],

    /**
     * Enforce consistent spacing before and after the arrow in arrow functions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/arrow-spacing
     *
     * @example
     * ["error", {
     *  before: true,
     *  after: true,
     * }]
     */
    "arrow-spacing": ["error", {
      before: true,
      after: true,
    }],

    /**
     * Require super() calls in constructors.
     *
     * https://eslint.org/docs/rules/constructor-super
     *
     * @example
     * "error"
     */
    "constructor-super": "error",

    /**
     * Enforce consistent spacing around * operators in generator functions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/generator-star-spacing
     *
     * @example
     * ["error", {
     *  before: false,
     *  after: true,
     * }]
     */
    "generator-star-spacing": ["error", {
      before: false,
      after: true,
    }],

    /**
     * Disallow reassigning class members.
     *
     * https://eslint.org/docs/rules/no-class-assign
     *
     * @example
     * "error"
     */
    "no-class-assign": "error",

    /**
     * Disallow arrow functions where they could be confused with comparisons.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-confusing-arrow
     *
     * @example
     * ["error", {
     *  allowParens: true,
     * }]
     */
    "no-confusing-arrow": ["error", {
      "allowParens": true,
    }],

    /**
     * Disallow reassigning const variables.
     *
     * https://eslint.org/docs/rules/no-const-assign
     *
     * @example
     * "error"
     */
    "no-const-assign": "error",

    /**
     * Disallow duplicate class members.
     *
     * https://eslint.org/docs/rules/no-dupe-class-members
     *
     * @example
     * "error"
     */
    "no-dupe-class-members": "error",

    /**
     * Disallow duplicate module imports.
     *
     * https://eslint.org/docs/rules/no-duplicate-imports
     *
     * @example
     * ["error", {
     *  includeExports: false,
     * }]
     */
    "no-duplicate-imports": ["error", {
      includeExports: false,
    }],

    /**
     * Disallow new operators with the Symbol object.
     *
     * https://eslint.org/docs/rules/no-new-symbol
     *
     * @example
     * "error"
     */
    "no-new-symbol": "error",

    /**
     * Disallow specified modules when loaded by import.
     *
     * https://eslint.org/docs/rules/no-restricted-imports
     *
     * @example
     * ["error", {
     *  paths: [],
     *  patterns: []
     * }]
     */
    "no-restricted-imports": ["error", {
      paths: [],
      patterns: [],
    }],

    /**
     * Disallow this/super before calling super() in constructors.
     *
     * https://eslint.org/docs/rules/no-this-before-super
     *
     * @example
     * "error"
     */
    "no-this-before-super": "error",

    /**
     * Disallow unnecessary computed property keys in object literals.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-useless-computed-key
     *
     * @example
     * "error"
     */
    "no-useless-computed-key": "error",

    /**
     * Disallow unnecessary constructors.
     *
     * https://eslint.org/docs/rules/no-useless-constructor
     *
     * @example
     * "error"
     */
    "no-useless-constructor": "error",

    /**
     * Disallow renaming import, export, and destructured assignments to the
     * same name.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-useless-rename
     *
     * @example
     * ["error", {
     *  ignoreImport: false,
     *  ignoreExport: false,
     *  ignoreDestructuring: false,
     * }]
     */
    "no-useless-rename": ["error", {
      ignoreImport: false,
      ignoreExport: false,
      ignoreDestructuring: false,
    }],

    /**
     * Require let or const instead of var.
     *
     * https://eslint.org/docs/rules/no-var
     *
     * @example
     * "off"
     */
    "no-var": "off",

    /**
     * Require or disallow method and property shorthand syntax for object
     * literals.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-shorthand
     *
     * @example
     * ["off", "consistent-as-needed"]
     */
    "object-shorthand": ["off", "consistent-as-needed"],

    /**
     * Require using arrow functions for callbacks.
     *
     * https://eslint.org/docs/rules/prefer-arrow-callback
     *
     * @example
     * ["error", {
     *  allowNamedFunctions: false,
     *  allowUnboundThis: false,
     * }]
     */
    "prefer-arrow-callback": ["error", {
      allowNamedFunctions: false,
      allowUnboundThis: false,
    }],

    /**
     * Require const declarations for variables that are never reassigned after
     * declared.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/prefer-const
     *
     * @example
     * ["error", {
     *  destructuring: "any",
     *  ignoreReadBeforeAssign: true,
     * }]
     */
    "prefer-const": ["error", {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    }],

    /**
     * Require destructuring from arrays and/or objects.
     *
     * https://eslint.org/docs/rules/prefer-destructuring
     *
     * @example
     * ["error", {
     *   VariableDeclarator: {
     *     array: false,
     *     object: false,
     *   },
     *   AssignmentExpression: {
     *     array: true,
     *     object: true,
     *   }
     * }, {
     *   enforceForRenamedProperties: true,
     * }],
     */
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: false,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      }
    }, {
      enforceForRenamedProperties: true,
    }],

    /**
     * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and
     * hexadecimal literals.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/prefer-numeric-literals
     *
     * @example
     * "error"
     */
    "prefer-numeric-literals": "error",

    /**
     * Require rest parameters instead of arguments.
     *
     * https://eslint.org/docs/rules/prefer-rest-params
     *
     * @example
     * "error"
     */
    "prefer-rest-params": "error",

    /**
     * Require spread operators instead of .apply().
     *
     * https://eslint.org/docs/rules/prefer-spread
     *
     * @example
     * "error"
     */
    "prefer-spread": "error",

    /**
     * Require template literals instead of string concatenation.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/prefer-template
     *
     * @example
     * "error"
     */
    "prefer-template": "error",

    /**
     * Require generator functions to contain yield.
     *
     * https://eslint.org/docs/rules/require-yield
     *
     * @example
     * "error"
     */
    "require-yield": "error",

    /**
     * Enforce spacing between rest and spread operators and their expressions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/rest-spread-spacing
     *
     * @example
     * ["error", "never"]
     */
    "rest-spread-spacing": ["error", "never"],

    /**
     * Enforce sorted import declarations within modules.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/sort-imports
     *
     * @example
     * ["off", {
     *  ignoreCase: false,
     *  ignoreDeclarationSort: true,
     *  ignoreMemberSort: true,
     *  memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
     * }]
     */
    "sort-imports": ["off", {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: true,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
    }],

    /**
     * Require symbol descriptions.
     *
     * https://eslint.org/docs/rules/symbol-description
     *
     * @example
     * "error"
     */
    "symbol-description": "error",

    /**
     * Require or disallow spacing around embedded expressions of template
     * strings.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/template-curly-spacing
     *
     * @example
     * ["error". "never"]
     */
    "template-curly-spacing": ["error", "never"],

    /**
     * Require or disallow spacing around the * in yield* expressions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/yield-star-spacing
     *
     * @example
     * ["error", {
     *  after: true,
     * }]
     */
    "yield-star-spacing": ["error", {
      after: true
    }],
  }
}
