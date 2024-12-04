import { ComponentWithIndexProps } from '@lib/ui/props'
import { useScale } from '../state/scale'
import { pentatonicPatterns } from '@product/core/scale'
import { getScaleNotes } from '@product/core/scale/getScaleNotes'
import { range } from '@lib/utils/array/range'
import { chromaticNotesNumber } from '@product/core/note'
import { stringsCount, tuning, visibleFrets } from '../../guitar/config'
import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { Note } from '../../guitar/fretboard/Note'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'

export const PentatonicPattern = ({ index }: ComponentWithIndexProps) => {
  const { scale, rootNote } = useScale()

  const pattern = pentatonicPatterns[scale]

  const notes = getScaleNotes({
    pattern,
    rootNote,
  })

  const title = `Pentatonic Pattern #${index + 1}`

  return (
    <VStack gap={24}>
      <Text centerHorizontally color="contrast" as="h3" weight="600" size={16}>
        {title}
      </Text>
      <Fretboard>
        {range(stringsCount).map((string) => {
          const openNote = tuning[string]

          const stringNotes = withoutUndefined(
            range(visibleFrets + 1).map((index) => {
              const note = (openNote + index) % chromaticNotesNumber
              const fret = index === 0 ? null : index - 1

              if (!notes.includes(note)) return

              return { note, fret }
            }),
          ).slice(index, index + 2)

          return stringNotes.map(({ note, fret }) => {
            return (
              <Note
                key={`${string}-${index}`}
                string={string}
                fret={fret}
                value={note}
              />
            )
          })
        })}
      </Fretboard>
    </VStack>
  )
}
