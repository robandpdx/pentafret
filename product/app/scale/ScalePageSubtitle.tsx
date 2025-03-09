import { useScale } from './state/scale'

import { PentatonicSubtitle } from './PentatonicSubtitle'

export const ScalePageSubtitle = () => {
  const { type } = useScale()

  if (type !== 'pentatonic') return null

  return <PentatonicSubtitle />
}
