import { useScale } from './state/scale'

import { isOneOf } from '@lib/utils/array/isOneOf'
import { basicScales } from '@product/core/scale'
import { BasicPentatonicSubtitle } from './BasicPentatonicSubtitle'

export const ScalePageSubtitle = () => {
  const { scale, scaleType } = useScale()

  const basicScale = isOneOf(scale, basicScales)

  if (scaleType !== 'pentatonic' || !basicScale) {
    return null
  }

  return <BasicPentatonicSubtitle scale={basicScale} />
}
