/**
 * Arguments to pass to the parser.
 * @public
 */

export interface IParserArguments {
  /**
   * An array of parsers to disable while parsing the tag.
   */
  disabledParsers?: String[]
  /**
   * How many iterations to run.
   *
   * This directly controls how deep tags can be nested,
   * and how many parsers each tag can have.
   *
   * Increase this value with caution.
   * @defaultValue 100
   */
  iterations?: Number
  /**
   * Arguments passed to the tag.
   *
   * This MUST be a space delimited array, the parser
   * will reconstruct this at runtime when needed.
   */
  tagArgs?: string[]
  /**
   * How long the resulting tag can be.
   * @defaultValue 2000
   */
  maxLength?: number
}
