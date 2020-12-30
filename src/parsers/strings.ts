import { IParserArguments } from '../interfaces/IParserArguments'

export const lower = (args: IParserArguments, ctx: string): string => ctx.toLowerCase()
export const upper = (args: IParserArguments, ctx: string): string => ctx.toUpperCase()
export const length = (args: IParserArguments, ctx: string): string => `${ctx.length}`
export const url = (args: IParserArguments, ctx: string): string => encodeURIComponent(ctx)
export const replace = (args: IParserArguments, toReplace: string, replaceWith: string, ctx: string): string => ctx.replace(toReplace, replaceWith)
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
