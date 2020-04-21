const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow', 'violet'];

const colorLoop = (array) => {
  let domString = '';
  for (let i = 0; i < array.length; i++) {
    // console.log(colors[i]);
    domString += `<h2>${array[i]}</h2>`;
    console.log(domString);
  }
  // return domString;
  console.log(domString);
}

const init = () => {
  colorLoop(colors);
}

init();
