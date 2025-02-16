import { VStack } from '@lib/ui/css/stack'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider, ScaleState } from './state/scale'
import { ScaleNotes } from './ScaleNotes'
import { PentatonicPatterns } from './pentatonic/PentatonicPatterns'
import { PageContainer } from '../layout/PageContainer'
import { ScaleManager } from './manage/ScaleManager'
import { ValueProp } from '@lib/ui/props'
import { isOneOf } from '@lib/utils/array/isOneOf'
import { pentatonicScales } from '@product/core/scale'

export const ScalePage = ({ value }: ValueProp<ScaleState>) => {
  const pentatonicScale = isOneOf(value.scale, pentatonicScales)

  return (
    <ScaleProvider value={value}>
      <PageContainer>
        <VStack gap={120}>
          <VStack gap={60}>
            <ScaleManager />
            <ScalePageTitle />
            <ScaleNotes />
          </VStack>
          {pentatonicScale && <PentatonicPatterns scale={pentatonicScale} />}
        </VStack>
      </PageContainer>
    </ScaleProvider>
  )
}
