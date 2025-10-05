# @dcdavidev/prettier-config

> Shared Prettier configuration — harmonizing code and text formatting across JS, TS, Markdown, YAML, TOML, Prisma, and shell scripts.  
> Clean. Opinionated. Always consistent.

---

## ✨ Features

- **Plugins**
  - [`prettier-plugin-sh`](https://github.com/un-ts/prettier/tree/master/packages/prettier-plugin-sh) → Formats shell scripts (`.sh`).
  - [`prettier-plugin-toml`](https://github.com/bd82/toml-tools/tree/master/packages/prettier-plugin-toml) → Formats `.toml` files.
  - [`prettier-plugin-ini`](https://github.com/kddnewton/prettier-plugin-ini) → Formats `.ini` files.
  - [`prettier-plugin-packagejson`](https://github.com/matzkoh/prettier-plugin-packagejson) → Formats `package.json` files.
  - [`prettier-plugin-properties`](https://github.com/eemeli/prettier-plugin-properties) → Formats `.properties` files.
  - [`prettier-plugin-prisma`](https://github.com/omar-dulaimi/prettier-plugin-prisma) → Formats Prisma schema files.

- **Base Style Rules**
  - Trailing commas: `es5`
  - Tab width: `2`
  - Semicolons: `true`
  - Single quotes: `true`
  - Print width: `80`
  - End of line: `lf`

- **File-specific Overrides**
  - **YAML (`.yaml`, `.yml`)** → Keeps `printWidth` at 80 characters.
  - **TOML (`.toml`)** → Uses wider `printWidth` of 100 characters.

---

## ⏬ Install

```bash
npm install --global prettier
npm install -D prettier @dcdavidev/prettier-config
```

---

## 🚀 Usage

Create a `.prettierrc.mjs` file at your project root:

```js
import dcdavidevConfig from '@dcdavidev/prettier-config';

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...dcdavidevConfig,
};

export default config;
```

### Editor integration

Most editors (VSCode, JetBrains, etc.) detect Prettier automatically if the plugin is installed.
For VSCode, ensure the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is installed and enable **Format on Save**:

```jsonc
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

---

## 📚 Resources

- [Prettier Documentation](https://prettier.io/docs/en/configuration.html)
- [Prettier Options](https://prettier.io/docs/en/options.html)

---

## 📄 License

[MIT](./LICENSE) © [dcdavidev](https://github.com/dcdavidev)

> “To indent is to guide the eye,  
> to wrap lines is to contain chaos.” — _dcdavidev Prettier Codex, Vol. I_
