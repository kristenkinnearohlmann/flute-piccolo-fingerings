const generateOctaveOptions = (octaves) => {
  octaves.forEach((octave) => {
    let opt = document.createElement("option");
    opt.value = octave;
    opt.textContent = octave;
    octaveChoice.appendChild(opt);
  });
};
