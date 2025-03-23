import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { GuitarTheoryTopic } from './GuitarTheoryTopic'

export type Song = {
  name: string
  artist: string
  fragment?: string
}

export const getGuitarTheorySongId = (
  topic: GuitarTheoryTopic,
  song: Pick<Song, 'artist' | 'fragment'>,
) =>
  withoutUndefined([topic, song.artist, song.fragment])
    .map((s) => s.toLowerCase().replace(/ /g, '-'))
    .join('-')
