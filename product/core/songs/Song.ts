import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { GuitarTheoryTopic } from './GuitarTheoryTopic'

export type Song = {
  name: string
  artist: string
  details?: string
}

export const getGuitarTheorySongId = (
  topic: GuitarTheoryTopic,
  song: Pick<Song, 'artist' | 'details'>,
) =>
  withoutUndefined([topic, song.artist, song.details])
    .map((s) => s.toLowerCase().replace(/ /g, '-'))
    .join('-')
