const getDaysArray = (start, end, include = false) => {
  const arr = [];
  for(let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)){
    arr.push(new Date(dt));
  }
  if (!include) {
    arr.pop();
  }
  return arr;
};
const startUTC = new Date("2021-04-01T10:00:00.000").toUTCString();
const endUTC = new Date("2021-06-01T10:00:00.000").toUTCString();

console.log('UTC', new Date(startUTC));
console.log('UTC', endUTC);

const daysUTC = getDaysArray(new Date(startUTC), new Date(endUTC));
console.log(daysUTC);
