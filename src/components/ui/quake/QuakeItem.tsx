import * as React from 'react';
import QuakeShakeMapImage from './QuakeItemShakemap';
import QuakeItemContent from './QuakeItemContent';
import QuakeItemHeading from './QuakeItemHeading';

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
    <QuakeItemHeading heading={wilayah} />
    <QuakeShakeMapImage imageSource={shakemap} />
    <QuakeItemContent
      jam={jam}
      tanggal={tanggal}
      wilayah={wilayah}
      potensi={potensi}
      kedalaman={kedalaman}
      magnitude={magnitude}
      dirasakan={dirasakan}
    />
  </div>
);

export default QuakeItem;
