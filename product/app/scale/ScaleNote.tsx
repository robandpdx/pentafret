import { getNoteFromPosition } from '@product/core/note/getNoteFromPosition'
import { getBlueNote } from '@product/core/scale/blues/getBlueNote'
import { useMemo } from 'react'

import { Note, NoteKind, NoteProps } from '../guitar/fretboard/Note'

import { useScale } from './state/scale'

type ScaleNoteProps = Omit<NoteProps, 'kind'>

export const ScaleNote = (props: ScaleNoteProps) => {
  const { rootNote, type, tonality } = useScale()
  const note = getNoteFromPosition({ position: props })

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
