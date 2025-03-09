import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { chromaticNotesNames } from '../note'
import { Scale } from './Scale'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export const getScaleName = ({ type, rootNote, tonality }: Scale) => {
  const noteName = chromaticNotesNames[rootNote]

  return withoutUndefined([
    noteName,
    capitalizeFirstLetter(tonality),
    type === 'full' ? undefined : capitalizeFirstLetter(type),
    'Scale',
  ]).join(' ')
}
