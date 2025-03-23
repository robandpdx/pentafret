export const guitarTheoryTopics = [
  'e-minor-pentatonic',
  'g-major-pentatonic',
] as const

export type GuitarTheoryTopic = (typeof guitarTheoryTopics)[number]

export const guitarTheoryTopicNames: Record<GuitarTheoryTopic, string> = {
  'e-minor-pentatonic': 'E Minor Pentatonic Scale',
  'g-major-pentatonic': 'G Major Pentatonic Scale',
}
