import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier/flat';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      prettier,
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'comma-dangle': ['error', 'only-multiline'],
      'react/prop-types': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-var-reqiures': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      ...prettierConfig.rules,
    },
  },
];
