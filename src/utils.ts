/* eslint-disable no-control-regex */
/**
 * Filter common tag escapes
 * @internal
 * @param ctx - The string to filter
 */
export const filterEscapes = (ctx: string): string => {
  return ctx
    .replace(/\\{/g, '\u0012')
    .replace(/\\\|/g, '\u0013')
    .replace(/\\}/g, '\u0014')
}

/**
 * Restore common tag escapes
 * @internal
 * @param ctx - The string to restore
 */
export const defilterEscapes = (ctx: string): string => {
  return ctx
    .replace(/\u0012/gu, '\\{')
    .replace(/\u0013/gu, '\\|')
    .replace(/\u0014/gu, '\\}')
}

/**
 * Filter all tag braces
 * @internal
 * @param ctx - The string to filter
 */
export const filterAll = (ctx: string): string => {
  return filterEscapes(ctx)
    .replace(/{/g, '\u0015')
    .replace(/}/g, '\u0016')
}

/**
 * Restore all tag braces
 * @internal
 * @param ctx - The string to restore
 */
export const defilterAll = (ctx: string): string => {
  return defilterEscapes(ctx)
    .replace(/\u0015/gu, '{')
    .replace(/\u0016/gu, '}')
}

/**
 * @internal
 */
export const safeCompare = (item1: any, conditional: any, item2: any): boolean => {
  switch (conditional) {
    // Built-in
    case '>': return item1 > item2
    case '<': return item1 < item2
    case '>=': return item1 >= item2
    case '<=': return item1 <= item2
    case '==': return item1 == item2 // eslint-disable-line eqeqeq
    case '===': return item1 === item2
    case '!=': return item1 != item2 // eslint-disable-line eqeqeq
    case '!==': return item1 !== item2
    // Custom
    case '?': return new RegExp(item2, 'g').exec(item1) !== null
    default: return false
  }
}

/**
 * @internal
 */
export const variableStore = new Map()

/**
 * @internal
 */
export const clearVariables = (): void => variableStore.clear()

/**
 * @internal
 */
export const creationTime = (discordSnowflake: string): string => {
  const formatted = (+discordSnowflake / 4194304) + 1420070400000
  return new Date(formatted).toUTCString()
}
