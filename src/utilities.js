// functional programming version of range for JS
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
const generateNumberRange = (start, end) => {
  if (start === end) return [start];
  return [start, ...generateNumberRange(start + 1, end)];
};

const populateDropdownList = (listData, listElement) => {
  console.log("Utilities run here");
  listData.forEach((listItem) => {
    let opt = document.createElement("option");
    opt.value = listItem;
    opt.textContent = listItem;
    listElement.appendChild(opt);
  });
};
