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

// Exercise 1:
// create an array of instructor objects each with a firstName and lastName properties
// loop over the instructors array
// console log full instructor name
// call in init

const instructors = [
  { 
    firstName: 'Luke',
    lastName: 'Lancaster'
  },
  { 
    firstName: 'Matthew',
    lastName: 'Gill'
  },
  { 
    firstName: 'Michael',
    lastName: 'Clark'
  }
]

const instructorNames = (array) => {
  let domString = '';
  for (let i=0; i < array.length; i++) {
    // console.log(`${array[i]['firstName']} ${array[i]['lastName']}`);
    domString += `<h2>${array[i].firstName} ${array[i].lastName}</h2>`;
  }
  console.log(domString);
}

const init = () => {
  // colorLoop(colors);
  instructorNames(instructors);
}

init();
