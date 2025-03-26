import { VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { Scale } from '@product/core/scale/Scale'

import { PageContainer } from '../layout/PageContainer'

import { ScaleManager } from './manage/ScaleManager'
import { ScalePatterns } from './patterns/ScalePatterns'
import { ScaleNotes } from './ScaleNotes'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider } from './state/scale'

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
