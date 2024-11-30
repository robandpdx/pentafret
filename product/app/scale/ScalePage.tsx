import styled from 'styled-components'
import { centeredContentColumn } from '@lib/ui/css/centeredContentColumn'
import { verticalPadding } from '@lib/ui/css/verticalPadding'
import { ManageRootNote } from './manage/ManageRootNote'
import { HStack, VStack } from '@lib/ui/css/stack'
import { ManageScale } from './manage/ManageScale'
import { Fretboard } from './fretboard/Fretboard'
import { ScalePageTitle } from './ScalePageTitle'
import { ManageScaleType } from './manage/ManageScaleType'

const Container = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: 1600,
  })}

  ${verticalPadding(80)}
`

export const ScalePage = () => {
  return (
    <Container>
      <VStack gap={60}>
        <HStack alignItems="center" gap={16} fullWidth justifyContent="center">
          <ManageRootNote />
          <ManageScale />
          <ManageScaleType />
        </HStack>
        <ScalePageTitle />
        <Fretboard />
      </VStack>
    </Container>
  )
}
