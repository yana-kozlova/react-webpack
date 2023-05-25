const rules =
    {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'root/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-confusing-arrow': 0,
      'no-console': 'off',
      'no-unused-vars': 'off',
      'no-debugger': 'off',
      'consistent-return': 'off',
      'no-useless-rename': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/function-component-definition': 'off',
      'react/prop-types': 'off',
      'react/no-array-index-key': 'off',
      'react/require-default-props': 'off',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'sort-keys': ['off', 'asc', { natural: true }],
      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'sort-vars': 'warn',
    };

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'import'],
  rules,
  settings: {
    react: {
      version: '18.2.0',
    },
    'import/parsers': {
      '@babel/eslint-parser': ['.js', '.jsx'], // Add support for JavaScript and JSX
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'], // Add support for JavaScript and JSX
      },
    },
  },
};