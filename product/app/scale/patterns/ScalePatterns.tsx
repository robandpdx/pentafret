import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { range } from '@lib/utils/array/range'
import { match } from '@lib/utils/match'
import { getBluesScalePattern } from '@product/core/scale/blues/getBluesScalePattern'
import { getScaleName } from '@product/core/scale/getScaleName'
import { getPentatonicPattern } from '@product/core/scale/pentatonic/getPentatonicPattern'
import { scalePatternsNumber } from '@product/core/scale/ScaleType'
import { useMemo } from 'react'

import { stringsCount, tuning } from '../../guitar/config'
import { useScale } from '../state/scale'

import { ScalePattern } from './ScalePattern'

export const ScalePatterns = () => {
  const scale = useScale()

  const scaleName = getScaleName(scale)

  const patterns = useMemo(() => {
    const { type } = scale
    if (type === 'full') return undefined

    const generate = match(type, {
      pentatonic: () => getPentatonicPattern,
      blues: () => getBluesScalePattern,
    })

    return range(scalePatternsNumber).map((index) =>
      generate({ index, scale, stringsCount, tuning }),
    )
  }, [scale])

  if (!patterns) return null

  return (
    <VStack gap={60}>
      <VStack gap={8}>
        <Text
          centerHorizontally
          weight={800}
          size={32}
          color="contrast"
          as="h2"
        >
          {scaleName} Patterns
        </Text>
        <Text
          centerHorizontally
          weight={700}
          size={20}
          color="supporting"
          as="h4"
        >
          {scalePatternsNumber} Essential Shapes for Guitar Solos
        </Text>
      </VStack>
      {patterns.map((pattern, index) => (
        <ScalePattern key={index} value={pattern} index={index} />
      ))}
    </VStack>
  )
}
