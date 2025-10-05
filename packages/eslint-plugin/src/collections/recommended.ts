import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import { configGlobalIgnores } from '../configs/global-ignores.js';
import { configJavascript } from '../configs/javascript.js';
import { configJson } from '../configs/json.js';
import { configMarkdown } from '../configs/markdown.js';
import cspell from '@cspell/eslint-plugin/configs';

export const configRecommended: Linter.Config[] = defineConfig([
  // TODO: add `eslint-plugin-vuoto`

  cspell.recommended,

  ...configGlobalIgnores,
  ...configJavascript,
  ...configJson,
  ...configMarkdown,
]);
