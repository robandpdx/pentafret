import { IndexProp } from '@lib/ui/props'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getScaleName } from '@product/core/scale/getScaleName'
import { stringsCount, tuning } from '../../../guitar/config'
import { Fretboard } from '../../../guitar/fretboard/Fretboard'
import { Note } from '../../../guitar/fretboard/Note'
import { useScale } from '../../state/scale'
import { getBluesScalePattern } from '@product/core/scale/blues/getBluesScalePattern'
export const BluesPattern = ({ index }: IndexProp) => {
  const scale = useScale()

  const notes = getBluesScalePattern({
    index,
    scale,
    stringsCount,
    tuning,
  })

  const scaleName = getScaleName(scale)

  const title = `${scaleName} Pattern #${index + 1}`

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
