import { withoutUndefined } from '@lib/utils/array/withoutUndefined'

export const songFragmentTypes = ['riff', 'solo', 'verse', 'intro'] as const

export type SongFragmentType = (typeof songFragmentTypes)[number]

export type Song = {
  name: string
  artist: string
  fragment?: SongFragmentType
}

export const getSongId = ({ name, artist, fragment }: Song) =>
  withoutUndefined([name, artist, fragment])
    .map((s) => s.toLowerCase().replace(/ /g, '-'))
    .join('-')
