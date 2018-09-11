function triplePlus(value) { 
  let newValue = value + value + value; 
  return newValue; 
} 
console.log(triplePlus(3));


function myFunction(favoriteNumber) {
  let newNum = favoriteNumber + 100;
  return newNum;
}

let result = myFunction(42);

console.log(result);

function mySecFunction() {
  let message = "Hello World!";
  return message;
}

let newMsg = mySecFunction(); 

console.log(newMsg);

let person = {
  name: "john",
  age: 32,
  partTime: false
}

console.log(person.name);

//passing obj to functions
//functions can update obj values permanently 

function changeCard(card) {
  card.suit = "Clubs";
}

let card = {
  suit: "Hearts",
  value: "Queen"
};

changeCard(card); 

console.log(card.suit);

//array of objs 
let cards = [
  {
    suits: "Hearts",
    value: "Queen"
  },
  {
    suits: "Clubs",
    value: "king"
  }
];

console.log(cards[0].suits, cards[0].value);

//Built-in Objs

let datez = new Date();

console.log(datez);

//How to toggle back and forth displaying objs

// let textArea = document.getElementById('text-area');

// textArea.innerText = 'Hello World!';

// let okButton = document.getElementById('ok-button');

// textArea.style.display = 'none';

// okButton.addEventListener('click', function() {
//   textArea.style.display = 'block';
// });