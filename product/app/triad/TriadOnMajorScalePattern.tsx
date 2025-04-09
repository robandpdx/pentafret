import { VStack } from '@lib/ui/css/stack'
import { IndexProp } from '@lib/ui/props'
import { getScaleName } from '@product/core/scale/getScaleName'
import { getFullScalePattern } from '@product/core/scale/getScalePattern/full'
import { Scale } from '@product/core/scale/Scale'
import { getTriadName } from '@product/core/triads'

import { Fretboard } from '../guitar/fretboard/Fretboard'
import { Note } from '../guitar/fretboard/Note'
import { SectionTitle } from '../ui/SectionTitle'

import { useTriad } from './state/triad'

export const TriadOnMajorScalePattern = ({ index }: IndexProp) => {
  const { rootNote, index: triadIndex } = useTriad()

  const scale: Scale = {
    tonality: 'major',
    rootNote,
    type: 'full',
  }

  const scalePattern = getFullScalePattern({
    scale,
    index,
  })

  const title = `${getTriadName(triadIndex)} on ${getScaleName(scale)} Pattern #${
    index + 1
  }`

  return (
    <VStack gap={40}>
      <SectionTitle>{title}</SectionTitle>
      <Fretboard>
        {scalePattern.map((position) => {
          return (
            <Note key={`${position.string}-${position.fret}`} {...position} />
          )
        })}
      </Fretboard>
    </VStack>
  )
}
