import path from 'node:path';

import { formatFiles, generateFiles, logger, Tree } from '@nx/devkit';

import type { InitGeneratorSchema } from './schema.d.ts';

/**
 * Generates a .editorconfig file inside the workspace root
 *
 * @param tree - Nx DevKit virtual file system
 * @param options - generator options
 */
export async function initGenerator(
  tree: Tree,
  options: InitGeneratorSchema = {}
) {
  const editorconfigPath = '.editorconfig'; // always root

  if (options.dryRun) {
    logger.info(
      `[Dry Run] Would ${tree.exists(editorconfigPath) ? 'overwrite' : 'create'} .editorconfig at: ${editorconfigPath}`
    );
  } else {
    // eslint-disable-next-line unicorn/prefer-module
    generateFiles(tree, path.join(__dirname, 'files'), '', { tmpl: '' });
    logger.info(
      `${tree.exists(editorconfigPath) ? 'Overwritten' : 'Generated'} .editorconfig at: ${editorconfigPath}`
    );

    await formatFiles(tree);
  }
}

export default initGenerator;
