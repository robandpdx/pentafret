import { chromaticNotesNames, chromaticNotesNumber } from '.'

export const toUriNote = (note: number) =>
  chromaticNotesNames[note % chromaticNotesNumber].replace('#', '-sharp')

export const fromUriNote = (uriNote: string) => {
  const noteName = uriNote.replace('-sharp', '#').toUpperCase()

  return chromaticNotesNames.findIndex((n) => n === noteName)
}
