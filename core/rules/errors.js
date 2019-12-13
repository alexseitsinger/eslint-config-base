module.exports = {
  rules: {
    /**
     * Enforce “for” loop update clause moving the counter in the right direction.
     *
     * https://eslint.org/docs/rules/for-direction
     *
     * @example
     * "error"
     */
    "for-direction": "error",

    /**
     * Enforce return statements in getters.
     *
     * https://eslint.org/docs/rules/getter-return
     *
     * @example
     * ["error", {
     *  allowImplicit: true,
     * }]
     */
    "getter-return": ["error", {
      allowImplicit: true,
    }],

    /**
     * Disallow using an async function as a Promise executor.
     *
     * https://eslint.org/docs/rules/no-async-promise-executor
     *
     * @example
     * "error"
     */
    "no-async-promise-executor": "error",

    /**
     * Disallow await inside of loops.
     *
     * https://eslint.org/docs/rules/no-await-in-loop
     *
     * @example
     * "error"
     */
    "no-await-in-loop": "error",

    /**
     * Disallow comparing against -0.
     *
     * https://eslint.org/docs/rules/no-compare-neg-zero
     *
     * @example
     * "error"
     */
    "no-compare-neg-zero": "error",

    /**
     * Disallow assignment operators in conditional expressions.
     *
     * https://eslint.org/docs/rules/no-cond-assign
     *
     * @example
     * "error"
     */
    "no-cond-assign": "error",

    /**
     * Disallow the use of console.
     *
     * NOTES:
     * - We use console statements a lot, so disable this rule.
     *
     * https://eslint.org/docs/rules/no-console
     *
     * @example
     * "off"
     */
    "no-console": "off",

    /**
     * Disallow constant expressions in conditions.
     *
     * https://eslint.org/docs/rules/no-constant-condition
     *
     * @example
     * ["error", {
     *  checkLoops: true,
     * }]
     */
    "no-constant-condition": ["error", {
      checkLoops: true,
    }],

    /**
     * Disallow control characters in regular expressions.
     *
     * https://eslint.org/docs/rules/no-control-regex
     *
     * @example
     * "error"
     */
    "no-control-regex": "error",

    /**
     * Disallow the use of debugger.
     *
     * https://eslint.org/docs/rules/no-debugger
     *
     * @example
     * "error"
     */
    "no-debugger": "error",

    /**
     * Disallow duplicate arguments in function definitions.
     *
     * https://eslint.org/docs/rules/no-dupe-args
     *
     * @example
     * "error"
     */
    "no-dupe-args": "error",

    /**
     * Disallow duplicate keys in object literals.
     *
     * https://eslint.org/docs/rules/no-dupe-keys
     *
     * @example
     * "error"
     */
    "no-dupe-keys": "error",

    /**
     * Disallow duplicate case labels.
     *
     * https://eslint.org/docs/rules/no-duplicate-case
     *
     * @example
     * "error"
     */
    "no-duplicate-case": "error",

    /**
     * Disallow empty block statements.
     *
     * https://eslint.org/docs/rules/no-empty
     *
     * @example
     * ["error", {
     *  allowEmptyCatch: false,
     * }]
     */
    "no-empty": ["error", {
      allowEmptyCatch: false,
    }],

    /**
     * Disallow empty character classes in regular expressions.
     *
     * https://eslint.org/docs/rules/no-empty-character-class
     *
     * @example
     * "error"
     */
    "no-empty-character-class": "error",

    /**
     * Disallow reassigning exceptions in catch clauses.
     *
     * https://eslint.org/docs/rules/no-ex-assign
     *
     * @example
     * "error"
     */
    "no-ex-assign": "error",

    /**
     * Disallow unnecessary boolean casts.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     *
     * @example
     * "error"
     */
    "no-extra-boolean-cast": "error",

    /**
     * Disallow unnecessary parentheses.
     *
     * (fixable)
     *
     * NOTES:
     * - Since we often group expressions using parens, to make them easier to
     *   read, we should disable this rule.
     *
     * https://eslint.org/docs/rules/no-extra-parens
     *
     * @example
     * ["off", "all", {
     *  conditionalAssign: true,
     *  returnAssign: false,
     *  nestedBinaryExpressions: false,
     *  ignoreJSX: "all",
     *  enforceForArrowConditionals: false,
     * }]
     */
    "no-extra-parens": ["off", "all", {
      conditionalAssign: true,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: "all",
      enforceForArrowConditionals: false,
    }],

    /**
     * Disallow unnecessary semicolons.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-semi
     *
     * @example
     * "error"
     */
    "no-extra-semi": "error",

    /**
     * Disallow reassigning function declarations.
     *
     * https://eslint.org/docs/rules/no-func-assign
     *
     * @example
     * "error"
     */
    "no-func-assign": "error",

    /**
     * Disallow variable or function declarations in nested blocks.
     *
     * https://eslint.org/docs/rules/no-inner-declarations
     *
     * @example
     * ["error", "functions"]
     */
    "no-inner-declarations": ["error", "functions"],

    /**
     * Disallow invalid regular expression strings in RegExp constructors.
     *
     * https://eslint.org/docs/rules/no-invalid-regexp
     *
     * @example
     * ["error", {
     *  allowConstructorFlags: ["u", "y"],
     * }]
     */
    "no-invalid-regexp": ["error", {
      allowConstructorFlags: ["u", "y"],
    }],

    /**
     * Disallow irregular whitespace.
     *
     * https://eslint.org/docs/rules/no-irregular-whitespace
     *
     * @example
     * ["error", {
     *  skipStrings: false,
     *  skipComments: false,
     *  skipRegExps: false,
     *  skipTemplates: false,
     * }]
     */
    "no-irregular-whitespace": ["error", {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
    }],

    /**
     * Disallow characters which are made with multiple code points in character class syntax.
     *
     * https://eslint.org/docs/rules/no-misleading-character-class
     *
     * @example
     * "error"
     */
    "no-misleading-character-class": "error",

    /**
     * Disallow calling global object properties as functions.
     *
     * https://eslint.org/docs/rules/no-obj-calls
     *
     * @example
     * "error"
     */
    "no-obj-calls": "error",

    /**
     * Disallow calling some Object.prototype methods directly on objects.
     *
     * https://eslint.org/docs/rules/no-prototype-builtins
     *
     * @example
     * "error"
     */
    "no-prototype-builtins": "error",

    /**
     * Disallow multiple spaces in regular expressions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-regex-spaces
     *
     * @example
     * "error"
     */
    "no-regex-spaces": "error",

    /**
     * Disallow sparse arrays.
     *
     * https://eslint.org/docs/rules/no-sparse-arrays
     *
     * @example
     * "error"
     */
    "no-sparse-arrays": "error",

    /**
     * Disallow template literal placeholder syntax in regular strings.
     *
     * https://eslint.org/docs/rules/no-template-curly-in-string
     *
     * @example
     * "error"
     */
    "no-template-curly-in-string": "error",

    /**
     * Disallow confusing multiline expressions.
     *
     * https://eslint.org/docs/rules/no-unexpected-multiline
     *
     * @example
     * "error"
     */
    "no-unexpected-multiline": "error",

    /**
     * Disallow unreachable code after return, throw, continue, and break statements.
     *
     * https://eslint.org/docs/rules/no-unreachable
     *
     * @example
     * "error"
     */
    "no-unreachable": "error",

    /**
     * Disallow control flow statements in finally blocks.
     *
     * https://eslint.org/docs/rules/no-unsafe-finally
     *
     * @example
     * "error"
     */
    "no-unsafe-finally": "error",

    /**
     * Disallow negating the left operand of relational operators.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-unsafe-negation
     *
     * @example
     * "error"
     */
    "no-unsafe-negation": "error",

    /**
     * Disallow assignments that can lead to race conditions due to usage of await or yield.
     *
     * https://eslint.org/docs/rules/require-atomic-updates
     *
     * @example
     * "error"
     */
    "require-atomic-updates": "error",

    /**
     * Require calls to isNaN() when checking for NaN.
     *
     * https://eslint.org/docs/rules/use-isnan
     *
     * @example
     * "error"
     */
    "use-isnan": "error",

    /**
     * Enforce comparing typeof expressions against valid strings.
     *
     * https://eslint.org/docs/rules/valid-typeof
     *
     * @example
     * ["error", {
     *  requireStringLiterals: true,
     * }]
     */
    "valid-typeof": ["error", {
      requireStringLiterals: true,
    }],
  }
}
