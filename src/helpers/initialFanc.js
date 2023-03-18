import {average} from './average';
const min = 100;
const max = 999;

export function initialFanc(newRows, newColumns) {
    let initCells = [];
    const generateCol = () => {
      let o = {};
      for (let i = 0; i < newColumns; i++) {
        if(newColumns) {
        o[i] = Math.round(min + Math.random() * (max - min));
      }
      }
      initCells.push(o)
      }
    for (let j = 0; j < newRows; j++) {
      generateCol()
    }
    const averageCells = average(initCells);
    return [...initCells, averageCells];
}