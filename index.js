module.exports = {
  extends: [
    "./core",
    "./import",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
}
