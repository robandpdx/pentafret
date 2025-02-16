import { range } from '@lib/utils/array/range'
import { BasicPentatonicPattern } from './BasicPentatonicPattern'
import {
  BasicScale,
  pentatonicNotesNumber,
  pentatonicPatterns,
  scaleNames,
} from '@product/core/scale'
import { Text } from '@lib/ui/text'
import { chromaticNotesNames } from '@product/core/note'
import { useScale } from '../state/scale'
import { VStack } from '@lib/ui/css/stack'

export const BasicPentatonicPatterns = ({ scale }: { scale: BasicScale }) => {
  const { rootNote } = useScale()

  const noteName = chromaticNotesNames[rootNote]
  const scaleName = scaleNames[scale]

  const title = `${noteName} ${scaleName} Pentatonic Patterns`

  return (
    <VStack gap={60}>
      <VStack gap={8}>
        <Text
          centerHorizontally
          weight={800}
          size={32}
          color="contrast"
          as="h2"
        >
          {title}
        </Text>
        <Text
          centerHorizontally
          weight={700}
          size={20}
          color="supporting"
          as="h4"
        >
          {pentatonicPatterns[scale].length} Essential Shapes for Guitar Solos
        </Text>
      </VStack>
      {range(pentatonicNotesNumber).map((index) => (
        <BasicPentatonicPattern key={index} index={index} scale={scale} />
      ))}
    </VStack>
  )
}
