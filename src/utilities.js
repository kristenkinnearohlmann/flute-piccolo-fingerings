// functional programming version of range for JS
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
const generateNumberRange = (start, end) => {
  if (start === end) return [start];
  return [start, ...generateNumberRange(start + 1, end)];
};

const populateDropdownList = (listData, listElement) => {
  let optDefault = document.createElement("option");

  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }

  optDefault.value = "";
  optDefault.text = "";
  listElement.appendChild(optDefault);

  if (listData) {
    listData.forEach((listItem) => {
      let opt = document.createElement("option");
      opt.value = listItem.value;
      opt.textContent = listItem.option;
      listElement.appendChild(opt);
    });
  }
};
