module.exports = {
  plugins: [
    "import",
  ],
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
    ],
    "import/ignore": [
      "node_modules",
      "\\.(scss|css|less|svg|json)$",
    ],
    "import/core-modules": [],
    "import/external-module-folders": [
      "node_modules",
    ],
    "import/parsers": {},
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
      // Need to add the resolver on the site config.
    },
    "import/cache": {},
  },
  extends: [
    "./rules/helpful-warnings",
    "./rules/module-systems",
    "./rules/static-analysis",
    "./rules/style-guide",
  ].map(require.resolve)
}
