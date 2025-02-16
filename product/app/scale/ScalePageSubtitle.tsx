import { useScale } from './state/scale'

import { isOneOf } from '@lib/utils/array/isOneOf'
import { PentatonicSubtitle } from './PentatonicSubtitle'
import { pentatonicScales } from '@product/core/scale'

export const ScalePageSubtitle = () => {
  const { scale } = useScale()

  const pentatonicScale = isOneOf(scale, pentatonicScales)

  if (!pentatonicScale) {
    return null
  }

  return <PentatonicSubtitle scale={pentatonicScale} />
}
