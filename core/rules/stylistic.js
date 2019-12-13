module.exports = {
  rules: {
    /**
     * Enforce linebreaks after opening and before closing array brackets.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-bracket-newline
     *
     * @example
     * ["error", "consistent"]
     */
    "array-bracket-newline": ["error", "consistent"],

    /**
     * Enforce consistent spacing inside array brackets.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-bracket-spacing
     *
     * @example
     * ["error", "never", {
     *  singleValue: false,
     *  objectsInArrays: false,
     *  arraysInArrays: false,
     * }]
     */
    "array-bracket-spacing": ["error", "never", {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],

    /**
     * Enforce line breaks after each array element.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-element-newline
     *
     * @example
     * ["error", "consistent"]
     */
    "array-element-newline": ["error", "consistent"],

    /**
     * Disallow or enforce spaces inside of blocks after opening block and
     * before closing block.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/block-spacing
     *
     * @example
     * ["error", "always"]
     */
    "block-spacing": ["error", "always"],

    /**
     * Enforce consistent brace style for blocks.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/brace-style
     *
     * @example
     * ["error", "stroustrup", {
     *  allowSingleLine: false
     * }]
     */
    "brace-style": ["error", "stroustrup", {
      allowSingleLine: false
    }],

    /**
     * Enforce camelcase naming convention.
     *
     * NOTES:
     * - We sometimes use underscored variables from our REST API, so enable
     *   ignoreDestructuring.
     * - We sometimes get variables that are underscored from our REST API. So,
     *   disable this rule completely.
     *
     * https://eslint.org/docs/rules/camelcase
     *
     * @example
     * ["off", {
     *  properties: "never",
     *  ignoreDestructuring: true,
     *  allow: [],
     * }]
     */
    "camelcase": ["off", {
      properties: "never",
      ignoreDestructuring: true,
      allow: [],
    }],

    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/capitalized-comments
     *
     * @example
     * ["off", "always", {
     *  ignorePattern: "",
     *  ignoreInlineComments: false,
     *  ignoreConsecutiveComments: false,
     * }]
     */
    "capitalized-comments": ["off", "always", {
      ignorePattern: "",
      ignoreInlineComments: false,
      ignoreConsecutiveComments: false,
    }],

    /**
     * Require or disallow trailing commas.
     *
     * (fixable)
     *
     * NOTES:
     * - With function calls, we must pass a composed component tree as an
     *   argument. When we do this, we dont wnat to have to also pass a comma
     *   after the closing tag. So, ignore this rule for functions.
     *
     * https://eslint.org/docs/rules/comma-dangle
     *
     * @example
     * ["error", {
     *  arrays: "always-multiline",
     *  objects: "always-multiline",
     *  imports: "always-multiline",
     *  exports: "always-multiline",
     *  functions: "ignore",
     * }]
     */
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "ignore",
    }],

    /**
     * Enforce consistent spacing before and after commas.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/comma-spacing
     *
     * @example
     * ["error", {
     *  before: false,
     *  after: true,
     * }]
     */
    "comma-spacing": ["error", {
      before: false,
      after: true,
    }],

    /**
     * Enforce consistent comma style.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/comma-style
     *
     * @example
     * ["error", "last", {
     *   exceptions: {
     *     ArrayExpression: false,
     *     ArrayPattern: false,
     *     ArrowFunctionExpression: false,
     *     CallExpression: false,
     *     FunctionDeclaration: false,
     *     FunctionExpression: false,
     *     ImportDeclaration: false,
     *     ObjectExpression: false,
     *     ObjectPattern: false,
     *     VariableDeclaration: false,
     *     NewExpression: false,
     *   }
     * }]
     */
    "comma-style": ["error", "last", {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    /**
     * Enforce consistent spacing inside computed property brackets.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/computed-property-spacing
     *
     * @example
     * ["error", "never"]
     */
    "computed-property-spacing": ["error", "never"],

    /**
     * Enforce consistent naming when capturing the current execution context.
     *
     * https://eslint.org/docs/rules/consistent-this
     *
     * @example
     * ["error", "that", "self"]
     */
    "consistent-this": ["error", "that", "self"],

    /**
     * Require or disallow newline at the end of files.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/eol-last
     *
     * @example
     * ["error", "always"]
     */
    "eol-last": ["error", "always"],

    /**
     * Require or disallow spacing between function identifiers and their
     * invocations.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/func-call-spacing
     *
     * @example
     * ["error", "never"]
     */
    "func-call-spacing": ["error", "never"],

    /**
     * Require function names to match the name of the variable or property to
     * which they are assigned.
     *
     * https://eslint.org/docs/rules/func-name-matching
     *
     * @example
     * ["error", "always", {
     *  considerPropertyDescriptor: true,
     *  includeCommonJSModuleExports: false,
     * }]
     */
    "func-name-matching": ["error", "always", {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false,
    }],

    /**
     * Require or disallow named function expressions.
     *
     * https://eslint.org/docs/rules/func-names
     *
     * @example
     * ["error", "always", {
     *  generators: "always",
     * }]
     */
    "func-names": ["error", "always", {
      generators: "always",
    }],

    /**
     * Enforce the consistent use of either function declarations or
     * expressions.
     *
     * https://eslint.org/docs/rules/func-style
     *
     * @example
     * ["error", "declarations", {
     *  allowArrowFunctions: true,
     * }]
     */
    "func-style": ["error", "declaration", {
      allowArrowFunctions: true,
    }],

    /**
     * Enforce consistent line breaks inside function parentheses.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/function-paren-newline
     *
     * @example
     * ["error", "consistent"]
     */
    "function-paren-newline": ["error", "consistent"],

    /**
     * Disallow specified identifiers.
     *
     * https://eslint.org/docs/rules/id-blacklist
     *
     * @example
     * ["error"]
     */
    "id-blacklist": ["error"], // add strings in here..

    /**
     * Enforce minimum and maximum identifier lengths.
     *
     * https://eslint.org/docs/rules/id-length
     *
     * @example
     * ["error", {
     *  min: 1,
     *  max: 78,
     *  properties: "always",
     *  exceptions: [],
     * }]
     */
    "id-length": ["error", {
      min: 1,
      max: 78,
      properties: "always",
      exceptions: [],
    }],

    /**
     * Require identifiers to match a specified regular expression.
     *
     * https://eslint.org/docs/rules/id-match
     *
     * @example
     * ["error", "^.+", {
     *  properties: true,
     *  onlyDeclarations: false,
     *  ignoreDestructuring: false,
     * }]
     */
    "id-match": ["error", "^.+", {
      properties: true,
      onlyDeclarations: false,
      ignoreDestructuring: false // might want it true
    }],

    /**
     * Enforce the location of arrow function bodies.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     *
     * @example
     * ["error", "beside"]
     */
    "implicit-arrow-linebreak": ["error", "beside"],

    /**
     * Enforce consistent indentation.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/indent
     *
     * @example
     * ["error", 2, {
     *  SwitchCase: 1,
     *  VariableDeclarator: "first",
     *  outerIIFEBody: 1,
     *  MemberExpression: 1,
     *  FunctionDeclaration: {
     *    parameters: "first",
     *    body: 1,
     *  },
     *  FunctionExpression: {
     *    parameters: "first",
     *    body: 1,
     *  },
     *  CallExpression: {
     *    arguments: "first",
     *  },
     *  ArrayExpression: 1,
     *  ObjectExpression: 1,
     *  ImportDeclaration: 1,
     *  flatTernaryExpressions: true,
     *  ignoredNodes: [],
     *  ignoreComments: false,
     * }]
     */
    "indent": ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: "first",
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: "first",
        body: 1,
      },
      FunctionExpression: {
        parameters: "first",
        body: 1,
      },
      CallExpression: {
        arguments: "first",
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      ignoredNodes: [],
      ignoreComments: false,
    }],

    /**
     * Enforce the consistent use of either double or single quotes in JSX
     * attributes.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/jsx-quotes
     *
     * @example
     * ["error", "prefer-double"]
     */
    "jsx-quotes": ["error", "prefer-double"],

    /**
     * Enforce consistent spacing between keys and values in object literal
     * properties.
     *
     * https://eslint.org/docs/rules/key-spacing
     *
     * @example
     * ["error", {
     *  beforeColon: false,
     *  afterColon: true,
     * }]
     */
    "key-spacing": ["error", {
      beforeColon: false,
      afterColon: true
    }],

    /**
     * Enforce consistent spacing before and after keywords.
     *
     * https://eslint.org/docs/rules/keyword-spacing
     *
     * @example
     * ["error", {
     *  before: true,
     *  after: true,
     *  overrides: {},
     * }]
     */
    "keyword-spacing": ["error", {
      before: true,
      after: true,
      overrides: {}
    }],

    /**
     * Enforce position of line comments.
     *
     * https://eslint.org/docs/rules/line-comment-position
     *
     * @example
     * ["error", "above"]
     */
    "line-comment-position": ["error", "above"],

    /**
     * Enforce consistent linebreak style.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/linebreak-style
     *
     * @example
     * ["error", "unix"]
     */
    "linebreak-style": ["error", "unix"],

    /**
     * Require empty lines around comments.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/lines-around-comment
     *
     * @example
     * ["error", {
     *  beforeBlockComment: false,
     *  afterBlockComment: false,
     *  beforeLineComment: false,
     *  afterLineComment: false,
     *  allowBlockStart: false,
     *  allowBlockEnd: false,
     *  allowObjectStart: false,
     *  allowObjectEnd: false,
     *  allowArrayStart: false,
     *  allowArrayEnd: false,
     *  allowClassStart: false,
     *  allowClassEnd: false,
     *  applyDefaultIgnorePatterns: false,
     *  ignorePattern: "",
     * }]
     */
    "lines-around-comment": ["error", {
      beforeBlockComment: false,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: false,
      allowBlockEnd: false,
      allowObjectStart: false,
      allowObjectEnd: false,
      allowArrayStart: false,
      allowArrayEnd: false,
      allowClassStart: false,
      allowClassEnd: false,
      applyDefaultIgnorePatterns: false,
      ignorePattern: "",
    }],

    /**
     * Require or disallow an empty line between class members.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/lines-between-class-members
     *
     * @example
     * ["error", "always", {
     *  exceptAfterSingleLine: false,
     * }]
     */
    "lines-between-class-members": ["error", "always", {
      exceptAfterSingleLine: false,
    }],

    /**
     * Enforce a maximum depth that blocks can be nested.
     *
     * https://eslint.org/docs/rules/max-depth
     *
     * @example
     * ["error", {
     *  max: 6,
     * }]
     */
    "max-depth": ["error", {
      max: 6,
    }],

    /**
     * Enforce a maximum line length.
     *
     * https://eslint.org/docs/rules/max-len
     *
     * @example
     * ["off", {
     *  code: 80,
     *  tabWidth: 2,
     *  comments: 80,
     *  ignorePattern: "",
     *  ignoreTrailingComments: false,
     *  ignoreUrls: true,
     *  ignoreStrings: true,
     *  ignoreTemplateLiterals: true,
     *  ignoreRegExpLiterals: true,
     * }]
     */
    "max-len": ["off", {
      code: 80,
      tabWidth: 2,
      comments: 80,
      ignorePattern: "",
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    /**
     * Enforce a maximum number of lines per file.
     *
     * NOTES:
     * - Have have packages that use modules longer than 300, so just disable
     *   this rule completely.
     *
     * https://eslint.org/docs/rules/max-lines
     *
     * @example
     * ["off", {
     *  max: 300,
     *  skipBlankLines: true,
     *  skipComments: true,
     * }]
     */
    "max-lines": ["off", {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    /**
     * Enforce a maximum number of line of code in a function.
     *
     * https://eslint.org/docs/rules/max-lines-per-function
     *
     * @example
     * ["off", {
     *  max: 150,
     *  skipBlankLines: true,
     *  skipComments: true,
     *  IIFEs: true,
     * }]
     */
    "max-lines-per-function": ["off", {
      max: 150,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    /**
     * Enforce a maximum depth that callbacks can be nested,
     *
     * https://eslint.org/docs/rules/max-nested-callbacks
     *
     * @example
     * ["error", {
     *  max: 6,
     * }]
     */
    "max-nested-callbacks": ["error", {
      max: 6,
    }],

    /**
     * Enforce a maximum number of parameters in function definitions.
     *
     * https://eslint.org/docs/rules/max-params
     *
     * @example
     * ["error", {
     *  max: 5,
     * }]
     */
    "max-params": ["error", {
      max: 5,
    }],

    /**
     * Enforce a maximum number of statements allowed in function blocks.
     *
     * NOTES:
     * - We sometimes need long functions, without reason, so disable this rule.
     *
     * https://eslint.org/docs/rules/max-statements
     *
     * @example
     * ["off", {
     *  max: 17,
     * }]
     */
    "max-statements": ["off", {
      max: 17,
    }],

    /**
     * Enforce a maximum number of statements allowed per line.
     *
     * https://eslint.org/docs/rules/max-statements-per-line
     *
     * @example
     * ["error", {
     *  max: 1,
     * }]
     */
    "max-statements-per-line": ["error", {
      max: 1,
    }],

    /**
     * Enforce a particular style for multiline comments.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/multiline-comment-style
     *
     * @example
     * ["error", "separate-lines"]
     */
    "multiline-comment-style": ["error", "separate-lines"],

    /**
     * Enforce newlines between operands of ternary expressions.
     *
     * https://eslint.org/docs/rules/multiline-ternary
     *
     * @example
     * ["error", "always-multiline"]
     */
    "multiline-ternary": ["error", "always-multiline"],

    /**
     * Require constructor names to begin with a capital letter.
     *
     * https://eslint.org/docs/rules/new-cap
     *
     * @example
     * ["error", {
     *   newIsCap: true,
     *   newIsCapExceptions: [],
     *   newIsCapExceptionPattern: "",
     *   capIsNew: true,
     *   capIsNewExceptions: [],
     *   capIsNewExceptionPattern: "",
     *   properties: true,
     * }]
     */
    "new-cap": ["error", {
      newIsCap: true,
      newIsCapExceptions: [],
      newIsCapExceptionPattern: "",
      capIsNew: true,
      capIsNewExceptions: [],
      capIsNewExceptionPattern: "",
      properties: true,
    }],

    /**
     * Enforce or disallow parentheses when invoking a constructor with no
     * arguments.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/new-parens
     *
     * @example
     * "error"
     */
    "new-parens": "error",

    /**
     * Require a newline after each call in a method chain.
     *
     * https://eslint.org/docs/rules/newline-per-chained-call
     *
     * @example
     * ["error", {
     *  ignoreChainWithDepth: 4,
     * }]
     */
    "newline-per-chained-call": ["error", {
      ignoreChainWithDepth: 4,
    }],

    /**
     * Disallow Array constructors.
     *
     * https://eslint.org/docs/rules/no-array-constructor
     *
     * @example
     * "error"
     */
    "no-array-constructor": "error",

    /**
     * Disallow bitwise operators.
     *
     * https://eslint.org/docs/rules/no-bitwise
     *
     * @example
     * ["error", {
     *  allow: [],
     *  int32Hint: false,
     * }]
     */
    "no-bitwise": ["error", {
      allow: [],
      int32Hint: false,
    }],

    /**
     * Disallow continue statements.
     *
     * https://eslint.org/docs/rules/no-continue
     *
     * @example
     * "error"
     */
    "no-continue": "error",

    /**
     * Disallow inline comments after code.
     *
     * https://eslint.org/docs/rules/no-inline-comments
     *
     * @example
     * "off"
     */
    "no-inline-comments": "off",

    /**
     * Disallow if statements as the only statement in else blocks.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-lonely-if
     *
     * @example
     * "error"
     */
    "no-lonely-if": "error",

    /**
     * Disallow mixed binary operators.
     *
     * NOTES:
     * - Added options according to AirBNB's config.
     *
     * https://eslint.org/docs/rules/no-mixed-operators
     *
     * @example
     * ["error", {
     *  groups: [
     *    ["%", "**"],
     *    ["%", "+"],
     *    ["%", "-"],
     *    ["%", "*"],
     *    ["%", "/"],
     *    ["**", "+"],
     *    ["**", "-"],
     *    ["**", "/"],
     *    ["&", "|", "^", "~", "<<", ">>", ">>>"],
     *    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
     *    ["&&", "||"],
     *    ["in", "instanceof"],
     *  ],
     *  allowSamePrecedence: false,
     * }]
     */
    "no-mixed-operators": ["error", {
      // Arithmetic groups disallowed from mixing with other groups.
      groups: [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["**", "+"],
        ["**", "-"],
        ["**", "/"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"],
      ],
      allowSamePrecedence: false,
    }],

    /**
     * Disallow mixed spaces and tabs for indentation.
     *
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     *
     * @example
     * "error"
     */
    "no-mixed-spaces-and-tabs": "error",

    /**
     * Disallow use of chained assignment expressions.
     *
     * https://eslint.org/docs/rules/no-multi-assign
     *
     * @example
     * "error"
     */
    "no-multi-assign": "error",

    /**
     * Disallow multiple empty lines.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     *
     * @example
     * ["error", {
     *  max: 2,
     *  maxEOF: 1,
     *  maxBOF: 0,
     * }]
     */
    "no-multiple-empty-lines": ["error", {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    }],

    /**
     * Disallow negated conditions.
     *
     * NOTES:
     * - We sometimes use negated conditions, so we may want to disable this
     *   rule in the future.
     *
     * https://eslint.org/docs/rules/no-negated-condition
     *
     * @example
     * "off"
     */
    "no-negated-condition": "off",

    /**
     * Disallow nested ternary expressions.
     *
     * https://eslint.org/docs/rules/no-nested-ternary
     *
     * @example
     * "error"
     */
    "no-nested-ternary": "error",

    /**
     * Disallow Object constructors.
     *
     * https://eslint.org/docs/rules/no-new-object
     *
     * @example
     * "error"
     */
    "no-new-object": "error",

    /**
     * Disallow the unary operators ++ and --.
     *
     * https://eslint.org/docs/rules/no-plusplus
     *
     * @example
     * ["error", {
     *  allowForLoopAfterthoughts: true,
     * }]
     */
    "no-plusplus": ["error", {
      allowForLoopAfterthoughts: true,
    }],

    /**
     * Disallow specified syntax.
     *
     * NOTES:
     * - Extended this setting using the AirBNB eslint.
     *
     * https://eslint.org/docs/rules/no-restricted-syntax
     *
     * @example
     * ["error", {
     *  selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]"
     *  message: "setTimeout must always be invoked with two arguments.",
     * }, {
     *  selector: "WithStatement",
     *  message: "With statements are not allowed.",
     * }, {
     *  selector: "ForInStatement",
     *  message: "For-In loops iterate over the entire prototype chain. Use Object.{keys,values,entries} instead."
     * }, {
     *  selector: "ForOfStatement",
     *  message: "iterators/generators require regenerator-runtime, which is too heavyweight. Seperately, loops should be avoided in favor of array iterations."
     * }, {
     *  selector: "LabeledStatement",
     *  message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.
     * }]
     */
    "no-restricted-syntax": ["error", {
      selector: "CallExpresion[callee.name='setTimeout'][arguments.length!=2]",
      message: "setTimeout must always be invoked with two arguments."
    }, {
      selector: "WithStatement",
      message: "With statements are not allowed.",
    }, {
      selector: 'ForInStatement',
      message: 'for-in loops iterate over the entire prototype chain. Use Object.{keys,values,entries} instead.',
    }, {
      selector: 'ForOfStatement',
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight. Separately, loops should be avoided in favor of array iterations.',
    }, {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    }],

    /**
     * Looks for tabs anywhere inside a file: code, comments or anything else.
     *
     * https://eslint.org/docs/rules/no-tabs
     *
     * @example
     * ["error", {
     *  allowIndentationTabs: false,
     * }]
     */
    "no-tabs": ["error", {
      allowIndentationTabs: false,
    }],

    /**
     * Disallow ternary operators.
     *
     * https://eslint.org/docs/rules/no-ternary
     *
     * @example
     * "off"
     */
    "no-ternary": "off",

    /**
     * Disallow trailing whitespace at the end of lines.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-trailing-spaces
     *
     * @example
     * ["error", {
     *  skipBlankLines: false,
     *  ignoreComments: false,
     * }]
     */
    "no-trailing-spaces": ["error", {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    /**
     * Disallow dangling underscores in identifiers.
     *
     * https://eslint.org/docs/rules/no-underscore-dangle
     *
     * @example
     * ["off", {
     *  allow: [
     *    "__STATE__",
     *    "__INITIAL_STATE__",
     *  ],
     *  allowAfterThis: false,
     *  allowAfterSuper: false,
     *  enfoceInMethodNames: true,
     * }]
     */
    "no-underscore-dangle": ["off", {
      allow: [
        "__STATE__",
        "__INITIAL_STATE__",
      ],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    /**
     * Disallow ternary operators when simpler alternatives exist.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-unneeded-ternary
     *
     * @example
     * ["error", {
     *  defaultAssignment: false,
     * }]
     */
    "no-unneeded-ternary": ["error", {
      defaultAssignment: false,
    }],

    /**
     * Disallow whitespace before properties.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-whitespace-before-property
     *
     * @example
     * "error"
     */
    "no-whitespace-before-property": "error",

    /**
     * Enforce the location of single-line statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/nonblock-statement-body-position
     *
     * @example
     * ["error", "below", {
     *  overrides: {},
     * }]
     */
    "nonblock-statement-body-position": ["error", "below", {
      overrides: {},
    }],

    /**
     * Enforce consistent line breaks inside braces.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-curly-newline
     *
     * @example
     * ["error", {
     *  ObjectExpression: {
     *    multiline: true,
     *    consistent: true,
     *  },
     *  ObjectPattern: {
     *    multiline: true,
     *    consistent: true,
     *  },
     *  ImportDeclaration: {
     *    multiline: true,
     *    consistent: true,
     *  },
     *  ExportDeclaration: {
     *    multiline: true,
     *    consistent: true,
     *  },
     * }]
     */
    "object-curly-newline": ["error", {
      ObjectExpression: {
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        consistent: true,
      },
    }],

    /**
     * Enforce consistent spacing inside braces.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-curly-spacing
     *
     * @example
     * ["error", "always", {
     *  arraysInObjects: true,
     *  objectsInObjects: true,
     * }]
     */
    "object-curly-spacing": ["error", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    /**
     * Enforce placing object properties on separate lines.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-property-newline
     *
     * @example
     * ["error", {
     *  allowAllPropertiesOnSameLine: true,
     * }]
     */
    "object-property-newline": ["error", {
      allowAllPropertiesOnSameLine: true,
    }],

    /**
     * Enforce variables to be declared either together or separately in
     * functions.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/one-var
     *
     * @example
     * ["error", "never"]
     */
    "one-var": ["error", "never"],

    /**
     * Require or disallow newlines around variable declarations.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/one-var-declaration-per-line
     *
     * @example
     * ["error", "always"]
     */
    "one-var-declaration-per-line": ["error", "always"],

    /**
     * Require or disallow assignment operator shorthand where possible.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/operator-assignment
     *
     * @example
     * ["error", "always"]
     */
    "operator-assignment": ["error", "always"],

    /**
     * Enforce consistent linebreak style for operators.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/operator-linebreak
     *
     * @example
     * ["error", "before"]
     */
    "operator-linebreak": ["error", "before"],

    /**
     * Require or disallow padding within blocks.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/padded-blocks
     *
     * @example
     * ["error", "never", {
     *  allowSingleLineBlocks: false,
     * }]
     */
    "padded-blocks": ["error", "never", {
      allowSingleLineBlocks: false,
    }],

    /**
     * Requires or disallows blank lines between the given 2 kinds of
     * statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/padding-line-between-statements
     *
     * @example
     * ["error", {
     *  blankLine: "always",
     *  prev: "var",
     *  next: "return",
     * }]
     */
    "padding-line-between-statements": ["error", {
      blankLine: "always",
      prev: "var",
      next:"return"
    }],

    /**
     * Disallow using Object.assign with an object literal as the first argument
     * and prefer the use of object spread instead.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/prefer-object-spread
     *
     * @example
     * "error"
     */
    "prefer-object-spread": "error",

    /**
     * Require quotes around object literal property names.
     *
     * https://eslint.org/docs/rules/quote-props
     *
     * @example
     * ["error", "consistent", {
     *  keywords: false,
     *  unnecessary: true,
     *  numbers: false,
     * }]
     */
    "quote-props": ["error", "consistent", {
      keywords: false,
      unnecessary: true,
      numbers: false,
    }],

    /**
     * Enforces the consistent use of either backticks, double, or single
     * quotes.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/quotes
     *
     * @example
     * ["error", "double", {
     *  avoidEscape: true,
     *  allowTemplateLiterals: true,
     * }]
     */
    quotes: ["error", "double", {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    /**
     * Require or disallow semicolons instead of ASI.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/semi
     *
     * @example
     * ["error", "never", {
     *  beforeStatementContinuationchars: "never",
     * }]
     */
    semi: ["error", "never", {
      beforeStatementContinuationChars: "never",
    }],

    /**
     * Enforce spacing around a semicolon.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/semi-spacing
     *
     * @example
     * ["error", {
     *  before: false,
     *  after: true,
     * }]
     */
    "semi-spacing": ["error", {
      before: false,
      after: true,
    }],

    /**
     * Enforce location of semicolons.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/semi-style
     *
     * @example
     * ["error", "last"]
     */
    "semi-style": ["error", "last"],

    /**
     * Require object keys to be sorted.
     *
     * https://eslint.org/docs/rules/sort-keys
     *
     * @example
     * ["off", "asc", {
     *  caseSensitive: false,
     *  natural: false,
     * }]
     */
    "sort-keys": ["off", "asc", {
      caseSensitive: false,
      natural: false,
    }],

    /**
     * Require variables within the same declaration block to be sorted.
     * (fixable)
     *
     * https://eslint.org/docs/rules/sort-vars
     *
     * @example
     * ["off", {
     *  ignoreCase: true
     * }]
     */
    "sort-vars": ["off", {
      ignoreCase: true,
    }],

    /**
     * Enforce consistent spacing before blocks.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-before-blocks
     *
     * @example
     * ["error", {
     *  functions: "always",
     *  keywords: "always",
     *  classes: "always",
     * }]
     */
    "space-before-blocks": ["error", {
      functions: "always",
      keywords: "always",
      classes: "always",
    }],

    /**
     * Enforce consistent spacing before function definition opening
     * parenthesis.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-before-function-paren
     *
     * @example
     * ["error", "never"]
     */
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],

    /**
     * Enforce consistent spacing inside parentheses.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-in-parens
     *
     * @example
     * ["error", "never"]
     */
    "space-in-parens": ["error", "never"],

    /**
     * Require spacing around infix operators.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-infix-ops
     *
     * @example
     * ["error", {
     *  int32Hint: false,
     * }]
     */
    "space-infix-ops": ["error", {
      int32Hint: false,
    }],

    /**
     * Enforce consistent spacing before or after unary operators.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-unary-ops
     *
     * @example
     * ["error", {
     *  words: true,
     *  nonwords: false,
     *  overrides: {},
     * }]
     */
    "space-unary-ops": ["error", {
      words: true,
      nonwords: false,
      overrides: {
        //...
      }
    }],

    /**
     * Enforce consistent spacing after the // or /* in a comment.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/spaced-comment
     *
     * @example
     * ["off", "always", {
     *  exceptions: [],
     *  markers: [],
     * }]
     */
    "spaced-comment": ["off", "always", {
      exceptions: [],
      markers: [],
    }],

    /**
     * Enforce spacing around colons of switch statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/switch-colon-spacing
     *
     * @example
     * ["error", {
     *  after: true,
     *  before: false,
     * }]
     */
    "switch-colon-spacing": ["error", {
      after: true,
      before: false,
    }],

    /**
     * Require or disallow spacing between template tags and their literals.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/template-tag-spacing
     *
     * @example
     * ["error", "never"]
     */
    "template-tag-spacing": ["error", "never"],

    /**
     * Require or disallow Unicode byte order mark (BOM).
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/unicode-bom
     *
     * @example
     * ["error", "never"]
     */
    "unicode-bom": ["error", "never"],

    /**
     * Require parenthesis around regex literals.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/wrap-regex
     *
     * @example
     * "off"
     */
    "wrap-regex": "off",
  }
}
