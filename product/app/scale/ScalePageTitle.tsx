import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { VStack } from '@lib/ui/css/stack'
import { ScalePageSubtitle } from './ScalePageSubtitle'
import { getScaleName } from '@product/core/scale/getScaleName'
import { useScale } from './state/scale'
import { PageTitle } from '../ui/PageTitle'
import { PageSubtitle } from '../ui/PageSubtitle'

export const ScalePageTitle = () => {
  const scale = useScale()

  const name = getScaleName(scale)

  const title = `${name} on Guitar`
  const description = `Learn how to play the ${name} on the guitar. Explore notes on the fretboard and discover pentatonic and full scale patterns.`

  return (
    <>
      <VStack alignItems="center" gap={8}>
        <PageTitle>{title}</PageTitle>
        <PageSubtitle>
          <ScalePageSubtitle />
        </PageSubtitle>
      </VStack>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
