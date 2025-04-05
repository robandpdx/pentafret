import { ScaleType } from '../ScaleType'

import { getBluesScalePattern } from './blues'
import { getFullScalePattern } from './full'
import { PatternResolver } from './PatternResolver'
import { getPentatonicPattern } from './pentatonic'

export const scalePatternResolvers: Record<ScaleType, PatternResolver> = {
  blues: getBluesScalePattern,
  full: getFullScalePattern,
  pentatonic: getPentatonicPattern,
}
