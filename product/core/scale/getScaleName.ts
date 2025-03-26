import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

import { chromaticNotesNames } from '../note'

import { Scale } from './Scale'

export const getScaleName = ({ type, rootNote, tonality }: Scale) => {
  const noteName = chromaticNotesNames[rootNote]

  return withoutUndefined([
    noteName,
    capitalizeFirstLetter(tonality),
    type === 'full' ? undefined : capitalizeFirstLetter(type),
    'Scale',
  ]).join(' ')
}
