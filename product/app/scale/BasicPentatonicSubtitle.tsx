import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { useChangeScale, useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { BasicScale, scaleNames } from '@product/core/scale'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { getRelativeBasicPentatonic } from '@product/core/scale/getRelativeBasicPentatonic'

const Button = styled(UnstyledButton)`
  &:hover {
    color: ${getColor('textPrimary')};
  }
`

export const BasicPentatonicSubtitle = ({ scale }: { scale: BasicScale }) => {
  const { rootNote } = useScale()

  const changeScale = useChangeScale()

  const relativePentatonic = getRelativeBasicPentatonic({
    scale,
    rootNote,
  })

  return (
    <Button onClick={() => changeScale(relativePentatonic)}>
      (same pattern as {chromaticNotesNames[relativePentatonic.rootNote]}{' '}
      {scaleNames[relativePentatonic.scale]} pentatonic)
    </Button>
  )
}
