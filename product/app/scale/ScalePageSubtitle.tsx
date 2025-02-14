import { useScale, useChangeScale } from './state/scale'
import { chromaticNotesNames, chromaticNotesNumber } from '@product/core/note'
import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import styled from 'styled-components'
import { text } from '@lib/ui/text'

const Button = styled(UnstyledButton)`
  &:hover {
    ${text({
      color: 'primary',
    })}
  }
`

export const ScalePageSubtitle = () => {
  const { scale, rootNote, scaleType } = useScale()
  const changeScale = useChangeScale()

  if (scaleType !== 'pentatonic' || (scale !== 'major' && scale !== 'minor')) {
    return null
  }

  const getRelativeNote = (note: number, semitones: number) => {
    return (note + semitones + chromaticNotesNumber) % chromaticNotesNumber
  }

  const isMinor = scale === 'minor'
  const relativeNote = getRelativeNote(rootNote, isMinor ? 3 : -3)
  const relativeNoteName = chromaticNotesNames[relativeNote]
  const relativeScale = isMinor ? 'Major' : 'Minor'

  const handleClick = () => {
    changeScale({
      rootNote: relativeNote,
      scale: isMinor ? 'major' : 'minor',
    })
  }

  return (
    <Button onClick={handleClick}>
      (same pattern as {relativeNoteName} {relativeScale} Pentatonic)
    </Button>
  )
}
