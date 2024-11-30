import { Text } from '@lib/ui/text'
import { usePentatonic } from './state/pentatonic'
import { useRootNote } from './state/rootNote'
import { useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { scaleNames } from '@product/core/scale'

export const ScalePageTitle = () => {
  const [rootNote] = useRootNote()
  const [scale] = useScale()
  const [pentatonic] = usePentatonic()

  return (
    <Text centerHorizontally weight={800} size={32} color="contrast" as="h1">
      {chromaticNotesNames[rootNote]} {scaleNames[scale]}{' '}
      {pentatonic ? 'Pentatonic' : 'Scale'}
    </Text>
  )
}
