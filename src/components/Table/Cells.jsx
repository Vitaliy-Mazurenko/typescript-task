import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectColumns, selectNear, selectCells } from '../../store/taskReducerSlice';

const Cells = ({ incr, activOn, activOff, nearest, activ, percent, cell, i }) => {
  const columns = useSelector(selectColumns);
  const near = useSelector(selectNear);
  const cells = useSelector(selectCells);

  let cellVal = Object.values(cell);
  let result = cellVal.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);

  const classNameActiv = useCallback((cells, index) => {
        console.log(cells);
        let flatenned = [];
        if(cells[0]){
        for(let i = 0; i < cells.length - 1; i++) {
          flatenned[i] = Object.values(cells[i]);
         }
        }
        return (flatenned.flat().sort((x, y) => Math.abs(+nearest - x)
    - Math.abs(+nearest - y)).slice(0, near).some(currentVal => currentVal === cellVal[index]));
  }, [cellVal, near, nearest]);

  return(
      Array.from({length: columns}).map((item, index) => {
        const color = `red ${1 +'%'}`;
        const transparent = Math.round((cellVal[index]/result) * 100);
        const background = {background: `linear-gradient(to bottom, Transparent ${100 - transparent}%, ${color})`};
        const isPercent = percent === i + 'r';
        return(
  (isPercent) ? (
  <td style={background}
  key={index}>{transparent +'%'}</td>) : (<td key={index}
  id={i + 'c' + index} className={(classNameActiv(cells, index))
  ? (activ) : ''}
  onClick={(e) => incr(e.target.id)}
  onMouseEnter={(e) => activOn(e.target)}
  onMouseLeave={activOff}>{cellVal[index]}</td>)
  )
})
  );
}

export default Cells;
