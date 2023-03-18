import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from 'react-redux';
import { selectCells, setCells } from '../../store/taskReducerSlice';
import Rows from "./Rows";
import { average } from '../../helpers/average';

const Cells = ({ activOn, activOff, nearest, activ, cell, i }) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState('');
  const cells = useSelector(selectCells);

  const onDelete = (id) => {
  let newCells = [
  ...cells.slice(0, +id), ...cells.slice(+id + 1),
  ];
  newCells = [...newCells.slice(0, -1)];

  const averageCells = average(newCells);
  dispatch(setCells([...newCells, averageCells]));
  };

  const incr = (text) => {
    let id = text.split('c')[0];
    let incrId = +text.split('c')[1];
    let incrCells = [
      ...cells.slice(+id, +id + 1)
     ];

    let incrItems = {};
    function incrRows(cells){
      const cloneCells = JSON.parse(JSON.stringify(cells));
      if(cloneCells[0]){
      let column = Object.values(cloneCells[0]);
      for (let i = 0; i < column.length; i++) {
        if (i === incrId) {
          ++cloneCells[0][incrId]
        }
        incrItems[i] = cloneCells[0][i];
      }
     }
    }
    incrRows(incrCells);

    let newCells = [
     ...cells.slice(0, +id), incrItems, ...cells.slice(+id + 1),
    ];
    newCells = [...newCells.slice(0, -1)];

    const averageCells = average(newCells);
    dispatch(setCells([...newCells, averageCells]));
  };


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
    function hoverOn(id) {
      if(id === (i + 'r')){
        setPercent(i + 'r');
      }
    }
    function hoverOff() {
      setPercent('');
    }

  return(
    <tr>
        <Rows incr={incr} activOn={activOn}
            activOff={activOff} nearest={nearest}
            activ={activ} percent={percent}
            cell={cell} i={i}
             />
      <td id={i + 'r'} className="tableRes"
     onMouseEnter={(e) => hoverOn(e.target.id)}
     onMouseLeave={hoverOff}>
       {result}</td>
       <td className="tableEnd">
      <Button variant="contained" color="secondary"
       id={i} onClick={() => onDelete(i)}>Delete</Button>
      </td>
    </tr>
  )
}

export default Cells;
