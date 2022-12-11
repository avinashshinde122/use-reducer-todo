module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ["@babel/proposal-object-rest-spread", { useBuiltIns: true, loose: true }],
  ],
};
