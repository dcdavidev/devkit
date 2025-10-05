# Lefthook Configs

> Shared Lefthook configuration — enforcing consistent Git hooks for commit validation, linting, and formatting across all DevKit projects.  
> Automatic. Reliable. Always clean.

---

## ⚙️ Features

- **Hooks**
  - **`commit-msg`** → Runs [`commitlint`](https://github.com/conventional-changelog/commitlint) to validate commit messages.
  - **`pre-commit`** → Runs [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/) on staged files before each commit.

- **Automatic synchronization**
  - Supports remote configurations via Git.
  - Periodically refetches shared config files from a central DevKit repository.

- **Pre-commit optimization**
  - Sequential job execution with `piped: true`.
  - Selective inclusion/exclusion for file types.
  - Auto-restaging of fixed files (`stage_fixed: true`).

---

## 🧩 Included Configurations

### `lefthook/commit-msg.yml`

Validates commit messages using **Commitlint**.

```yaml
commit-msg:
  commands:
    lint-commit-msg:
      run: npx commitlint --verbose --edit {1}
```

✅ **Purpose**

- Ensures all commit messages follow the Conventional Commits spec.
- Prevents malformed or unclear messages.

---

### `lefthook/pre-commit.yml`

Runs **ESLint** and **Prettier** on staged files before committing.

```yaml
pre-commit:
  follow: true
  parallel: false
  piped: true
  jobs:
    - name: lint-staged
      run: npx eslint --fix {staged_files}
      exclude:
        - '*.sh'
        - '*.toml'
        - '*.yaml'
        - '*.yml'
      stage_fixed: true
    - name: format-staged
      run: npx prettier {staged_files} --write
      glob:
        - '*.sh'
        - '*.toml'
        - '*.yaml'
        - '*.yml'
      stage_fixed: true
```

✅ **Purpose**

- Fixes linting errors automatically.
- Formats YAML, TOML, and shell files consistently.
- Stages corrected files automatically.

---

## 🌍 Example Root Configuration

Reference remote configs in your project’s root `lefthook.yml`:

```yaml
remotes:
  - git_url: git@github.com:dcdavidev/devkit
    refetch: true
    refetch_frequency: '24h'
    configs:
      - lefthook/commit-msg.yml
      - lefthook/pre-commit.yml
```

🔁 Lefthook will automatically refetch updated configs every 24 hours.

---

## ⏬ Install

```bash
npm install -D lefthook commitlint eslint prettier
```

Initialize Lefthook in your project:

```bash
npx lefthook install
```

---

## 🚀 Usage

Once installed, Lefthook automatically runs the proper hooks during each Git workflow.

You can also invoke them manually:

```bash
npx lefthook run pre-commit
npx lefthook run commit-msg
```

---

## 🧠 Editor Integration

You can pair this with:

- [`@dcdavidev/eslint-config`](https://github.com/dcdavidev/devkit)
- [`@dcdavidev/prettier-config`](https://github.com/dcdavidev/devkit)
- [`@dcdavidev/commitlint-config`](https://github.com/dcdavidev/devkit)

to maintain total consistency across your codebase.

---

## 📚 Resources

- [Lefthook Documentation](https://lefthook.dev)
- [Commitlint Rules](https://commitlint.js.org)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)

---

## License

[MIT](../LICENSE) © [dcdavidev](https://github.com/dcdavidev)

> “Hooks are the silent guardians of clean code,
> catching chaos before it commits.” — _dcdavidev Git Codex, Vol. II_
