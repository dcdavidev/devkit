import path from 'node:path';

import { formatFiles, generateFiles, Tree, workspaceRoot } from '@nx/devkit';

/**
 * Generates a .editorconfig file inside the workspace
 * @param tree - Nx DevKit virtual file system
 * @param options - generator options
 */
export async function initGenerator(tree: Tree) {
  // eslint-disable-next-line unicorn/prefer-module
  generateFiles(tree, path.join(__dirname, 'files'), workspaceRoot, {
    tmpl: '',
  });

  await formatFiles(tree);
}

export default initGenerator;
