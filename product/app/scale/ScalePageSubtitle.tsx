import { useScale } from './state/scale'

import { PentatonicSubtitle } from './PentatonicSubtitle'
import { BluesScaleSubtitle } from './BluesScaleSubtitle'
import { PartialMatch } from '@lib/ui/base/PartialMatch'

export const ScalePageSubtitle = () => {
  const { type } = useScale()

  return (
    <PartialMatch
      value={type}
      if={{
        pentatonic: () => <PentatonicSubtitle />,
        blues: () => <BluesScaleSubtitle />,
      }}
    />
  )
}
