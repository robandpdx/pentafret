import { ElementSizeAware } from '@lib/ui/base/ElementSizeAware'
import { VStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import styled from 'styled-components'
import { fretboardConfig } from './config'
import { getColor } from '@lib/ui/theme/getters'
import { range } from '@lib/utils/array/range'
import { String } from './String'
import { stringsCount, visibleFretCount } from '../state/guitar'
import { Fret } from './Fret'
import { getFretMarkers } from '@product/core/guitar/fretMarkers'
import { FretMarkerItem } from './FretMarkerItem'

const Neck = styled.div`
  height: ${toSizeUnit(fretboardConfig.height)};
  background: ${getColor('foreground')};
  position: relative;
`

const Nut = styled.div`
  height: ${toSizeUnit(fretboardConfig.height)};
  width: ${toSizeUnit(fretboardConfig.nutWidth)};
  background: ${getColor('textShy')};
  position: absolute;
  left: 0;
  top: 0;
`

export const Fretboard = () => {
  return (
    <ElementSizeAware
      render={({ setElement, size }) => (
        <VStack ref={setElement}>
          {size && size.width && (
            <Neck style={{ width: size.width }}>
              <Nut />
              {range(stringsCount).map((index) => (
                <String key={index} index={index} />
              ))}
              {range(visibleFretCount).map((index) => (
                <Fret key={index} index={index} />
              ))}
              {getFretMarkers(visibleFretCount).map((value) => (
                <FretMarkerItem key={value.index} value={value} />
              ))}
            </Neck>
          )}
        </VStack>
      )}
    />
  )
}
