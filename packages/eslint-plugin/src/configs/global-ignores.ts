import type { Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export const configGlobalIgnores: Linter.Config[] = defineConfig([
  globalIgnores(
    [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '**/out-tsc/**',
      '**/coverage/**',
      '**/.next/**',
      '**/.nuxt/**',
      '**/.svelte-kit/**',
      '**/.turbo/**',
      '**/.pnpm/**',
      '**/.npm/**',
      '**/.yarn/**',
      '**/.pnp/**',
      '**/.parcel-cache/**',
      '**/.vite/**',
      '**/.rollup.cache/**',
      '**/package-lock.json',
      '**/pnpm-lock.yaml',
      '**/yarn.lock',
      '**/bun.lockb',
    ],
    'Node / JS / TS build & lock files'
  ),
  globalIgnores(
    [
      '**/__pycache__/**',
      '**/*.pyc',
      '**/*.pyo',
      '**/.mypy_cache/**',
      '**/.pytest_cache/**',
      '**/.tox/**',
      '**/.ruff_cache/**',
      '**/.venv/**',
      '**/venv/**',
      '**/env/**',
      '**/.ipynb_checkpoints/**',
    ],
    'Python environments and cache'
  ),
  globalIgnores(
    ['**/target/**', '**/.cargo/**', '**/Cargo.lock'],
    'Rust build artifacts'
  ),
  globalIgnores(
    [
      '**/go.sum',
      '**/go.work',
      '**/go.work.sum',
      '**/vendor/**',
      '**/.gopath/**',
      '**/.cache/go-build/**',
    ],
    'Go dependencies and cache'
  ),
  globalIgnores(
    [
      '**/*LICENSE*',
      '**/*.log',
      '**/.cache/**',
      '**/.temp/**',
      '**/.tmp/**',
      '**/.DS_Store',
      '**/.idea/**',
      '**/.vscode/**',
      '**/.nx/**',
      '**/.cspell/**',
      '**/.cursor/**',
      '**/.history/**',
      '**/.terraform/**',
      '**/.devcontainer/**',
      '**/.direnv/**',
      '**/.editorconfig',
      '**/.eslintcache',
      '**/.babelrc',
      '**/.prettier*',
      '**/.sass-cache/**',
      '**/.gradle/**',
      '**/.docker/**',
      '**/.kube/**',
      '**/.git/**',
      '**/.svn/**',
      '**/.hg/**',
      '.github/instructions/nx.instructions.md',
    ],
    'Miscellaneous project artifacts'
  ),
  globalIgnores(
    [
      '**/*:Zone.Identifier',
      '**/Thumbs.db',
      '**/desktop.ini',
      '**/$RECYCLE.BIN/**',
      '**/System Volume Information/**',
      '**/pagefile.sys',
      '**/swapfile.sys',
      '**/hiberfil.sys',
    ],
    'Windows system artifacts'
  ),
]);
