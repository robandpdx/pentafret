import { Match } from '@lib/ui/base/Match'

import { BluesScaleSubtitle } from './BluesScaleSubtitle'
import { FullScaleSubtitle } from './FullScaleSubtitle'
import { PentatonicSubtitle } from './PentatonicSubtitle'
import { useScale } from './state/scale'

export const ScalePageSubtitle = () => {
  const { type } = useScale()

  return (
    <Match
      value={type}
      full={() => <FullScaleSubtitle />}
      pentatonic={() => <PentatonicSubtitle />}
      blues={() => <BluesScaleSubtitle />}
    />
  )
}
