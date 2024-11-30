import { Text } from '@lib/ui/text'
import { useRootNote } from './state/rootNote'
import { useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { scaleNames } from '@product/core/scale'
import { useScaleType } from './state/scaleType'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const ScalePageTitle = () => {
  const [rootNote] = useRootNote()
  const [scale] = useScale()
  const [scaleType] = useScaleType()

  return (
    <Text centerHorizontally weight={800} size={32} color="contrast" as="h1">
      {chromaticNotesNames[rootNote]} {scaleNames[scale]}{' '}
      {capitalizeFirstLetter(scaleType)}
    </Text>
  )
}
