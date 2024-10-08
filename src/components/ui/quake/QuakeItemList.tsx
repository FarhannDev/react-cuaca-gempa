import * as React from 'react';
import QuakeItem from './QuakeItem';

type IProps = { quake: Quake | undefined };

const QuakeItemList: React.FC<IProps> = ({ quake }) =>
  quake && (
    <div className="quake-container">
      <div className="quake-item-list">
        <QuakeItem {...quake} />
      </div>
    </div>
  );

export default QuakeItemList;
