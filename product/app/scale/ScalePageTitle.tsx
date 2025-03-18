import { text } from '@lib/ui/text'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'
import { ScalePageSubtitle } from './ScalePageSubtitle'
import { getScaleName } from '@product/core/scale/getScaleName'
import { useScale } from './state/scale'
import { PageTitle } from '../ui/PageTitle'

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
  const scale = useScale()

  const name = getScaleName(scale)

  const title = `${name} on Guitar`
  const description = `Learn how to play the ${name} on the guitar. Explore notes on the fretboard and discover pentatonic and full scale patterns.`

  return (
    <>
      <VStack alignItems="center" gap={8}>
        <PageTitle>{title}</PageTitle>
        <Placeholder>
          <ScalePageSubtitle />
        </Placeholder>
      </VStack>
      <PageMetaTags title={title} description={description} />
    </>
  )
}
