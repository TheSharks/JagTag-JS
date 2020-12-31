import { IParserArguments } from '../interfaces/IParserArguments'
import { evaluate } from 'mathjs'
import { safeCompare } from '../utils'

export const note = (): string => ''
export const choose = (args: IParserArguments, ...ctx: string[]): string => ctx[Math.floor(Math.random() * ctx.length)]
export const range = (args: IParserArguments, start: number, end: number): string => {
  start = Math.ceil(start)
  end = Math.floor(end)
  return `${Math.floor(Math.random() * (end - start) + start)}`
}
// hack: 'if' isnt a valid export
// fixme: this isnt spec compliant! https://github.com/jagrosh/Spectra/wiki/JagTag#functional
export const _if = (args: IParserArguments, item1: string, conditional: string, item2: string, truthyCond: string, falsyCond: string): string => {
  if (safeCompare(item1, conditional, item2)) return truthyCond
  else return falsyCond
}
// fixme: this isnt spec compliant! https://github.com/jagrosh/Spectra/wiki/JagTag#functional
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
export const math = (args: IParserArguments, ...ctx: string[]): string => `${evaluate(ctx.join(' '))}`
export const abs = (args: IParserArguments, ctx: number): string => `${Math.abs(ctx)}`
export const floor = (args: IParserArguments, ctx: number): string => `${Math.floor(ctx)}`
export const ceil = (args: IParserArguments, ctx: number): string => `${Math.ceil(ctx)}`
export const round = (args: IParserArguments, ctx: number): string => `${Math.round(ctx)}`
export const sin = (args: IParserArguments, ctx: number): string => `${Math.sin(ctx)}`
export const cos = (args: IParserArguments, ctx: number): string => `${Math.cos(ctx)}`
export const tan = (args: IParserArguments, ctx: number): string => `${Math.tan(ctx)}`
export const base = (args: IParserArguments, num: string, base: number): string => parseFloat(num).toString(base)
