import { VStack } from '@lib/ui/css/stack'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { PageTitle } from '../ui/PageTitle'

export const SongsPageTitle = () => {
  const title = 'Guitar Songs Library | Practice Songs by Scale'
  const description =
    'Interactive collection of songs organized by scale. Track your progress and master songs part by part.'

  return (
    <VStack>
      <PageMetaTags title={title} description={description} />
      <PageTitle>Guitar Songs</PageTitle>
    </VStack>
  )
}
