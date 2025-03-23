export const guitarTheoryTopics = [
  'e-minor-pentatonic',
  'g-major-pentatonic',
  'g-minor-pentatonic',
  'pentatonic',
  'blues',
  'c-form',
] as const

export type GuitarTheoryTopic = (typeof guitarTheoryTopics)[number]

export const guitarTheoryTopicNames: Record<GuitarTheoryTopic, string> = {
  'e-minor-pentatonic': 'E Minor Pentatonic Scale',
  'g-major-pentatonic': 'G Major Pentatonic Scale',
  'g-minor-pentatonic': 'G Minor Pentatonic Scale',
  pentatonic: 'Pentatonic Scale',
  blues: 'Blues Scale',
  'c-form': '“C Form” Barre Chord',
}
