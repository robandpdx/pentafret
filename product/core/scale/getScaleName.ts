import { chromaticNotesNames } from '../note'
import { Scale } from './Scale'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const getScaleName = ({ type, rootNote, tonality }: Scale) => {
  const noteName = chromaticNotesNames[rootNote]

  return `${noteName} ${capitalizeFirstLetter(tonality)} ${capitalizeFirstLetter(type)} Scale`
}
