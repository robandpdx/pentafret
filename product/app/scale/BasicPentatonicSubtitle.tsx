import { useChangeScale, useScale } from './state/scale'
import { Button } from '@lib/ui/buttons/Button'
import { chromaticNotesNames } from '@product/core/note'
import { BasicScale, scaleNames } from '@product/core/scale'
import { getBasicPentatonicRelativeNote } from '@product/core/scale/getBasicPentatonicRelativeNote'

export const BasicPentatonicSubtitle = ({ scale }: { scale: BasicScale }) => {
  const { rootNote } = useScale()

  const changeScale = useChangeScale()

  const relativeNote = getBasicPentatonicRelativeNote({
    scale,
    rootNote,
  })

  const relativeNoteName = chromaticNotesNames[relativeNote]

  return (
    <Button onClick={() => changeScale({ rootNote: relativeNote, scale })}>
      (same pattern as {relativeNoteName} {scaleNames[scale]} pentatonic)
    </Button>
  )
}
