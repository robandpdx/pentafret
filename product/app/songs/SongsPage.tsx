import { VStack } from '@lib/ui/css/stack'
import { PageContainer } from '../layout/PageContainer'
import { SongsPageTitle } from './SongsPageTitle'
import { guitarTheoryTopics } from '@product/core/songs/GuitarTheoryTopic'
import { SongsSection } from './SongsSection'

export const SongsPage = () => {
  return (
    <PageContainer contentMaxWidth={640}>
      <VStack gap={60}>
        <SongsPageTitle />
        {guitarTheoryTopics.map((topic) => (
          <SongsSection key={topic} value={topic} />
        ))}
      </VStack>
    </PageContainer>
  )
}
