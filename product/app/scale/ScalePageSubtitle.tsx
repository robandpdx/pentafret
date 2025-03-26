import { PartialMatch } from '@lib/ui/base/PartialMatch'

import { BluesScaleSubtitle } from './BluesScaleSubtitle'
import { PentatonicSubtitle } from './PentatonicSubtitle'
import { useScale } from './state/scale'

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
