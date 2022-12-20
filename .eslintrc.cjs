module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/react-in-jsx-scope": 'off',
    "require-await": "error",

    "@typescript-eslint/no-unused-vars": ["off"],
    "import/no-unresolved": ["off"],
    "indent": ["error", 2],
    "import/named": ["off"],
    "react/display-name": ["off"],
    "react-hooks/exhaustive-deps": ["off"]
  }
}
