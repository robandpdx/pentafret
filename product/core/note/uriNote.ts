import { chromaticNotesNames, chromaticNotesNumber } from '.'

export const toUriNote = (note: number) =>
  chromaticNotesNames[note % chromaticNotesNumber]
    .replace('#', '-sharp')
    .toLowerCase()

export const fromUriNote = (uriNote: string) => {
  const noteName = uriNote.toUpperCase().replace('-sharp', '#')

  return chromaticNotesNames.findIndex((n) => n === noteName)
}
