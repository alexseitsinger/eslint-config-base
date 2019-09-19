module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es6",
    "./rules/nodejs-commonjs",
    "./rules/strict-mode",
    "./rules/stylistic",
    "./rules/variables",
  ].map(require.resolve),
}
