import { standardTuning } from '@product/core/guitar/tuning'

import { fretboardConfig } from '../config'

export const getStringPosition = (string: number) =>
  (string / (standardTuning.length - 1)) *
    (1 - fretboardConfig.stringsOffset * 2) +
  fretboardConfig.stringsOffset
