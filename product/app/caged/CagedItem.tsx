import { vStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { CagedChord, cagedPositions } from '@product/core/chords/caged'
import { chromaticNotesNames } from '@product/core/note'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import styled from 'styled-components'

import { tuning } from '../guitar/config'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'

import { useCaged } from './state/caged'

const Container = styled.div`
  ${vStack({
    gap: 40,
  })}

  min-width: 320px;
  max-width: 400px;
`

const minVisibleFrets = 4

export const CagedItem = ({ value }: ValueProp<CagedChord>) => {
  const { view } = useCaged()
  const positions = cagedPositions[view][value]

  const lowestBassString = Math.max(
    ...positions
      .filter(
        (position) =>
          getNoteFromPosition({ tuning, position }) ===
          chromaticNotesNames.indexOf(value.toUpperCase()),
      )
      .map((position) => position.string),
  )

  const firstVisibleFret = Math.min(
    ...positions.map((position) => position.fret),
  )

  return (
    <Container>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {value.toUpperCase()} major {view}
      </Text>
      <Fretboard
        visibleFrets={{
          start: firstVisibleFret,
          end: Math.max(
            ...positions.map((position) => position.fret),
            firstVisibleFret + minVisibleFrets,
          ),
        }}
      >
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
