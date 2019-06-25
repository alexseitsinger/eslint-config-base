module.exports = {
  extends: [
    "./lib/best-practices",
    "./lib/errors",
    "./lib/es6",
    "./lib/node",
    "./lib/strict-mode",
    "./lib/stylistic",
    "./lib/variables",
  ].map(require.resolve)
}
