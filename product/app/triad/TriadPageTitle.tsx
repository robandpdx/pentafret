import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { chromaticNotesNames } from '@product/core/note'
import { getTriadName, triadRomanNumerals } from '@product/core/triads'

import { PageTitle } from '../ui/PageTitle'

import { useTriad } from './state/triad'

export const TriadPageTitle = () => {
  const { rootNote, index } = useTriad()

  const rootNoteName = chromaticNotesNames[rootNote]
  const triadName = getTriadName(index)
  const romanNumeral = triadRomanNumerals[index]

  const title = `${rootNoteName} Major Scale - ${triadName} Triad | Guitar Fretboard Patterns`
  const description = `Interactive guide to the ${triadName} triad (${romanNumeral}) in the ${rootNoteName} major scale. Learn how this triad appears across all standard scale patterns on the guitar fretboard.`

  return (
    <>
      <PageMetaTags title={title} description={description} />
      <PageTitle>
        {rootNoteName} Major Scale - {triadName} Triad
      </PageTitle>
    </>
  )
}
