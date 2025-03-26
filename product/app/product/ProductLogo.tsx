import { centerContent } from '@lib/ui/css/centerContent'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { Icon } from '../icon/Icon'

const IconWrapper = styled.div`
  color: ${getColor('contrast')};
  font-size: 22px;
  ${centerContent};
`

export const ProductLogo = () => {
  return (
    <HStack alignItems="center" gap={8}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Text size={16} color="contrast" weight="500">
        Pentafret
      </Text>
    </HStack>
  )
}
