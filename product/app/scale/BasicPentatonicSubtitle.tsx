import { useChangeScale, useScale } from './state/scale'
import { Button } from '@lib/ui/buttons/Button'
import { chromaticNotesNumber, chromaticNotesNames } from '@product/core/note'
import { BasicScale, scaleNames } from '@product/core/scale'
import { match } from '@lib/utils/match'

export const BasicPentatonicSubtitle = ({ scale }: { scale: BasicScale }) => {
  const { rootNote } = useScale()

  const changeScale = useChangeScale()

  const relativeNote =
    (rootNote +
      match(scale, {
        major: () => 3,
        minor: () => -3,
      }) +
      chromaticNotesNumber) %
    chromaticNotesNumber

  const relativeNoteName = chromaticNotesNames[relativeNote]

  return (
    <Button onClick={() => changeScale({ rootNote: relativeNote, scale })}>
      (same pattern as {relativeNoteName} {scaleNames[scale]} pentatonic)
    </Button>
  )
}
