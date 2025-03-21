import { VStack } from '@lib/ui/css/stack'
import { useCaged } from './state/caged'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { match } from '@lib/utils/match'
import { PageTitle } from '../ui/PageTitle'

export const CagedPageTitle = () => {
  const { view } = useCaged()
  const viewTitle = `${capitalizeFirstLetter(view)}s`
  const title = `CAGED ${viewTitle} System for Guitar | Master Fretboard Positions`
  const description = `Interactive guide to the CAGED ${viewTitle.toLowerCase()} system for guitarists. Learn C, A, G, E, D ${match(
    view,
    {
      chord: () => 'chord shapes',
      arpeggio: () => 'arpeggio patterns',
    },
  )} to navigate the entire fretboard and improve your playing.`

  return (
    <VStack>
      <PageMetaTags title={title} description={description} />
      <PageTitle>CAGED {viewTitle}</PageTitle>
    </VStack>
  )
}
