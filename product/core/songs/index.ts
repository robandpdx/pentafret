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
  'a-form': [
    {
      name: 'Wait',
      artist: 'White Lion',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Nothing Else Matters',
      artist: 'Metallica',
      fragment: 'Guitar Intro',
    },
    {
      name: 'All Star',
      artist: 'Smash Mouth',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Daughters',
      artist: 'John Mayer',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Cold Gin',
      artist: 'Kiss',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      fragment: 'Guitar Intro/Chorus',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      fragment: 'Guitar Intro, Interlude',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      fragment: 'Guitar Interlude 2',
    },
    {
      name: '(Bang Your Head) Metal Health',
      artist: 'Quiet Riot',
      fragment: 'Guitar Verse',
    },
    {
      name: 'In and Out of Love',
      artist: 'Bon Jovi',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      fragment: 'Guitar Bridge',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Interlude',
    },
  ],
  'g-form': [
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Gimme Three Steps',
      artist: 'Lynyrd Skynyrd',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Free Ride',
      artist: 'Edgar Winter Group',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Fade to Black',
      artist: 'Metallica',
      fragment: 'Guitar Intro',
    },
    {
      name: 'China Grove',
      artist: 'The Doobie Brothers',
      fragment: 'Guitar Intro 0:04',
    },
    {
      name: 'Snow (Hey Oh)',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Intro 3rd Chord Shape',
    },
    {
      name: 'All Right Now',
      artist: 'Free',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'The Wind Cries Mary',
      artist: 'Jimi Hendrix',
      fragment: 'Guitar Intro, Verse',
    },
    {
      name: "I'm Bad, I'm Nationwide",
      artist: 'ZZ Top',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Alive',
      artist: 'P.O.D.',
      fragment: 'Guitar 2 Intro, Verse, Chorus',
    },
    {
      name: 'Hit Me with Your Best Shot',
      artist: 'Pat Benatar',
      fragment: 'Guitar Verse',
    },
    {
      name: "Jimmy Olsen's Blues",
      artist: 'Spin Doctors',
      fragment: 'Guitar Verse Riff B',
    },
    {
      name: 'Blackbird',
      artist: 'The Beatles',
      fragment: 'Open-Position',
    },
    {
      name: 'Tears in Heaven',
      artist: 'Eric Clapton',
      fragment: 'Open-Position',
    },
    {
      name: 'Dust in the Wind',
      artist: 'Kansas',
      fragment: 'Open-Position',
    },
    {
      name: 'Landslide',
      artist: 'Fleetwood Mac',
      fragment: 'Open-Position',
    },
  ],
  'e-form': [
    {
      name: 'The Impression That I Get',
      artist: 'The Mighty Mighty Bosstones',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Sample in a Jar',
      artist: 'Phish',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Eye of the Tiger',
      artist: 'Survivor',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Wait',
      artist: 'White Lion',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Down Boys',
      artist: 'Warrant',
      fragment: 'Guitar Intro',
    },
    {
      name: "Jimmy Olsen's Blues",
      artist: 'Spin Doctors',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Caught Up in You',
      artist: '38 Special',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      fragment: 'Guitar Intro, Verse',
    },
    {
      name: 'All Star',
      artist: 'Smash Mouth',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Domino',
      artist: 'Van Morrison',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Let It Ride',
      artist: 'Bachman-Turner Overdrive',
      fragment: 'Guitar Intro/Chorus',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Intro/Chorus',
    },
    {
      name: 'Days of the Week',
      artist: 'Stone Temple Pilots',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Interstate Love Song',
      artist: 'Stone Temple Pilots',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      fragment: 'Guitar Verse, Chorus',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Verse, Bridge',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'The Rock Show',
      artist: 'Blink 182',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      fragment: 'Guitar Bridge',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      fragment: 'Guitar Bridge',
    },
    {
      name: 'Gloria',
      artist: 'Van Morrison/Them',
      fragment: 'Guitar Interlude',
    },
    {
      name: 'Tomorrow',
      artist: 'Silver Chair',
      fragment: 'Guitar Interlude',
    },
    {
      name: "Life's Been Good",
      artist: 'Joe Walsh',
      fragment: 'Acous. Guitar',
    },
    {
      name: 'Burning Love',
      artist: 'Elvis Presley',
      fragment: 'Guitar Throughout',
    },
    {
      name: "Good Lovin'",
      artist: 'The Young Rascals',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Soul Man',
      artist: 'Sam & Dave',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Tripping Billies',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Two Step',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Lover Lay Down',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Grey Street',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Wrong Way',
      artist: 'Sublime',
      fragment: 'Guitar Throughout',
    },
  ],
  'd-form': [
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Snow (Hey Oh)',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Intro 8th Chord Shape',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: "Babe I'm Gonna Leave You",
      artist: 'Led Zeppelin',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Hole Hearted',
      artist: 'Extreme',
      fragment: 'Guitar Intro, Pre-Chorus',
    },
    {
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Jack and Diane',
      artist: 'John Mellencamp',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Dust in the Wind',
      artist: 'Kansas',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Landslide',
      artist: 'Fleetwood Mac',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Caught Up in You',
      artist: '38 Special',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Change the World',
      artist: 'Eric Clapton',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Gloria',
      artist: 'Van Morrison/Them',
      fragment: 'Guitar Interlude',
    },
    {
      name: 'Crash into Me',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Throughout',
    },
    {
      name: 'Tears in Heaven',
      artist: 'Eric Clapton',
      fragment: 'Guitar Throughout',
    },
  ],
  'minor-forms': [
    {
      name: 'The Impression That I Get',
      artist: 'The Mighty Mighty Bosstones',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Dream On',
      artist: 'Aerosmith',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'So Much to Say',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Scar Tissue',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Intro/Verse',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      fragment: 'Guitar Intro, Interlude',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Guitar Verse',
    },
    {
      name: 'Santeria',
      artist: 'Sublime',
      fragment: 'Guitar Verse, Chorus',
    },
    {
      name: 'Another Brick in the Wall (Part II)',
      artist: 'Pink Floyd',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'Get Down Tonight',
      artist: 'KC & The Sunshine Band',
      fragment: 'Guitar Chorus',
    },
    {
      name: 'All Your Love (I Miss Loving)',
      artist: 'Otis Rush',
      fragment: 'Guitar Solo',
    },
    {
      name: "Life's Been Good",
      artist: 'Joe Walsh',
      fragment: 'Acous. Guitar',
    },
    {
      name: 'Two Step',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Throughout',
    },
  ],
  'chromatic-riffs': [
    {
      name: "Couldn't Stand the Weather",
      artist: 'Stevie Ray Vaughan',
      fragment: 'Band Fig. After Intro',
    },
    {
      name: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      fragment: 'Chord Roots During Intro',
    },
    {
      name: "Let's Go Crazy",
      artist: 'Prince',
      fragment: 'Guitar Riff After Chorus',
    },
    {
      name: 'Oye Como Va',
      artist: 'Santana',
      fragment: 'Bridge Section Similar To "Stairway"',
    },
    {
      name: 'Hey Joe',
      artist: 'Jimi Hendrix',
      fragment: 'Guitar After Solo',
    },
    {
      name: 'Sweet Emotion',
      artist: 'Aerosmith',
      fragment: 'Guitar Riff Between Verses',
    },
    {
      name: 'Chop Suey!',
      artist: 'System of a Down',
      fragment: 'Guitar Power Chord Riff',
    },
    {
      name: 'Killing Floor',
      artist: "Howlin'Wolf",
      fragment: 'Guitar Riff',
    },
  ],
  'major-scale': [
    {
      name: 'Down On the Corner',
      artist: 'Creedence Clearwater Revival',
      fragment: 'Guitar Intro (C)',
    },
    {
      name: 'Cult of Personality',
      artist: 'Living Colour',
      fragment: 'Guitar Riffs (C)',
    },
    {
      name: 'Rhiannon',
      artist: 'Fleetwood Mac',
      fragment: 'Guitar Double-Step Riff (C)',
    },
    {
      name: 'Wild World',
      artist: 'Cat Stevens',
      fragment: 'Guitar Run During Chorus (C)',
    },
    {
      name: 'La Bamba',
      artist: 'Los Lobos',
      fragment: 'Guitar Intro, Solos (C)',
    },
    {
      name: 'Freewill',
      artist: 'Rush',
      fragment: 'Guitar Intro, Verse (C)',
    },
    {
      name: 'Friend of the Devil',
      artist: 'The Grateful Dead',
      fragment: 'Guitar Intro (G)',
    },
    {
      name: 'Centerfield',
      artist: 'John Fogerty',
      fragment: 'Guitar Intro (G)',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      fragment: 'Guitar Solo (G)',
    },
    {
      name: 'Broken',
      artist: 'Seether',
      fragment: 'Guitar Solo 2:35 (G)',
    },
    {
      name: 'Caught Up In You',
      artist: '38 Special',
      fragment: 'Guitar Solo (E)',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett & The Blackhearts',
      fragment: 'Guitar Solo (E)',
    },
    {
      name: 'My Own Worst Enemy',
      artist: 'Lit',
      fragment: 'Guitar Solo (E)',
    },
    {
      name: "Mama I'm Coming Home",
      artist: 'Ozzy Osbourne',
      fragment: 'Guitar Intro (E)',
    },
    {
      name: 'I Want Candy',
      artist: 'Bow Wow Wow',
      fragment: 'Guitar Riff (D)',
    },
    {
      name: 'Lie In Our Graves',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Intro (D)',
    },
    {
      name: 'Stay Together for the Kids',
      artist: 'Blink 182',
      fragment: 'Guitar Intro (D)',
    },
    {
      name: 'Ventura Highway',
      artist: 'America',
      fragment: 'Guitar Intro (D)',
    },
    {
      name: 'The First Cut is the Deepest',
      artist: 'Sheryl Crow',
      fragment: 'Guitar Solo (D)',
    },
    {
      name: 'Third Stone from the Sun',
      artist: 'Jimi Hendrix',
      fragment: 'Octave Guitar Melody (A)',
    },
    {
      name: 'Crazy Train',
      artist: 'Ozzy Osbourne',
      fragment: 'Guitar Riff (A)',
    },
    {
      name: 'No Rain',
      artist: 'Blind Melon',
      fragment: 'Lead Guitar Intro (A)',
    },
    {
      name: 'Better Together',
      artist: 'Jack Johnson',
      fragment: 'Guitar Verse 0:08 (F)',
    },
    {
      name: 'Black Magic Woman',
      artist: 'Santana',
      fragment: 'Guitar Solo (F)',
    },
    {
      name: 'Layla (Unplugged)',
      artist: 'Eric Clapton',
      fragment: 'Guitar Solo (F)',
    },
    {
      name: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      fragment: 'Guitar Solo (Ab)',
    },
    {
      name: 'Satellite',
      artist: 'Dave Matthews Band',
      fragment: 'Guitar Intro (Ab)',
    },
    {
      name: 'ATWA',
      artist: 'System of a Down',
      fragment: 'Guitar Intro (Ab)',
    },
    {
      name: 'Ariels',
      artist: 'System of a Down',
      fragment: 'Guitar Intro (Eb)',
    },
    {
      name: 'Europa',
      artist: 'Santana',
      fragment: 'Guitar Solo (Eb)',
    },
    {
      name: "Don't Speak",
      artist: 'No Doubt',
      fragment: 'Guitar Solo (Eb)',
    },
    {
      name: 'Flavor of the Weak',
      artist: 'American Hi-Fi',
      fragment: 'Guitar Solo (Bb)',
    },
  ],
  'major-scale-not-all-seven-degrees': [
    {
      name: 'China Cat Sunflower',
      artist: 'The Grateful Dead',
      fragment: 'Lead Guitar Melody (C)',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      fragment: 'Octave Guitar Melody (C)',
    },
    {
      name: 'Redemption Song',
      artist: 'Bob Marley',
      fragment: 'Guitar Intro (G)',
    },
    {
      name: 'Dueling Banjos',
      artist: 'Eric Weissberg & Steve Mandell',
      fragment: 'Guitar, Capo II (G)',
    },
    {
      name: 'Last Resort',
      artist: 'Papa Roach',
      fragment: 'Guitar Riff (G)',
    },
    {
      name: 'Oh, Pretty Woman',
      artist: 'Roy Orbison/Van Halen',
      fragment: 'Guitar Riff (A)',
    },
    {
      name: 'Photograph',
      artist: 'Weezer',
      fragment: 'Guitar Solo (A)',
    },
    {
      name: 'The Joker',
      artist: 'Steve Miller Band',
      fragment: 'Guitar Riff (F)',
    },
    {
      name: 'Layla',
      artist: 'Derek & The Dominos',
      fragment: 'Rhythm Guitar Intro (F)',
    },
    {
      name: 'Show Me the Way',
      artist: 'Peter Frampton',
      fragment: 'Guitar Melody (D)',
    },
    {
      name: 'Back on the Chain Gang',
      artist: 'The Pretenders',
      fragment: 'Guitar Melody (D)',
    },
    {
      name: 'In Too Deep',
      artist: 'Sum 41',
      fragment: 'Guitar Intro (E)',
    },
    {
      name: 'Sweet Dreams',
      artist: 'Marilyn Manson',
      fragment: 'Guitar Riff (Eb)',
    },
    {
      name: "The Kids Aren't Alright",
      artist: 'The Offspring',
      fragment: 'Guitar Intro (Db)',
    },
  ],
  'major-scale-chromatic-passing-tones': [
    {
      name: 'Hit Me With Your Best Shot',
      artist: 'Pat Benatar',
      fragment: 'Guitar Solo (E)',
    },
    {
      name: "Walk Don't Run",
      artist: 'The Ventures',
      fragment: 'Guitar Melody (C)',
    },
  ],
  triads: [
    {
      name: 'Centerfield',
      artist: 'John Fogerty',
      fragment: 'Guitar Intro',
    },
    {
      name: 'Tightrope',
      artist: 'Stevie Ray Vaughan & DoubleTrouble',
      fragment: 'Guitar Riff',
    },
    {
      name: 'Manic Depression',
      artist: 'Jimi Hendrix',
      fragment: 'Guitar',
    },
    {
      name: 'Online Songs',
      artist: 'Blink 182',
      fragment: 'Guitar 0:20',
    },
  ],
  'major-chords-1-4-5': [
    {
      name: 'Achy Breaky Heart',
      artist: 'Billy Ray Cyrus',
      fragment: 'Whole Song! I V (A)',
    },
    {
      name: 'Sweet Home Alabama',
      artist: 'Lynyrd Skynyrd',
      fragment: 'Nearly Whole Song! V IV I (G)',
    },
    {
      name: 'All Summer Long',
      artist: 'Kid Rock',
      fragment: 'Whole Song! V IV I (G)',
    },
    {
      name: 'Werewolves of London',
      artist: 'Warren Zevon',
      fragment: 'Whole Song! V IV I (G)',
    },
    {
      name: 'Magic Carpet Ride',
      artist: 'Steppenwolf',
      fragment: 'Verse V IV I (G)',
    },
    {
      name: 'Seven Bridges Road',
      artist: 'The Eagles',
      fragment: 'Verse/Chorus V IV I (G)',
    },
    {
      name: 'Taking Care of Business',
      artist: 'Bachman-Turner Overdrive',
      fragment: 'Verse/Chorus V IV I (F)',
    },
    {
      name: 'Brown Eyed Girl',
      artist: 'Van Morrison',
      fragment: 'Verse I IV I V (G)',
    },
    {
      name: 'Hang on Sloopy',
      artist: 'The McCoys',
      fragment: 'Whole Song! I IV V IV (G)',
    },
    {
      name: 'Stir It Up',
      artist: 'Bob Marley',
      fragment: 'Whole Song! I IV V (A)',
    },
    {
      name: 'What I Like About You',
      artist: 'The Romantics',
      fragment: 'Nearly Whole Song! V I IV I (A)',
    },
    {
      name: 'Brimful of Asha',
      artist: 'Corner Shop',
      fragment: 'Verse/Chorus I V IV (A)',
    },
    {
      name: 'Wild Thing',
      artist: 'The Troggs',
      fragment: 'Chorus I IV V IV (A)',
    },
    {
      name: 'Walking On Sunshine',
      artist: 'Katrina & The Waves',
      fragment: 'Verse I IV V IV (Bb)',
    },
    {
      name: 'Twist and Shout',
      artist: 'The Isley Brothers',
      fragment: 'Whole Song! I IV V (F)',
    },
    {
      name: 'Are You Jimmy Ray?',
      artist: 'Jimmy Ray',
      fragment: 'Verse/Chorus V IV I IV (F)',
    },
    {
      name: 'Give Me One Reason',
      artist: 'Tracy Chapman',
      fragment: 'Verse I IV V (F#)',
    },
    {
      name: 'Me and Bobby McGee',
      artist: '',
      fragment: '(G, B)',
    },
    {
      name: 'Bye Bye Love',
      artist: 'The Everly Brothers excluding intro',
      fragment: '(A)',
    },
    {
      name: 'When The Sun Goes Down',
      artist: 'Kenny Chesney',
      fragment: '(A)',
    },
    {
      name: 'Barbara Ann',
      artist: 'The Beach Boys',
      fragment: '(B)',
    },
    {
      name: 'Mr.Tambourine Man',
      artist: 'Bob Dylan',
      fragment: '(F)',
    },
    {
      name: 'Volcano',
      artist: 'Jimmy Buffet',
      fragment: '(F)',
    },
    {
      name: 'The Joker',
      artist: 'Steve Miller Band',
      fragment: '(F)',
    },
    {
      name: "Why Don't You Get a Job?",
      artist: 'The Offspring',
      fragment: '(F)',
    },
    {
      name: 'Walk of Life',
      artist: 'Dire Straits',
      fragment: '(E)',
    },
    {
      name: 'I Wanna Be Sedated',
      artist: 'The Ramones',
      fragment: '(E)',
    },
    {
      name: "I Love Rock 'N Roll",
      artist: 'Joan Jett & The Blackhearts',
      fragment: '(E)',
    },
    {
      name: 'I Wanna Be Sedated',
      artist: 'The Ramones',
      fragment: '(E, F#)',
    },
  ],
  'minor-chords-2-3-6': [
    {
      name: "I'm Yours",
      artist: 'Jason Mraz',
      fragment: 'I V vi IV (B)',
    },
    {
      name: 'Country Roads',
      artist: 'John Denver',
      fragment: 'Chorus I V vi IV (A)',
    },
    {
      name: 'You Are God Alone',
      artist: 'Billy Foote & Cindy Foote',
      fragment: 'Chorus I V vi IV (Ab)',
    },
    {
      name: 'Glycerine',
      artist: 'Bush',
      fragment: 'I V vi IV (F)',
    },
    {
      name: 'Hurts So Good',
      artist: 'John Mellencamp',
      fragment: 'Verse I V vi IV (A)',
    },
    {
      name: 'Love the Lord',
      artist: 'Lincoln Brewster',
      fragment: 'Verse I V vi iii IV, IV V I (G)',
    },
    {
      name: "What's Up?",
      artist: '4 Non Blondes',
      fragment: 'I ii (A)',
    },
    {
      name: 'My Own Worst Enemy',
      artist: 'Lit',
      fragment: 'Chorus I ii IV V (E)',
    },
    {
      name: 'Online Songs',
      artist: 'Blink 182',
      fragment: 'Intro/Verse I I ii IV V (A)',
    },
    {
      name: 'Closing Time',
      artist: 'Semisonic',
      fragment: 'I V ii IV (G)',
    },
    {
      name: 'Earth Angel (Will You Be Mine)',
      artist: 'The Penguins',
      fragment: 'I vi IV V (Bb)',
    },
    {
      name: 'Every Breath You Take',
      artist: 'The Police',
      fragment: 'I vi IV V (Ab)',
    },
    {
      name: 'Stand by Me',
      artist: 'Ben E. King',
      fragment: 'I vi IV V (A)',
    },
    {
      name: 'Hit Me With Your Best Shot',
      artist: 'Pat Benatar',
      fragment: 'Chorus I IV vi V, I IV vi V IV V (E)',
    },
    {
      name: 'Layla (acoustic)',
      artist: 'Eric Clapton',
      fragment: 'Chorus/Solo vi IV V vi (F)',
    },
    {
      name: "I Won't Back Down",
      artist: 'Tom Petty',
      fragment: 'vi V I (G)',
    },
    {
      name: 'Under the Boardwalk',
      artist: 'The Drifters',
      fragment: 'Chorus vi V (G)',
    },
    {
      name: 'Heart of Gold',
      artist: 'Neil Young',
      fragment: 'Verse vi IV V I (G)',
    },
    {
      name: 'Paranoid',
      artist: 'Black Sabbath',
      fragment: 'Verse vi V, I V vi (G)',
    },
    {
      name: 'Island in the Sun',
      artist: 'Weezer',
      fragment: 'vi ii V I (G)',
    },
    {
      name: 'Ob-La-Di Ob-La-Da',
      artist: 'The Beatles',
      fragment: 'Chorus I V vi I V I (Bb)',
    },
    {
      name: 'Here I Am to Worship',
      artist: 'Tim Hughes',
      fragment: 'Verse I V ii, I V IV (E)',
    },
    {
      name: 'Open the Eyes of My Heart',
      artist: 'Michael W. Smith',
      fragment: 'Chorus V vi IV V, V vi ii V (E)',
    },
    {
      name: 'Days of Elijah / Kadosh',
      artist: 'Paul Wilbur',
      fragment: 'Includes iii (Bb)',
    },
    {
      name: 'Man On the Moon',
      artist: 'R.E.M.',
      fragment: 'Includes iii (G)',
    },
  ],
  'major-chords-1-4-5-string-5': [
    {
      name: 'Jambalaya (On the Bayou)',
      artist: 'Hank Williams',
      fragment: 'IV (C)',
    },
    {
      name: 'You Never Can Tell',
      artist: 'Chuck Berry',
      fragment: 'IV (C)',
    },
    {
      name: "Summer of '69",
      artist: 'Bryan Adams',
      fragment: 'Verse IV (D)',
    },
    {
      name: "I Still Haven't Found What I'm Looking For",
      artist: 'U2',
      fragment: 'Verse I IV (Db)',
    },
    {
      name: 'Life of Illusion',
      artist: 'Joe Walsh',
      fragment: 'Verse IV I (D)',
    },
    {
      name: 'Authority Song',
      artist: 'John Mellencamp',
      fragment: 'Whole Song! I IV V (D)',
    },
    {
      name: 'Twist and Shout',
      artist: 'The Beatles',
      fragment: 'Verse/Chorus I IV V (D)',
    },
    {
      name: 'Hold My Hand',
      artist: 'Hootie & The Blowfish',
      fragment: 'Chorus I IV V (B)',
    },
    {
      name: "Good Lovin'",
      artist: 'The Rascals',
      fragment: 'Verse/Chorus I IV V IV (D)',
    },
    {
      name: 'Do Ya',
      artist: 'Electric Light Orchestra',
      fragment: 'Verse/Chorus IV IV (D)',
    },
    {
      name: 'The First Cut Is the Deepest',
      artist: 'Sheryl Crow',
      fragment: 'Verse/Chorus I V IV (D)',
    },
    {
      name: 'I Could Never Take the Place of Your Man',
      artist: 'Prince',
      fragment: 'Verse I V IV (C)',
    },
    {
      name: 'Never Let You Go',
      artist: 'Third Eye Blind',
      fragment: 'Verse/Chorus I V IV (E)',
    },
    {
      name: "Baba O'Riley",
      artist: 'The Who',
      fragment: 'Verse I V IV (F)',
    },
    {
      name: 'Yellow Ledbetter',
      artist: 'Pearl Jam',
      fragment: 'Verse I V IV (E)',
    },
    {
      name: 'Crimson and Clover',
      artist: 'Tommy James & The Shondells',
      fragment: 'Verse I V IV (B)',
    },
    {
      name: 'Learn to Fly',
      artist: 'Foo Fighters',
      fragment: 'Verse I V IV (B)',
    },
    {
      name: 'Bad Moon Rising',
      artist: 'Creedence Clearwater Revival',
      fragment: 'Verse I V IV (D)',
    },
    {
      name: 'Helpless',
      artist: 'Crosby, Stills, Nash & Young',
      fragment: 'Chorus IV IV (D)',
    },
    {
      name: 'All the Small Things',
      artist: 'Blink 182',
      fragment: 'Verse I V IV V (C)',
    },
    {
      name: 'Take the Money and Run',
      artist: 'Steve Miller Band',
      fragment: 'Verse/Chorus V IV I (C)',
    },
    {
      name: 'Feliz Navidad',
      artist: 'Jose Feliciano',
      fragment: 'Verse IV V I (D)',
    },
  ],
  'minor-chords-2-3-6-string-5': [
    {
      name: 'With or Without You',
      artist: 'U2',
      fragment: 'Verse/Chorus I V vi IV (D)',
    },
    {
      name: 'Let it Be',
      artist: 'The Beatles',
      fragment: 'Verse I V vi IV (C)',
    },
    {
      name: 'Beast of Burden',
      artist: 'The Rolling Stones',
      fragment: 'Verse I V vi IV (E)',
    },
    {
      name: 'Blessed Be Your Name',
      artist: 'Matt Redman',
      fragment: 'Whole Song! I V vi IV (B)',
    },
    {
      name: "Jessie's Girl",
      artist: 'Rick Springfield',
      fragment: 'Verse I V vi, IV V I (D)',
    },
    {
      name: 'You Might Think',
      artist: 'The Cars',
      fragment: 'Chorus I IV V vi, I IV V I (D)',
    },
    {
      name: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Verse I V vi iii IV (E)',
    },
    {
      name: 'Unchained Melody',
      artist: 'The Righteous Brothers',
      fragment: 'Chorus I vi IV V (C)',
    },
    {
      name: 'Runaround Sue',
      artist: 'Dion',
      fragment: 'Verse I vi IV V (D)',
    },
    {
      name: 'Show Me Your Glory',
      artist: 'Third Day',
      fragment: 'Chorus I vi IV V (D)',
    },
    {
      name: 'How Great is Our God',
      artist: 'Chris Tomlin',
      fragment: 'Chorus I vi IV V (Db)',
    },
    {
      name: "Dy'er Mak'er",
      artist: 'Led Zeppelin',
      fragment: 'Verse/Chorus I vi IV V (C)',
    },
    {
      name: 'Two Princes',
      artist: 'Spin Doctors',
      fragment: 'Verse I vi V IV (D)',
    },
    {
      name: 'Californication',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Verse vi IV (C)',
    },
    {
      name: 'Have You Ever Seen the Rain',
      artist: 'CCR',
      fragment: 'Chorus IV V I V vi (C)',
    },
    {
      name: 'Feliz Navidad',
      artist: 'Jose Feliciano',
      fragment: 'Chorus IV V I vi (D)',
    },
    {
      name: 'Faith',
      artist: 'George Michael',
      fragment: 'Chorus IV I IV I IV I vi ii V (B',
    },
    {
      name: 'Made To Worship',
      artist: 'Chris Tomlin',
      fragment: 'Chorus I IV ii V (C)',
    },
    {
      name: 'Everlasting God',
      artist: 'Lincoln Brewster',
      fragment: 'Chorus I IV vi IV (B)',
    },
    {
      name: 'Friend of God',
      artist: 'Israel Houghton',
      fragment: 'Chorus I vi ii I (D)',
    },
    {
      name: 'Horse with No Name',
      artist: 'America',
      fragment: 'Whole Song! ii iii (D)',
    },
    {
      name: 'Losing My Religion',
      artist: 'R.E.M.',
      fragment: 'Verse vi iii (C)',
    },
    {
      name: 'Louie, Louie',
      artist: 'The Kingsmen',
      fragment: 'Whole Song! V I ii I (D)',
    },
    {
      name: "Don't Fear the Reaper",
      artist: 'Blue Oyster Cult',
      fragment: 'Verse vi V IV V (C)',
    },
    {
      name: 'Otherside',
      artist: 'Red Hot Chili Peppers',
      fragment: 'Chorus vi IV I V (C)',
    },
    {
      name: 'Maggie May',
      artist: 'Rod Stewart',
      fragment: 'Guitar Solos ii V I IV, ii IV I (D)',
    },
    {
      name: 'Lean On Me',
      artist: 'Bill Withers',
      fragment: 'Verse I ii iii IV, IV iii ii I (C)',
    },
    {
      name: 'The Thrill Is Gone',
      artist: 'B.B. King',
      fragment: 'Verse vi ii vi VI iii vi (D)',
    },
  ],
}
