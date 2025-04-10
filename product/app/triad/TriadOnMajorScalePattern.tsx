import { VStack } from '@lib/ui/css/stack'
import { rotateArray } from '@lib/utils/array/rotateArray'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getScaleName } from '@product/core/scale/getScaleName'
import { getScaleNotes } from '@product/core/scale/getScaleNotes'
import { getFullScalePattern } from '@product/core/scale/getScalePattern/full'
import { Scale } from '@product/core/scale/Scale'
import { scalePatterns } from '@product/core/scale/ScaleType'
import { getTriadName } from '@product/core/triads'

import { Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'
import { SectionTitle } from '../ui/SectionTitle'

import { useTriad } from './state/triad'

const triadScaleDegrees = [1, 3, 5]

export const TriadOnMajorScalePattern = ({
  scalePatternIndex,
}: {
  scalePatternIndex: number
}) => {
  const { rootNote, index: triadIndex } = useTriad()

  const scale: Scale = {
    tonality: 'major',
    rootNote,
    type: 'full',
  }

  const scalePattern = getFullScalePattern({
    scale,
    index: scalePatternIndex,
  })

  const scaleNotes = rotateArray(
    getScaleNotes({
      rootNote,
      pattern: scalePatterns.full[scale.tonality],
    }),
    triadIndex,
  )

  const title = `${getTriadName(triadIndex)} on ${getScaleName(scale)} Pattern #${
    scalePatternIndex + 1
  }`

  return (
    <VStack gap={40}>
      <SectionTitle>{title}</SectionTitle>
      <Fretboard>
        {scalePattern.map((position) => {
          const scaleDegree =
            scaleNotes.indexOf(getNoteFromPosition({ position })) + 1

          const isTriadNote = triadScaleDegrees.includes(scaleDegree)

          return (
            <Note
              key={`${position.string}-${position.fret}`}
              {...position}
              kind={isTriadNote ? 'primary' : undefined}
            >
              {scaleDegree}
            </Note>
          )
        })}
      </Fretboard>
    </VStack>
  )
}
