// FIX: not sure why I can't use modules here
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@vue/typescript/recommended",
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
    "plugin:vuejs-accessibility/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off" /* fixes issue with defineEmits in .vue */,
    "prettier/prettier": "error",
    "vue/no-multiple-template-root": "off" /* not needed for vue 3 */,
    "vuejs-accessibility/label-has-for": [
      "error",
      {
        required: {
          every: ["id"],
        },
      },
    ],
  },
};
