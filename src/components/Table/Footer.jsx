import React from 'react';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from 'react-redux';
import { selectColumns, selectCells, setCells } from '../../store/taskReducerSlice';
import { average } from '../../helpers/average';

const min = 100;
const max = 999;

  const Footer = ({ cell }) => {
    const dispatch = useDispatch();
    const cells = useSelector(selectCells);
    const columns = useSelector(selectColumns);

    const generateCols = () => {
      let cellsHistory = [...cells];
      let o = {};
    for (let i = 0; i < columns; i++) {
      o[i] = Math.round(min + Math.random() * (max - min));
    }
    cellsHistory = [...cellsHistory.slice(0, -1), o];

    dispatch(setCells([...cellsHistory, average(cellsHistory)]));
    }

    let cellVal = Object.values(cell);
    const row = Array.from({length: columns}).map((item, index) => {
      return <td key={index}>{cellVal[index]}</td>;
    });

    const tdStyle = {border: 'none'};

    return cellVal[0] ? (
      <tr>
        {row}
        <td></td>
        <td className="tableEnd" style={tdStyle}>
        <Button className="add" variant="contained" color="primary" onClick={() => generateCols()}>
        Add
      </Button>
        </td>
      </tr>
    ) : null;
  }

export default Footer;
