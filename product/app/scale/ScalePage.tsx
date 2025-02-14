import { VStack } from '@lib/ui/css/stack'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider, ScaleState } from './state/scale'
import { ScaleNotes } from './ScaleNotes'
import { PentatonicPatterns } from './patterns/PentatonicPatterns'
import { PageContainer } from '../layout/PageContainer'
import { ScaleManager } from './manage/ScaleManager'
import { ValueProp } from '@lib/ui/props'

export const ScalePage = ({ value }: ValueProp<ScaleState>) => {
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
