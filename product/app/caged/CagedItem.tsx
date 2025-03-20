import { ValueProp } from '@lib/ui/props'
import {
  cagedArpeggios,
  CagedChord,
  openCagedChords,
} from '@product/core/chords/caged'
import { vStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'
import { cagedConfig } from './config'
import styled from 'styled-components'
import { useCaged } from './state/caged'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { tuning } from '../guitar/config'
import { chromaticNotesNames } from '@product/core/note'

const Container = styled.div`
  ${vStack({
    gap: 40,
  })}

  min-width: 320px;
  max-width: 400px;
`

const positionsRecord = {
  chord: openCagedChords,
  arpeggio: cagedArpeggios,
}

export const CagedItem = ({ value }: ValueProp<CagedChord>) => {
  const { view } = useCaged()
  const positions = positionsRecord[view][value]

  const lowestBassString = Math.max(
    ...positions
      .filter(
        (position) =>
          getNoteFromPosition({ tuning, position }) ===
          chromaticNotesNames.indexOf(value.toUpperCase()),
      )
      .map((position) => position.string),
  )

  return (
    <Container>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {value.toUpperCase()} major {view}
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
