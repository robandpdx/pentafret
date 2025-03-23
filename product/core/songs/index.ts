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
  pentatonic: [
    {
      name: 'Amie',
      artist: 'Pure Prairie League',
      fragment: 'Guitar Intro (A major)',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      fragment: 'Guitar Solo 2:28 (A major)',
    },
    {
      name: 'La Grange',
      artist: 'ZZ Top',
      fragment: 'Guitar Intro (A minor)',
    },
    {
      name: 'Tweezer',
      artist: 'Phish',
      fragment: 'Guitar Intro (A minor)',
    },
    {
      name: 'Tomorrow',
      artist: 'Silverchair',
      fragment: 'Guitar Rhythm Fig 2 (A minor)',
    },
    {
      name: 'Breakdown',
      artist: 'Tom Petty',
      fragment: 'Guitar 2 Intro (A minor)',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      fragment: 'Guitar Solo 2:04, 3:14 (A minor)',
    },
    {
      name: 'Upside Down',
      artist: 'Jack Johnson',
      fragment: 'Guitar Riff 0:11 (E major)',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett',
      fragment: 'Guitar Verse (E minor), Guitar Solo (E major)',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      fragment: 'Guitar Solo (E major)',
    },
    {
      name: 'Blue Sky',
      artist: 'The Allman Brothers Band',
      fragment: 'Guitar Intro & Solo (E major)',
    },
    {
      name: 'Gasoline Alley',
      artist: 'Rod Stewart',
      fragment: 'Guitar 0:29 (E major)',
    },
    {
      name: 'Meet Virginia',
      artist: 'Train',
      fragment: 'Guitar Solo (E minor)',
    },
    {
      name: 'Running Down a Dream',
      artist: 'Tom Petty',
      fragment: 'Guitar Solo 3:02 (E minor)',
    },
    {
      name: 'Good Times Bad Times',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Solo 1:30, 2:03 (E minor)',
    },
    {
      name: 'Money',
      artist: 'Pink Floyd',
      fragment: 'Guitar intro (B minor)',
    },
    {
      name: 'Better Together',
      artist: 'Jack Johnson',
      fragment: 'Guitar Intro (F major)',
    },
    {
      name: 'Beverly Hills',
      artist: 'Weezer',
      fragment: 'Guitar Solo 1:43 (F minor)',
    },
    {
      name: 'American Woman',
      artist: 'Lenny Kravitz',
      fragment: 'Guitar Solo (B & C minor)',
    },
    {
      name: 'Hey',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Interlude (C minor)',
    },
    {
      name: 'Maggie May',
      artist: 'Rod Stewart',
      fragment: 'Guitar Solo (D major)',
    },
  ],
  blues: [
    {
      name: 'Take It Easy',
      artist: 'The Eagles',
      fragment: 'Guitar Intro (G major)',
    },
    {
      name: 'Sir Duke',
      artist: 'Stevie Wonder',
      fragment: 'Band Riff (B major)',
    },
    {
      name: 'Pride and Joy',
      artist: 'Stevie Ray Vaughan',
      fragment: 'Guitar Intro Turnaround (E minor)',
    },
    {
      name: 'Roadhouse Blues',
      artist: 'The Doors',
      fragment: 'Guitar Riff (E minor)',
    },
    {
      name: 'The Old Man Down the Road',
      artist: 'John Fogerty',
      fragment: 'Guitar Riff (E minor)',
    },
    {
      name: 'Readymade',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Riff 1:10 (E minor)',
    },
    {
      name: "Truckin'",
      artist: 'The Grateful Dead',
      fragment: 'Guitar Riff 0:01 (E minor)',
    },
    {
      name: 'Sunshine of Your Love',
      artist: 'Cream',
      fragment: 'Guitar Intro, Verse (D minor)',
    },
    {
      name: 'Heartbreaker',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Intro (A minor)',
    },
    {
      name: 'Rock and Roll, Hoochie Koo',
      artist: 'Rick Derringer',
      fragment: 'Guitar Riff 0:18 (A minor)',
    },
    {
      name: 'Life by the Drop',
      artist: 'Stevie Ray Vaughan',
      fragment: 'Guitar Intro (A minor)',
    },
    {
      name: 'Love Her Madly',
      artist: 'The Doors',
      fragment: 'Guitar Riff 0:40 (E minor)',
    },
    {
      name: 'Black Dog',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Riff (A & E minor)',
    },
    {
      name: 'Bombtrack',
      artist: 'Rage Against the Machine',
      fragment: 'Guitar Riff (F# minor)',
    },
    {
      name: 'Groove is in the Heart',
      artist: 'Dee-Lite & World Clique',
      fragment: 'Guitar Riff (Ab minor)',
    },
    {
      name: 'Iron Man',
      artist: 'Black Sabbath',
      fragment: 'Guitar Riff Bridge (B minor)',
    },
    {
      name: 'The Lemon Song',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Turnaround (E minor)',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      fragment: 'Guitar Solo (E major)',
    },
    {
      name: 'Grease',
      artist: 'Frankie Valli',
      fragment: 'Horn Riff (B minor)',
    },
  ],
  'c-form': [
    {
      name: 'Take It Easy',
      artist: 'The Eagles',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Snow (Hey Oh)',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Intro 2nd & 4th Chord Shapes',
    },
    {
      name: 'Sample in a Jar',
      artist: 'Phish',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Down Boys',
      artist: 'Warrant',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Free Ride',
      artist: 'Edgar Winter Group',
      fragment: 'Guitar Intro, Verse',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: "You Ain't Seen Nothin' Yet",
      artist: 'Bachman-Turner Overdrive',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Funk 49',
      artist: 'The James Gang',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Domino',
      artist: 'Van Morrison',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Firehouse',
      artist: 'Kiss',
      fragment: 'Guitar Intro, Verse/Chorus',
    },
    {
      name: 'What I Like About You',
      artist: 'The Romantics',
      fragment: 'Guitar Intro, Verse/Chorus',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      fragment: 'Guitar Intro, Interlude',
    },
    {
      name: 'Change the World',
      artist: 'Eric Clapton',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Crazy Train',
      artist: 'Ozzy Osbourne',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Plush',
      artist: 'Stone Temple Pilots',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Rock This Town',
      artist: 'Stray Cats',
      fragment: 'Guitar Verse 0:49',
    },
    {
      name: 'In Too Deep',
      artist: 'Sum 41',
      fragment: 'Guitar 3rd Verse',
    },
    {
      name: 'In and Out of Love',
      artist: 'Bon Jovi',
      fragment: 'Guitar Verse, Bridge',
    },
    {
      name: 'Wait',
      artist: 'White Lion',
      fragment: 'Guitar Verse, Interlude',
    },
    {
      name: "I'm Bad, I'm Nationwide",
      artist: 'ZZ Top',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Stay Together for the Kids',
      artist: 'Blink 182',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      fragment: 'Guitar Bridge',
    },
    {
      name: '316',
      artist: 'Van Halen',
      fragment: 'Guitar Throughout',
    },
    {
      name: "Flirtin' With Disaster",
      artist: 'Molly Hatchet',
      fragment: 'Guitar Chorus 0:50',
    },
  ],
}
