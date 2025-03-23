import { ValueProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { getSongId, Song } from '@product/core/songs/Song'
import styled from 'styled-components'
import { useCheckedSongs } from './state/checkedSongs'
import { without } from '@lib/utils/array/without'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { InvisibleHTMLCheckbox } from '@lib/ui/inputs/InvisibleHTMLCheckbox'
import { CheckStatus } from '@lib/ui/checklist/CheckStatus'
import { useMemo } from 'react'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

const boxSize = 28

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: ${toSizeUnit(boxSize)} 1fr;
  line-height: ${toSizeUnit(boxSize)};
`

export const SongItem = ({ value }: ValueProp<Song>) => {
  const [checkedSongs, setCheckedSongs] = useCheckedSongs()

  const songId = getSongId(value)

  const isChecked = checkedSongs.includes(songId)

  const text = useMemo(() => {
    const song = `"${value.name}" by ${value.artist}`

    if (value.fragment) {
      return `${capitalizeFirstLetter(value.fragment)} in ${song}`
    }

    return song
  }, [value.artist, value.fragment, value.name])

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
