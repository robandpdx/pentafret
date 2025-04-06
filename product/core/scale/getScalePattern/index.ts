import { Scale } from '../Scale'
import { ScaleType } from '../ScaleType'

import { getBluesScalePattern } from './blues'
import { getFullScalePattern } from './full'
import { getPentatonicPattern } from './pentatonic'
import { ScalePatternResolver } from './ScalePatternResolver'

const resolvers: Record<ScaleType, ScalePatternResolver> = {
  blues: getBluesScalePattern,
  full: getFullScalePattern,
  pentatonic: getPentatonicPattern,
}

type RootScalePatternResolverInput = {
  index: number
  scale: Scale
}

export const getScalePattern = (input: RootScalePatternResolverInput) => {
  const resolver = resolvers[input.scale.type]

  return resolver(input)
}
