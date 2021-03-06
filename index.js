module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
    'no-unused-vars': "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    'import/prefer-default-export': 'off',
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
      }
    ]
  },
  "overrides": [
    {
      files: ['**/*'],
      excludedFiles: ['**/*.d.ts'],
      rules: {
        'import/no-default-export': 'error',
      },
    },
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ]
}
