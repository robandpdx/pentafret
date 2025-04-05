import { getLastItem } from '@lib/utils/array/getLastItem'
import { rotateArray } from '@lib/utils/array/rotateArray'
import { sum } from '@lib/utils/array/sum'
import { normalizeFretPositions } from '@product/core/note/normalizeFretPositions'
import { NotePosition } from '@product/core/note/NotePosition'
import { Scale } from '@product/core/scale/Scale'

import { cagedChords, cagedTemplateDistances } from '../../chords/caged'
import { standardTuning } from '../../guitar/tuning'
import { shiftNotePositions } from '../../note/shiftNotePositions'

import {
  firstMajorScalePatternChord,
  majorScalePatterns,
} from './majorScalePatterns'

type Input = {
  index: number
  scale: Omit<Scale, 'type'>
}

export const getMajorScalePattern = (input: Input): NotePosition[] => {
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
