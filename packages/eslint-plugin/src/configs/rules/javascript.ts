import type { Linter } from 'eslint';

/**
 * Rules overrides for javascript/typescript
 * These plugins must be imported in the plugins section:
 * @example
 * ```ts
 * import tseslint from 'typescript-eslint';
 * import unicorn from 'eslint-plugin-unicorn';
 * import jsdoc from 'eslint-plugin-jsdoc';
 * import prettierPlugin from 'eslint-plugin-prettier';
 * ```
 * @example
 * ```json
 * {
 *   plugins: {
 *     jsdoc,
 *     prettier: prettierPlugin,
 *   },
 *   extends: [
 *     js.configs.recommended,
 *     tseslint.configs.recommended,
 *     unicorn.configs.recommended,
 *   ],
 * }
 * ```
 */
export const rulesJavascript: Linter.RulesRecord = {
  // TS: allow unused prefixed with "_"
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],

  // --- Unicorn ---
  'unicorn/filename-case': ['error', { case: 'kebabCase' }],
  'unicorn/prefer-module': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-string-replace-all': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/throw-new-error': 'error',
  'unicorn/no-null': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/explicit-length-check': 'warn',

  // --- JSDoc ---
  'jsdoc/require-jsdoc': [
    'warn',
    {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    },
  ],
  'jsdoc/require-description': 'warn',

  // --- Prettier ---
  'prettier/prettier': 'error',
};
