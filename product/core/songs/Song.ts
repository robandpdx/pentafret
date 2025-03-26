import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { GuitarTheoryTopic } from './GuitarTheoryTopic'

export type Song = {
  name: string
  artist: string
  details?: string
}

export const getGuitarTheorySongId = (
  topic: GuitarTheoryTopic,
  { artist, name }: Pick<Song, 'artist' | 'name'>,
) =>
  withoutUndefined([topic, artist, name])
    .map((s) => s.toLowerCase().replace(/ /g, '-'))
    .join('-')
