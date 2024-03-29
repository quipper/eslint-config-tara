module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["unicorn"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": "error",
    "no-unused-vars": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-void": "off",
    "unicorn/prefer-node-protocol": "error",
  },
  overrides: [
    {
      files: ["**/*"],
      excludedFiles: ["**/*.d.ts"],
      rules: {
        "import/no-default-export": "error",
      },
    },
  ],
};
