import { Text } from '@lib/ui/text'
import { useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { scaleNames } from '@product/core/scale'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const ScalePageTitle = () => {
  const { scale, rootNote, scaleType } = useScale()

  return (
    <Text centerHorizontally weight={800} size={32} color="contrast" as="h1">
      {chromaticNotesNames[rootNote]} {scaleNames[scale]}{' '}
      {capitalizeFirstLetter(scaleType)}
    </Text>
  )
}
