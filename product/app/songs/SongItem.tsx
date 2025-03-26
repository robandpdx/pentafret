import { Text } from '@lib/ui/text'
import { getGuitarTheorySongId, Song } from '@product/core/songs/Song'
import { useCheckedSongs } from './state/checkedSongs'
import { without } from '@lib/utils/array/without'
import { InvisibleHTMLCheckbox } from '@lib/ui/inputs/InvisibleHTMLCheckbox'
import { CheckStatus } from '@lib/ui/checklist/CheckStatus'
import { useMemo } from 'react'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { GuitarTheoryTopic } from '@product/core/songs/GuitarTheoryTopic'
import { SongItemFrame } from './SongItemFrame'

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

    if (song.details) {
      return `${capitalizeFirstLetter(song.details)} in ${songText}`
    }

    return songText
  }, [song.artist, song.details, song.name])

  return (
    <SongItemFrame>
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
    </SongItemFrame>
  )
}
