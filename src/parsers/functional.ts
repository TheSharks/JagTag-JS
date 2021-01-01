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
  while (ctx.length >= 3) {
    const calc = pemdas(ctx)
    // const calc = ctx.slice(0, 3)
    if (!isNaN(+calc[0]) && !isNaN(+calc[2])) {
      switch (calc[1]) {
        case '+': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, `${+calc[0] + +calc[2]}`); break
        case '-': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, `${+calc[0] - +calc[2]}`); break
        case '*': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, `${+calc[0] * +calc[2]}`); break
        case '/': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, `${+calc[0] / +calc[2]}`); break
        case '%': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, `${+calc[0] % +calc[2]}`); break
        case '^': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, `${Math.pow(+calc[0], +calc[2])}`); break
      // default: throw new TypeError('Invalid arithmetic expression')
      }
    } else {
      // cant do math on non-ints, so some operands have string manipulation functions
      switch (calc[1]) {
        case '+': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, calc[0] + calc[2]); break
        case '-': ctx.splice(ctx.indexOf(calc[1]) - 1, 3, calc[0].replace(calc[2], '')); break
        default: ctx.splice(ctx.indexOf(calc[1]) - 1, 3, calc.join(''))
      }
    }
  }
  return ctx.join('')
}
export const abs = (args: IParserArguments, ctx: number): string => `${Math.abs(ctx)}`
export const floor = (args: IParserArguments, ctx: number): string => `${Math.floor(ctx)}`
export const ceil = (args: IParserArguments, ctx: number): string => `${Math.ceil(ctx)}`
export const round = (args: IParserArguments, ctx: number): string => `${Math.round(ctx)}`
export const sin = (args: IParserArguments, ctx: number): string => `${Math.sin(ctx)}`
export const cos = (args: IParserArguments, ctx: number): string => `${Math.cos(ctx)}`
export const tan = (args: IParserArguments, ctx: number): string => `${Math.tan(ctx)}`
export const base = (args: IParserArguments, num: string, base: number): string => parseFloat(num).toString(base)

function pemdas (ctx: string[]): string[] {
  const order = '^*/%+-'
  const nextup = ctx.filter(x => order.includes(x)).sort((a, b) => order.indexOf(a) - order.indexOf(b))[0]
  return ctx.slice(ctx.indexOf(nextup) - 1, ctx.indexOf(nextup) + 2)
}
