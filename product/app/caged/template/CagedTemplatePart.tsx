import { VStack } from '@lib/ui/css/stack'
import { IndexProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { CagedChord, cagedChords } from '@product/core/chords/caged'

import { Fretboard } from '../../guitar/fretboard/Fretboard'

import { useCagedTemplate } from './state/cagedTemplate'

const getFormChord = (chord: CagedChord, index: number) =>
  cagedChords[(cagedChords.indexOf(chord) + index) % cagedChords.length]

export const CagedTemplatePart = ({ index }: IndexProp) => {
  const { chord } = useCagedTemplate()

  return (
    <VStack gap={40}>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {index === 0
          ? `Open ${chord.toUpperCase()} chord`
          : `${chord.toUpperCase()} ("${getFormChord(chord, index).toUpperCase()} form" barre chord)`}
      </Text>
      <Fretboard>coming sooon</Fretboard>
    </VStack>
  )
}
