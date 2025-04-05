import { getLastItem } from '@lib/utils/array/getLastItem'
import { range } from '@lib/utils/array/range'
import { sum } from '@lib/utils/array/sum'
import { getNoteFret } from '@product/core/guitar/getNoteFret'
import { chromaticNotesNumber } from '@product/core/note'
import { normalizeFretPositions } from '@product/core/note/normalizeFretPositions'
import { NotePosition } from '@product/core/note/NotePosition'
import { getPentatonicRelativeTonalityRootNote } from '@product/core/scale/pentatonic/getPentatonicRelativeTonalityRootNote'
import { Scale } from '@product/core/scale/Scale'
import { scalePatterns } from '@product/core/scale/ScaleType'

import { standardTuning } from '../../guitar/tuning'

type Input = {
  index: number
  scale: Omit<Scale, 'type'>
}

const notesPerString = 2

export const getPentatonicPattern = (input: Input): NotePosition[] => {
  if (input.scale.tonality === 'major') {
    return getPentatonicPattern({
      ...input,
      scale: {
        ...input.scale,
        tonality: 'minor',
        rootNote: getPentatonicRelativeTonalityRootNote(input.scale),
      },
    })
  }

  const { index, scale } = input
  const pattern = scalePatterns.pentatonic[scale.tonality]

  const firstNote =
    (scale.rootNote + sum(pattern.slice(0, index))) % chromaticNotesNumber

  const result: NotePosition[] = []

  range(standardTuning.length * notesPerString).forEach((noteIndex) => {
    const string =
      standardTuning.length - Math.floor(noteIndex / notesPerString) - 1

    const openNote = standardTuning[string]

    const previousPosition = getLastItem(result)

    const getFret = () => {
      if (!previousPosition) {
        return getNoteFret({ openNote, note: firstNote })
      }

      const step = pattern[(noteIndex + index - 1) % pattern.length]

      const fret = previousPosition.fret + step

      if (noteIndex % 2 === 0) {
        const shift = string === 1 ? 4 : 5

        return fret - shift
      }

      return fret
    }

    const fret = getFret()

    result.push({
      string,
      fret,
    })
  })

  return normalizeFretPositions(result)
}
