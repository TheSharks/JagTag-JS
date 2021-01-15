import { IParserArguments } from '../interfaces/IParserArguments'

export const lower = (args: IParserArguments, ctx: string): string => ctx.toLowerCase()
export const upper = (args: IParserArguments, ctx: string): string => ctx.toUpperCase()
export const length = (args: IParserArguments, ctx: string): string => `${ctx.length}`
export const url = (args: IParserArguments, ctx: string): string => encodeURIComponent(ctx)
export const replace = (args: IParserArguments, toReplace: string, ...conds: string[]): string => {
  const [replaceIn, replaceWith] = [conds.find(x => x.startsWith('in:'))?.slice('in:'.length), conds.find(x => x.startsWith('with:'))?.slice('with:'.length)]
  if (replaceIn === undefined || replaceWith === undefined || toReplace === undefined) throw new TypeError('Not enough arguments for replace')
  return replaceIn?.replace(new RegExp(toReplace, 'g'), replaceWith)
}
// in js, this seems to be functionally identical
// especially since we already construct a regex
export const replaceregex = replace
export const substring = (args: IParserArguments, start: number, end: number, ctx: string): string => ctx.substring(start, end)
export const oneline = (args: IParserArguments, ctx: string): string => ctx.replace(/\s+/g, ' ')
export const hash = (args: IParserArguments, ctx: string): string => `${hashCode(ctx)}`

function hashCode (ctx: string): number {
  let hash = 0
  for (let i = 0; i < ctx.length; i++) {
    var character = ctx.charCodeAt(i)
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    hash = ((hash << 5) - hash) + character
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}
