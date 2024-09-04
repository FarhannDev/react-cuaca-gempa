import * as React from 'react';

type IProps = { headingName: string };

const Heading: React.FC<IProps> = ({ headingName }) => (
  <h1 className="heading">{headingName}</h1>
);

export default Heading;
