import { VStack } from '@lib/ui/css/stack'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider, ScaleState } from './state/scale'
import { ComponentWithValueProps } from '@lib/ui/props'
import { ScaleNotes } from './ScaleNotes'
import { PentatonicPatterns } from './patterns/PentatonicPatterns'
import { PageContainer } from '../layout/PageContainer'
import { ScaleManager } from './manage/ScaleManager'

export const ScalePage = ({ value }: ComponentWithValueProps<ScaleState>) => {
  return (
    <ScaleProvider value={value}>
      <PageContainer>
        <VStack gap={120}>
          <VStack gap={60}>
            <ScaleManager />
            <ScalePageTitle />
            <ScaleNotes />
          </VStack>
          {value.scaleType === 'pentatonic' && <PentatonicPatterns />}
        </VStack>
      </PageContainer>
    </ScaleProvider>
  )
}
