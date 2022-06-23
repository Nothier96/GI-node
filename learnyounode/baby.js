// console.log(process.argv);

function somme(array1) {
  let sum = 0;
  for (let i = 2; i < array1.length; i++) {
    sum += Number(array1[i]);
  }
  return sum;
}
console.log(somme(process.argv));
