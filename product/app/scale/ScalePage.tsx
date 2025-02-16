import { VStack } from '@lib/ui/css/stack'
import { ScalePageTitle } from './ScalePageTitle'
import { ScaleProvider, ScaleState } from './state/scale'
import { ScaleNotes } from './ScaleNotes'
import { BasicPentatonicPatterns } from './patterns/BasicPentatonicPatterns'
import { PageContainer } from '../layout/PageContainer'
import { ScaleManager } from './manage/ScaleManager'
import { ValueProp } from '@lib/ui/props'
import { isOneOf } from '@lib/utils/array/isOneOf'
import { basicScales } from '@product/core/scale'

export const ScalePage = ({ value }: ValueProp<ScaleState>) => {
  const basicScale = isOneOf(value.scale, basicScales)

  return (
    <ScaleProvider value={value}>
      <PageContainer>
        <VStack gap={120}>
          <VStack gap={60}>
            <ScaleManager />
            <ScalePageTitle />
            <ScaleNotes />
          </VStack>
          {value.scaleType === 'pentatonic' && basicScale && (
            <BasicPentatonicPatterns scale={basicScale} />
          )}
        </VStack>
      </PageContainer>
    </ScaleProvider>
  )
}
