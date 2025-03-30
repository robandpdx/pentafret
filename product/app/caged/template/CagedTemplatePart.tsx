import { VStack } from '@lib/ui/css/stack'
import { IndexProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { rotateArray } from '@lib/utils/array/rotateArray'
import { sum } from '@lib/utils/array/sum'
import { match } from '@lib/utils/match'
import {
  CagedChord,
  cagedChords,
  cagedPositions,
  cagedTemplateBarreChords,
  cagedTemplateDistances,
  cagedTemplateOpenChords,
} from '@product/core/chords/caged'
import { chromaticNotesNames } from '@product/core/note'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { useMemo } from 'react'

import { tuning } from '../../guitar/config'
import { Fretboard } from '../../guitar/fretboard/Fretboard'
import { Note } from '../../guitar/fretboard/Note'

import { useCagedTemplate } from './state/cagedTemplate'

const getFormChord = (chord: CagedChord, index: number) =>
  cagedChords[(cagedChords.indexOf(chord) + index) % cagedChords.length]

export const CagedTemplatePart = ({ index }: IndexProp) => {
  const { chord, view } = useCagedTemplate()

  const form = getFormChord(chord, index)

  const positions = useMemo(() => {
    return match(view, {
      arpeggio: () => cagedPositions.arpeggio[form],
      chord: () =>
        index === 0
          ? cagedTemplateOpenChords[form]
          : cagedTemplateBarreChords[form],
    })
  }, [form, index, view])

  const lowestBassString = Math.max(
    ...positions
      .filter(
        (position) =>
          getNoteFromPosition({ tuning, position }) ===
          chromaticNotesNames.indexOf(form.toUpperCase()),
      )
      .map((position) => position.string),
  )

  const distances = rotateArray(
    cagedTemplateDistances,
    cagedChords.indexOf(chord),
  )

  return (
    <VStack gap={40}>
      <Text centerHorizontally color="contrast" as="h3" weight="700" size={18}>
        {index === 0
          ? `Open ${chord.toUpperCase()} chord`
          : `${chord.toUpperCase()} ("${form.toUpperCase()} form" barre chord)`}
      </Text>
      <Fretboard>
        {positions.map((position) => {
          const shift = sum(distances.slice(0, index))
          return (
            <Note
              key={`${position.string}-${position.fret}`}
              string={position.string}
              fret={position.fret + shift}
              kind={
                position.string === lowestBassString ? 'primary' : 'regular'
              }
            />
          )
        })}
      </Fretboard>
    </VStack>
  )
}
