import { VStack } from '@lib/ui/css/stack'
import { IsActiveProp, ValueProp } from '@lib/ui/props'
import { songs } from '@product/core/songs'
import {
  GuitarTheoryTopic,
  guitarTheoryTopicNames,
} from '@product/core/songs/GuitarTheoryTopic'
import { getGuitarTheorySongId } from '@product/core/songs/Song'
import { SongItem } from './SongItem'
import { Text } from '@lib/ui/text'
import { useCheckedSongs } from './state/checkedSongs'
import { SongItemFrame } from './SongItemFrame'
import { Center } from '@lib/ui/layout/Center'
import styled from 'styled-components'
import { round } from '@lib/ui/css/round'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { matchColor } from '@lib/ui/theme/getters'

const Indicator = styled.div<IsActiveProp>`
  ${round}
  ${sameDimensions(12)}
  background: ${matchColor('isActive', {
    true: 'success',
    false: 'mistExtra',
  })};
`

export const SongsSection = ({ value }: ValueProp<GuitarTheoryTopic>) => {
  const items = songs[value]
  const [checkedSongs] = useCheckedSongs()

  const hasCheckedSong = checkedSongs.some((songId) =>
    items.some((song) => getGuitarTheorySongId(value, song) === songId),
  )

  return (
    <VStack gap={20} key={value}>
      <SongItemFrame>
        <Center>
          <Indicator isActive={hasCheckedSong} />
        </Center>
        <Text color="contrast" as="h3" weight={700} size={18}>
          {guitarTheoryTopicNames[value]}
        </Text>
      </SongItemFrame>
      <VStack gap={12}>
        {items.map((song) => (
          <SongItem
            key={getGuitarTheorySongId(value, song)}
            song={song}
            topic={value}
          />
        ))}
      </VStack>
    </VStack>
  )
}
