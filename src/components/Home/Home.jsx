import React from "react";
import { useDispatch } from 'react-redux';
import { setRows, setColumns, setNear, setCells } from '../../store/taskReducerSlice';
import {initialFanc} from '../../helpers/initialFanc';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [initColumns, setInitColumns] = React.useState(5);
  const [initRows, setInitRows] = React.useState(5);
  const [initNear, setinitNear] = React.useState(5);
  const [valueError, setError] = React.useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleClick = () => {
    if(initRows > 0 && initColumns > 0 && initNear > 0){
      history.push('/table');
      dispatch(setRows(initRows));
      dispatch(setColumns(initColumns));
      dispatch(setNear(initNear));
      const initFn = () => initialFanc(initRows, initColumns);
      dispatch(setCells(initFn()));
    } else {
      console.warn('value <= 0');
      setError('enter value > 0');
    }
  };


  return (
    <div className="home">
      <div className="creat-wrap">
        <div className="input-wrap">
        <form className="demoForm" style={{ width: '30%', margin: 'auto' }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="columns"
                  label="columns"
                  type="number"
                  minLength="1"
                  value={initColumns}
                  onChange={e => setInitColumns(e.target.value)}
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="rows"
                  label="rows"
                  type="number"
                  minLength="1"
                  value={initRows}
                  onChange={e => setInitRows(e.target.value)}
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="near"
                  label="near"
                  type="number"
                  minLength="1"
                  value={initNear}
                  onChange={e => setinitNear(e.target.value)}
                  fullWidth
                  helperText={valueError}
                />

                <Button disabled={!initColumns || !initRows || !initNear} onClick={() => handleClick(history)}
                 variant="contained" color="primary"  className='buttonAdd'>
                Add New Table
                </Button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Home;
