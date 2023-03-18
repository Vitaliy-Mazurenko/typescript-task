export const average = (cells) => {
    let average = {};
    if(cells[0]){
    let column = Object.values(cells[0]);
    for (let i = 0; i < column.length; i++) {
      let sum = 0;
      for (let j = 0; j < cells.length; j++) {
          sum += cells[j][i];
      }
      average[i] = Math.round(sum / cells.length);
    }
  }
return average;
};

