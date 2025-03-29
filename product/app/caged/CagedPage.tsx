import { HStack, VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/ui/props'
import { cagedChords } from '@product/core/chords/caged'

import { PageContainer } from '../layout/PageContainer'

import { CagedItem } from './CagedItem'
import { CagedPageTitle } from './CagedPageTitle'
import { ManageCagedChordPresense } from './manage/ManageCagedChordPresense'
import { ManageCagedView } from './manage/ManageCagedView'
import { CagedProvider, CagedState } from './state/caged'
import { CagedTemplatePageTitle } from './template/CagedTemplatePageTitle'
import { ManageCagedChord } from './template/manage/ManageCagedChord'

export const CagedPage = ({ value }: ValueProp<CagedState>) => (
  <CagedProvider value={value}>
    <PageContainer>
      <VStack gap={60}>
        <VStack gap={20} alignItems="center">
          <HStack wrap="wrap" gap={20}>
            <ManageCagedView />
            <ManageCagedChordPresense />
          </HStack>
          {value.chord && <ManageCagedChord />}
        </VStack>
        {value.chord ? <CagedTemplatePageTitle /> : <CagedPageTitle />}
        {value.chord ? (
          <p>Coming soon...</p>
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
