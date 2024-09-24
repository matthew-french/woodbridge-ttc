import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import mantine from 'eslint-config-mantine'
import prettier from 'eslint-config-prettier'

export default {
  parser: tsParser,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'mantine',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Add any custom rules here
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error'
  },
  ignorePatterns: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts']
}
