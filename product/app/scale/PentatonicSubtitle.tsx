import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { useChangeScale, useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { PentatonicScale, scaleNames } from '@product/core/scale'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { getRelativePentatonic } from '@product/core/scale/pentatonic/getRelativePentatonic'

const Button = styled(UnstyledButton)`
  &:hover {
    color: ${getColor('textPrimary')};
  }
`

export const PentatonicSubtitle = ({ scale }: { scale: PentatonicScale }) => {
  const { rootNote } = useScale()

  const changeScale = useChangeScale()

  const relativePentatonic = getRelativePentatonic({
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
