import { IParserArguments } from '../interfaces/IParserArguments'
import { variableStore } from '../utils'

export const get = (args: IParserArguments, name: string): string => {
  if (!variableStore.has(name)) return 'undefined'
  else return variableStore.get(name)
}
export const set = (args: IParserArguments, name: string, ...value: string[]): string => {
  variableStore.set(name, value.join('|'))
  return ''
}
