import { range } from '@lib/utils/array/range'
import { scalePatternsNumber } from '@product/core/scale/ScaleType'
import { Text } from '@lib/ui/text'
import { chromaticNotesNames } from '@product/core/note'
import { useScale } from '../state/scale'
import { VStack } from '@lib/ui/css/stack'
import { PentatonicPattern } from './PentatonicPattern'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
export const PentatonicPatterns = () => {
  const { rootNote, type } = useScale()

  const noteName = chromaticNotesNames[rootNote]
  const scaleName = capitalizeFirstLetter(type)

  const title = `${noteName} ${scaleName} Scale Patterns`

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
          {scalePatternsNumber} Essential Shapes for Guitar Solos
        </Text>
      </VStack>
      {range(scalePatternsNumber).map((index) => (
        <PentatonicPattern key={index} index={index} />
      ))}
    </VStack>
  )
}
