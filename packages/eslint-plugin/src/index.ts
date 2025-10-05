import fs from 'node:fs';

import type { ESLint, Linter } from 'eslint';

import { configRecommended } from './collections/recommended.js';
import { configGlobalIgnores } from './configs/global-ignores.js';
import { configJavascript } from './configs/javascript.js';
import { configJson } from './configs/json.js';
import { configMarkdown } from './configs/markdown.js';

const packagePath = new URL('../package.json', import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8')) as {
  name: string;
  version: string;
};

const configs = {
  'global-ignores': configGlobalIgnores,
  javascript: configJavascript,
  json: configJson,
  markdown: configMarkdown,
  recommended: configRecommended,
} satisfies Record<string, Linter.Config[]>;

type Plugin = ESLint.Plugin & {
  configs: typeof configs;
};

const plugin: Plugin = {
  meta: {
    name: packageJson.name,
    version: packageJson.version,
    namespace: 'dcdavidev',
  },
  configs,
  rules: {},
  processors: {},
};

export default plugin;
