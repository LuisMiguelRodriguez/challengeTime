// const pythagorean = function(num) {
//   let a = 3,
//     b,
//     c,
//     sum = 0;
//   let count = 1;
//   while (sum <= num) {
//     b = count + a;
//     c = count + b;

//     sum = a + b + c;
//     // console.log(`${a} ${b} ${c}`);
//     if (a ** 2 + b ** 2 === c ** 2) {
//       return { a, b, c };
//     }
//     if (sum === num) {
//       return { a, b, c };
//     }
//     a += 3;
//     count += 1;
//   }

//   return a * b * c;
// };

// (32 + 42 ) = ( 9 + 16 ) = 25 = 52.
// 9**2 + 16

// const pythagorean = function(num) {
//   let a = 3;

//   let b = 4;

//   let c = 0;

//   while (c < num) {
//     c = b ** 2 + a ** 2;
//     console.log(`c ${c}`);
//     console.log(`
//     a + b + C = ?
//     ${a} + ${b} + ${c} = ${a + b + c}
//     ${a} * ${b} * ${c} = ${a * b * c}
//     `);
//     a += 3;
//     b += 4;
//   }
// };

const pythagorean = function(num) {
  let squaredNums = [];

  let count = 1;

  // create an array of only squared number
  // only squared numbers are allowed to be calculated
  while (count < num) {
    let squared = count * count;
    squaredNums.push(squared);
    count++;
  }

  let a, b, c;

  // Backwards loops
  for (var i = squaredNums.length - 1; i >= 3; i--) {
    a = squaredNums[i];

    for (var j = squaredNums.length - 1; j >= 3; j--) {
      b = squaredNums[j - 1];

      for (var k = squaredNums.length - 1; k >= 3; k--) {
        c = squaredNums[k - 2];
        sum = c + b;
        if (sum === a) {
          // console.log(`a ${Math.sqrt(a)} b ${Math.sqrt(b)} c ${Math.sqrt(c)}`);

          if (Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c) === 1000) {
            // return `a ${Math.sqrt(a)} b ${Math.sqrt(b)} c ${Math.sqrt(c)}`;
            return `${Math.sqrt(c) * Math.sqrt(b) * Math.sqrt(a)}`;
          }
        }
      }
    }
  }
};

// loop thru an array of squared numbers

// console.log(pythagorean(12));
// console.log("-----------------");
// console.log(pythagorean(25));
// console.log("-----------------");
// console.log(pythagorean(36));
// console.log("-----------------");
// console.log(pythagorean(48));
// console.log("-----------------");
// console.log(pythagorean(996));
// console.log("-----------------");
console.log(pythagorean(1000));

// { a: 252, b: 336, c: 420 }
// console.log(252 ** 2 + 336 ** 2 === 420 ** 2);

// 2 + 3 + 995 = 1000;
