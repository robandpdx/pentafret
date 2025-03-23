import { Text } from '@lib/ui/text'
import { getGuitarTheorySongId, Song } from '@product/core/songs/Song'
import styled from 'styled-components'
import { useCheckedSongs } from './state/checkedSongs'
import { without } from '@lib/utils/array/without'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { InvisibleHTMLCheckbox } from '@lib/ui/inputs/InvisibleHTMLCheckbox'
import { CheckStatus } from '@lib/ui/checklist/CheckStatus'
import { useMemo } from 'react'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { GuitarTheoryTopic } from '@product/core/songs/GuitarTheoryTopic'

const boxSize = 28

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: ${toSizeUnit(boxSize)} 1fr;
  line-height: ${toSizeUnit(boxSize)};
`

type SongItemProps = {
  song: Song
  topic: GuitarTheoryTopic
}

export const SongItem = ({ song, topic }: SongItemProps) => {
  const [checkedSongs, setCheckedSongs] = useCheckedSongs()

  const songId = getGuitarTheorySongId(topic, song)

  const isChecked = checkedSongs.includes(songId)

  const text = useMemo(() => {
    const songText = `"${song.name}" by ${song.artist}`

    if (song.fragment) {
      return `${capitalizeFirstLetter(song.fragment)} in ${songText}`
    }

    return songText
  }, [song.artist, song.fragment, song.name])

  return (
    <Container>
      <CheckStatus as="label" isInteractive value={isChecked}>
        <InvisibleHTMLCheckbox
          value={isChecked}
          onChange={(value) =>
            setCheckedSongs((prev) =>
              value ? [...prev, songId] : without(prev, songId),
            )
          }
        />
      </CheckStatus>
      <Text>{text}</Text>
    </Container>
  )
}
