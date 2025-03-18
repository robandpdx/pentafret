import { VStack } from '@lib/ui/css/stack'
import { PageContainer } from '../layout/PageContainer'
import { CagedPageTitle } from './CagedPageTitle'

export const CagedPage = () => {
  return (
    <PageContainer>
      <VStack gap={120}>
        <VStack gap={60}>
          <CagedPageTitle />
        </VStack>
      </VStack>
    </PageContainer>
  )
}
