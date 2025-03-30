import { VStack } from '@lib/ui/css/stack'
import { range } from '@lib/utils/array/range'
import { cagedChords } from '@product/core/chords/caged'

import { CagedTemplatePart } from './CagedTemplatePart'

export const CagedTemplate = () => {
  return (
    <VStack gap={60}>
      {range(cagedChords.length + 1).map((index) => (
        <CagedTemplatePart key={index} index={index} />
      ))}
    </VStack>
  )
}
