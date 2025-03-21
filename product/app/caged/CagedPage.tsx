import { HStack, VStack } from '@lib/ui/css/stack'
import { PageContainer } from '../layout/PageContainer'
import { CagedPageTitle } from './CagedPageTitle'
import { cagedChords } from '@product/core/chords/caged'
import { CagedProvider, CagedState } from './state/caged'
import { ValueProp } from '@lib/ui/props'
import { CagedManager } from './manage/CagedManager'
import { CagedItem } from './CagedItem'

type CagedPageProps = ValueProp<CagedState>

export const CagedPage = ({ value }: CagedPageProps) => {
  return (
    <CagedProvider value={value}>
      <PageContainer>
        <VStack gap={60}>
          <CagedManager />
          <CagedPageTitle />
          <HStack
            fullWidth
            gap={60}
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
          >
            {cagedChords.map((chord) => (
              <CagedItem key={chord} value={chord} />
            ))}
          </HStack>
        </VStack>
      </PageContainer>
    </CagedProvider>
  )
}
