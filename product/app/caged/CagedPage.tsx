import { HStack, VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { cagedChords } from '@product/core/chords/caged'

import { PageContainer } from '../layout/PageContainer'

import { CagedItem } from './CagedItem'
import { CagedPageTitle } from './CagedPageTitle'
import { ManageCagedChordPresense } from './manage/ManageCagedChordPresense'
import { ManageCagedTonality } from './manage/ManageCagedTonality'
import { ManageCagedView } from './manage/ManageCagedView'
import { CagedProvider, CagedState } from './state/caged'
import { CagedTemplate } from './template/CagedTemplate'
import { CagedTemplatePageTitle } from './template/CagedTemplatePageTitle'
import { ManageCagedChord } from './template/manage/ManageCagedChord'

export const CagedPage = ({ value }: ValueProp<CagedState>) => (
  <CagedProvider value={value}>
    <PageContainer>
      <VStack gap={60}>
        <VStack gap={20} alignItems="center">
          <HStack wrap="wrap" gap={20}>
            <ManageCagedView />
            <ManageCagedTonality />
            <ManageCagedChordPresense />
          </HStack>
          {value.chord && <ManageCagedChord />}
        </VStack>
        {value.chord ? <CagedTemplatePageTitle /> : <CagedPageTitle />}
        {value.chord ? (
          <CagedTemplate />
        ) : (
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
        )}
      </VStack>
    </PageContainer>
  </CagedProvider>
)
