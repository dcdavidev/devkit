import type { Linter } from 'eslint';

/**
 * Rules overrides for javascript/typescript imports/exports
 * These plugins must be imported in the plugins section:
 * @example
 * ```ts
 * import importPlugin from 'eslint-plugin-import';
 * import simpleImportSort from 'eslint-plugin-simple-import-sort'
 * ```
 * @example
 * ```plaintext
 * import: importPlugin,
 * 'simple-import-sort': simpleImportSort,
 * ```
 */
export const rulesImportsExports: Linter.RulesRecord = {
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
