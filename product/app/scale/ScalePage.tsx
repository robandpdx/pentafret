import styled from 'styled-components'
import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { ManageRootNote } from './manage/ManageRootNote'
import { HStack } from '@lib/ui/css/stack'
import { ManageScale } from './manage/ManageScale'
import { ManagePentatonic } from './manage/ManagePentatonic'
import { Fretboard } from './fretboard/Fretboard'

const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 1600,
  })}

  ${verticalPadding(80)}
  gap: 40px;
`

export const ScalePage = () => {
  return (
    <Container>
      <HStack alignItems="center" gap={16} fullWidth justifyContent="center">
        <ManageRootNote />
        <ManageScale />
        <ManagePentatonic />
      </HStack>
      <Fretboard />
    </Container>
  )
}
