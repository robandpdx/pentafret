import { GuitarTheoryTopic } from './GuitarTheoryTopic'
import { Song } from './Song'

export const songs: Record<GuitarTheoryTopic, Song[]> = {
  'e-minor-pentatonic': [
    {
      name: 'Susie Q',
      artist: 'Creedence Clearwater Revival',
      fragment: 'Guitar riff',
    },
    {
      name: 'Green River',
      artist: 'Creedence Clearwater Revival',
      fragment: 'Guitar riff',
    },
    {
      name: 'Purple Haze',
      artist: 'Jimi Hendrix',
      fragment: 'Guitar riff',
    },
    {
      name: 'Are You Gonna Go My Way',
      artist: 'Lenny Kravitz',
      fragment: 'Guitar riff',
    },
    {
      name: 'Voodoo Child (Slight Return)',
      artist: 'Jimi Hendrix',
      fragment: 'Guitar riff',
    },
    {
      name: 'Back In Black',
      artist: 'AC/DC',
      fragment: 'Guitar riff',
    },
    {
      name: 'Man in the Box',
      artist: 'Alice In Chains',
      fragment: 'Guitar riff',
    },
    {
      name: 'Play That Funky Music',
      artist: 'Wild Cherry',
      fragment: 'Guitar during verse',
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      fragment: 'Guitar solo',
    },
    {
      name: 'Hey Joe',
      artist: 'Jimi Hendrix',
      fragment: 'Guitar solo',
    },
    {
      name: 'Turn Off the Light',
      artist: 'Nelly Furtado',
      fragment: 'Guitar solo',
    },
    {
      name: 'Pawn Shop',
      artist: 'Sublime',
      fragment: 'Guitar solo',
    },
  ],
  'g-major-pentatonic': [
    {
      name: 'Honky Tonk Woman',
      artist: 'The Rolling Stones',
      fragment: 'Intro guitar lick',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      fragment: 'Guitar intro',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      fragment: 'Guitar intro and solos',
    },
    {
      name: 'Centerfold',
      artist: 'The J. Geils Band',
      fragment: 'Guitar riff',
    },
    {
      name: 'Cannonball',
      artist: 'Duane Eddy',
      fragment: 'Guitar riff',
    },
  ],
  'g-minor-pentatonic': [
    {
      name: 'Money for Nothing',
      artist: 'Dire Straits',
      fragment: 'Guitar riff',
    },
    {
      name: 'I Shot the Sheriff',
      artist: 'Bob Marley/Eric Clapton',
      fragment: 'Guitar riff at chorus end',
    },
    {
      name: 'Play That Funky Music',
      artist: 'Wild Cherry',
      fragment: 'Guitar riff during chorus',
    },
    {
      name: 'Are You Gonna Go My Way',
      artist: 'Lenny Kravitz',
      fragment: 'Guitar riff',
    },
    {
      name: 'Lady Marmalade',
      artist: 'Patti Labelle',
    },
  ],
}
