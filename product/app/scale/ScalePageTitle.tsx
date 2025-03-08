import { text, Text } from '@lib/ui/text'
import { useScale } from './state/scale'
import { chromaticNotesNames } from '@product/core/note'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'
import { ScalePageSubtitle } from './ScalePageSubtitle'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

const Placeholder = styled.div`
  min-height: 1em;
  line-height: 1em;
  ${text({
    size: 14,
    centerVertically: true,
    weight: 600,
    color: 'supporting',
  })}
`

export const ScalePageTitle = () => {
  const { type, rootNote } = useScale()

  const noteName = chromaticNotesNames[rootNote]
  const scaleName = capitalizeFirstLetter(type)

  const title = `${noteName} ${scaleName} Scale on Guitar`
  const description = `Learn how to play the ${noteName} ${scaleName} scale on the guitar. Explore notes on the fretboard and discover pentatonic and full scale patterns.`

  return (
    <>
      <VStack alignItems="center" gap={8}>
        <Text
          centerHorizontally
          weight={800}
          size={32}
          color="contrast"
          as="h1"
        >
          {title}
        </Text>
        <Placeholder>
          <ScalePageSubtitle />
        </Placeholder>
      </VStack>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
