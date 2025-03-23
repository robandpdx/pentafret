import { VStack } from '@lib/ui/css/stack'
import { PageContainer } from '../layout/PageContainer'
import { SongsPageTitle } from './SongsPageTitle'
import { toEntries } from '@lib/utils/record/toEntries'
import { songs } from '@product/core/songs'
import { Text } from '@lib/ui/text'
import { guitarTheoryTopicNames } from '@product/core/songs/GuitarTheoryTopic'
import { SongItem } from './SongItem'
import { getGuitarTheorySongId } from '@product/core/songs/Song'

export const SongsPage = () => {
  return (
    <PageContainer contentMaxWidth={640}>
      <VStack gap={60}>
        <SongsPageTitle />
        {toEntries(songs).map(({ key: topic, value: songs }) => (
          <VStack gap={20} key={topic}>
            <Text
              color="contrast"
              centerHorizontally
              as="h3"
              weight={800}
              size={24}
            >
              {guitarTheoryTopicNames[topic]}
            </Text>
            <VStack gap={12}>
              {songs.map((song) => (
                <SongItem
                  key={getGuitarTheorySongId(topic, song)}
                  song={song}
                  topic={topic}
                />
              ))}
            </VStack>
          </VStack>
        ))}
      </VStack>
    </PageContainer>
  )
}
