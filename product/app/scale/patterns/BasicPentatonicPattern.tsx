import { IndexProp } from '@lib/ui/props'
import { useScale } from '../state/scale'
import { BasicScale, pentatonicPatterns } from '@product/core/scale'
import { chromaticNotesNumber } from '@product/core/note'
import { stringsCount, tuning } from '../../guitar/config'
import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { Note } from '../../guitar/fretboard/Note'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { match } from '@lib/utils/match'
import { getRelativeBasicPentatonic } from '@product/core/scale/getRelativeBasicPentatonic'
import { useMemo } from 'react'
import { NotePosition } from '@product/core/note/NotePosition'
import { sum } from '@lib/utils/array/sum'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getNoteFret } from '@product/core/guitar/getNoteFret'
import { range } from '@lib/utils/array/range'
import { getLastItem } from '@lib/utils/array/getLastItem'

export const BasicPentatonicPattern = ({
  index: patternIndex,
  scale,
}: IndexProp & { scale: BasicScale }) => {
  const { rootNote } = useScale()

  const pattern = pentatonicPatterns.minor

  const notes = useMemo(() => {
    const minorRootNote = match(scale, {
      minor: () => rootNote,
      major: () => getRelativeBasicPentatonic({ scale, rootNote }).rootNote,
    })

    const firstNote =
      (minorRootNote + sum(pattern.slice(0, patternIndex))) %
      chromaticNotesNumber

    const result: NotePosition[] = []

    range(stringsCount * 2).forEach((index) => {
      const string = stringsCount - Math.floor(index / 2) - 1

      const openNote = tuning[string]

      const previousPosition = getLastItem(result)

      const getFret = () => {
        if (!previousPosition) {
          return getNoteFret({ openNote, note: firstNote })
        }

        const step = pattern[(patternIndex + index - 1) % pattern.length]

        const fret = previousPosition.fret + step

        if (index % 2 === 0) {
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

    if (result.some((position) => position.fret < -1)) {
      return result.map((position) => ({
        ...position,
        fret: position.fret + chromaticNotesNumber,
      }))
    }

    return result
  }, [patternIndex, pattern, rootNote, scale])

  const title = `Pentatonic Pattern #${patternIndex + 1}`

  return (
    <VStack gap={24}>
      <Text centerHorizontally color="contrast" as="h3" weight="600" size={16}>
        {title}
      </Text>
      <Fretboard>
        {notes.map((position) => {
          const note = getNoteFromPosition({ tuning, position })

          return (
            <Note
              key={`${position.string}-${position.fret}`}
              {...position}
              kind={rootNote === note ? 'primary' : 'regular'}
            />
          )
        })}
      </Fretboard>
    </VStack>
  )
}
