import { stringsCount } from '../../../guitar/config'
import { fretboardConfig } from '../config'

export const getStringPosition = (string: number) =>
  (string / (stringsCount - 1)) * (1 - fretboardConfig.stringsOffset * 2) +
  fretboardConfig.stringsOffset
