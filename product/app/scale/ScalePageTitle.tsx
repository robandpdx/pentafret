import { Text } from '@lib/ui/text'
import { useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { scaleNames } from '@product/core/scale'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

export const ScalePageTitle = () => {
  const { scale, rootNote, scaleType } = useScale()

  const noteName = chromaticNotesNames[rootNote]
  const scaleName = scaleNames[scale]
  const scaleTypeName = capitalizeFirstLetter(scaleType)

  const title = `${noteName} ${scaleName} ${scaleTypeName} on Guitar`
  const description = `Learn how to play the ${noteName} ${scaleName} ${scaleTypeName} on the guitar. Explore notes on the fretboard and discover pentatonic and full scale patterns.`

  return (
    <>
      <Text centerHorizontally weight={800} size={32} color="contrast" as="h1">
        {title}
      </Text>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
