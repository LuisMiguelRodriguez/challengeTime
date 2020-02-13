// 10 is 2 + 3 + 5 + 7 = 17.
// 2 -> 3 -> 5 -> 7 -> 11 -> 17 -> 19
//   1    2    2    4     6     2

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,

// 12 / 2 = 6  // false not a prime number
// 6 % 12 !== 0

// 29 / 2 = (14.5) Math.floor 14
// 14.5 / 3 = 4.8333333333
// 4.833333333333333  / 5 = 0.9666666666666666
//

// 33 / 2 = (16.1)
// 33 / 3 = 11

// 2 + 3 + 5 + 7 = 17
// var primeFoundArr = [2, 3, 5, 7, 11];

// 4 / 2 = 0 break

// i is 5
// 5 / 2 = 2.5
// 5 / 3 = 1.6
// if end of array add i to array

// i = 6
// 6 % 2 === 0 break

// i = 7
// 7 % 2 > 0  continue
// 7 % 3 > 0  continue
// 7 % 5 > 0  continue
// if end of array add i to array

// i = 8
// 8 % 2 === 0  break

// i = 9
// 9 % 2 > 0  continue
// 9 % 3 === 0 break

// i = 10
// 10 % 2 === 0  break

// i = 11
// 11 % 2 > 0  continue
// 11 % 3 > 0  continue
// 11 % 5 > 0  continue
// 11 % 7 > 0  continue
// if end of array add i to array

var sumOfPrime = function(num) {
  // Must odd
  let i = 4;
  let primesArr = [2, 3];

  // 5
  for (i; i <= num; i++) {
    // console.log("i", i);
    let length = primesArr.length; // 2

    for (z = 0; z < length; z++) {
      //   console.log("i % primesArr[z]", i % primesArr[z]);
      if (i % primesArr[z] === 0) {
        // console.log("i break", i);
        break;
      }

      //   console.log("length - 1", length - 1);
      if (z === length - 1) {
        // console.log("i push", i);
        primesArr.push(i);
      }
    }

    // console.log("-----------------");
  }
  return primesArr.reduce((sum, prime) => (prime += sum), 0);
};

// // 10 is 2 + 3 + 5 + 7 = 17.
// console.log(sumOfPrime(10));

// 10 is 2, 3, 5, 7, 11, 13, 17, 19, 23 = 17.
console.time("start");
console.log(sumOfPrime(2000000));
console.timeEnd("start");
