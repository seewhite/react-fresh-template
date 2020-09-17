/*
 * @Description: eslint 配置文件
 * @Author: hasayake
 * @Date: 2020-08-11 10:24:06
 * @LastEditTime: 2020-09-16 10:56:59
 * @LastEditors: Please set LastEditors
 */


module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "ignorePatterns": ["build", "dist", "src/public"],
  "rules": {
    "semi": ["error", "never"],
    "no-multiple-empty-lines": "error",
    "comma-dangle": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-const": ["error", {"destructuring": "all", "ignoreReadBeforeAssign": true}],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "react/jsx-uses-react": "error",
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-curly-spacing": [2, {"when": "never", "children": true}],
    "react/jsx-wrap-multilines": [2, {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "ignore"
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "globals": {
    "API_PREFIX": "readonly"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
