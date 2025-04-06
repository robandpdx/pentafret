import { getFullScaleRelativeTonalityRootNote } from '@product/core/scale/full/getFullScaleRelativeTonalityRootNote'

import { RelativeScaleSubtitle } from './RelativeScaleSubtitle'
import { useScale } from './state/scale'

export const FullScaleSubtitle = () => {
  const scale = useScale()

  const relativeRootNote = getFullScaleRelativeTonalityRootNote(scale)

  return <RelativeScaleSubtitle relativeRootNote={relativeRootNote} />
}
