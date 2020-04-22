//console.log('this is the dom-loops lesson');

const dinos = [
  {
    dinoType: 'T-Rex',
    name: 'Tommy',
    age: 100
  },
  {
    dinoType: 'Stegosaurus',
    name: 'Steve',
    age: 10
  },
  {
    dinoType: 'Velociraptor',
    name: 'Ian',
    age: 23
  },
]

const printToDom = (selector, textToPrint) => {
  console.log(selector + textToPrint);
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildDinoCards = (array) => {
  //todo: build dino cards
  let domString = '';

  for (let i = 0; i < array.length; i++) {
    domString += `<div class="dino">`;
    domString += `<h3>${array[i].name}</h3>`;
    domString += `<p>This dino is a ${array[i].dinoType} and is ${array[i].age} years old</p>`;
    domString += `</div>`
  }

  printToDom('#dino-pen', domString);
}

const assignments = [
  {
    title: 'Quadratic Equations',
    dueDate: '04-20-2020',
    topic: 'Math',
    notes: 'Graphs and coordinates and stuff'
  },
  {
    title: 'String Theory',
    dueDate: '04-21-2020',
    topic: 'Physics',
    notes: 'no one really understands this'
  },
  {
    title: 'American Revolution',
    dueDate: '04-25-2020',
    topic: 'History',
    notes: 'Spoiler Alert: We Won'
  }
]


const printAssignments = (array) => {
  let domString = '';

  for (let i = 0; i < array.length; i++) {
    domString += `<div class="assignment">`;
    domString += `<h3>${array[i].title}</h3>`;
    domString += `<p>This assignment due in ${array[i].topic} on ${array[i].dueDate}</p>`;
    domString += `<p>${array[i].notes}</p>`;
    domString += `</div>`
  }

  printToDom('#homework', domString);
}


const init = () => {
  buildDinoCards(dinos);
  printAssignments(assignments);
}

init();
