import { getLastItem } from '@lib/utils/array/getLastItem'
import { rotateArray } from '@lib/utils/array/rotateArray'
import { sum } from '@lib/utils/array/sum'
import { normalizeFretPositions } from '@product/core/note/normalizeFretPositions'

import { cagedChords, cagedTemplateDistances } from '../../chords/caged'
import { standardTuning } from '../../guitar/tuning'
import { shiftNotePositions } from '../../note/shiftNotePositions'
import { getFullScaleRelativeTonalityRootNote } from '../full/getFullScaleRelativeTonalityRootNote'
import {
  firstMajorScalePatternChord,
  majorScalePatterns,
} from '../full/majorScalePatterns'

import { ScalePatternResolver } from './ScalePatternResolver'

export const getFullScalePattern: ScalePatternResolver = (input) => {
  if (input.scale.tonality === 'minor') {
    return getFullScalePattern({
      ...input,
      scale: {
        ...input.scale,
        tonality: 'major',
        rootNote: getFullScaleRelativeTonalityRootNote(input.scale),
      },
    })
  }
  const pattern = majorScalePatterns[input.index]

  const distances = rotateArray(
    cagedTemplateDistances.major,
    cagedChords.indexOf(firstMajorScalePatternChord),
  )

  const offset =
    input.scale.rootNote -
    getLastItem(standardTuning) +
    sum(distances.slice(0, input.index))

  const positionedPattern = shiftNotePositions(pattern, offset)

  return normalizeFretPositions(positionedPattern)
}
