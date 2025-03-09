import { useScale } from './state/scale'
import { getScaleName } from '@product/core/scale/getScaleName'
import { getBlueNote } from '@product/core/scale/blues/getBlueNote'
import { chromaticNotesNames } from '@product/core/note'

export const BluesScaleSubtitle = () => {
  const scale = useScale()

  const text = `${getScaleName({ ...scale, type: 'pentatonic' })} + ${chromaticNotesNames[getBlueNote(scale)]} (blue note)`

  return text
}
