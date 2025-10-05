# dcdavidev/devkit

> **DevKit** — a unified toolkit for consistent, maintainable, and automated development workflows.  
> One source of truth for linting, formatting, commit standards, spell-checking, and Git hooks.

---

## 📜 Table of Contents

- [Overview](#-overview)
- [Included Packages](#-included-packages)
- [Philosophy](#-philosophy)
- [Getting Started](#-getting-started)
- [Installation](#️-installation)
- [License](#-license)

---

## 🧭 Overview

**DevKit** provides a curated collection of shared configurations and tools designed for polyglot monorepos and cross-language projects.  
It standardizes your developer experience — from commit messages to linting, formatting, and code hygiene — ensuring every project stays clean, consistent, and automatable.

Built for **Node, TypeScript, Rust, Go, and beyond**.  
No lock-in. No boilerplate. Just clean code and aligned conventions.

---

## 🧩 Included Packages

| Package                                                        | Description                                                                              |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`@dcdavidev/eslint-plugin`](./packages/eslint-plugin)         | Modular ESLint setup for JS, TS, JSON, and Markdown — strict, typed, and monorepo-ready. |
| [`@telarteth/prettier-config`](./packages/prettier-config)     | Shared Prettier configuration for uniform formatting across multiple file types.         |
| [`@dcdavidev/cspell-config`](./packages/cspell-config)         | CSpell configuration with smart dictionaries and build artifacts exclusion.              |
| [`@dcdavidev/commitlint-config`](./packages/commitlint-config) | Commitlint setup enforcing Conventional Commits and providing interactive prompts.       |
| [`@dcdavidev/lefthook`](./lefthook)                            | Pre-configured Lefthook hooks for commit validation, linting, and formatting.            |

Each package is fully independent yet designed to integrate seamlessly with others — forming a single, composable developer workflow.

---

## 🧠 Philosophy

DevKit is opinionated, but never intrusive.  
It’s built around three principles:

1. **Consistency** — shared standards across all repositories.
2. **Automation** — enforce rules through Git hooks, not manual checks.
3. **Transparency** — configs are readable, modular, and easy to override.

> “To automate is to free the mind for creation.” — _dcdavidev Dev Codex, Vol. I_

---

## 🏁 Getting Started

### Git Attributes

DevKit enforces consistent line endings and handles binary files via [.gitattributes](./.gitattributes).  
This ensures your commits remain clean across operating systems.

### Code of Conduct

We follow the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md) to maintain a welcoming, safe, and equitable community.

### Contribution Guidelines

For contribution instructions, branching rules, commit conventions, and PR workflow, see [CONTRIBUTING.md](./CONTRIBUTING.md).

### GitHub Templates

DevKit includes GitHub issue and PR templates to streamline collaboration:

- Issues:
  - Bug Reports: `.github/ISSUE_TEMPLATE/bug_report.yml`
  - Feature Requests: `.github/ISSUE_TEMPLATE/feature_request.yml`
  - Documentation Requests: `.github/ISSUE_TEMPLATE/docs_request.yml`
  - Configuration: `.github/ISSUE_TEMPLATE/config.yml`
- Pull Requests:
  - Template: `.github/pull_request_template.md`
- CI/CD:
  - Release workflow: `.github/workflows/release.yml`

---

## ⚙️ Installation

Install packages individually as needed:

```bash
npm install -g eslint prettier cspell commitizen lefthook
npm install -D eslint prettier cspell commitizen lefthook
npm install -D @dcdavidev/eslint-plugin @dcdavidev/prettier-config @dcdavidev/cspell-config @dcdavidev/commitlint-config
```

Then reference their configs in your project root:

```bash
# ESLint
eslint.config.mjs

# Prettier
.prettierrc.mjs

# Commitlint
commitlint.config.mjs

# CSpell
cspell.config.mjs

# Lefthook
lefthook.yml
```

---

## 📄 License

[MIT](./LICENSE) © [dcdavidev](https://github.com/dcdavidev)

> “A clean workflow is not just code — it’s discipline made manifest.”
> — _dcdavidev Dev Codex, Vol. 0_
