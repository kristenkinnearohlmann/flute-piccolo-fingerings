// functional programming version of range for JS
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
const generateNumberRange = (start, end) => {
  if (start === end) return [start];
  return [start, ...generateNumberRange(start + 1, end)];
};

const populateDropdownList = (listData) => {
  console.log("Utilities run here");
};
