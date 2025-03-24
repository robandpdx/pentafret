export const guitarTheoryTopics = [
  'e-minor-pentatonic',
  'g-major-pentatonic',
  'g-minor-pentatonic',
  'pentatonic',
  'blues',
  'c-form',
  'a-form',
  'g-form',
  'e-form',
  'd-form',
  'minor-forms',
  'chromatic-riffs',
  'major-scale',
  'major-scale-not-all-seven-degrees',
  'major-scale-chromatic-passing-tones',
  'triads',
] as const

export type GuitarTheoryTopic = (typeof guitarTheoryTopics)[number]

export const guitarTheoryTopicNames: Record<GuitarTheoryTopic, string> = {
  'e-minor-pentatonic': 'E Minor Pentatonic Scale',
  'g-major-pentatonic': 'G Major Pentatonic Scale',
  'g-minor-pentatonic': 'G Minor Pentatonic Scale',
  pentatonic: 'Pentatonic Scale',
  blues: 'Blues Scale',
  'c-form': '“C Form” Barre Chord',
  'a-form': '“A Form” Barre Chord',
  'g-form': '“G Form” Barre Chord',
  'e-form': '“E Form” Barre Chord',
  'd-form': '“D Form” Barre Chord',
  'minor-forms': 'Minor Forms',
  'chromatic-riffs': 'Chromatic Riffs',
  'major-scale': 'Major Scale',
  'major-scale-not-all-seven-degrees': 'Major Scale (Not All Seven Degrees)',
  'major-scale-chromatic-passing-tones':
    'Major Scale (Chromatic Passing Tones)',
  triads: 'Triads',
}
