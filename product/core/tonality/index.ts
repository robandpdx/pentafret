export const tonalities = ['major', 'minor', 'major7', 'minor7'] as const
export type Tonality = (typeof tonalities)[number]

// Subset used for public scale pages (we intentionally hide 7th tonalities there)
export const basicTonalities: Tonality[] = ['major', 'minor']

export const tonalityNames: Record<Tonality, string> = {
  minor: 'Minor',
  major: 'Major',
  major7: 'Major7',
  minor7: 'Minor7',
}
