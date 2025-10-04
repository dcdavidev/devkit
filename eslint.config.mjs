import { defineConfig, globalIgnores } from 'eslint/config';
import importPlg from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import nodeDependencies from 'eslint-plugin-node-dependencies';
import packageJson from 'eslint-plugin-package-json';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import vuoto from 'eslint-plugin-vuoto';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';
import cspell from '@cspell/eslint-plugin/configs';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

/**
 * Js/Ts imports/exports rules
 * @typedef {import("eslint").Linter.RulesRecord}
 */
const rulesImportsExports = {
  'sort-imports': 'off',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^dotenv', '^@dotenvx/dotenvx'],
        // Node.js built-ins
        [
          '^assert',
          '^buffer',
          '^child_process',
          '^cluster',
          '^console',
          '^constants',
          '^crypto',
          '^dgram',
          '^dns',
          '^domain',
          '^events',
          '^fs',
          '^http',
          '^https',
          '^inspector',
          '^module',
          '^net',
          '^os',
          '^path',
          '^perf_hooks',
          '^process',
          '^punycode',
          '^querystring',
          '^readline',
          '^repl',
          '^stream',
          '^string_decoder',
          '^timers',
          '^tls',
          '^tty',
          '^url',
          '^util',
          '^v8',
          '^vm',
          '^zlib',
          '^node:',
        ],
        [String.raw`^\u0000`], // side effects
        ['^[^@./]', String.raw`^@\w`], // third-party
        ['^react$', '^react-dom$', '^react'],
        ['^@mui', '^@material-ui', '^@tabler'],
        ['^(@dcdavidev)(/.*|$)', String.raw`^\.\.?/`], // internal + relative
        [
          String.raw`^.+\.s?css$`,
          String.raw`^.+\.(png|jpe?g|gif|webp|svg)$`,
          String.raw`^.+\.(mp3|wav|ogg)$`,
          String.raw`^.+\.(mp4|avi|mov)$`,
        ],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};

/**
 * @typedef {import("eslint").Linter.Config[]}
 */
export default defineConfig([
  // --- Ignores ---
  globalIgnores(['node_modules/', '**/node_modules/'], 'Ignore dependencies'),
  globalIgnores(['.nx/'], 'Ignore nx data'),
  globalIgnores(['dist/', '**/dist/', 'build/', '**/build/'], 'Ignore build'),
  globalIgnores(['tmp/', '**/tmp/', 'out-tsc/', '**/out-tsc/**'], 'Ignore tmp'),
  globalIgnores(['.github/instructions/', '.cursor/rules/'], 'Ignore AI rules'),
  globalIgnores(
    ['**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
    'Ignore timestamps'
  ),
  globalIgnores(['*.log', '**/*.log'], 'Ignore logs'),
  globalIgnores(
    [
      'package-lock.json',
      '**/package-lock.json',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml',
      'yarn.lock',
      '**/yarn.lock',
      'bun.lock',
      'bun.lockb',
      '**/bun.lock',
      '**/bun.lockb',
    ],
    'Ignore lock files'
  ),

  // --- Vuoto ---
  vuoto.configs.recommended,

  // --- cSpell ---
  cspell.recommended,

  // --- Core: JS + TS ---
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      'node-dependencies': nodeDependencies,
      jsdoc,
      prettier: prettierPlugin,
      import: importPlg,
      'simple-import-sort': simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      unicorn.configs.recommended,
      nodeDependencies.configs['flat/recommended'],
    ],
    rules: {
      ...rulesImportsExports,

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
    },
  },

  // --- JSON / JSONC / JSON5 ---
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    languageOptions: { parser: jsoncParser },
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
    languageOptions: { parser: jsoncParser },
  },
  {
    files: ['**/*.jsonc', '**/tsconfig*.json', '**/.vscode/**/*.json'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
    languageOptions: { parser: jsoncParser },
  },
  {
    files: ['**/package.json'],
    plugins: { 'package-json': packageJson },
    language: 'json/json',
    extends: [packageJson.configs.recommended],
    languageOptions: { parser: jsoncParser },
    rules: {
      'package-json/order-properties': 'error',
      'package-json/sort-collections': 'error',
    },
  },

  // --- Markdown ---
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.md/*.js', '**/*.md/*.ts', '**/*.md/*.jsx', '**/*.md/*.tsx'],
    rules: { ...rulesImportsExports },
  },
]);
