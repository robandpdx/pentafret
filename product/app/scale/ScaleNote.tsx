import { useMemo } from 'react'
import { Note, NoteKind, NoteProps } from '../guitar/fretboard/Note'
import { useScale } from './state/scale'
import { getBlueNote } from '@product/core/scale/blues/getBlueNote'
import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { tuning } from '../guitar/config'

type ScaleNoteProps = Omit<NoteProps, 'kind'>

export const ScaleNote = (props: ScaleNoteProps) => {
  const { rootNote, type, tonality } = useScale()
  const note = getNoteFromPosition({ tuning, position: props })

  const kind: NoteKind = useMemo(() => {
    if (rootNote === note) {
      return 'primary'
    }

    if (type === 'blues' && note === getBlueNote({ rootNote, tonality })) {
      return 'blue'
    }

    return 'regular'
  }, [note, rootNote, tonality, type])

  return <Note {...props} kind={kind} />
}
