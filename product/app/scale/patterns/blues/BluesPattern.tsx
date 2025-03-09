import { IndexProp } from '@lib/ui/props'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getScaleName } from '@product/core/scale/getScaleName'
import { stringsCount, tuning } from '../../../guitar/config'
import { Fretboard } from '../../../guitar/fretboard/Fretboard'
import { useScale } from '../../state/scale'
import { getBluesScalePattern } from '@product/core/scale/blues/getBluesScalePattern'
import { ScaleNote } from '../../ScaleNote'
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
