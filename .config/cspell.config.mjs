import { defineConfig } from 'cspell';

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = defineConfig({
  version: '0.2',

  enabled: true,
  enableGlobDot: true,

  language: 'en',

  loadDefaultConfiguration: true,

  allowCompoundWords: true,

  dictionaries: [
    'en-gb',
    'en_US',
    'companies',
    'softwareTerms',
    'misc',
    'typescript',
    'node',
    'php',
    'go',
    'python',
    'powershell',
    'html',
    'css',
    'csharp',
    'latex',
    'bash',
    'fonts',
    'fileTypes',
    'npm',
    'devkit',
    'people',
  ],

  dictionaryDefinitions: [
    {
      name: 'devkit',
      path: './dictionaries/devkit.txt',
    },
    {
      name: 'people',
      path: './dictionaries/people.txt',
    },
  ],

  ignorePaths: [
    '.git/**',
    '.github/instructions/',
    '.cursor/rules/',
    '.gemini/**',
    '.nx/**',
    '**/tmp/**',
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/out/**',
    '**/out-tsc/**',
    '**/LICENSE/*',
    '**/AGENTS.md',
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/yarn.lock',
    '**/bun.lock',
    '**/bun.lockb',
    '**/*.log',
    '**/vite.config.*.timestamp*',
    '**/vitest.config.*.timestamp*',
  ],
});

export default cspell;
