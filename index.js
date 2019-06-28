function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (num in array) {
    if (Array.isArray(array[num]) == true) {
      sum += sumItems(array[num]);
    } else {
      sum += array[num];
    }
  }
  console.log(array[num] + ", " + sum + "\n");
  return sum;
}

module.exports = sumItems;

sumItems([25]);

// function printItems(array) {
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       // Print out all it's items individually
//       printItems(item);
//     } else {
//       console.log(item);
//     }
//   });
// }
