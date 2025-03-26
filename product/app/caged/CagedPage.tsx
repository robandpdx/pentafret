import { HStack, VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { cagedChords } from '@product/core/chords/caged'

import { PageContainer } from '../layout/PageContainer'

import { CagedItem } from './CagedItem'
import { CagedPageTitle } from './CagedPageTitle'
import { ManageCagedView } from './manage/ManageCagedView'
import { CagedProvider, CagedState } from './state/caged'

export const CagedPage = ({ value }: ValueProp<CagedState>) => (
  <CagedProvider value={value}>
    <PageContainer>
      <VStack gap={60}>
        <VStack alignItems="center">
          <ManageCagedView />
        </VStack>
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
