import { defineConfig } from 'eslint/config';

import dcdavidev from '@dcdavidev/eslint-plugin';

/**
 * @typedef {import("eslint").Linter.Config[]}
 */
export default defineConfig([...dcdavidev.configs.recommended]);
