import { IndexProp } from '@lib/ui/props'
import { useScale } from '../state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { stringsCount, tuning } from '../../guitar/config'
import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { Note } from '../../guitar/fretboard/Note'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getPentatonicPattern } from './getPentatonicPattern'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const PentatonicPattern = ({ index: patternIndex }: IndexProp) => {
  const scale = useScale()

  const notes = getPentatonicPattern({
    index: patternIndex,
    scale,
    stringsCount,
    tuning,
  })

  const noteName = chromaticNotesNames[scale.rootNote]
  const scaleName = capitalizeFirstLetter(scale.type)

  const title = `${noteName} ${scaleName} Scale Pattern #${patternIndex + 1}`

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
              kind={scale.rootNote === note ? 'primary' : 'regular'}
            />
          )
        })}
      </Fretboard>
    </VStack>
  )
}
