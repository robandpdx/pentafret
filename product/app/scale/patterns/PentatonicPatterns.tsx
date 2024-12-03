import { range } from '@lib/utils/array/range'
import { PentatonicPattern } from './PentatonicPattern'
import { pentatonicNotesNumber, scaleNames } from '@product/core/scale'
import { Text } from '@lib/ui/text'
import { chromaticNotesNames } from '@product/core/note'
import { useScale } from '../state/scale'
import { VStack } from '@lib/ui/css/stack'

export const PentatonicPatterns = () => {
  const { rootNote, scale } = useScale()

  const noteName = chromaticNotesNames[rootNote]
  const scaleName = scaleNames[scale]

  const title = `${noteName} ${scaleName} Pentatonic Patterns`

  return (
    <VStack gap={60}>
      <Text centerHorizontally weight={800} size={32} color="contrast" as="h2">
        {title}
      </Text>
      {range(pentatonicNotesNumber).map((index) => (
        <PentatonicPattern key={index} index={index} />
      ))}
    </VStack>
  )
}
