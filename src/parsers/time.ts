import { IParserArguments } from '../interfaces/IParserArguments'
import { format } from 'date-fns'

export const now = (args: IParserArguments, timeFormat?: string): string => timeFormat === undefined ? new Date().toUTCString() : format(new Date(), timeFormat)
export const time = (args: IParserArguments, ms: string, timeFormat?: string): string => timeFormat === undefined ? new Date(+ms).toUTCString() : format(new Date(+ms), timeFormat)
