import * as React from 'react';
import MyComponent from '../../MyComponent';

type IProps = Quake;
const QuakeItem: React.FC<IProps> = ({
  jam,
  tanggal,
  wilayah,
  potensi,
  shakemap,
  kedalaman,
  magnitude,
  dirasakan,
}) => (
  <div className="quake-item">
    <MyComponent.QuakeShakeMapImage imageSource={shakemap} />

    <div className="quake-item__content-wrapper">
      <MyComponent.QuakeItemHeading heading={wilayah} />
      <MyComponent.QuakeItemContent
        jam={jam}
        tanggal={tanggal}
        wilayah={wilayah}
        potensi={potensi}
        kedalaman={kedalaman}
        magnitude={magnitude}
        dirasakan={dirasakan}
      />
    </div>
  </div>
);

export default QuakeItem;
