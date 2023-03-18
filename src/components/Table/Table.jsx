import React, { useState } from 'react';
import './table.css';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCells  } from '../../store/taskReducerSlice';
import Footer from "./Footer";
import Rows from "./Rows";

const Table = () => {
  const cells = useSelector(selectCells);
  const history = useHistory();
  const [activ, setActiv] = useState('');
  const [nearest, setNearest] = useState('');

    function activOn(e) {
      setNearest(e.textContent);
      setActiv('activ');
    }
    function activOff() {
      setActiv('');
    }

  return (
    <div className="table-wrap">
      <span id="goBack-btn">
      <Button variant="contained" color="primary" onClick={history.goBack}>Back</Button>
      </span>
      <span>
        <table className="Mtable" aria-label="simple table">
          <tbody>
          {[...cells.slice(0, -1)].map((cell, i) => (
              <Rows key={i} activOn={activOn}
              activOff={activOff} nearest={nearest}
              activ={activ}
              cell={cell}
              i={i} />
            ))}
          </tbody>
            <tfoot>
            {[...cells.slice(-1)].map((cell, i) =>
              <Footer key={i} cell={cell} />
            )}
            </tfoot>
        </table>
      </span>
    </div>
  );
}

export default Table;
