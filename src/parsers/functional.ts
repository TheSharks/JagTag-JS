import { IParserArguments } from '../interfaces/IParserArguments'
import { safeCompare } from '../utils'

export const note = (): string => ''
export const choose = (args: IParserArguments, ...ctx: string[]): string => ctx[Math.floor(Math.random() * ctx.length)]
export const range = (args: IParserArguments, start: number, end: number): string => {
  start = Math.ceil(start)
  end = Math.floor(end)
  return `${Math.floor(Math.random() * (end - start) + start)}`
}
// hack: 'if' isnt a valid export
export const _if = (args: IParserArguments, item1: string, conditional: string, item2: string, ...conds: string[]): string => {
  const truthyCond = conds.find(x => x.startsWith('then:'))?.slice('then:'.length)
  const falsyCond = conds.find(x => x.startsWith('else:'))?.slice('else:'.length)
  if (truthyCond === undefined || falsyCond === undefined) throw new TypeError('Invalid conditions supplied')
  if (safeCompare(item1, conditional, item2)) return truthyCond
  else return falsyCond
}
export const math = (args: IParserArguments, ...ctx: string[]): string => {
  if (ctx.length < 3) throw new TypeError('Too few arguments for math')
  // reconstruct args back to a string
  const expression: string = ctx.join('|')
  return pemdas(expression)
}
export const abs = (args: IParserArguments, ctx: number): string => `${Math.abs(ctx)}`
export const floor = (args: IParserArguments, ctx: number): string => `${Math.floor(ctx)}`
export const ceil = (args: IParserArguments, ctx: number): string => `${Math.ceil(ctx)}`
export const round = (args: IParserArguments, ctx: number): string => `${Math.round(ctx)}`
export const sin = (args: IParserArguments, ctx: number): string => `${Math.sin(ctx)}`
export const cos = (args: IParserArguments, ctx: number): string => `${Math.cos(ctx)}`
export const tan = (args: IParserArguments, ctx: number): string => `${Math.tan(ctx)}`
export const base = (args: IParserArguments, num: string, base: number): string => parseFloat(num).toString(base)

const pemdas = (ctx: string): string => {
  const order = ['|+|', '|-|', '|*|', '|%|', '|/|', '|^|']
  const nextup = order.find(x => ctx.includes(x))
  if (nextup !== undefined) {
    const index = ctx.lastIndexOf(nextup)
    const calc: string[] = [pemdas(ctx.substring(0, index)), nextup, pemdas(ctx.substring(index + 3))]
    if (!isNaN(+calc[0]) && !isNaN(+calc[2])) {
      switch (calc[1]) {
        case '|+|': return `${+calc[0] + +calc[2]}`
        case '|-|': return `${+calc[0] - +calc[2]}`
        case '|*|': return `${+calc[0] * +calc[2]}`
        case '|/|': return `${+calc[0] / +calc[2]}`
        case '|%|': return `${+calc[0] % +calc[2]}`
        case '|^|': return `${Math.pow(+calc[0], +calc[2])}`
        default: throw new TypeError('Invalid arithmetic expression')
      }
    } else {
      // cant do math on non-ints, so some operands have string manipulation functions
      switch (calc[1]) {
        case '|+|': return calc[0] + calc[2]
        case '|-|': return calc[0].replace(calc[2], '')
        default: return `${calc[0]}${calc[1].split('')[1]}${calc[2]}`
      }
    }
  } else return ctx
}
