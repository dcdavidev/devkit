import { defineConfig } from 'cspell';

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = defineConfig({
  version: '0.2',
  import: ['@dcdavidev/cspell-config'],

  dictionaries: ['custom'],

  dictionariesDefinition: [
    {
      name: 'custom',
      path: './.config/dictionaries/custom.txt',
    },
  ],
});

export default cspell;
