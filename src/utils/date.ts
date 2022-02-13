import dayjs, { ConfigType } from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

export const seconds2Milliseconds = (seconds: number): number => seconds * 1000

export const minutes2Milliseconds = (minutes: number): number => minutes * 60 * 1000

export const hours2Milliseconds = (hours: number): number => hours * 60 * 60 * 1000

export const defaultDateFormat = (date: ConfigType): string => dayjs(date).format('lll')

export const simpleDateFormat = (date: ConfigType): string => dayjs(date).format('ll')
