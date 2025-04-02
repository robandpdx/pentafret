import { VStack } from '@lib/ui/css/stack'
import { IndexProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { match } from '@lib/utils/match'
import { getCagedTemplateForm } from '@product/core/chords/getCagedTemplateForm'
import { getCagedTemplatePartPositions } from '@product/core/chords/getCagedTemplatePartPositions'
import { getChordPrimaryPosition } from '@product/core/chords/getChordPrimaryPosition'
import { chromaticNotesNames } from '@product/core/note'
import { useMemo } from 'react'

import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { Note } from '../../guitar/fretboard/Note'

import { useCagedTemplate } from './state/cagedTemplate'

export const CagedTemplatePart = ({ index }: IndexProp) => {
  const { chord, view, tonality } = useCagedTemplate()

  const form = getCagedTemplateForm(chord, index)

  const positions = useMemo(() => {
    return getCagedTemplatePartPositions({
      chord,
      view,
      index,
      tonality,
    })
  }, [chord, index, tonality, view])

  const primaryPosition = getChordPrimaryPosition({
    positions,
    note: chromaticNotesNames.indexOf(chord.toUpperCase()),
  })

  const title = useMemo(() => {
    return match(view, {
      arpeggio: () => {
        const isIncomplete = positions.some((position) => position.fret < -1)
        if (isIncomplete) {
          return `Open ${chord.toUpperCase()} chord (incomplete arpeggio)`
        }
        return `${chord.toUpperCase()} arpeggio ("${form.toUpperCase()} form")`
      },
      chord: () =>
        index === 0
          ? `Open ${chord.toUpperCase()} chord`
          : `${chord.toUpperCase()} ("${form.toUpperCase()} form" barre chord)`,
    })
  }, [chord, form, index, positions, view])

  return (
    <VStack gap={40}>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {title}
      </Text>
      <Fretboard>
        {positions
          .filter((position) => position.fret >= -1)
          .map((position) => (
            <Note
              key={`${position.string}-${position.fret}`}
              string={position.string}
              fret={position.fret}
              kind={position === primaryPosition ? 'primary' : 'regular'}
            />
          ))}
      </Fretboard>
    </VStack>
  )
}
