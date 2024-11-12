const idToFind = 9999;
const lengthAll = 10000;

// Implementação O(n)
const studentsArray = [
  { id: 101, name: "Ana" },
  { id: 102, name: "João" },
  { id: 103, name: "Maria" },
  { id: 104, name: "Pedro" },
  { id: 105, name: "Lucas" },
  ...Array.from({ length: lengthAll }, (_, i) => ({
    id: i + 106,
    name: `Student${i + 106}`,
  })),
];

// Implementação O(1)
const studentsObject = {};

// Este for adiciona o array de estudantes
// num formato de objeto para que seja
// acessado mais rapidamente O(1)
for (let i = 0; i < studentsArray.length; i++) {
  studentsObject[studentsArray[i].id] = studentsArray[i];
}

console.log(studentsObject);

// FUNÇÃO SIMPLES PARA FAZER UM FIND
function findStudentByIdArray(id) {
  return studentsArray.find((student) => student.id === id);
}

// FUNÇÃO SIMPLES PARA FAZER UM GET NO OBJETO
function findStudentByIdObject(id) {
  return studentsObject[id];
}

console.time("Array Find");
const startArray = performance.now();
const resultArray = findStudentByIdArray(idToFind);
const endArray = performance.now();
console.timeEnd("Array Find");

console.time("Object Direct Access");
const startObject = performance.now();
const resultObject = findStudentByIdObject(idToFind);
const endObject = performance.now();
console.timeEnd("Object Direct Access");

const timeArray = endArray - startArray;
const timeObject = endObject - startObject;
const percentDifference = ((timeArray - timeObject) / timeArray) * 100;

console.log(
  `Diferença de tempo: ${percentDifference.toFixed(
    2
  )}% mais rápido ao usar acesso direto em objeto`
);
