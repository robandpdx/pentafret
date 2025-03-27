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
  [topic, artist, name].map((s) => s.toLowerCase().replace(/ /g, '-')).join('-')
