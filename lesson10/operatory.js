// let x = 10
// let left = x > 5
// let riight = x == 10

// console.log(left || riight )

// let a = "test";
// console.log("a", a);

// const x = 16;

// if (x > 18) {
//     console.log('Możesz kupić winko')
// } else if (x > 12) {
//     console.log('Przykro mi, dostaniesz tylko picolo')
// } else { console.log('Zawołaj mamę') }

// x > 18
//   ? console.log("Możesz kupić winko"):console.log("Przykro mi, dostaniesz tylko picolo");

// const person = {
//   imię: "Mateusz",
//   age: 17,
//   address: {
//     city: 'Warsaw'
//   }
// }
// if (person.age > 18) {
//   console.log(person.address.city)
// }else{console.log('Zawoałaj mamę')}

// console.log(true)

// console.log("test");

const srodkiMyjace = [
  "proszek czarnobialy",
  "plyn do prania",
  "plyn do plukania",
  "proszek kolorowy",
];
const suszarka = ["spodnie", "majty", "koszulka", "koszulka"];

const brudneUbrania = ["brudne majty", "brudna koszulka", "brudne spodnie"];

function zrobPranie(ubrania, proszek, plyn, program = "sport") {
  console.log("proszek przed zmiana", proszek);
  if (proszek == "proszek czarnobialy") {
    proszek = undefined;
  }
  console.log("proszek po zmiana", proszek);

  // console.log("ubrania", ubrania);
  // console.log("proszek", proszek);
  // console.log("plyn", plyn);
  // console.log("program", program);

  const dostepneProgramy = ["sport", "delikatne"];

  if (!ubrania) {
    console.log("Wrzuc ubrania");
  }

  if (!proszek) {
    console.log("wrzuc proszek");
  }

  if (!plyn) {
    console.log("Wrzuc plyn");
  }

  // if (["sport", "delikatne"].includes('delikatne'))
  // includes sprawdz czy dostepne/ znajduje
  if (!dostepneProgramy.includes(program)) {
    console.log("Nieznany program");
  }

  return ubrania;
}

// const proszek = srodkiMyjace[0]

const proszeczek = "proszek czarnobialy";
console.log("proszeczek przed", proszeczek);
const koszNaPranie = zrobPranie(
  brudneUbrania,
  proszeczek,
  srodkiMyjace[1],
  "delikatne"
);
console.log("proszeczek po", proszeczek);

// console.log(koszNaPranie);
