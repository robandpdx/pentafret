import { Text } from '@lib/ui/text'
import { VStack } from '@lib/ui/css/stack'
import { useCaged } from './state/caged'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

export const CagedPageTitle = () => {
  const { view } = useCaged()
  const viewTitle = view === 'chord' ? 'Chords' : 'Arpeggios'
  const title = `CAGED ${viewTitle} on Guitar | Basic Open Position Forms`
  const description =
    'Learn the CAGED system on guitar with our interactive guide. Master the five basic chord forms (C, A, G, E, D) in open position to unlock the entire fretboard.'

  return (
    <VStack>
      <PageMetaTags title={title} description={description} />
      <Text as="h1" color="contrast" size={40} weight="700" centerHorizontally>
        CAGED {viewTitle}
      </Text>
    </VStack>
  )
}
