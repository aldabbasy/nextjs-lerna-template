module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
    'next/core-web-vitals'
  ],
  globals: {
    React: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'none',
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80,
        endOfLine: 'auto'
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/no-danger': 0,
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'always',
        children: 'ignore'
      }
    ],
    'react/destructuring-assignment': 0,
    'react/function-component-definition': 0,
    'unused-imports/no-unused-imports-ts': 'off',
    'unused-imports/no-unused-vars-ts': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'no-bitwise': 0,
    'no-shadow': 0,
    'no-var': 'error',
    'no-console': 'warn',
    'no-useless-escape': 0,
    'no-underscore-dangle': 0,
    'no-multiple-empty-lines': 'error',
    'consistent-return': 0,
    'import/extensions': 0,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/order': 0,
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
      }
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false
      }
    ],
    'sort-vars': 'error',
    'sort-imports': 'off',
    'func-names': 0,
    'object-curly-newline': 0,
    'lines-between-class-members': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-undef': 'off'
  }
};
