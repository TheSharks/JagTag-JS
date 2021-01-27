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
  let output = filterEscapes(string)
  let lastOutput = ''
  let iterations = 0
  const maxIterations = (args?.maxIterations ?? 100)
  const maxLength = (args?.maxLength ?? 2000)
  const strict = (args?.strictMode ?? false)

  while (lastOutput !== output && iterations < maxIterations && output.length <= maxLength) {
    lastOutput = output

    const first = output.indexOf('}')
    const last = (first === -1 ? -1 : output.lastIndexOf('{', first))

    if (last === -1 && first === -1) break // No more matched tags, we're done

    let result = null
    const contents = output.substring(last + 1, first)
    const split = contents.indexOf(':')
    let name, params

    if (split === -1) {
      name = contents
    } else {
      params = contents.substring(split + 1).split('|')
      name = contents.substring(0, split).trim()
      if (name === 'if') name = '_if' // hack
    }
    const isNotDisabled = args?.disabledParsers === undefined || !args.disabledParsers.includes(name)
    if (Reflect.has(Parsers, name)) {
      if (isNotDisabled) {
        try {
          result = Reflect.get(Parsers, name)(args, ...(params ?? []))
        } catch (e) {
          if (strict === true) throw e
        }
      }
    }
    if (result === null) result = '{' + contents + '}'
    output = `${output.substring(0, last)}${filterAll(result)}${output.substring(first + 1)}`
    iterations++
  }

  output = defilterAll(output)
  clearVariables()

  return (output.length > maxLength ? output.slice(0, maxLength) : output)
}
