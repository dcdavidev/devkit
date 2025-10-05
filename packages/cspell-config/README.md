# @dcdavidev/cspell-config

> Shared configuration for [CSpell](https://cspell.org) — tuned for polyglot monorepos (Node, Rust, Go, Python, and more).  
> Clean. Opinionated. No junk, no false positives.

---

## ✨ Features

- 🧠 Pre-tuned dictionaries for:
  - English (US/GB)
  - Common programming languages (TypeScript, Node, Python, Go, PHP, etc.)
  - Framework & tooling terms (npm, softwareTerms, misc)
- 🧹 Smart `ignorePaths` that skip all build artifacts, lock files, and temp directories:
  - Node / JS / TS (`dist`, `node_modules`, `.next`, `.turbo`, etc.)
  - Rust (`target/`, `.cargo/`, `Cargo.lock`)
  - Go (`go.sum`, `vendor/`, etc.)
  - Python (`__pycache__`, `.venv/`, `.tox/`, `.ruff_cache/`, etc.)
  - Windows / WSL cruft (`:Zone.Identifier`, `Thumbs.db`, `desktop.ini`, etc.)
- 🗂️ Support for custom internal dictionaries (`devkit.txt`, `people.txt`)
- ⚙️ Works seamlessly with modern CSpell (`>=6.0`) using native ESM & `defineConfig`

---

## 🧭 Installation

```bash
npm install --global cspell
npm install -D cspell @cspell/cspell-types @dcdavidev/cspell-config
```

---

## Usage

Create a custom dictionary:

```bash
touch .config/dictionaries/custom.txt
```

Then create or update your `cspell.config.mjs` at the root of your project:

```ts
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
```

Then, run:

```bash
npx cspell lint "**/*.{ts,js,tsx,jsx,md}"
```

or integrate with Nx, Husky, Lefthook, or your CI.

---

## 🛠️ Development

If you're contributing inside the monorepo:

```bash
nx run cspell-config:build
```

Test the config locally:

```bash
npx cspell lint --config dist/libs/cspell-config/index.js .
```

---

## License

[MIT](./LICENSE) © [dcdavidev](https://github.com/dcdavidev)

> “To spell is to name.
> To name is to command.” — _dcdavidev CSpell Codex, Vol. I_
