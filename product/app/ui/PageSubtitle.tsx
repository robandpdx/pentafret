import { text } from '@lib/ui/text'
import styled from 'styled-components'

export const PageSubtitle = styled.h4`
  min-height: 1em;
  line-height: 1em;
  ${text({
    size: 14,
    centerVertically: true,
    weight: 600,
    color: 'supporting',
  })}
`
