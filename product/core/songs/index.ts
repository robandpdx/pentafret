import { GuitarTheoryTopic } from './GuitarTheoryTopic'
import { Song } from './Song'

export const songs: Record<GuitarTheoryTopic, Song[]> = {
  'e-minor-pentatonic': [
    {
      name: 'Susie Q',
      artist: 'Creedence Clearwater Revival',
      fragment: 'riff',
    },
    {
      name: 'Green River',
      artist: 'Creedence Clearwater Revival',
      fragment: 'riff',
    },
    {
      name: 'Purple Haze',
      artist: 'Jimi Hendrix',
      fragment: 'riff',
    },
    {
      name: 'Are You Gonna Go My Way',
      artist: 'Lenny Kravitz',
      fragment: 'riff',
    },
    {
      name: 'Voodoo Child (Slight Return)',
      artist: 'Jimi Hendrix',
      fragment: 'riff',
    },
    {
      name: 'Back In Black',
      artist: 'AC/DC',
      fragment: 'riff',
    },
    {
      name: 'Man in the Box',
      artist: 'Alice In Chains',
      fragment: 'riff',
    },
    {
      name: 'Play That Funky Music',
      artist: 'Wild Cherry',
      fragment: 'verse',
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      fragment: 'solo',
    },
    {
      name: 'Hey Joe',
      artist: 'Jimi Hendrix',
      fragment: 'solo',
    },
    {
      name: 'Turn Off the Light',
      artist: 'Nelly Furtado',
      fragment: 'solo',
    },
    {
      name: 'Pawn Shop',
      artist: 'Sublime',
      fragment: 'solo',
    },
  ],
  'g-major-pentatonic': [
    {
      name: 'Honky Tonk Woman',
      artist: 'The Rolling Stones',
      fragment: 'intro',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      fragment: 'intro',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      fragment: 'intro',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      fragment: 'solo',
    },
    {
      name: 'Centerfold',
      artist: 'The J. Geils Band',
      fragment: 'riff',
    },
    {
      name: 'Cannonball',
      artist: 'Duane Eddy',
      fragment: 'riff',
    },
  ],
}
