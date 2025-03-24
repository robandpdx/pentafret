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
}
