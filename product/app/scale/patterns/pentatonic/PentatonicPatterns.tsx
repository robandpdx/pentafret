import { range } from '@lib/utils/array/range'
import { scalePatternsNumber } from '@product/core/scale/ScaleType'
import { Text } from '@lib/ui/text'
import { VStack } from '@lib/ui/css/stack'
import { PentatonicPattern } from './PentatonicPattern'
import { getScaleName } from '@product/core/scale/getScaleName'
import { useScale } from '../../state/scale'

export const PentatonicPatterns = () => {
  const scale = useScale()

  const scaleName = getScaleName(scale)

  const title = `${scaleName} Patterns`

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
