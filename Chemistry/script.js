// Isotopes have the same atomic number
// Isobars have the same mass number

// C is isotope of A and isobar of B

function calcAtomicNumber(mass, neutrons) {
  return mass - neutrons;
}

function calcMassNumber(atomicNumber, neutrons) {
  return atomicNumber + neutrons;
}

// Primeiro definimos C com os valores conhecidos
var C = {
  mass: "48", // Mesma massa que A
  neutrons: "28",
  atomicNumber: atomicNumberOfA,
};

// Agora podemos calcular o número atômico de A
var atomicNumberOfA = calcAtomicNumber(C.mass, C.neutrons);

// Definimos A com o número atômico calculado
var A = {
  mass: "48",
  neutrons: "",
  atomicNumber: atomicNumberOfA,
};

// Atualizamos o número atômico de C
C.atomicNumber = atomicNumberOfA;

// Definimos B com o número atômico de C
var B = {
  mass: "52",
  neutrons: "",
  atomicNumber: C.atomicNumber,
};

console.log("A:", A);
console.log("C:", C);
console.log("B:", B);
