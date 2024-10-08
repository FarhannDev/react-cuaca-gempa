import * as React from 'react';

type QuakeItemHeadingProps = { heading: string };

const QuakeItemHeading: React.FC<QuakeItemHeadingProps> = ({ heading }) => (
  <>
    <div className="quake-item__heading">{heading}</div>
  </>
);

export default QuakeItemHeading;
