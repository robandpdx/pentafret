import { VStack } from '@lib/ui/css/stack'
import { cagedChords } from '@product/core/chords/caged'

import { CagedTemplatePart } from './CagedTemplatePart'

export const CagedTemplate = () => {
  return (
    <VStack gap={60}>
      {cagedChords.map((_, index) => (
        <CagedTemplatePart key={index} index={index} />
      ))}
    </VStack>
  )
}
