import { ValueProp } from '@lib/ui/props'
import { CagedChord, openCagedChords } from '@product/core/chords/caged'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'

export const CagedChordItem = ({ value }: ValueProp<CagedChord>) => {
  const positions = openCagedChords[value]
  const chordName = value.toUpperCase()

  const lowestBassString = Math.max(
    ...positions.map((position) => position.string),
  )

  return (
    <VStack gap={40}>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {chordName} Chord
      </Text>
      <Fretboard>
        {positions.map((position) => (
          <Note
            key={`${position.string}-${position.fret}`}
            string={position.string}
            fret={position.fret}
            kind={position.string === lowestBassString ? 'primary' : 'regular'}
          />
        ))}
      </Fretboard>
    </VStack>
  )
}
