export const songTopics = ['e-minor-pentatonic', 'g-major-pentatonic'] as const

export type SongTopic = (typeof songTopics)[number]

export const songParts = ['riff', 'solo', 'verse', 'intro'] as const

export type SongPart = (typeof songParts)[number]

export type Song = {
  name: string
  artist: string
  parts: SongPart[]
}

export const songsByTopic: Record<SongTopic, Song[]> = {
  'e-minor-pentatonic': [
    {
      name: 'Susie Q',
      artist: 'Creedence Clearwater Revival',
      parts: ['riff'],
    },
    {
      name: 'Green River',
      artist: 'Creedence Clearwater Revival',
      parts: ['riff'],
    },
    {
      name: 'Purple Haze',
      artist: 'Jimi Hendrix',
      parts: ['riff'],
    },
    {
      name: 'Are You Gonna Go My Way',
      artist: 'Lenny Kravitz',
      parts: ['riff'],
    },
    {
      name: 'Voodoo Child (Slight Return)',
      artist: 'Jimi Hendrix',
      parts: ['riff'],
    },
    {
      name: 'Back In Black',
      artist: 'AC/DC',
      parts: ['riff'],
    },
    {
      name: 'Man in the Box',
      artist: 'Alice In Chains',
      parts: ['riff'],
    },
    {
      name: 'Play That Funky Music',
      artist: 'Wild Cherry',
      parts: ['verse'],
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      parts: ['solo'],
    },
    {
      name: 'Hey Joe',
      artist: 'Jimi Hendrix',
      parts: ['solo'],
    },
    {
      name: 'Turn Off the Light',
      artist: 'Nelly Furtado',
      parts: ['solo'],
    },
    {
      name: 'Pawn Shop',
      artist: 'Sublime',
      parts: ['solo'],
    },
  ],
  'g-major-pentatonic': [
    {
      name: 'Honky Tonk Woman',
      artist: 'The Rolling Stones',
      parts: ['intro'],
    },
    {
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      parts: ['intro'],
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      parts: ['intro', 'solo'],
    },
    {
      name: 'Centerfold',
      artist: 'The J. Geils Band',
      parts: ['riff'],
    },
    {
      name: 'Cannonball',
      artist: 'Duane Eddy',
      parts: ['riff'],
    },
  ],
}

export const songTopicNames: Record<SongTopic, string> = {
  'e-minor-pentatonic': 'E Minor Pentatonic Scale',
  'g-major-pentatonic': 'G Major Pentatonic Scale+',
}

export const getSongPartId = (
  { name, artist }: Pick<Song, 'name' | 'artist'>,
  part: SongPart,
) => [name, artist, part].join('-')
