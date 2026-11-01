const person = {
  namn: "Halid",
  ålder: 40,

  adress: {
    adress: "kalvshällavägen 42",
    postnumer: 17745
  }
};

console.log(person);
console.log(person.adress);
console.log(person.adress.adress);

// array objekt boole

// samma objekt fast med en array lista.
const person1 = [
  {
    namn: "Kalle",
    ålder: 41,
  },

  {
      adress: "kalvshällavägen 33",
      postnumer: 17755
  }
];

console.log(person1[1].adress);
console.log(person1[0]);


