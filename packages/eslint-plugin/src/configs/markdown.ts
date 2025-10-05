import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import markdown from '@eslint/markdown';

import { rulesImportsExports } from './rules/imports-exports.js';

export const configMarkdown: Linter.Config[] = defineConfig([
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
