export interface InitGeneratorSchema {
  /** The name of the generator or project context (used in templates) */
  name: string;

  /** Optional subdirectory inside the workspace where the .editorconfig will be generated */
  directory?: string;

  /** Simulate generation without writing files */
  dryRun?: boolean;
}
