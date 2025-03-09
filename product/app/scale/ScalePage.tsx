import { VStack } from '@lib/ui/css/stack'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider } from './state/scale'
import { ScaleNotes } from './ScaleNotes'
import { PageContainer } from '../layout/PageContainer'
import { ScaleManager } from './manage/ScaleManager'
import { ValueProp } from '@lib/ui/props'
import { Scale } from '@product/core/scale/Scale'
import { ScalePatterns } from './patterns/ScalePatterns'

export const ScalePage = ({ value }: ValueProp<Scale>) => {
  return (
    <ScaleProvider value={value}>
      <PageContainer>
        <VStack gap={120}>
          <VStack gap={60}>
            <ScaleManager />
            <ScalePageTitle />
            <ScaleNotes />
          </VStack>
          <ScalePatterns />
        </VStack>
      </PageContainer>
    </ScaleProvider>
  )
}
