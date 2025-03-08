import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { useChangeScale, useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { getPentatonicRelativeTonalityRootNote } from '@product/core/scale/pentatonic/getPentatonicRelativeTonalityRootNote'
import { tonalities } from '@product/core/tonality'
import { getPairComplement } from '@lib/utils/pair/getPairComplement'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
const Button = styled(UnstyledButton)`
  &:hover {
    color: ${getColor('textPrimary')};
  }
`

export const PentatonicSubtitle = () => {
  const scale = useScale()

  const changeScale = useChangeScale()

  const relativeRootNote = getPentatonicRelativeTonalityRootNote(scale)
  const relativeTonality = getPairComplement(tonalities, scale.tonality)

  return (
    <Button
      onClick={() =>
        changeScale({
          ...scale,
          rootNote: relativeRootNote,
        })
      }
    >
      (same pattern as {chromaticNotesNames[relativeRootNote]}{' '}
      {capitalizeFirstLetter(scale.type)} {relativeTonality})
    </Button>
  )
}
