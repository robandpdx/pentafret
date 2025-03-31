import { CagedChord, cagedChords } from './caged'

export const getCagedTemplateForm = (chord: CagedChord, index: number) =>
  cagedChords[(cagedChords.indexOf(chord) + index) % cagedChords.length]
