import moment, { Moment } from 'moment'

export const seconds2Milliseconds = (seconds: number): number =>
  moment.duration(seconds, 'seconds').asMilliseconds()

export const minutes2Milliseconds = (minutes: number): number =>
  moment.duration(minutes, 'minutes').asMilliseconds()

export const hours2Milliseconds = (hours: number): number =>
  moment.duration(hours, 'hours').asMilliseconds()

export const defaultDateFormat = (date: Date | Moment | string): string =>
  moment(date).format('lll')

export const simpleDateFormat = (date: Date | Moment | string): string => moment(date).format('ll')
