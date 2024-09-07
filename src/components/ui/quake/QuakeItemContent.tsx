import * as React from 'react';

type QuakeItemContentProps = {
  tanggal: string;
  jam: string;
  wilayah: string;
  potensi: string;
  magnitude: string;
  kedalaman: string;
  dirasakan: string;
};

const QuakeItemContent: React.FC<QuakeItemContentProps> = ({
  tanggal,
  jam,
  wilayah,
  potensi,
  kedalaman,
  magnitude,
  dirasakan,
}) => (
  <div className="quake-item__content">
    <div className="quake-item-content__text">
      Pada tanggal {tanggal} Pukul {jam}, {wilayah} dengan kedalaman {kedalaman}{' '}
      dan {magnitude} magnitude. {potensi} {dirasakan}.
    </div>
  </div>
);
export default QuakeItemContent;
