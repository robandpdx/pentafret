import { IndexProp } from '@lib/ui/props'
import { useScale } from '../state/scale'
import { PentatonicScale, scaleNames } from '@product/core/scale'
import { chromaticNotesNames } from '@product/core/note'
import { stringsCount, tuning } from '../../guitar/config'
import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { Note } from '../../guitar/fretboard/Note'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getPentatonicPattern } from './getPentatonicPattern'

export const PentatonicPattern = ({
  index: patternIndex,
  scale,
}: IndexProp & { scale: PentatonicScale }) => {
  const { rootNote } = useScale()

  const notes = getPentatonicPattern({
    index: patternIndex,
    scale,
    rootNote,
    stringsCount,
    tuning,
  })

  const noteName = chromaticNotesNames[rootNote]
  const scaleName = scaleNames[scale]

  const title = `${noteName} ${scaleName} Pentatonic Pattern #${patternIndex + 1}`

  return (
    <VStack gap={40}>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
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
