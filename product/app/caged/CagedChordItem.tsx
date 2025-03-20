import { ValueProp } from '@lib/ui/props'
import { CagedChord, openCagedChords } from '@product/core/chords/caged'
import { vStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'
import { cagedConfig } from './config'
import styled from 'styled-components'

const Container = styled.div`
  ${vStack({
    gap: 40,
  })}

  min-width: 320px;
  max-width: 400px;
`

export const CagedChordItem = ({ value }: ValueProp<CagedChord>) => {
  const positions = openCagedChords[value]

  const lowestBassString = Math.max(
    ...positions.map((position) => position.string),
  )

  return (
    <Container>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {value.toUpperCase()} major chord
      </Text>
      <Fretboard visibleFrets={cagedConfig.visibleFrets}>
        {positions.map((position) => (
          <Note
            key={`${position.string}-${position.fret}`}
            string={position.string}
            fret={position.fret}
            kind={position.string === lowestBassString ? 'primary' : 'regular'}
          />
        ))}
      </Fretboard>
    </Container>
  )
}
