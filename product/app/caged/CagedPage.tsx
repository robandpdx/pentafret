import { HStack, VStack } from '@lib/ui/css/stack'
import { PageContainer } from '../layout/PageContainer'
import { CagedPageTitle } from './CagedPageTitle'
import { cagedChords } from '@product/core/chords/caged'
import { CagedChordItem } from './CagedChordItem'

export const CagedPage = () => {
  return (
    <PageContainer>
      <VStack gap={120}>
        <VStack gap={60}>
          <CagedPageTitle />
          <HStack
            fullWidth
            gap={60}
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
          >
            {cagedChords.map((chord) => (
              <CagedChordItem key={chord} value={chord} />
            ))}
          </HStack>
        </VStack>
      </VStack>
    </PageContainer>
  )
}
