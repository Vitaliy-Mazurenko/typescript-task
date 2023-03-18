import React from 'react';
import { useSelector } from 'react-redux';
import {selectColumns, selectNear, selectCells } from '../../store/taskReducerSlice';

const Rows = ({ incr, activOn, activOff, nearest, activ, percent, cell, i }) => {
  const columns = useSelector(selectColumns);
  const near = useSelector(selectNear);
  const cells = useSelector(selectCells);

  let cellVal = Object.values(cell);
  let result = cellVal.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);

  let flatenned = [];
  if(cells[0]){
  for(let i = 0; i < cells.length - 1; i++) {
    flatenned[i] = Object.values(cells[i]);
   }
  }

    return(
      Array.from({length: columns}).map((item, index) => {
        const color = `red ${1 +'%'}`;
        const transparent = Math.round((cellVal[index]/result) * 100);
        return(
  (percent === i + 'r') ? (
  <td style={{background: `linear-gradient(to bottom, Transparent ${100 - transparent}%, ${color})`}}
  key={index}>{transparent +'%'}</td>) : (<td key={index}
 id={i + 'c' + index} className= {(flatenned.flat().sort((x, y) => Math.abs(+nearest - x)
- Math.abs(+nearest - y)).slice(0, near).some(currentVal => currentVal === cellVal[index]))
 ? (activ) : ''}
 onClick={(e) => incr(e.target.id)}
 onMouseEnter={(e) => activOn(e.target)}
 onMouseLeave={activOff}>{cellVal[index]}</td>))})
   );
}

export default Rows;
