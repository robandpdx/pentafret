import { Interval } from '@lib/utils/interval/Interval'

type Input = {
  index: number
  visibleFrets: number
  totalFrets: number
}

export const getFretPosition = ({
  index,
  visibleFrets,
  totalFrets,
}: Input): Interval => {
  function fretPosition(n: number): number {
    return 1 - 1 / Math.pow(2, n / 12)
  }

  const totalFretboardLength = fretPosition(totalFrets)

  const startFretPos = fretPosition(0)
  const endFretPos = fretPosition(visibleFrets)

  const normalizedStartPos = startFretPos / totalFretboardLength
  const normalizedEndPos = endFretPos / totalFretboardLength

  const fretStartPos = fretPosition(index)
  const normalizedFretStartPos = fretStartPos / totalFretboardLength

  const normalizedStartPosition =
    (normalizedFretStartPos - normalizedStartPos) /
    (normalizedEndPos - normalizedStartPos)

  const fretEndPos = fretPosition(index + 1)
  const normalizedFretEndPos = fretEndPos / totalFretboardLength

  const normalizedEndPosition =
    (normalizedFretEndPos - normalizedStartPos) /
    (normalizedEndPos - normalizedStartPos)

  return {
    start: normalizedStartPosition,
    end: normalizedEndPosition,
  }
}
