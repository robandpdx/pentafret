import { vStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { CagedChord, cagedPositions } from '@product/core/chords/caged'
import { getChordPrimaryPosition } from '@product/core/chords/getChordPrimaryPosition'
import { chromaticNotesNames } from '@product/core/note'
import { normalizeFretPositions } from '@product/core/note/normalizeFretPositions'
import styled from 'styled-components'

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
  const { view, tonality } = useCaged()
  const positions = normalizeFretPositions(
    cagedPositions[view][tonality][value],
  )

  const primaryPosition = getChordPrimaryPosition({
    positions,
    note: chromaticNotesNames.indexOf(value.toUpperCase()),
  })

  const firstVisibleFret = Math.min(
    ...positions.map((position) => position.fret),
  )

  return (
    <Container>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {value.toUpperCase()} {tonality} {view}
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
            kind={position === primaryPosition ? 'primary' : 'regular'}
          />
        ))}
      </Fretboard>
    </Container>
  )
}
