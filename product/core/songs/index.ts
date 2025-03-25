import { GuitarTheoryTopic } from './GuitarTheoryTopic'
import { Song } from './Song'

export const songs: Record<GuitarTheoryTopic, Song[]> = {
  'e-minor-pentatonic': [
    {
      name: 'Susie Q',
      artist: 'Creedence Clearwater Revival',
      details: 'Guitar riff',
    },
    {
      name: 'Green River',
      artist: 'Creedence Clearwater Revival',
      details: 'Guitar riff',
    },
    {
      name: 'Purple Haze',
      artist: 'Jimi Hendrix',
      details: 'Guitar riff',
    },
    {
      name: 'Are You Gonna Go My Way',
      artist: 'Lenny Kravitz',
      details: 'Guitar riff',
    },
    {
      name: 'Voodoo Child (Slight Return)',
      artist: 'Jimi Hendrix',
      details: 'Guitar riff',
    },
    {
      name: 'Back In Black',
      artist: 'AC/DC',
      details: 'Guitar riff',
    },
    {
      name: 'Man in the Box',
      artist: 'Alice In Chains',
      details: 'Guitar riff',
    },
    {
      name: 'Play That Funky Music',
      artist: 'Wild Cherry',
      details: 'Guitar during verse',
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      details: 'Guitar solo',
    },
    {
      name: 'Hey Joe',
      artist: 'Jimi Hendrix',
      details: 'Guitar solo',
    },
    {
      name: 'Turn Off the Light',
      artist: 'Nelly Furtado',
      details: 'Guitar solo',
    },
    {
      name: 'Pawn Shop',
      artist: 'Sublime',
      details: 'Guitar solo',
    },
  ],
  'g-major-pentatonic': [
    {
      name: 'Honky Tonk Woman',
      artist: 'The Rolling Stones',
      details: 'Intro guitar lick',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      details: 'Guitar intro',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      details: 'Guitar intro and solos',
    },
    {
      name: 'Centerfold',
      artist: 'The J. Geils Band',
      details: 'Guitar riff',
    },
    {
      name: 'Cannonball',
      artist: 'Duane Eddy',
      details: 'Guitar riff',
    },
  ],
  'g-minor-pentatonic': [
    {
      name: 'Money for Nothing',
      artist: 'Dire Straits',
      details: 'Guitar riff',
    },
    {
      name: 'I Shot the Sheriff',
      artist: 'Bob Marley/Eric Clapton',
      details: 'Guitar riff at chorus end',
    },
    {
      name: 'Play That Funky Music',
      artist: 'Wild Cherry',
      details: 'Guitar riff during chorus',
    },
    {
      name: 'Are You Gonna Go My Way',
      artist: 'Lenny Kravitz',
      details: 'Guitar riff',
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
      details: 'Guitar Intro (A major)',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      details: 'Guitar Solo 2:28 (A major)',
    },
    {
      name: 'La Grange',
      artist: 'ZZ Top',
      details: 'Guitar Intro (A minor)',
    },
    {
      name: 'Tweezer',
      artist: 'Phish',
      details: 'Guitar Intro (A minor)',
    },
    {
      name: 'Tomorrow',
      artist: 'Silverchair',
      details: 'Guitar Rhythm Fig 2 (A minor)',
    },
    {
      name: 'Breakdown',
      artist: 'Tom Petty',
      details: 'Guitar 2 Intro (A minor)',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      details: 'Guitar Solo 2:04, 3:14 (A minor)',
    },
    {
      name: 'Upside Down',
      artist: 'Jack Johnson',
      details: 'Guitar Riff 0:11 (E major)',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett',
      details: 'Guitar Verse (E minor), Guitar Solo (E major)',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      details: 'Guitar Solo (E major)',
    },
    {
      name: 'Blue Sky',
      artist: 'The Allman Brothers Band',
      details: 'Guitar Intro & Solo (E major)',
    },
    {
      name: 'Gasoline Alley',
      artist: 'Rod Stewart',
      details: 'Guitar 0:29 (E major)',
    },
    {
      name: 'Meet Virginia',
      artist: 'Train',
      details: 'Guitar Solo (E minor)',
    },
    {
      name: 'Running Down a Dream',
      artist: 'Tom Petty',
      details: 'Guitar Solo 3:02 (E minor)',
    },
    {
      name: 'Good Times Bad Times',
      artist: 'Led Zeppelin',
      details: 'Guitar Solo 1:30, 2:03 (E minor)',
    },
    {
      name: 'Money',
      artist: 'Pink Floyd',
      details: 'Guitar intro (B minor)',
    },
    {
      name: 'Better Together',
      artist: 'Jack Johnson',
      details: 'Guitar Intro (F major)',
    },
    {
      name: 'Beverly Hills',
      artist: 'Weezer',
      details: 'Guitar Solo 1:43 (F minor)',
    },
    {
      name: 'American Woman',
      artist: 'Lenny Kravitz',
      details: 'Guitar Solo (B & C minor)',
    },
    {
      name: 'Hey',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Interlude (C minor)',
    },
    {
      name: 'Maggie May',
      artist: 'Rod Stewart',
      details: 'Guitar Solo (D major)',
    },
  ],
  'blues-scale': [
    {
      name: 'Take It Easy',
      artist: 'The Eagles',
      details: 'Guitar Intro (G major)',
    },
    {
      name: 'Sir Duke',
      artist: 'Stevie Wonder',
      details: 'Band Riff (B major)',
    },
    {
      name: 'Pride and Joy',
      artist: 'Stevie Ray Vaughan',
      details: 'Guitar Intro Turnaround (E minor)',
    },
    {
      name: 'Roadhouse Blues',
      artist: 'The Doors',
      details: 'Guitar Riff (E minor)',
    },
    {
      name: 'The Old Man Down the Road',
      artist: 'John Fogerty',
      details: 'Guitar Riff (E minor)',
    },
    {
      name: 'Readymade',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Riff 1:10 (E minor)',
    },
    {
      name: "Truckin'",
      artist: 'The Grateful Dead',
      details: 'Guitar Riff 0:01 (E minor)',
    },
    {
      name: 'Sunshine of Your Love',
      artist: 'Cream',
      details: 'Guitar Intro, Verse (D minor)',
    },
    {
      name: 'Heartbreaker',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro (A minor)',
    },
    {
      name: 'Rock and Roll, Hoochie Koo',
      artist: 'Rick Derringer',
      details: 'Guitar Riff 0:18 (A minor)',
    },
    {
      name: 'Life by the Drop',
      artist: 'Stevie Ray Vaughan',
      details: 'Guitar Intro (A minor)',
    },
    {
      name: 'Love Her Madly',
      artist: 'The Doors',
      details: 'Guitar Riff 0:40 (E minor)',
    },
    {
      name: 'Black Dog',
      artist: 'Led Zeppelin',
      details: 'Guitar Riff (A & E minor)',
    },
    {
      name: 'Bombtrack',
      artist: 'Rage Against the Machine',
      details: 'Guitar Riff (F# minor)',
    },
    {
      name: 'Groove is in the Heart',
      artist: 'Dee-Lite & World Clique',
      details: 'Guitar Riff (Ab minor)',
    },
    {
      name: 'Iron Man',
      artist: 'Black Sabbath',
      details: 'Guitar Riff Bridge (B minor)',
    },
    {
      name: 'The Lemon Song',
      artist: 'Led Zeppelin',
      details: 'Guitar Turnaround (E minor)',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      details: 'Guitar Solo (E major)',
    },
    {
      name: 'Grease',
      artist: 'Frankie Valli',
      details: 'Horn Riff (B minor)',
    },
  ],
  'c-form': [
    {
      name: 'Take It Easy',
      artist: 'The Eagles',
      details: 'Guitar Intro',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro',
    },
    {
      name: 'Snow (Hey Oh)',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro 2nd & 4th Chord Shapes',
    },
    {
      name: 'Sample in a Jar',
      artist: 'Phish',
      details: 'Guitar Intro',
    },
    {
      name: 'Down Boys',
      artist: 'Warrant',
      details: 'Guitar Intro',
    },
    {
      name: 'Free Ride',
      artist: 'Edgar Winter Group',
      details: 'Guitar Intro, Verse',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar Intro/Verse',
    },
    {
      name: "You Ain't Seen Nothin' Yet",
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Funk 49',
      artist: 'The James Gang',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Domino',
      artist: 'Van Morrison',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Firehouse',
      artist: 'Kiss',
      details: 'Guitar Intro, Verse/Chorus',
    },
    {
      name: 'What I Like About You',
      artist: 'The Romantics',
      details: 'Guitar Intro, Verse/Chorus',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      details: 'Guitar Intro, Interlude',
    },
    {
      name: 'Change the World',
      artist: 'Eric Clapton',
      details: 'Guitar Verse',
    },
    {
      name: 'Crazy Train',
      artist: 'Ozzy Osbourne',
      details: 'Guitar Verse',
    },
    {
      name: 'Plush',
      artist: 'Stone Temple Pilots',
      details: 'Guitar Verse',
    },
    {
      name: 'Rock This Town',
      artist: 'Stray Cats',
      details: 'Guitar Verse 0:49',
    },
    {
      name: 'In Too Deep',
      artist: 'Sum 41',
      details: 'Guitar 3rd Verse',
    },
    {
      name: 'In and Out of Love',
      artist: 'Bon Jovi',
      details: 'Guitar Verse, Bridge',
    },
    {
      name: 'Wait',
      artist: 'White Lion',
      details: 'Guitar Verse, Interlude',
    },
    {
      name: "I'm Bad, I'm Nationwide",
      artist: 'ZZ Top',
      details: 'Guitar Chorus',
    },
    {
      name: 'Stay Together for the Kids',
      artist: 'Blink 182',
      details: 'Guitar Chorus',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      details: 'Guitar Bridge',
    },
    {
      name: '316',
      artist: 'Van Halen',
      details: 'Guitar Throughout',
    },
    {
      name: "Flirtin' With Disaster",
      artist: 'Molly Hatchet',
      details: 'Guitar Chorus 0:50',
    },
  ],
  'a-form': [
    {
      name: 'Wait',
      artist: 'White Lion',
      details: 'Guitar Intro',
    },
    {
      name: 'Nothing Else Matters',
      artist: 'Metallica',
      details: 'Guitar Intro',
    },
    {
      name: 'All Star',
      artist: 'Smash Mouth',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Daughters',
      artist: 'John Mayer',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Cold Gin',
      artist: 'Kiss',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar Intro/Chorus',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      details: 'Guitar Intro, Interlude',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      details: 'Guitar Interlude 2',
    },
    {
      name: '(Bang Your Head) Metal Health',
      artist: 'Quiet Riot',
      details: 'Guitar Verse',
    },
    {
      name: 'In and Out of Love',
      artist: 'Bon Jovi',
      details: 'Guitar Verse',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      details: 'Guitar Bridge',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Guitar Interlude',
    },
  ],
  'g-form': [
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro',
    },
    {
      name: 'Gimme Three Steps',
      artist: 'Lynyrd Skynyrd',
      details: 'Guitar Intro',
    },
    {
      name: 'Free Ride',
      artist: 'Edgar Winter Group',
      details: 'Guitar Intro',
    },
    {
      name: 'Fade to Black',
      artist: 'Metallica',
      details: 'Guitar Intro',
    },
    {
      name: 'China Grove',
      artist: 'The Doobie Brothers',
      details: 'Guitar Intro 0:04',
    },
    {
      name: 'Snow (Hey Oh)',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro 3rd Chord Shape',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'The Wind Cries Mary',
      artist: 'Jimi Hendrix',
      details: 'Guitar Intro, Verse',
    },
    {
      name: "I'm Bad, I'm Nationwide",
      artist: 'ZZ Top',
      details: 'Guitar Chorus',
    },
    {
      name: 'Alive',
      artist: 'P.O.D.',
      details: 'Guitar 2 Intro, Verse, Chorus',
    },
    {
      name: 'Hit Me with Your Best Shot',
      artist: 'Pat Benatar',
      details: 'Guitar Verse',
    },
    {
      name: "Jimmy Olsen's Blues",
      artist: 'Spin Doctors',
      details: 'Guitar Verse Riff B',
    },
    {
      name: 'Blackbird',
      artist: 'The Beatles',
      details: 'Open-Position',
    },
    {
      name: 'Tears in Heaven',
      artist: 'Eric Clapton',
      details: 'Open-Position',
    },
    {
      name: 'Dust in the Wind',
      artist: 'Kansas',
      details: 'Open-Position',
    },
    {
      name: 'Landslide',
      artist: 'Fleetwood Mac',
      details: 'Open-Position',
    },
  ],
  'e-form': [
    {
      name: 'The Impression That I Get',
      artist: 'The Mighty Mighty Bosstones',
      details: 'Guitar Intro',
    },
    {
      name: 'Sample in a Jar',
      artist: 'Phish',
      details: 'Guitar Intro',
    },
    {
      name: 'Eye of the Tiger',
      artist: 'Survivor',
      details: 'Guitar Intro',
    },
    {
      name: 'Wait',
      artist: 'White Lion',
      details: 'Guitar Intro',
    },
    {
      name: 'Down Boys',
      artist: 'Warrant',
      details: 'Guitar Intro',
    },
    {
      name: "Jimmy Olsen's Blues",
      artist: 'Spin Doctors',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Caught Up in You',
      artist: '38 Special',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      details: 'Guitar Intro, Verse',
    },
    {
      name: 'All Star',
      artist: 'Smash Mouth',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Domino',
      artist: 'Van Morrison',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar Intro/Chorus',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro/Chorus',
    },
    {
      name: 'Days of the Week',
      artist: 'Stone Temple Pilots',
      details: 'Guitar Verse',
    },
    {
      name: 'Interstate Love Song',
      artist: 'Stone Temple Pilots',
      details: 'Guitar Verse',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      details: 'Guitar Verse, Chorus',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Verse, Bridge',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      details: 'Guitar Chorus',
    },
    {
      name: 'The Rock Show',
      artist: 'Blink 182',
      details: 'Guitar Chorus',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      details: 'Guitar Bridge',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      details: 'Guitar Bridge',
    },
    {
      name: 'Gloria',
      artist: 'Van Morrison/Them',
      details: 'Guitar Interlude',
    },
    {
      name: 'Tomorrow',
      artist: 'Silver Chair',
      details: 'Guitar Interlude',
    },
    {
      name: "Life's Been Good",
      artist: 'Joe Walsh',
      details: 'Acoustic. Guitar',
    },
    {
      name: 'Burning Love',
      artist: 'Elvis Presley',
      details: 'Guitar Throughout',
    },
    {
      name: "Good Lovin'",
      artist: 'The Young Rascals',
      details: 'Guitar Throughout',
    },
    {
      name: 'Soul Man',
      artist: 'Sam & Dave',
      details: 'Guitar Throughout',
    },
    {
      name: 'Tripping Billies',
      artist: 'Dave Matthews Band',
      details: 'Guitar Throughout',
    },
    {
      name: 'Two Step',
      artist: 'Dave Matthews Band',
      details: 'Guitar Throughout',
    },
    {
      name: 'Lover Lay Down',
      artist: 'Dave Matthews Band',
      details: 'Guitar Throughout',
    },
    {
      name: 'Grey Street',
      artist: 'Dave Matthews Band',
      details: 'Guitar Throughout',
    },
    {
      name: 'Wrong Way',
      artist: 'Sublime',
      details: 'Guitar Throughout',
    },
  ],
  'd-form': [
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      details: 'Guitar Intro',
    },
    {
      name: 'Snow (Hey Oh)',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro 8th Chord Shape',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      details: 'Guitar Intro/Verse',
    },
    {
      name: "Babe I'm Gonna Leave You",
      artist: 'Led Zeppelin',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Hole Hearted',
      artist: 'Extreme',
      details: 'Guitar Intro, Pre-Chorus',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      details: 'Guitar Verse',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      details: 'Guitar Verse',
    },
    {
      name: 'Dust in the Wind',
      artist: 'Kansas',
      details: 'Guitar Chorus',
    },
    {
      name: 'Landslide',
      artist: 'Fleetwood Mac',
      details: 'Guitar Chorus',
    },
    {
      name: 'Caught Up in You',
      artist: '38 Special',
      details: 'Guitar Chorus',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      details: 'Guitar Chorus',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      details: 'Guitar Chorus',
    },
    {
      name: 'Change the World',
      artist: 'Eric Clapton',
      details: 'Guitar Chorus',
    },
    {
      name: 'Gloria',
      artist: 'Van Morrison/Them',
      details: 'Guitar Interlude',
    },
    {
      name: 'Crash into Me',
      artist: 'Dave Matthews Band',
      details: 'Guitar Throughout',
    },
    {
      name: 'Tears in Heaven',
      artist: 'Eric Clapton',
      details: 'Guitar Throughout',
    },
  ],
  'minor-forms': [
    {
      name: 'The Impression That I Get',
      artist: 'The Mighty Mighty Bosstones',
      details: 'Guitar Intro',
    },
    {
      name: 'Dream On',
      artist: 'Aerosmith',
      details: 'Guitar Intro',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'So Much to Say',
      artist: 'Dave Matthews Band',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro, Interlude',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Verse',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      details: 'Guitar Verse, Chorus',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      details: 'Guitar Chorus',
    },
    {
      name: 'Get Down Tonight',
      artist: 'KC & The Sunshine Band',
      details: 'Guitar Chorus',
    },
    {
      name: 'All Your Love (I Miss Loving)',
      artist: 'Otis Rush',
      details: 'Guitar Solo',
    },
    {
      name: "Life's Been Good",
      artist: 'Joe Walsh',
      details: 'Acoustic. Guitar',
    },
    {
      name: 'Two Step',
      artist: 'Dave Matthews Band',
      details: 'Guitar Throughout',
    },
  ],
  'chromatic-riffs': [
    {
      name: "Couldn't Stand the Weather",
      artist: 'Stevie Ray Vaughan',
      details: 'Band Fig. After Intro',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Chord Roots During Intro',
    },
    {
      name: "Let's Go Crazy",
      artist: 'Prince',
      details: 'Guitar Riff After Chorus',
    },
    {
      name: 'Oye Como Va',
      artist: 'Santana',
      details: 'Bridge Section Similar To "Stairway"',
    },
    {
      name: 'Hey Joe',
      artist: 'Jimi Hendrix',
      details: 'Guitar After Solo',
    },
    {
      name: 'Sweet Emotion',
      artist: 'Aerosmith',
      details: 'Guitar Riff Between Verses',
    },
    {
      name: 'Chop Suey!',
      artist: 'System of a Down',
      details: 'Guitar Power Chord Riff',
    },
    {
      name: 'Killing Floor',
      artist: "Howlin'Wolf",
      details: 'Guitar Riff',
    },
  ],
  'major-scale': [
    {
      name: 'Down On the Corner',
      artist: 'Creedence Clearwater Revival',
      details: 'Guitar Intro (C)',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      details: 'Guitar Riffs (C)',
    },
    {
      name: 'Rhiannon',
      artist: 'Fleetwood Mac',
      details: 'Guitar Double-Step Riff (C)',
    },
    {
      name: 'Wild World',
      artist: 'Cat Stevens',
      details: 'Guitar Run During Chorus (C)',
    },
    {
      name: 'La Bamba',
      artist: 'Los Lobos',
      details: 'Guitar Intro, Solos (C)',
    },
    {
      name: 'Freewill',
      artist: 'Rush',
      details: 'Guitar Intro, Verse (C)',
    },
    {
      name: 'Friend of the Devil',
      artist: 'The Grateful Dead',
      details: 'Guitar Intro (G)',
    },
    {
      name: 'Centerfield',
      artist: 'John Fogerty',
      details: 'Guitar Intro (G)',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      details: 'Guitar Solo (G)',
    },
    {
      name: 'Broken',
      artist: 'Seether',
      details: 'Guitar Solo 2:35 (G)',
    },
    {
      name: 'Caught Up In You',
      artist: '38 Special',
      details: 'Guitar Solo (E)',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett & The Blackhearts',
      details: 'Guitar Solo (E)',
    },
    {
      name: 'My Own Worst Enemy',
      artist: 'Lit',
      details: 'Guitar Solo (E)',
    },
    {
      name: "Mama I'm Coming Home",
      artist: 'Ozzy Osbourne',
      details: 'Guitar Intro (E)',
    },
    {
      name: 'I Want Candy',
      artist: 'Bow Wow Wow',
      details: 'Guitar Riff (D)',
    },
    {
      name: 'Lie In Our Graves',
      artist: 'Dave Matthews Band',
      details: 'Guitar Intro (D)',
    },
    {
      name: 'Stay Together for the Kids',
      artist: 'Blink 182',
      details: 'Guitar Intro (D)',
    },
    {
      name: 'Ventura Highway',
      artist: 'America',
      details: 'Guitar Intro (D)',
    },
    {
      name: 'The First Cut is the Deepest',
      artist: 'Sheryl Crow',
      details: 'Guitar Solo (D)',
    },
    {
      name: 'Third Stone from the Sun',
      artist: 'Jimi Hendrix',
      details: 'Octave Guitar Melody (A)',
    },
    {
      name: 'Crazy Train',
      artist: 'Ozzy Osbourne',
      details: 'Guitar Riff (A)',
    },
    {
      name: 'No Rain',
      artist: 'Blind Melon',
      details: 'Lead Guitar Intro (A)',
    },
    {
      name: 'Better Together',
      artist: 'Jack Johnson',
      details: 'Guitar Verse 0:08 (F)',
    },
    {
      name: 'Black Magic Woman',
      artist: 'Santana',
      details: 'Guitar Solo (F)',
    },
    {
      name: 'Layla (Unplugged)',
      artist: 'Eric Clapton',
      details: 'Guitar Solo (F)',
    },
    {
      name: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      details: 'Guitar Solo (Ab)',
    },
    {
      name: 'Satellite',
      artist: 'Dave Matthews Band',
      details: 'Guitar Intro (Ab)',
    },
    {
      name: 'ATWA',
      artist: 'System of a Down',
      details: 'Guitar Intro (Ab)',
    },
    {
      name: 'Ariels',
      artist: 'System of a Down',
      details: 'Guitar Intro (Eb)',
    },
    {
      name: 'Europa',
      artist: 'Santana',
      details: 'Guitar Solo (Eb)',
    },
    {
      name: "Don't Speak",
      artist: 'No Doubt',
      details: 'Guitar Solo (Eb)',
    },
    {
      name: 'Flavor of the Weak',
      artist: 'American Hi-Fi',
      details: 'Guitar Solo (Bb)',
    },
  ],
  'major-scale-not-all-seven-degrees': [
    {
      name: 'China Cat Sunflower',
      artist: 'The Grateful Dead',
      details: 'Lead Guitar Melody (C)',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      details: 'Octave Guitar Melody (C)',
    },
    {
      name: 'Redemption Song',
      artist: 'Bob Marley',
      details: 'Guitar Intro (G)',
    },
    {
      name: 'Dueling Banjos',
      artist: 'Eric Weissberg & Steve Mandell',
      details: 'Guitar, Capo II (G)',
    },
    {
      name: 'Last Resort',
      artist: 'Papa Roach',
      details: 'Guitar Riff (G)',
    },
    {
      name: 'Oh, Pretty Woman',
      artist: 'Roy Orbison/Van Halen',
      details: 'Guitar Riff (A)',
    },
    {
      name: 'Photograph',
      artist: 'Weezer',
      details: 'Guitar Solo (A)',
    },
    {
      name: 'The Joker',
      artist: 'Steve Miller Band',
      details: 'Guitar Riff (F)',
    },
    {
      name: 'Layla',
      artist: 'Derek & The Dominos',
      details: 'Rhythm Guitar Intro (F)',
    },
    {
      name: 'Show Me the Way',
      artist: 'Peter Frampton',
      details: 'Guitar Melody (D)',
    },
    {
      name: 'Back on the Chain Gang',
      artist: 'The Pretenders',
      details: 'Guitar Melody (D)',
    },
    {
      name: 'In Too Deep',
      artist: 'Sum 41',
      details: 'Guitar Intro (E)',
    },
    {
      name: 'Sweet Dreams',
      artist: 'Marilyn Manson',
      details: 'Guitar Riff (Eb)',
    },
    {
      name: "The Kids Aren't Alright",
      artist: 'The Offspring',
      details: 'Guitar Intro (Db)',
    },
  ],
  'major-scale-chromatic-passing-tones': [
    {
      name: 'Hit Me With Your Best Shot',
      artist: 'Pat Benatar',
      details: 'Guitar Solo (E)',
    },
    {
      name: "Walk Don't Run",
      artist: 'The Ventures',
      details: 'Guitar Melody (C)',
    },
  ],
  triads: [
    {
      name: 'Centerfield',
      artist: 'John Fogerty',
      details: 'Guitar Intro',
    },
    {
      name: 'Tightrope',
      artist: 'Stevie Ray Vaughan & DoubleTrouble',
      details: 'Guitar Riff',
    },
    {
      name: 'Manic Depression',
      artist: 'Jimi Hendrix',
      details: 'Guitar',
    },
    {
      name: 'Online Songs',
      artist: 'Blink 182',
      details: 'Guitar 0:20',
    },
  ],
  'major-chords-1-4-5': [
    {
      name: 'Achy Breaky Heart',
      artist: 'Billy Ray Cyrus',
      details: 'Whole Song! I V (A)',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      details: 'Nearly Whole Song! V IV I (G)',
    },
    {
      name: 'All Summer Long',
      artist: 'Kid Rock',
      details: 'Whole Song! V IV I (G)',
    },
    {
      name: 'Werewolves of London',
      artist: 'Warren Zevon',
      details: 'Whole Song! V IV I (G)',
    },
    {
      name: 'Magic Carpet Ride',
      artist: 'Steppenwolf',
      details: 'Verse V IV I (G)',
    },
    {
      name: 'Seven Bridges Road',
      artist: 'The Eagles',
      details: 'Verse/Chorus V IV I (G)',
    },
    {
      name: 'Taking Care of Business',
      artist: 'Bachman-Turner Overdrive',
      details: 'Verse/Chorus V IV I (F)',
    },
    {
      name: 'Brown Eyed Girl',
      artist: 'Van Morrison',
      details: 'Verse I IV I V (G)',
    },
    {
      name: 'Hang on Sloopy',
      artist: 'The McCoys',
      details: 'Whole Song! I IV V IV (G)',
    },
    {
      name: 'Stir It Up',
      artist: 'Bob Marley',
      details: 'Whole Song! I IV V (A)',
    },
    {
      name: 'What I Like About You',
      artist: 'The Romantics',
      details: 'Nearly Whole Song! V I IV I (A)',
    },
    {
      name: 'Brimful of Asha',
      artist: 'Corner Shop',
      details: 'Verse/Chorus I V IV (A)',
    },
    {
      name: 'Wild Thing',
      artist: 'The Troggs',
      details: 'Chorus I IV V IV (A)',
    },
    {
      name: 'Walking On Sunshine',
      artist: 'Katrina & The Waves',
      details: 'Verse I IV V IV (Bb)',
    },
    {
      name: 'Twist and Shout',
      artist: 'The Isley Brothers',
      details: 'Whole Song! I IV V (F)',
    },
    {
      name: 'Are You Jimmy Ray?',
      artist: 'Jimmy Ray',
      details: 'Verse/Chorus V IV I IV (F)',
    },
    {
      name: 'Give Me One Reason',
      artist: 'Tracy Chapman',
      details: 'Verse I IV V (F#)',
    },
    {
      name: 'Me and Bobby McGee',
      artist: '',
      details: '(G, B)',
    },
    {
      name: 'Bye Bye Love',
      artist: 'The Everly Brothers excluding intro',
      details: '(A)',
    },
    {
      name: 'When The Sun Goes Down',
      artist: 'Kenny Chesney',
      details: '(A)',
    },
    {
      name: 'Barbara Ann',
      artist: 'The Beach Boys',
      details: '(B)',
    },
    {
      name: 'Mr.Tambourine Man',
      artist: 'Bob Dylan',
      details: '(F)',
    },
    {
      name: 'Volcano',
      artist: 'Jimmy Buffet',
      details: '(F)',
    },
    {
      name: 'The Joker',
      artist: 'Steve Miller Band',
      details: '(F)',
    },
    {
      name: "Why Don't You Get a Job?",
      artist: 'The Offspring',
      details: '(F)',
    },
    {
      name: 'Walk of Life',
      artist: 'Dire Straits',
      details: '(E)',
    },
    {
      name: 'I Wanna Be Sedated',
      artist: 'The Ramones',
      details: '(E)',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett & The Blackhearts',
      details: '(E)',
    },
    {
      name: 'I Wanna Be Sedated',
      artist: 'The Ramones',
      details: '(E, F#)',
    },
  ],
  'minor-chords-2-3-6': [
    {
      name: "I'm Yours",
      artist: 'Jason Mraz',
      details: 'I V vi IV (B)',
    },
    {
      name: 'Country Roads',
      artist: 'John Denver',
      details: 'Chorus I V vi IV (A)',
    },
    {
      name: 'You Are God Alone',
      artist: 'Billy Foote & Cindy Foote',
      details: 'Chorus I V vi IV (Ab)',
    },
    {
      name: 'Glycerine',
      artist: 'Bush',
      details: 'I V vi IV (F)',
    },
    {
      name: 'Hurts So Good',
      artist: 'John Mellencamp',
      details: 'Verse I V vi IV (A)',
    },
    {
      name: 'Love the Lord',
      artist: 'Lincoln Brewster',
      details: 'Verse I V vi iii IV, IV V I (G)',
    },
    {
      name: "What's Up?",
      artist: '4 Non Blondes',
      details: 'I ii (A)',
    },
    {
      name: 'My Own Worst Enemy',
      artist: 'Lit',
      details: 'Chorus I ii IV V (E)',
    },
    {
      name: 'Online Songs',
      artist: 'Blink 182',
      details: 'Intro/Verse I I ii IV V (A)',
    },
    {
      name: 'Closing Time',
      artist: 'Semisonic',
      details: 'I V ii IV (G)',
    },
    {
      name: 'Earth Angel (Will You Be Mine)',
      artist: 'The Penguins',
      details: 'I vi IV V (Bb)',
    },
    {
      name: 'Every Breath You Take',
      artist: 'The Police',
      details: 'I vi IV V (Ab)',
    },
    {
      name: 'Stand by Me',
      artist: 'Ben E. King',
      details: 'I vi IV V (A)',
    },
    {
      name: 'Hit Me With Your Best Shot',
      artist: 'Pat Benatar',
      details: 'Chorus I IV vi V, I IV vi V IV V (E)',
    },
    {
      name: 'Layla (Acoustictic)',
      artist: 'Eric Clapton',
      details: 'Chorus/Solo vi IV V vi (F)',
    },
    {
      name: "I Won't Back Down",
      artist: 'Tom Petty',
      details: 'vi V I (G)',
    },
    {
      name: 'Under the Boardwalk',
      artist: 'The Drifters',
      details: 'Chorus vi V (G)',
    },
    {
      name: 'Heart of Gold',
      artist: 'Neil Young',
      details: 'Verse vi IV V I (G)',
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      details: 'Verse vi V, I V vi (G)',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      details: 'vi ii V I (G)',
    },
    {
      name: 'Ob-La-Di Ob-La-Da',
      artist: 'The Beatles',
      details: 'Chorus I V vi I V I (Bb)',
    },
    {
      name: 'Here I Am to Worship',
      artist: 'Tim Hughes',
      details: 'Verse I V ii, I V IV (E)',
    },
    {
      name: 'Open the Eyes of My Heart',
      artist: 'Michael W. Smith',
      details: 'Chorus V vi IV V, V vi ii V (E)',
    },
    {
      name: 'Days of Elijah / Kadosh',
      artist: 'Paul Wilbur',
      details: 'Includes iii (Bb)',
    },
    {
      name: 'Man On the Moon',
      artist: 'R.E.M.',
      details: 'Includes iii (G)',
    },
  ],
  'major-chords-1-4-5-string-5': [
    {
      name: 'Jambalaya (On the Bayou)',
      artist: 'Hank Williams',
      details: 'IV (C)',
    },
    {
      name: 'You Never Can Tell',
      artist: 'Chuck Berry',
      details: 'IV (C)',
    },
    {
      name: "Summer of '69",
      artist: 'Bryan Adams',
      details: 'Verse IV (D)',
    },
    {
      name: "I Still Haven't Found What I'm Looking For",
      artist: 'U2',
      details: 'Verse I IV (Db)',
    },
    {
      name: 'Life of Illusion',
      artist: 'Joe Walsh',
      details: 'Verse IV I (D)',
    },
    {
      name: 'Authority Song',
      artist: 'John Mellencamp',
      details: 'Whole Song! I IV V (D)',
    },
    {
      name: 'Twist and Shout',
      artist: 'The Beatles',
      details: 'Verse/Chorus I IV V (D)',
    },
    {
      name: 'Hold My Hand',
      artist: 'Hootie & The Blowfish',
      details: 'Chorus I IV V (B)',
    },
    {
      name: "Good Lovin'",
      artist: 'The Rascals',
      details: 'Verse/Chorus I IV V IV (D)',
    },
    {
      name: 'Do Ya',
      artist: 'Electric Light Orchestra',
      details: 'Verse/Chorus IV IV (D)',
    },
    {
      name: 'The First Cut Is the Deepest',
      artist: 'Sheryl Crow',
      details: 'Verse/Chorus I V IV (D)',
    },
    {
      name: 'I Could Never Take the Place of Your Man',
      artist: 'Prince',
      details: 'Verse I V IV (C)',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      details: 'Verse/Chorus I V IV (E)',
    },
    {
      name: "Baba O'Riley",
      artist: 'The Who',
      details: 'Verse I V IV (F)',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      details: 'Verse I V IV (E)',
    },
    {
      name: 'Crimson and Clover',
      artist: 'Tommy James & The Shondells',
      details: 'Verse I V IV (B)',
    },
    {
      name: 'Learn to Fly',
      artist: 'Foo Fighters',
      details: 'Verse I V IV (B)',
    },
    {
      name: 'Bad Moon Rising',
      artist: 'Creedence Clearwater Revival',
      details: 'Verse I V IV (D)',
    },
    {
      name: 'Helpless',
      artist: 'Crosby, Stills, Nash & Young',
      details: 'Chorus IV IV (D)',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      details: 'Verse I V IV V (C)',
    },
    {
      name: 'Take the Money and Run',
      artist: 'Steve Miller Band',
      details: 'Verse/Chorus V IV I (C)',
    },
    {
      name: 'Feliz Navidad',
      artist: 'Jose Feliciano',
      details: 'Verse IV V I (D)',
    },
  ],
  'minor-chords-2-3-6-string-5': [
    {
      name: 'With or Without You',
      artist: 'U2',
      details: 'Verse/Chorus I V vi IV (D)',
    },
    {
      name: 'Let it Be',
      artist: 'The Beatles',
      details: 'Verse I V vi IV (C)',
    },
    {
      name: 'Beast of Burden',
      artist: 'The Rolling Stones',
      details: 'Verse I V vi IV (E)',
    },
    {
      name: 'Blessed Be Your Name',
      artist: 'Matt Redman',
      details: 'Whole Song! I V vi IV (B)',
    },
    {
      name: "Jessie's Girl",
      artist: 'Rick Springfield',
      details: 'Verse I V vi, IV V I (D)',
    },
    {
      name: 'You Might Think',
      artist: 'The Cars',
      details: 'Chorus I IV V vi, I IV V I (D)',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      details: 'Verse I V vi iii IV (E)',
    },
    {
      name: 'Unchained Melody',
      artist: 'The Righteous Brothers',
      details: 'Chorus I vi IV V (C)',
    },
    {
      name: 'Runaround Sue',
      artist: 'Dion',
      details: 'Verse I vi IV V (D)',
    },
    {
      name: 'Show Me Your Glory',
      artist: 'Third Day',
      details: 'Chorus I vi IV V (D)',
    },
    {
      name: 'How Great is Our God',
      artist: 'Chris Tomlin',
      details: 'Chorus I vi IV V (Db)',
    },
    {
      name: "Dy'er Mak'er",
      artist: 'Led Zeppelin',
      details: 'Verse/Chorus I vi IV V (C)',
    },
    {
      name: 'Two Princes',
      artist: 'Spin Doctors',
      details: 'Verse I vi V IV (D)',
    },
    {
      name: 'Californication',
      artist: 'Red Hot Chili Peppers',
      details: 'Verse vi IV (C)',
    },
    {
      name: 'Have You Ever Seen the Rain',
      artist: 'CCR',
      details: 'Chorus IV V I V vi (C)',
    },
    {
      name: 'Feliz Navidad',
      artist: 'Jose Feliciano',
      details: 'Chorus IV V I vi (D)',
    },
    {
      name: 'Faith',
      artist: 'George Michael',
      details: 'Chorus IV I IV I IV I vi ii V (B',
    },
    {
      name: 'Made To Worship',
      artist: 'Chris Tomlin',
      details: 'Chorus I IV ii V (C)',
    },
    {
      name: 'Everlasting God',
      artist: 'Lincoln Brewster',
      details: 'Chorus I IV vi IV (B)',
    },
    {
      name: 'Friend of God',
      artist: 'Israel Houghton',
      details: 'Chorus I vi ii I (D)',
    },
    {
      name: 'Horse with No Name',
      artist: 'America',
      details: 'Whole Song! ii iii (D)',
    },
    {
      name: 'Losing My Religion',
      artist: 'R.E.M.',
      details: 'Verse vi iii (C)',
    },
    {
      name: 'Louie, Louie',
      artist: 'The Kingsmen',
      details: 'Whole Song! V I ii I (D)',
    },
    {
      name: "Don't Fear the Reaper",
      artist: 'Blue Oyster Cult',
      details: 'Verse vi V IV V (C)',
    },
    {
      name: 'Otherside',
      artist: 'Red Hot Chili Peppers',
      details: 'Chorus vi IV I V (C)',
    },
    {
      name: 'Maggie May',
      artist: 'Rod Stewart',
      details: 'Guitar Solos ii V I IV, ii IV I (D)',
    },
    {
      name: 'Lean On Me',
      artist: 'Bill Withers',
      details: 'Verse I ii iii IV, IV iii ii I (C)',
    },
    {
      name: 'The Thrill Is Gone',
      artist: 'B.B. King',
      details: 'Verse vi ii vi VI iii vi (D)',
    },
  ],
  'e-major-root': [
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      details: 'includes a pentatonic riff',
    },
    {
      name: 'Beast of Burden',
      artist: 'The Rolling Stones',
      details: 'includes a pentatonic solo',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      details: 'includes a pentatonic solo',
    },
    {
      name: 'Walk of Life',
      artist: 'Dire Straits',
      details: 'includes a pentatonic melody',
    },
    {
      name: 'No Rain',
      artist: 'Blind Melon',
      details: 'includes a partial pentatonic solo',
    },
    {
      name: "I Love Rock'N Roll",
      artist: 'Joan Jett & The Blackhearts',
      details: 'includes a partial pentatonic solo',
    },
    {
      name: 'Hit Me With Your Best Shot',
      artist: 'Pat Benatar',
      details: 'includes a partial pentatonic solo',
    },
    {
      name: 'Blue Sky',
      artist: 'The Allman Brothers Band',
      details: 'includes a pentatonic intro and partial pentatonic solo',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      details: 'includes a pentatonic solo with chromatic tones',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      details: 'verse only',
    },
    {
      name: 'What I Like About You',
      artist: 'The Romantics',
    },
    {
      name: 'I Wanna Be Sedated',
      artist: 'The Ramones',
    },
    {
      name: 'A Change',
      artist: 'Sheryl Crow',
    },
    {
      name: 'Dreams',
      artist: 'The Cranberries',
    },
  ],

  'a-minor-root': [
    {
      name: 'Smooth',
      artist: 'Santana Featuring Rob Thomas',
      details: 'Guitar riff',
    },
    {
      name: 'Moondance',
      artist: 'Van Morrison',
      details: 'Guitar riff',
    },
    {
      name: 'Brickhouse',
      artist: 'The Commodores',
      details: 'Guitar riff',
    },
    {
      name: 'Who Will Save Your Soul',
      artist: 'Jewel',
      details: 'Guitar riff',
    },
    {
      name: 'Mr. Jones',
      artist: 'Counting Crows',
      details: 'Guitar riff',
    },
    {
      name: 'Rhiannon',
      artist: 'Fleetwood Mac',
      details: 'Guitar riff',
    },
    {
      name: 'House of the Rising Sun',
      artist: 'The Animals',
      details: 'Guitar riff',
    },
    {
      name: 'Cold Shot',
      artist: 'Stevie Ray Vaughan & Double Trouble',
      details: 'Includes Pentatonic Solo',
    },
    {
      name: 'Tweezer',
      artist: 'Phish',
      details: 'Includes Pentatonic Riff',
    },
    {
      name: 'In 2 Deep',
      artist: 'Kenny Wayne Shepherd',
      details: 'Includes Pentatonic Riff',
    },
    {
      name: 'Maria Maria',
      artist: 'Santana',
      details: 'Includes Pentatonic Solo/Riff',
    },
    {
      name: 'Breakdown',
      artist: 'Tom Petty',
      details: 'Includes Pentatonic Solo/Riff',
    },
    {
      name: 'Oye Como Va',
      artist: 'Santana',
      details: 'Includes Partial Pentatonic Solo/Riff',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Includes Pentatonic Solo & Riff',
    },
  ],
  'changing-pentatonic-scales': [
    {
      name: 'My Girl',
      artist: 'The Temptations',
      details: 'Guitar Riff',
    },
    {
      name: "Couldn't Stand the Weather",
      artist: 'Stevie Ray Vaughan',
      details: 'Guitar Lead Intro',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      details: 'Guitar Riff After First Verse',
    },
    {
      name: 'Spirit of Radio',
      artist: 'Rush',
      details: 'Guitar Riff',
    },
    {
      name: 'Bold as Love',
      artist: 'Jimi Hendrix',
    },
    {
      name: 'Castles Made of Sand',
      artist: 'Jimi Hendrix',
    },
    {
      name: 'Little Wing',
      artist: 'Jimi Hendrix',
    },
  ],
  blues: [
    {
      name: 'Pride and Joy',
      artist: 'Stevie Ray Vaughan',
      details: 'Guitar Riff',
    },
    {
      name: 'The Thrill Is Gone',
      artist: 'B.B. King',
      details: 'Guitar Riff',
    },
    {
      name: 'Red House',
      artist: 'Jimi Hendrix',
      details: 'Guitar Riff',
    },
    {
      name: 'Born Under a Bad Sign',
      artist: 'Albert King',
      details: 'Guitar Riff',
    },
    {
      name: 'Sweet Home Chicago',
      artist: 'Robert Johnson',
      details: 'Guitar Riff',
    },
    {
      name: 'Hoochie Coochie Man',
      artist: 'Muddy Waters',
      details: 'Guitar Riff',
    },
    {
      name: 'Crossroads',
      artist: 'Cream/Robert Johnson',
      details: 'Guitar Riff',
    },
    {
      name: 'Stormy Monday',
      artist: 'T-Bone Walker',
      details: 'Guitar Riff',
    },
  ],
  'ionian-mode': [
    {
      name: 'Meet Virginia',
      artist: 'Train',
      details: 'C',
    },
    {
      name: 'Let It Be',
      artist: 'The Beatles',
      details: 'C',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      details: 'C',
    },
    {
      name: 'Like a Rolling Stone',
      artist: 'Bob Dylan',
      details: 'C',
    },
    {
      name: 'Fool In the Rain',
      artist: 'Led Zeppelin',
      details: 'C',
    },
    {
      name: 'La Bamba',
      artist: 'Los Lobos',
      details: 'C',
    },
    {
      name: "Don't Get Me Wrong",
      artist: 'The Pretenders',
      details: 'C',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      details: 'G',
    },
    {
      name: 'Semi-Charmed Life',
      artist: 'Third Eye Blind',
      details: 'G',
    },
    {
      name: 'Redemption Song',
      artist: 'Bob Marley',
      details: 'G',
    },
    {
      name: 'Wonderful Tonight',
      artist: 'Eric Clapton',
      details: 'G',
    },
    {
      name: 'Last Kiss',
      artist: 'Pearl Jam',
      details: 'G',
    },
    {
      name: 'Joey',
      artist: 'Concrete Blonde',
      details: 'G',
    },
    {
      name: 'Talking About a Revolution',
      artist: 'Tracy Chapman',
      details: 'G',
    },
    {
      name: 'Blister in the Sun',
      artist: 'Violent Femmes',
      details: 'G',
    },
    {
      name: 'Closing Time',
      artist: 'Semisonic',
      details: 'G',
    },
    {
      name: 'Friend of the Devil',
      artist: 'The Grateful Dead',
      details: 'G',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      details: 'E',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      details: 'E',
    },
    {
      name: 'Hit Me With Your Best Shot',
      artist: 'Pat Benatar',
      details: 'E',
    },
    {
      name: 'In Too Deep',
      artist: 'Sum 41',
      details: 'E',
    },
    {
      name: 'Fat Lip',
      artist: 'Sum 41',
      details: 'E',
    },
    {
      name: 'Beast of Burden',
      artist: 'The Rolling Stones',
      details: 'E',
    },
    {
      name: 'My Own Worst Enemy',
      artist: 'Lit',
      details: 'E',
    },
    {
      name: "Why Don't You Get a Job?",
      artist: 'The Offspring',
      details: 'F',
    },
    {
      name: 'The Joker',
      artist: 'Steve Miller Band',
      details: 'F',
    },
    {
      name: 'Call Me Al',
      artist: 'Paul Simon',
      details: 'F',
    },
    {
      name: 'Free Falling',
      artist: 'Tom Petty',
      details: 'F',
    },
    {
      name: 'Glycerine',
      artist: 'Bush',
      details: 'F',
    },
    {
      name: 'Margaritaville',
      artist: 'Jimmy Buffet',
      details: 'D',
    },
    {
      name: "Breakfast at Tiffany's",
      artist: 'Deep Blue Something',
      details: 'D',
    },
    {
      name: 'Tub Thumping',
      artist: 'Chumbawumba',
      details: 'D',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      details: 'A',
    },
    {
      name: 'Every Breath You Take',
      artist: 'The Police',
      details: 'A',
    },
    {
      name: 'Satellite',
      artist: 'Dave Matthews Band',
      details: 'Ab',
    },
  ],
  'dorian-mode': [
    {
      name: 'Moondance',
      artist: 'Van Morrison',
      details: 'A Dorian (G)',
    },
    {
      name: 'Fly Like an Eagle',
      artist: 'Steve Miller Band',
      details: 'A Dorian (G)',
    },
    {
      name: 'Brickhouse',
      artist: 'The Commodores',
      details: 'A Dorian (G)',
    },
    {
      name: 'Le Freak',
      artist: 'Chic',
      details: 'A Dorian (G)',
    },
    {
      name: 'Oye Como Va',
      artist: 'Santana',
      details: 'A Dorian (G)',
    },
    {
      name: 'Who Will Save Your Soul',
      artist: 'Jewel',
      details: 'A Dorian (G)',
    },
    {
      name: 'Light My Fire',
      artist: 'The Doors',
      details: 'A Dorian (G)',
    },
    {
      name: 'Walking on the Sun',
      artist: 'Smash Mouth',
      details: 'A Dorian (G)',
    },
    {
      name: 'Grease',
      artist: 'Frankie Valli',
      details: 'B Dorian (A)',
    },
    {
      name: 'Golgi Apparatus',
      artist: 'Phish',
      details: 'B Dorian (A)',
    },
    {
      name: "Stayin' Alive",
      artist: 'The Bee Gees',
      details: 'F Dorian (Eb)',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      details: 'D Dorian (C)',
    },
    {
      name: 'Your Body is a Wonderland',
      artist: 'John Mayer',
      details: 'D Dorian (C)',
    },
    {
      name: 'Evil Ways',
      artist: 'Santana',
      details: 'G Dorian (F)',
    },
    {
      name: 'Horse with No Name',
      artist: 'America',
      details: 'E Dorian (D)',
    },
    {
      name: 'Spooky',
      artist: 'Atlanta Rhythm Section',
      details: 'E Dorian (D)',
    },
    {
      name: 'Godzilla',
      artist: 'Blue Oyster Cult',
      details: 'F# Dorian (E)',
    },
    {
      name: 'I Wish',
      artist: 'Stevie Wonder',
      details: 'Eb Dorian (Db)',
    },
  ],
  'lydian-mode': [
    {
      name: 'Freewill',
      artist: 'Rush',
      details: 'F Lydian (C)',
    },
    {
      name: 'Dreams',
      artist: 'Fleetwood Mac',
      details: 'F Lydian (C)',
    },
    {
      name: 'Just Remember I Love You',
      artist: 'Firefall',
      details: 'F Lydian (C)',
    },
    {
      name: 'Jane Says',
      artist: "Jane's Addiction",
      details: 'G Lydian (D)',
    },
    {
      name: 'Hey Jealousy',
      artist: 'Gin Blossoms',
      details: 'D Lydian (A)',
    },
    {
      name: 'Landslide',
      artist: 'Fleetwood Mac',
      details: 'C Lydian (G)',
    },
    {
      name: 'Man On the Moon',
      artist: 'R.E.M.',
      details: 'C Lydian (G)',
    },
    {
      name: 'Here Comes My Girl',
      artist: 'Tom Petty',
      details: 'A Lydian (E)',
    },
    {
      name: 'The Simpsons',
      artist: 'Theme to',
      details: 'Starts in C Lydian (G)',
    },
    {
      name: 'Maria',
      artist: 'from West Side Story',
      details: 'Eb Lydian (Bb)',
    },
    {
      name: 'The Jetsons',
      artist: 'Theme to',
      details: 'Starts in E Lydian (B)',
    },
  ],
  'mixolydian-mode': [
    {
      name: 'Third Stone from the Sun',
      artist: 'Jimi Hendrix',
      details: 'E Mixolydian (A)',
    },
    {
      name: 'What I Like About You',
      artist: 'The Romantics',
      details: 'E Mixolydian (A)',
    },
    {
      name: 'Possum Kingdom',
      artist: 'The Toadies',
      details: 'E Mixolydian (A)',
    },
    {
      name: 'No Rain',
      artist: 'Blind Melon',
      details: 'E Mixolydian (A)',
    },
    {
      name: "I'm So Glad",
      artist: 'Cream',
      details: 'E Mixolydian (A)',
    },
    {
      name: 'Norwegian Wood (This Bird Has Flown)',
      artist: 'The Beatles',
      details: 'E Mixolydian (A)',
    },
    {
      name: 'Free',
      artist: 'Phish',
      details: 'Time Down 1/2 Step E Mixolydian (A)',
    },
    {
      name: 'Seven Bridges Road',
      artist: 'The Eagles',
      details: 'D Mixolydian (G)',
    },
    {
      name: 'What I Got',
      artist: 'Sublime',
      details: 'D Mixolydian (G)',
    },
    {
      name: "Don't Tell Me",
      artist: 'Madonna',
      details: 'D Mixolydian (G)',
    },
    {
      name: 'Cinnamon Girl',
      artist: 'Neil Young',
      details: 'D Mixolydian (G)',
    },
    {
      name: 'Flagpole Sitta',
      artist: 'Harvey Danger',
      details: 'D Mixolydian (G)',
    },
    {
      name: 'Jessica',
      artist: 'The Allman Brothers Band',
      details: 'A Mixolydian (D)',
    },
    {
      name: "Franklin's Tower",
      artist: 'Grateful Dead',
      details: 'A Mixolydian (D)',
    },
    {
      name: 'Take a Picture',
      artist: 'Filter',
      details: 'A Mixolydian (D)',
    },
    {
      name: 'Louie, Louie',
      artist: 'The Kingsmen',
      details: 'A Mixolydian (D)',
    },
    {
      name: 'Tequila',
      artist: 'The Champs',
      details: 'F Mixolydian (Bb)',
    },
    {
      name: 'Get Down Tonight',
      artist: 'KC and The Sunshine Band',
      details: 'F Mixolydian (Bb)',
    },
    {
      name: '1999',
      artist: 'Prince',
      details: 'F Mixolydian (Bb)',
    },
    {
      name: 'Take the Money and Run',
      artist: 'Steve Miller Band',
      details: 'G Mixolydian (C)',
    },
    {
      name: 'China Cat Sunflower',
      artist: 'The Grateful Dead',
      details: 'G Mixolydian (C)',
    },
    {
      name: 'Lowrider',
      artist: 'War',
      details: 'G Mixolydian (C)',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      details: 'G Mixolydian (C)',
    },
    {
      name: 'Scarlet Begonias',
      artist: 'The Grateful Dead',
      details: 'B Mixolydian (E)',
    },
    {
      name: 'Taking Care of Business',
      artist: 'Bachman-Turner Overdrive',
      details: 'G Mixolydian (F)',
    },
    {
      name: 'On Broadway',
      artist: 'The Drifters',
      details: 'Ab Mixolydian (Db)',
    },
    {
      name: 'Wrong Way',
      artist: 'Sublime',
      details: 'Lots Of Key Changes!',
    },
  ],
  'aeolian-mode': [
    {
      name: 'Maria Maria',
      artist: 'Santana',
      details: 'A Aeolian (C)',
    },
    {
      name: 'Losing My Religion',
      artist: 'R.E.M.',
      details: 'A Aeolian (C)',
    },
    {
      name: 'First Tube',
      artist: 'Phish',
      details: 'A Aeolian (C)',
    },
    {
      name: 'Mr. Jones',
      artist: 'Counting Crows',
      details: 'A Aeolian (C)',
    },
    {
      name: 'Hash Pipe',
      artist: 'Weezer',
      details: 'A Aeolian (C)',
    },
    {
      name: 'Rhiannon',
      artist: 'Fleetwood Mac',
      details: 'A Aeolian (C)',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Guitar Solo A Aeolian (C)',
    },
    {
      name: 'Black Magic Woman',
      artist: 'Santana',
      details: 'D Aeolian (F)',
    },
    {
      name: 'Layla (Acoustictic)',
      artist: 'Eric Clapton',
      details: 'Chorus/Solos D Aeolian (F)',
    },
    {
      name: 'Schism',
      artist: 'Tool',
      details: 'D Aeolian (F)',
    },
    {
      name: 'Sultans of Swing',
      artist: 'Dire Straits',
      details: 'D Aeolian (F)',
    },
    {
      name: 'Two Step',
      artist: 'Dave Matthews Band',
      details: 'D Aeolian (F)',
    },
    {
      name: 'Ariels',
      artist: 'System of a Down',
      details: 'C Aeolian (Eb)',
    },
    {
      name: 'Sweet Dreams',
      artist: 'Marilyn Manson',
      details: 'C Aeolian (Eb)',
    },
    {
      name: 'You Give Love a Bad Name',
      artist: 'Bon Jovi',
      details: 'C Aeolian (Eb)',
    },
    {
      name: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      details: 'F Aeolian (Ab)',
    },
    {
      name: 'ATWA',
      artist: 'System of a Down',
      details: 'F Aeolian (Ab)',
    },
    {
      name: 'Black',
      artist: 'Pearl Jam',
      details: 'Guitar Solo E Aeolian (G)',
    },
    {
      name: 'Last Resort',
      artist: 'Papa Roach',
      details: 'E Aeolian (G)',
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      details: 'E Aeolian (G)',
    },
    {
      name: 'The Thrill Is Gone',
      artist: 'B.B. King',
      details: 'B Aeolian (D)',
    },
    {
      name: 'Fade to Black',
      artist: 'Metallica',
      details: 'B Aeolian (D)',
    },
    {
      name: 'Building a Mystery',
      artist: 'Sarah McLachlan',
      details: 'B Aeolian (D)',
    },
    {
      name: 'Crazy Train',
      artist: 'Ozzy Osbourne',
      details: 'F# Aeolian (A)',
    },
    {
      name: 'I Shot the Sheriff',
      artist: 'Bob Marley/Eric Clapton',
      details: 'G Aeolian (Bb)',
    },
    {
      name: 'Thank You',
      artist: 'Dido',
      details: 'G# Aeolian (B)',
    },
    {
      name: "The Kids Aren't Alright",
      artist: 'The Offspring',
      details: 'Bb Aeolian (Db)',
    },
  ],
  'inverted-power-chords': [
    {
      name: 'The Wind Cries Mary',
      artist: 'Jimi Hendrix',
      details: 'Intro',
    },
    {
      name: 'Come Out and Play',
      artist: 'The Offspring',
      details: 'Intro',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      details: 'Intro',
    },
    {
      name: 'Smoke on the Water',
      artist: 'Deep Purple',
      details: 'Intro',
    },
    {
      name: 'Tomorrow',
      artist: 'Silverchair',
      details: 'Chorus',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Incubus',
      details: 'Intro & Chorus',
    },
    {
      name: 'Photograph',
      artist: 'Weezer',
      details: 'Verse & Chorus',
    },
    {
      name: 'Hash Pipe',
      artist: 'Weezer',
      details: 'Chorus & Solo',
    },
    {
      name: 'Glycerine',
      artist: 'Bush',
      details: 'Verse',
    },
    {
      name: 'Stellar',
      artist: 'Incubus',
      details: 'Intro & Verse',
    },
    {
      name: 'Money for Nothing',
      artist: 'Dire Straits',
      details: 'Intro/Verse Riff',
    },
    {
      name: 'Band on the Run',
      artist: 'Wings',
      details: 'Intro Lead Guitar',
    },
    {
      name: 'Better Together',
      artist: 'Jack Johnson',
      details: 'Guitar Intro',
    },
  ],
  thirds: [
    {
      name: 'Brown Eyed Girl',
      artist: 'Van Morrison',
      details: 'Electric Guitar Throughout',
    },
    {
      name: 'Blackbird',
      artist: 'The Beatles',
      details: 'Acoustictic Guitar Throughout',
    },
    {
      name: 'Two Step',
      artist: 'Dave Matthews Band',
      details: 'Acoustic Guitar Throughout',
    },
    {
      name: 'Tripping Billies',
      artist: 'Dave Matthews Band',
      details: 'Acoustic Guitar Throughout',
    },
    {
      name: 'Lover Lay Down',
      artist: 'Dave Matthews Band',
      details: 'Acoustic Guitar Throughout',
    },
    {
      name: 'Grey Street',
      artist: 'Dave Matthews Band',
      details: 'Acoustic Guitar Throughout',
    },
    {
      name: "My Best Friend's Girlfriend",
      artist: 'The Cars',
      details: 'Guitar Intro',
    },
    {
      name: 'Rhiannon',
      artist: 'Fleetwood Mac',
      details: 'Guitar Intro',
    },
    {
      name: "The Kids Aren't Alright",
      artist: 'The Offspring',
      details: 'Guitar Intro',
    },
    {
      name: 'La Bamba',
      artist: 'Los Lobos',
      details: 'Guitar Intro',
    },
    {
      name: 'Peace Train',
      artist: 'Cat Stevens',
      details: 'Guitar Intro',
    },
    {
      name: 'Down Boys',
      artist: 'Warrant',
      details: 'Guitar Intro',
    },
    {
      name: 'Wanted Dead or Alive',
      artist: 'Bon Jovi',
      details: 'Guitar Intro',
    },
    {
      name: 'Heaven',
      artist: 'Los Lonely Boys',
      details: 'Guitar Intro',
    },
    {
      name: 'Patience',
      artist: 'Guns and Roses',
      details: 'Guitar 3 Intro',
    },
    {
      name: 'Ex-girlfriend',
      artist: 'No Doubt',
      details: 'Nylon String Acoustic Guitar Intro',
    },
    {
      name: 'ATWA',
      artist: 'System of a Down',
      details: 'Guitar Intro, Drop-D Tuning',
    },
    {
      name: 'To Be with You',
      artist: 'Mr. Big',
      details: 'Guitar Solo',
    },
    {
      name: 'Flavor of the Weak',
      artist: 'American Hi-Fi',
      details: 'Guitar Solo',
    },
    {
      name: 'What I Got',
      artist: 'Sublime',
      details: 'Guitar Solo',
    },
    {
      name: 'Your Body is a Wonderland',
      artist: 'John Mayer',
      details: 'Guitar Solo',
    },
    {
      name: 'When the Sun Goes Down',
      artist: 'Kenny Chesney',
      details: 'Guitar Riff',
    },
    {
      name: 'Cold Gin',
      artist: 'Kiss',
      details: 'Guitar Riff',
    },
    {
      name: 'Walking on the Sun',
      artist: 'Smash Mouth',
      details: 'Guitar Riff',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      details: 'Guitar Bridge',
    },
    {
      name: 'How Come',
      artist: 'Ray LaMontagne',
      details: 'Lead Guitar Chorus',
    },
    {
      name: 'The Ballad of John and Yoko',
      artist: 'The Beatles',
      details: 'Lead Guitar Chorus',
    },
    {
      name: 'Stay Together for the Kids',
      artist: 'Blink 182',
      details: 'Guitar Chorus',
    },
    {
      name: 'Have You Ever Really Loved a Woman?',
      artist: 'Bryan Adams',
      details: 'Guitar Chorus',
    },
    {
      name: "Adam's Song",
      artist: 'Blink 182',
      details: 'Guitar Verse',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Caught Up In You',
      artist: '38 Special',
      details: 'Guitar Intro & Verse',
    },
    {
      name: 'Days of the Week',
      artist: 'Stone Temple Pilots',
      details: 'Guitar Verse & Chorus',
    },
    {
      name: 'Fat Lip',
      artist: 'Sum 41',
      details: 'Guitar 4 Pre-Chorus',
    },
  ],
  sixths: [
    {
      name: 'Jet Airliner',
      artist: 'Steve Miller Band',
      details: 'Rhythm Guitar Throughout',
    },
    {
      name: 'Johnny B. Goode',
      artist: 'Chuck Berry',
      details: 'Rhythm Guitar Throughout',
    },
    {
      name: 'Love Struck Baby',
      artist: 'Stevie Ray Vaughan',
      details: 'Rhythm Guitar Throughout',
    },
    {
      name: 'Life by the Drop',
      artist: 'Stevie Ray Vaughan',
      details: 'Rhythm Guitar Throughout',
    },
    {
      name: 'Keep Your Hands to Yourself',
      artist: 'Georgia Satellites',
      details: 'Rhythm Guitar Throughout',
    },
    {
      name: 'Taking Care of Business',
      artist: 'Bachman-Turner Overdrive',
      details: 'Rhythm Guitar Throughout',
    },
    {
      name: 'Rocky Mountain Way',
      artist: 'Joe Walsh',
      details: 'Guitar Intro & Chorus',
    },
    {
      name: "Truckin'",
      artist: 'The Grateful Dead',
      details: 'Rhythm Guitar Verse',
    },
    {
      name: 'I Want You to Want Me',
      artist: 'Cheap Trick',
      details: 'Rhythm Guitar Chorus',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      details: 'Guitar Chorus',
    },
  ],
  'sixth-and-flat-seventh': [
    {
      name: 'Born to Be Wild',
      artist: 'Steppenwolf',
      details: 'Guitar Intro',
    },
    {
      name: 'Rock and Roll',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro',
    },
    {
      name: 'Riding With the King',
      artist: 'B.B. King & Eric Clapton',
      details: 'Guitar Intro',
    },
    {
      name: 'Tell Me',
      artist: 'Stevie Ray Vaughan',
      details: 'Guitar Intro',
    },
    {
      name: 'Once Bitten Twice Shy',
      artist: 'Great White',
      details: 'Guitar Intro',
    },
    {
      name: 'Ice Cream Man',
      artist: 'Van Halen',
      details: 'Acoustic Guitar Intro',
    },
    {
      name: 'Custard Pie',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro & Verse',
    },
    {
      name: 'Gimme Three Steps',
      artist: 'Lynyrd Skynyrd',
      details: 'Guitar Verse',
    },
    {
      name: 'Walk This Way',
      artist: 'Aerosmith',
      details: 'Guitar Verse & Chorus',
    },
    {
      name: 'Sunspot Baby',
      artist: 'Bob Seger and The Silver Bullet Band',
      details: 'Guitar Chorus',
    },
  ],
  octaves: [
    {
      name: 'Fire',
      artist: 'Jimi Hendrix',
      details: 'Guitar Intro',
    },
    {
      name: 'My Own Worst Enemy',
      artist: 'Lit',
      details: 'Guitar Intro',
    },
    {
      name: 'In and Out of Love',
      artist: 'Bon Jovi',
      details: 'Guitar Intro, Chorus',
    },
    {
      name: '1979',
      artist: 'The Smashing Pumpkins',
      details: 'Guitar Intro, Verse',
    },
    {
      name: 'Kashmir',
      artist: 'Led Zeppelin',
      details: 'Guitar Riff',
    },
    {
      name: 'Immigrant Song',
      artist: 'Led Zeppelin',
      details: 'Guitar Riff',
    },
    {
      name: 'Learn to Fly',
      artist: 'Foo Fighters',
      details: 'Guitar Riff A',
    },
    {
      name: 'Flagpole Sitta',
      artist: 'Harvey Danger',
      details: 'Guitar Riff A',
    },
    {
      name: 'My Sharona',
      artist: 'The Knack',
      details: 'Guitar Riff',
    },
    {
      name: 'Click Click Boom',
      artist: 'Saliva',
      details: 'Guitar 3 Bridge',
    },
    {
      name: 'Your Disease',
      artist: 'Saliva',
      details: 'Guitar Riff B Bridge',
    },
    {
      name: 'Photograph',
      artist: 'Weezer',
      details: 'Guitar Solo',
    },
    {
      name: 'Closing Time',
      artist: 'Semisonic',
      details: 'Guitar Solo',
    },
    {
      name: 'Riviera Paradise',
      artist: 'Stevie Ray Vaughan & Double Trouble',
      details: 'Guitar Solo',
    },
    {
      name: 'Flavor of the Weak',
      artist: 'American Hi-Fi',
      details: 'Guitar 3 Pre-Chorus',
    },
    {
      name: 'Rock the Party (Off the Hook)',
      artist: 'P.O.D. (Payable On Death)',
      details: 'Guitar Chorus',
    },
    {
      name: "Adam's Song",
      artist: 'Blink 182',
      details: 'Guitar Chorus',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett & The Blackhearts',
      details: 'Guitar 3 Outro-Chorus',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      details: 'Guitar Interlude',
    },
    {
      name: 'Killing in the Name',
      artist: 'Rage Against the Machine',
      details: 'Guitar Interlude, Bridge',
    },
    {
      name: 'In Too Deep',
      artist: 'Sum 41',
      details: 'Guitar Interlude, Bridge',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Incubus',
      details: 'Guitar Interlude, Bridge',
    },
    {
      name: 'Spiders',
      artist: 'System of a Down',
      details: 'Guitar Chorus, Interlude, Solo',
    },
    {
      name: 'Third Stone from the Sun',
      artist: 'Jimi Hendrix',
      details: 'Guitar Main Melody',
    },
  ],
  'minor-seven': [
    {
      name: 'Eye of the Tiger',
      artist: 'Survivor',
      details: 'Guitar Intro',
    },
    {
      name: 'Fly Like an Eagle',
      artist: 'Steve Miller Band',
      details: 'Guitar Intro',
    },
    {
      name: 'Cold Shot',
      artist: 'Stevie Ray Vaughan',
      details: 'Guitar Intro Verse/Chorus',
    },
    {
      name: 'Tears in Heaven',
      artist: 'Eric Clapton',
      details: 'Guitar Intro/Chorus',
    },
    {
      name: 'Change the World',
      artist: 'Eric Clapton',
      details: 'Guitar Chorus',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar 2 Intro/Chorus',
    },
    {
      name: "You Ain't Seen Nothin' Yet",
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar Pre-Chorus',
    },
    {
      name: 'Jump, Jive & Wail',
      artist: 'Brian Setzer Orchestra',
      details: 'Guitar Second Verse',
    },
    {
      name: 'Oye Como Va',
      artist: 'Santana',
      details: 'Guitar 1, Organ Arr. For Guitar',
    },
    {
      name: 'Do Right',
      artist: "Jimmie's Chicken Shack",
      details: 'Guitar Throughout',
    },
    {
      name: 'Daughters',
      artist: 'John Mayer',
      details: 'Guitar Intro/Verse Bm7',
    },
  ],
  'major-seven': [
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Verse',
    },
    {
      name: 'Drive',
      artist: 'Incubus',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Show Me the Way',
      artist: 'Peter Frampton',
      details: 'Guitar 1 Intro/Verse',
    },
    {
      name: "You've Got a Friend",
      artist: 'James Taylor',
      details: 'Guitar Chorus',
    },
    {
      name: 'Everyday',
      artist: 'Dave Matthews Band',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'That Thing You Do',
      artist: 'The Oneders',
      details: 'Guitar Ending',
    },
  ],
  'dominant-seven': [
    {
      name: 'Alive',
      artist: 'Pearl Jam',
      details: 'Bridge 2:48 Open A7',
    },
    {
      name: 'Black',
      artist: 'Pearl Jam',
      details: 'Intro E7',
    },
    {
      name: "Papa's Got a Brand New Bag",
      artist: 'James Brown',
      details: 'Verse End E7',
    },
    {
      name: 'Drive',
      artist: 'Incubus',
      details: 'Pre-Chorus 0:42',
    },
    {
      name: 'Nothing Else Matters',
      artist: 'Metallica',
      details: 'Verse B7',
    },
  ],
  'minor-seven-am-form': [
    {
      name: 'Change the World',
      artist: 'Eric Clapton',
      details: 'Guitar Chorus',
    },
    {
      name: 'Killing in the Name',
      artist: 'Rage Against the Machine',
      details: 'Guitar 2 Bridge',
    },
    {
      name: 'Do Right',
      artist: "Jimmie's Chicken Shack",
      details: 'Guitar Throughout',
    },
    {
      name: 'Long Train Running',
      artist: 'The Doobie Brothers',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Tears in Heaven',
      artist: 'Eric Clapton',
      details: 'Guitar Chorus',
    },
    {
      name: 'Let it Ride',
      artist: 'Bachman-Turner Overdrive',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'The Hook',
      artist: 'Blues Traveler',
      details: 'Guitar Throughout',
    },
    {
      name: "Say It Ain't So",
      artist: 'Weezer',
      details: 'Guitar Intro',
    },
    {
      name: 'Black Water',
      artist: 'The Doobie Brothers',
      details: 'Guitar Intro/Verse',
    },
  ],
  'e-form-major-seven': [
    {
      name: 'Space Oddity',
      artist: 'David Bowie',
      details: 'Guitar Intro',
    },
    {
      name: 'Best of My Love',
      artist: 'The Eagles',
      details: 'Guitar Intro',
    },
    {
      name: 'Just Remember I Love You',
      artist: 'Firefall',
      details: 'Guitar Verse',
    },
    {
      name: "What It's Like",
      artist: 'Everlast',
      details: 'Guitar Intro/Verse',
    },
    {
      name: 'Band on the Run',
      artist: 'Wings',
      details: 'Guitar Section 3',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      details: 'Guitar Intro & Throughout',
    },
    {
      name: 'Dreams',
      artist: 'Fleetwood Mac',
      details: 'Guitar Throughout',
    },
    {
      name: 'One',
      artist: 'U2',
      details: 'Guitar 2 Intro',
    },
    {
      name: 'Californication',
      artist: 'Red Hot Chili Peppers',
      details: 'Guitar Verse',
    },
    {
      name: 'Tighten Up, Pt. 1',
      artist: 'Archie Bell & The Drells',
      details: 'Guitar F#maj7',
    },
  ],
  'c-form-add-9': [
    {
      name: 'Closer to Fine',
      artist: 'Indigo Girls',
    },
    {
      name: 'Talking About a Revolution',
      artist: 'Tracy Chapman',
    },
    {
      name: 'Old Apartment',
      artist: 'Barenaked Ladies',
    },
    {
      name: 'If I Had $1,000,000',
      artist: 'Barenaked Ladies',
    },
    {
      name: 'Good Riddance (Time of Your Life)',
      artist: 'Greenday',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
    },
    {
      name: 'Wonderwall',
      artist: 'Oasis',
    },
    {
      name: 'Semi-Charmed Life',
      artist: 'Third Eye Blind',
    },
    {
      name: 'There She Goes',
      artist: 'Sixpence None the Richer',
    },
    {
      name: 'Breath',
      artist: 'Faith Hill',
    },
    {
      name: 'Hands Clean',
      artist: 'Alanis Morissette',
    },
    {
      name: 'Signs',
      artist: 'Tesla',
    },
    {
      name: 'You and Me',
      artist: 'Lifehouse',
    },
    {
      name: 'Cover Me',
      artist: 'Candlebox',
    },
    {
      name: 'Hero',
      artist: 'Enrique Iglesias',
    },
  ],
}
