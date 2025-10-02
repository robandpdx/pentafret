import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { getColor } from '@lib/ui/theme/getters'
import { getScaleName } from '@product/core/scale/getScaleName'
import { Tonality } from '@product/core/tonality'
import styled from 'styled-components'

import { useChangeScale, useScale } from './state/scale'

const Button = styled(UnstyledButton)`
  &:hover {
    color: ${getColor('textPrimary')};
  }
`

const getRelativeTonality = (tonality: Tonality): Tonality => {
  switch (tonality) {
    case 'major':
      return 'minor'
    case 'minor':
      return 'major'
    case 'major7':
      return 'minor7'
    case 'minor7':
      return 'major7'
  }
}

export const RelativeScaleSubtitle = ({
  relativeRootNote,
}: {
  relativeRootNote: number
}) => {
  const scale = useScale()

  const changeScale = useChangeScale()

  const relativeTonality = getRelativeTonality(scale.tonality)
  const relativeScale = {
    ...scale,
    rootNote: relativeRootNote,
    tonality: relativeTonality,
  }

  return (
    <Button onClick={() => changeScale(relativeScale)}>
      (same notes as in {getScaleName(relativeScale)})
    </Button>
  )
}
