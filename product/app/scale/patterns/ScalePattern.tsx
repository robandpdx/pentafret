import { VStack } from '@lib/ui/css/stack'
import { IndexProp, ValueProp } from '@lib/ui/props'
import { NotePosition } from '@product/core/note/NotePosition'
import { getScaleName } from '@product/core/scale/getScaleName'

import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { SectionTitle } from '../../ui/SectionTitle'
import { ScaleNote } from '../ScaleNote'
import { useScale } from '../state/scale'

export const ScalePattern = ({
  value,
  index,
}: ValueProp<NotePosition[]> & IndexProp) => {
  const scale = useScale()

  const scaleName = getScaleName(scale)

  const title = `${scaleName} Pattern #${index + 1}`

  return (
    <VStack gap={40}>
      <SectionTitle>{title}</SectionTitle>
      <Fretboard>
        {value.map((position) => {
          return (
            <ScaleNote
              key={`${position.string}-${position.fret}`}
              {...position}
            />
          )
        })}
      </Fretboard>
    </VStack>
  )
}
