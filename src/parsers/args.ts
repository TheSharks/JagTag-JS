import { IParserArguments } from '../interfaces/IParserArguments'

export const args = (args: IParserArguments): string => Array.isArray(args?.tagArgs) && args?.tagArgs.length > 0 ? args.tagArgs.join(' ') : 'undefined'
export const argslen = (args: IParserArguments): string => Array.isArray(args?.tagArgs) && args?.tagArgs.length > 0 ? `${args.tagArgs.length}` : 'undefined'
export const arg = (args: IParserArguments, index: number): string => Array.isArray(args?.tagArgs) ? `${args?.tagArgs[index]}` : 'undefined'
