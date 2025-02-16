import { range } from '@lib/utils/array/range'
import { scaleNames, PentatonicScale, scalePatterns } from '@product/core/scale'
import { Text } from '@lib/ui/text'
import { chromaticNotesNames } from '@product/core/note'
import { useScale } from '../state/scale'
import { VStack } from '@lib/ui/css/stack'
import { PentatonicPattern } from './PentatonicPattern'

export const PentatonicPatterns = ({ scale }: { scale: PentatonicScale }) => {
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
          {scalePatterns[scale].length} Essential Shapes for Guitar Solos
        </Text>
      </VStack>
      {range(scalePatterns[scale].length).map((index) => (
        <PentatonicPattern key={index} index={index} scale={scale} />
      ))}
    </VStack>
  )
}
