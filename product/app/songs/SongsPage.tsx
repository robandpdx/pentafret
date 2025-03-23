import { VStack } from '@lib/ui/css/stack'
import { PageContainer } from '../layout/PageContainer'
import { SongsPageTitle } from './SongsPageTitle'
import { toEntries } from '@lib/utils/record/toEntries'
import { songs } from '@product/core/songs'
import { Text } from '@lib/ui/text'
import { guitarTheoryTopicNames } from '@product/core/songs/GuitarTheoryTopic'
import { SongItem } from './SongItem'
import { getSongId } from '@product/core/songs/Song'

export const SongsPage = () => {
  return (
    <PageContainer contentMaxWidth={800}>
      <VStack gap={80}>
        <SongsPageTitle />
        <VStack gap={60}>
          {toEntries(songs).map(({ key, value }) => (
            <VStack gap={20} key={key}>
              <Text centerHorizontally as="h3" weight={800} size={24}>
                {guitarTheoryTopicNames[key]}
              </Text>
              <VStack gap={12}>
                {value.map((song) => (
                  <SongItem key={getSongId(song)} value={song} />
                ))}
              </VStack>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </PageContainer>
  )
}
