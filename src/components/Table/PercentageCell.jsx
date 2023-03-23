import React from 'react';

const PercentageCell = ({ background, index, transparent }) => {
  return(
  <td style={background}
  key={index}>{transparent +'%'}</td>
  );
}

export default PercentageCell;
