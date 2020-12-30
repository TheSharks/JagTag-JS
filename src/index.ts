import * as Parsers from './parsers'
import { IParserArguments } from './interfaces/IParserArguments'
import { filterAll, defilterAll, filterEscapes, clearVariables } from './utils'

/**
 * The JagTag parser
 *
 * @param string - The tag to parse
 * @param args - Arguments to pass to the parser
 *
 * @returns The parsed tag
 */
export default function Parser (string: string, args?: IParserArguments): string {
  let output: string = filterEscapes(string)
  let lastOutput: string = ''
  let iterations: number = 0
  const maxIterations = (args?.iterations !== undefined ? args.iterations : 100)

  while (lastOutput !== output && iterations < maxIterations) {
    lastOutput = output
    const first: number = output.indexOf('}')
    const last: number = (first === -1 ? -1 : output.lastIndexOf('{', first))
    if (last === -1 && first === -1) break // No more matched tags, we're done
    let result: string | null = null
    const contents: string = output.substring(last + 1, first)
    const split: number = contents.indexOf(':')
    if (split === -1) {
      if (Reflect.has(Parsers, contents)) {
        if (args?.disabledParsers === undefined || !args.disabledParsers.includes(contents)) {
          try {
            result = Reflect.get(Parsers, contents)(args)
          } catch (e) {
            if (process.env.NODE_ENV === 'test') console.error(e)
          }
        }
      }
    } else {
      const params: string[] = contents.substring(split + 1).split('|')
      let name: string = contents.substring(0, split).trim()
      if (name === 'if') name = '_if' // hack

      if (Reflect.has(Parsers, name)) {
        if (args?.disabledParsers === undefined || !args.disabledParsers.includes(name)) {
          try {
            result = Reflect.get(Parsers, name)(args, ...params)
          } catch (e) {
            if (process.env.NODE_ENV === 'test') console.error(e)
          }
        }
      }
    }
    if (result === null) result = '{' + contents + '}'
    output = `${output.substring(0, last)}${filterAll(result)}${output.substring(first + 1)}`
    iterations++
  }
  clearVariables()
  return defilterAll(output)
}
