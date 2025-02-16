export type NotePosition = {
  // 0-based index of the string
  string: number
  // -1 if the note is open
  // 0 if the note is on the 1st fret
  fret: number
}
