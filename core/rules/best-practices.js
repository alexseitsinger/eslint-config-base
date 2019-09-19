/**
 * @module core/best-practices
 */
module.exports = {
  /**
   * @namespace
   */
  rules: {
    /**
     * Enforce getter and setter pairs in objects.
     *
     * https://eslint.org/docs/rules/accessor-pairs
     *
     * @example
     * ["off", {
     *  setWithoutGet: true,
     *  getWithoutSet: true,
     * }]
     */
    "accessor-pairs": ["off", {
      setWithoutGet: true,
      getWithoutSet: true,
    }],

    /**
     * Enforce return statements in callbacks of array methods.
     *
     * https://eslint.org/docs/rules/array-callback-return
     *
     * @example
     * ["error", {
     *  allowImplicit: true,
     * }]
     */
    "array-callback-return": ["error", {
      allowImplicit: true,
    }],

    /**
     * Enforce the use of variables within the scope they are defined.
     *
     * https://eslint.org/docs/rules/block-scoped-var
     *
     * @example
     * "error"
     */
    "block-scoped-var": "error",

    /**
     * Enforce that class methods utilize this.
     *
     * https://eslint.org/docs/rules/class-methods-use-this
     *
     * @example
     * ["error", {
     *  exceptMethods: [],
     * }]
     */
    "class-methods-use-this": ["error", {
      exceptMethods: [],
    }],

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program.
     *
     * https://eslint.org/docs/rules/complexity
     *
     * @example
     * ["error", {
     *  max: 30,
     * }]
     */
    "complexity": ["error", {
      max: 30,
    }],

    /**
     * Require return statements to either always or never specify values.
     *
     * NOTES:
     * - Since reducer functions only return for matching cases, we dont supply
     *   a return value at the end of them. As a result, turn this rule off to
     *   avoid throwng this error.
     *
     * https://eslint.org/docs/rules/consistent-return
     *
     * @example
     * ["off", {
     *  treatUndefinedAsUnspecified: false,
     * }]
     */
    "consistent-return": ["off", {
      treatUndefinedAsUnspecified: false,
    }],

    /**
     * Enforce consistent brace style for all control statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/curly
     *
     * @example
     * ["error", "all"]
     */
    "curly": ["error", "all"],

    /**
     * Require default cases in switch statements.
     *
     * https://eslint.org/docs/rules/default-case
     *
     * @example
     * ["error", {
     *  commentPattern: "^no\\sdefault$",
     * }]
     */
    "default-case": ["error", {
      commentPattern: "^no\\sdefault$",
    }],

    /**
     * Enforce consistent newlines before and after dots.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/dot-location
     *
     * @example
     * ["error", "property"]
     */
    "dot-location": ["error", "property"],

    /**
     * Enforce dot notation whenever possible.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/dot-notation
     *
     * @example
     * ["error", {
     *  allowKeywords: true,
     *  allowPattern: "",
     * }]
     */
    "dot-notation": ["error", {
      allowKeywords: true,
      allowPattern: "",
    }],

    /**
     * Require the use of === and !==.
     *
     * https://eslint.org/docs/rules/eqeqeq
     *
     * @example
     * ["error", "always"]
     */
    "eqeqeq": ["error", "always"],

    /**
     * Require for-in loops to include an if statement.
     *
     * https://eslint.org/docs/rules/guard-for-in
     *
     * @example
     * "error"
     */
    "guard-for-in": "error",

    /**
     * Enforce a maximum number of classes per file.
     *
     * https://eslint.org/docs/rules/max-classes-per-file
     *
     * @example
     * ["error", 1]
     */
    "max-classes-per-file": ["error", 1],

    /**
     * Disallow the use of alert, confirm, and prompt.
     *
     * https://eslint.org/docs/rules/no-alert
     *
     * @example
     * "error"
     */
    "no-alert": "error",

    /**
     * Disallow the use of arguments.caller or arguments.callee.
     *
     * https://eslint.org/docs/rules/no-caller
     *
     * @example
     * "error"
     */
    "no-caller": "error",

    /**
     * Disallow lexical declarations in case clauses,
     *
     * https://eslint.org/docs/rules/no-case-declarations
     *
     * @example
     * "error"
     */
    "no-case-declarations": "error",

    /**
     * Disallow division operators explicitly at the beginning of regular
     * expressions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-div-regex
     *
     * @example
     * "error"
     */
    "no-div-regex": "error",

    /**
     * Disallow else blocks after return statements in if statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-else-return
     *
     * @example
     * ["error", {
     *  allowElseIf: false,
     * }]
     */
    "no-else-return": ["error", {
      allowElseIf: false,
    }],

    /**
     * Disallow empty functions.
     *
     * NOTES:
     * - We sometimes use empty functions for defaultProps in react. As a
     *   result, allow functions and methods to be empty.
     *
     * https://eslint.org/docs/rules/no-empty-function
     *
     * @example
     * ["error", {
     *  allow: {
     *    "functions",
     *    "arrowFunctions",
     *    "methods",
     *  },
     * }]
     */
    "no-empty-function": ["error", {
      "allow": [
        "functions",
        "arrowFunctions",
        //"generatorFunctions",
        "methods",
        //"generatorMethods",
        //"getters",
        //"setters",
        //"constructors",
      ]
    }],

    /**
     * Disallow empty destructuring patterns.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-empty-pattern
     *
     * @example
     * "error"
     */
    "no-empty-pattern": "error",

    /**
     * Disallow null comparisons without type-checking operators.
     *
     * https://eslint.org/docs/rules/no-eq-null
     *
     * @example
     * "error"
     */
    "no-eq-null": "error",

    /**
     * Disallow the use of eval().
     *
     * https://eslint.org/docs/rules/no-eval
     *
     * @example
     * ["error", {
     *  allowIndirect: false,
     * }]
     */
    "no-eval": ["error", {
      allowIndirect: false,
    }],

    /**
     * Disallow extending native types.
     *
     * https://eslint.org/docs/rules/no-extend-native
     *
     * @example
     * ["error", {
     *  exceptions: [],
     * }]
     */
    "no-extend-native": ["error", {
      exceptions: [],
    }],

    /**
     * Disallow unnecessary calls to .bind().
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-bind
     *
     * @example
     * "error"
     */
    "no-extra-bind": "error",

    /**
     * Disallow unnecessary labels.
     *
     * https://eslint.org/docs/rules/no-extra-label
     *
     * @example
     * "error"
     */
    "no-extra-label": "error",

    /**
     * Disallow fallthrough of case statements.
     *
     * https://eslint.org/docs/rules/no-fallthrough
     *
     * @example
     * ["error", {
     *  commentPattern: "fallthrough",
     * }]
     */
    "no-fallthrough": ["error", {
      commentPattern: "fallthrough",
    }],

    /**
     * Disallow leading or trailing decimal points in numeric literals.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-floating-decimal
     *
     * @example
     * "error"
     */
    "no-floating-decimal": "error",

    /**
     * Disallow assignments to native objects or read-only global variables.
     *
     * https://eslint.org/docs/rules/no-global-assign
     *
     * @example
     * ["error", {
     *  exceptions: [],
     * }]
     */
    "no-global-assign": ["error", {
      exceptions: [],
    }],

    /**
     * Disallow shorthand type conversions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-implicit-coercion
     *
     * @example
     * ["error", {
     *  boolean: true,
     *  number: true,
     *  string: true,
     *  allow: [],
     * }]
     */
    "no-implicit-coercion": ["error", {
      boolean: true,
      number: true,
      string: true,
      allow: [
        //"~",
        //"!!",
        //"+",
        //"*",
      ]
    }],

    /**
     * Disallow variable and function declarations in the global scope.
     *
     * https://eslint.org/docs/rules/no-implicit-globals
     *
     * @example
     * "error"
     */
    "no-implicit-globals": "error",

    /**
     * Disallow the use of eval()-like methods.
     *
     * https://eslint.org/docs/rules/no-implied-eval
     *
     * @example
     * "error"
     */
    "no-implied-eval": "error",

    /**
     * Disallow this keywords outside of classes or class-like objects.
     *
     * NOTES:
     * - We use 'this' for references the global scope when we use IIFE's, etc.
     *   As a result, disable this rule.
     *
     * https://eslint.org/docs/rules/no-invalid-this
     *
     * @example
     * "off"
     */
    "no-invalid-this": "off",

    /**
     * Disallow the use of the __iterator__ property.
     *
     * https://eslint.org/docs/rules/no-iterator
     *
     * @example
     * "error"
     */
    "no-iterator": "error",

    /**
     * Disallow labeled statements.
     *
     * https://eslint.org/docs/rules/no-labels
     *
     * @example
     * ["error", {
     *  allowLoop: false,
     *  allowSwitch: false,
     * }]
     */
    "no-labels": ["error", {
      allowLoop: false,
      allowSwitch: false,
    }],

    /**
     * Disallow unnecessary nested blocks.
     *
     * https://eslint.org/docs/rules/no-lone-blocks
     *
     * @example
     * "error"
     */
    "no-lone-blocks": "error",

    /**
     * Disallow function declarations that contain unsafe references inside loop
     * statements.
     *
     * https://eslint.org/docs/rules/no-loop-func
     *
     * @example
     * "error"
     */
    "no-loop-func": "error",

    /**
     * Disallow magic numbers.
     *
     * NOTES:
     * - Setting a literal 0 will throw an error with this enabled. So, disable
     *   this rule completely.
     *
     * https://eslint.org/docs/rules/no-magic-numbers
     *
     * @example
     * ["off", {
     *  ignore: [],
     *  ignoreArrayIndexes: true,
     *  enforceConst: true,
     *  detectObjects: true,
     * }]
     */
    "no-magic-numbers": ["off", {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: true,
    }],

    /**
     * Disallow multiple spaces.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-multi-spaces
     *
     * @example
     * ["error", {
     *  ignoreEOLComments: false,
     *  exceptions: {
     *    Property: false,
     *  },
     * }]
     */
    "no-multi-spaces": ["error", {
      ignoreEOLComments: false,
      exceptions: {
        Property: false, // default is True
      }
    }],

    /**
     * Disallow multiline strings.
     *
     * https://eslint.org/docs/rules/no-multi-str
     *
     * @example
     * "error"
     */
    "no-multi-str": "error",

    /**
     * Disallow new operators outside of assignments or comparisons.
     *
     * NOTES:
     * - Since webpack uses plugins with new, we might need to set this to warn only
     *
     * https://eslint.org/docs/rules/no-new
     *
     * @example
     * "off"
     */
    "no-new": "off",

    /**
     * Disallow new operators with the Function object.
     *
     * https://eslint.org/docs/rules/no-new-func
     *
     * @example
     * "error"
     */
    "no-new-func": "error",

    /**
     * Disallow new operators with the String, Number, and Boolean objects.
     *
     * https://eslint.org/docs/rules/no-new-wrappers
     *
     * @example
     * "error"
     */
    "no-new-wrappers": "error",

    /**
     * Disallow octal literals.
     *
     * https://eslint.org/docs/rules/no-octal
     *
     * @example
     * "error"
     */
    "no-octal": "error",

    /**
     * Disallow octal escape sequences in string literals.
     *
     * https://eslint.org/docs/rules/no-octal-escape
     *
     * @example
     * "error"
     */
    "no-octal-escape": "error",

    /**
     * Disallow reassigning function parameters.
     *
     * https://eslint.org/docs/rules/no-param-reassign
     *
     * @example
     * ["error", {
     *  props: true,
     *  ignorePropertyModificationsFor: [
     *    "acc",
     *    "accumulator",
     *    "e",
     *    "event",
     *    "req",
     *    "request",
     *    "res",
     *    "response",
     *    "staticContext",
     *  ],
     * }]
     */
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", // for reduce accumulators
        "accumulator", // for reduce accumulators
        "e", // for e.returnvalue
        "event", // for event.returnvalue
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "staticContext", // for ReactRouter context
      ],
    }],

    /**
     * Disallow the use of the __proto__ property.
     *
     * https://eslint.org/docs/rules/no-proto
     *
     * @example
     * "error"
     */
    "no-proto": "error",

    /**
     * Disallow variable redeclaration.
     *
     * https://eslint.org/docs/rules/no-redeclare
     *
     * @example
     * ["error", {
     *  builtinGlobals: true,
     * }]
     */
    "no-redeclare": ["error", {
      builtinGlobals: true,
    }],

    /**
     * Disallow certain properties on certain objects.
     *
     * https://eslint.org/docs/rules/no-restricted-properties
     *
     * @example
     * ["error", {
     *   object: "arguments",
     *   property: "callee",
     *   message: "arguemnts.callee is deprecated",
     * }, {
     *   object: "global",
     *   property: "isFinite",
     *   message: "Use Number.isFinite instead",
     * }, {
     *   object: 'self',
     *   property: 'isFinite',
     *   message: 'Please use Number.isFinite instead',
     * }, {
     *   object: 'window',
     *   property: 'isFinite',
     *   message: 'Please use Number.isFinite instead',
     * }, {
     *   object: 'global',
     *   property: 'isNaN',
     *   message: 'Please use Number.isNaN instead',
     * }, {
     *   object: 'self',
     *   property: 'isNaN',
     *   message: 'Please use Number.isNaN instead',
     * }, {
     *   object: 'window',
     *   property: 'isNaN',
     *   message: 'Please use Number.isNaN instead',
     * }, {
     *   property: '__defineGetter__',
     *   message: 'Please use Object.defineProperty instead.',
     * }, {
     *   property: '__defineSetter__',
     *   message: 'Please use Object.defineProperty instead.',
     * }, {
     *   object: 'Math',
     *   property: 'pow',
     *   message: 'Use the exponentiation operator (**) instead.',
     * }],
     */
    "no-restricted-properties": ["error", {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    /**
     * Disallow assignment operators in return statements.
     *
     * https://eslint.org/docs/rules/no-return-assign
     *
     * @example
     * ["error","always"]
     */
    "no-return-assign": ["error", "always"],

    /**
     * Disallow unnecessary return await.
     *
     * https://eslint.org/docs/rules/no-return-await
     *
     * @example
     * "error"
     */
    "no-return-await": "error",

    /**
     * Disallow javascript: urls.
     *
     * https://eslint.org/docs/rules/no-script-url
     *
     * @example
     * "error"
     */
    "no-script-url": "error",

    /**
     * Disallow assignments where both sides are exactly the same.
     *
     * https://eslint.org/docs/rules/no-self-assign
     *
     * @example
     * ["error", {
     *  props: true,
     * }]
     */
    "no-self-assign": ["error", {
      props: true,
    }],

    /**
     * Disallow comparisons where both sides are exactly the same.
     *
     * https://eslint.org/docs/rules/no-self-compare
     *
     * @example
     * "error"
     */
    "no-self-compare": "error",

    /**
     * Disallow comma operators.
     *
     * https://eslint.org/docs/rules/no-sequences
     *
     * @example
     * "error"
     */
    "no-sequences": "error",

    /**
     * Disallow throwing literals as exceptions.
     *
     * https://eslint.org/docs/rules/no-throw-literal
     *
     * @example
     * "error"
     */
    "no-throw-literal": "error",

    /**
     * Disallow unmodified loop conditions.
     *
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     *
     * @example
     * "error"
     */
    "no-unmodified-loop-condition": "error",

    /**
     * Disallow unused expressions.
     *
     * https://eslint.org/docs/rules/no-unused-expressions
     *
     * @example
     * ["error", {
     *  allowShortCircuit: false,
     *  allowTernary: false,
     *  allowTaggedTemplates: false,
     * }]
     */
    "no-unused-expressions": ["error", {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }],

    /**
     * Disallow unused labels.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-unused-labels
     *
     * @example
     * "error"
     */
    "no-unused-labels": "error",

    /**
     * Disallow unnecessary calls to .call() and .apply().
     *
     * NOTES:
     * - Sometimes, .call() and .apply() are used to invoke a function with a
     *   specific context/arguments. As a result, disable this rule.
     *
     * https://eslint.org/docs/rules/no-useless-call
     *
     * @example
     * "off"
     */
    "no-useless-call": "off",

    /**
     * Disallow unnecessary catch clauses,
     *
     * https://eslint.org/docs/rules/no-useless-catch
     *
     * @example
     * "error"
     */
    "no-useless-catch": "error",

    /**
     * Disallow unnecessary concatenation of literals or template literals.
     *
     * https://eslint.org/docs/rules/no-useless-concat
     *
     * @example
     * "error"
     */
    "no-useless-concat": "error",

    /**
     * Disallow unnecessary escape characters.
     *
     * https://eslint.org/docs/rules/no-useless-escape
     *
     * @example
     * "error"
     */
    "no-useless-escape": "error",

    /**
     * Disallow redundant return statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-useless-return
     *
     * @example
     * "error"
     */
    "no-useless-return": "error",

    /**
     * Disallow void operators,
     *
     * https://eslint.org/docs/rules/no-void
     *
     * @example
     * "error"
     */
    "no-void": "error",

    /**
     * Disallow specified warning terms in comments.
     *
     * NOTES:
     * - We use warning comments to keep our place when we're developing
     *   something. So, disable this rule.
     *
     * https://eslint.org/docs/rules/no-warning-comments
     *
     * @example
     * ["off", {
     *  terms: ["todo", "fix"],
     *  location: "start",
     * }]
     */
    "no-warning-comments": ["off", {
      terms: ["todo", "fix",],
      location: "start",
    }],

    /**
     * Disallow with statements.
     *
     * https://eslint.org/docs/rules/no-with
     *
     * @example
     * "error"
     */
    "no-with": "error",

    /**
     * Enforce using named capture group in regular expression.
     *
     * NOTES:
     * - This is only available in newer ecmascript version.
     *
     * https://eslint.org/docs/rules/prefer-named-capture-group
     *
     * @example
     * "off"
     */
    "prefer-named-capture-group": "off",

    /**
     * Require using Error objects as Promise rejection reasons.
     *
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     *
     * @example
     * "error"
     */
    "prefer-promise-reject-errors": "error",

    /**
     * Enforce the consistent use of the radix argument when using parseInt().
     *
     * https://eslint.org/docs/rules/radix
     *
     * @example
     * ["error", "as-needed"]
     */
    "radix": ["error", "as-needed"],

    /**
     * Disallow async functions which have no await expression.
     *
     * NOTES:
     * - Disabled this according to AirBNB eslint.
     *
     * https://eslint.org/docs/rules/require-await
     *
     * @example
     * "off"
     */
    "require-await": "off",

    /**
     * Enforce the use of u flag on RegExp.
     *
     * https://eslint.org/docs/rules/require-unicode-regexp
     *
     * @example
     * "off"
     */
    "require-unicode-regexp": "off",

    /**
     * Require var declarations be placed at the top of their containing scope.
     *
     * https://eslint.org/docs/rules/vars-on-top
     *
     * @example
     * "error"
     */
    "vars-on-top": "error",

    /**
     * Require parentheses around immediate function invocations.
     *
     * https://eslint.org/docs/rules/wrap-iife
     *
     * @example
     * ["error", "outside", {
     *  functionPrototypeMethods: false,
     * }]
     */
    "wrap-iife": ["error", "outside", {
      functionPrototypeMethods: false
    }],

    /**
     * Require or disallow “Yoda” conditions.
     *
     * https://eslint.org/docs/rules/yoda
     *
     * @example
     * ["error", "never", {
     *  exceptRange: true,
     *  onlyEquality: false,
     * }]
     */
    "yoda": ["error", "never", {
      exceptRange: true,
      onlyEquality: false,
    }],
  }
}
