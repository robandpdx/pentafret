import { getPentatonicRelativeTonalityRootNote } from '@product/core/scale/pentatonic/getPentatonicRelativeTonalityRootNote'

import { RelativeScaleSubtitle } from './RelativeScaleSubtitle'
import { useScale } from './state/scale'

export const PentatonicSubtitle = () => {
  const scale = useScale()

  const relativeRootNote = getPentatonicRelativeTonalityRootNote(scale)

  return <RelativeScaleSubtitle relativeRootNote={relativeRootNote} />
}
