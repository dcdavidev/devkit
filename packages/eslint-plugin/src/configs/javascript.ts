import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import js from '@eslint/js';
import nodeDependencies from 'eslint-plugin-node-dependencies';
import tseslint from 'typescript-eslint';

import { rulesImportsExports } from './rules/imports-exports.js';
import { rulesJavascript } from './rules/javascript.js';

export const configJavascript: Linter.Config[] = defineConfig([
  {
    files: ['**/*.{js,ts,mjs,mts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      jsdoc,
      prettier: prettierPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      nodeDependencies.configs['flat/recommended'],
      unicorn.configs.recommended,
    ],
    rules: {
      ...rulesImportsExports,
      ...rulesJavascript,
    },
  },
  {
    files: ['**/*.{cjs,cts}'],
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      nodeDependencies.configs['flat/recommended'],
      unicorn.configs.recommended,
    ],
  },
  {
    files: ['**/*.{js,ts,mjs,mts,jsx,tsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.es2022,
      },
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      nodeDependencies.configs['flat/recommended'],
      unicorn.configs.recommended,
    ],
  },
]);
