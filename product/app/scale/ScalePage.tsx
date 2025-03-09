import { VStack } from '@lib/ui/css/stack'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider } from './state/scale'
import { ScaleNotes } from './ScaleNotes'
import { PageContainer } from '../layout/PageContainer'
import { ScaleManager } from './manage/ScaleManager'
import { ValueProp } from '@lib/ui/props'
import { Scale } from '@product/core/scale/Scale'
import { BluesPatterns } from './patterns/blues/BluesPatterns'
import { PentatonicPatterns } from './patterns/pentatonic/PentatonicPatterns'
import { PartialMatch } from '@lib/ui/base/PartialMatch'

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
          <PartialMatch
            value={value.type}
            if={{
              pentatonic: () => <PentatonicPatterns />,
              blues: () => <BluesPatterns />,
            }}
          />
        </VStack>
      </PageContainer>
    </ScaleProvider>
  )
}
