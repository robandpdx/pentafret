import { VStack } from '@lib/ui/css/stack'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { PageTitle } from '../ui/PageTitle'
import { PageSubtitle } from '../ui/PageSubtitle'

export const SongsPageTitle = () => {
  const title = 'Popular Songs by Guitar Theory Elements'
  const description =
    'Discover popular songs organized by the guitar theory elements they use. Learn which famous tracks utilize pentatonic scales, blues scales, barre chords, and other guitar techniques.'

  return (
    <VStack>
      <PageMetaTags title={title} description={description} />
      <VStack alignItems="center" gap={8}>
        <PageTitle>Guitar Theory in Popular Songs</PageTitle>
        <PageSubtitle>
          Songs referenced from "Fretboard Theory" by Desi Serna.
        </PageSubtitle>
      </VStack>
    </VStack>
  )
}
