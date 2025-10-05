# @dcdavidev/eslint-plugin

> Shared ESLint plugin for modern monorepos — tuned for Node, TypeScript, JSON, Markdown, and more.  
> Clean. Opinionated. Fully typed. No junk, no false positives.

---

## ✨ Features

- 🧩 Modular configs for different file types:
  - `recommended` — the full pre-tuned configuration for all supported languages
  - `javascript` — JS/TS rules with Unicorn, Prettier, JSDoc, and import sorting
  - `typescript` — TypeScript-specific rules including ES2022 globals
  - `json` — JSON/JSONC/JSON5 validation, plus `package.json` rules with [`eslint-plugin-package-json`](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json)
  - `markdown` — lint JS/TS code blocks inside Markdown files
  - `global-ignores` — ignores all build artifacts, lock files, temp directories, and platform cruft
- 🌐 Pre-configured globals for Node, Browser, CommonJS, and ES2022 environments
- ⚡ Designed for monorepos using Nx, Turbo, Lerna, or plain multi-package setups
- 📦 Fully typed with TypeScript — autocomplete for `dcdavidevEslintPlugin.recommended`, `dcdavidevEslintPlugin.javascript`, etc.

---

## 🧭 Installation

```bash
npm install -D eslint @dcdavidev/eslint-plugin
```

---

## Usage

Add the plugin to your ESLint config:

```ts
import dcdavidevEslintPlugin from '@dcdavidev/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  root: true,
  plugins: { dcdavidev: dcdavidevEslintPlugin },
  extends: [dcdavidevEslintPlugin.configs.recommended],
});
```

Or pick individual configs:

```ts
export default defineConfig({
  plugins: { dcdavidev: dcdavidevEslintPlugin },
  extends: [
    dcdavidevEslintPlugin.configs.javascript,
    dcdavidevEslintPlugin.configs.json,
  ],
});
```

---

### Package.json linting

package.json files automatically get rules from `eslint-plugin-package-json`

This enforces:

- Required fields: `name`, `version`, `description`, `license`, `homepage`, `bugs`, `repository`, `keywords`
- Ordered properties and sorted collections
- Valid names, licenses, and semantic versions

---

## 🛠️ Development

Build the plugin locally:

```bash
# assuming a standard TypeScript setup
tsdown
tsc -p tsconfig.lib.json
```

Test locally:

```bash
eslint --plugin ./dist/index.js "**/*.{ts,js,tsx,jsx,md,json}"
```

---

## 📄 License

[MIT](./LICENSE) © [dcdavidev](https://github.com/dcdavidev)

> “To define a rule is to shape behavior.
> To enforce a rule is to summon order from chaos.” — _dcdavidev ESLint Codex, Vol. I_
