export interface InitGeneratorSchema {
  /** The name of the generator or project context (used in templates) */
  name: string;

  /** Whether to overwrite an existing .editorconfig file if it exists */
  overwrite?: boolean;

  /** Optional subdirectory inside the workspace where the .editorconfig will be generated */
  directory?: string;
}
