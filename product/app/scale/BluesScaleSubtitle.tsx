import { chromaticNotesNames } from '@product/core/note'
import { getBlueNote } from '@product/core/scale/blues/getBlueNote'
import { getScaleName } from '@product/core/scale/getScaleName'

import { useScale } from './state/scale'

export const BluesScaleSubtitle = () => {
  const scale = useScale()

  const text = `${getScaleName({ ...scale, type: 'pentatonic' })} + ${chromaticNotesNames[getBlueNote(scale)]} (blue note)`

  return text
}
