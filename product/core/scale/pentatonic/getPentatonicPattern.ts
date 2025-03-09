import { sum } from '@lib/utils/array/sum'
import { getLastItem } from '@lib/utils/array/getLastItem'
import { range } from '@lib/utils/array/range'
import { getNoteFret } from '@product/core/guitar/getNoteFret'
import { chromaticNotesNumber } from '@product/core/note'
import { NotePosition } from '@product/core/note/NotePosition'
import { Scale } from '@product/core/scale/Scale'
import { scalePatterns } from '@product/core/scale/ScaleType'
import { getPentatonicRelativeTonalityRootNote } from '@product/core/scale/pentatonic/getPentatonicRelativeTonalityRootNote'
import { normalizeFretPositions } from '@product/core/note/normalizeFretPositions'

type Input = {
  index: number
  scale: Omit<Scale, 'type'>
  stringsCount: number
  tuning: number[]
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

  const { index, scale, stringsCount, tuning } = input
  const pattern = scalePatterns.pentatonic[scale.tonality]

  const firstNote =
    (scale.rootNote + sum(pattern.slice(0, index))) % chromaticNotesNumber

  const result: NotePosition[] = []

  range(stringsCount * notesPerString).forEach((noteIndex) => {
    const string = stringsCount - Math.floor(noteIndex / notesPerString) - 1

    const openNote = tuning[string]

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

    result.push({
      string,
      fret: getFret(),
    })
  })

  return normalizeFretPositions(result)
}
