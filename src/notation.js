// functional programming version of range for JS
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
const generateNumberRange = (start, end) => {
  if (start === end) return [start];
  return [start, ...generateNumberRange(start + 1, end)];
};

const generateOctaveOptions = (octaves) => {
  octaves.forEach((octave) => {
    let opt = document.createElement("option");
    opt.value = octave;
    opt.textContent = octave;
    octaveChoice.appendChild(opt);
  });
};
