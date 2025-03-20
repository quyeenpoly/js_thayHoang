let a;
console.log(a); //undefined

a = null;
console.log(a); //null

let b = 10; //number
let c = "Quyen"; //string

/**
 * 1. String
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol (ES6)
 * 7. BigInt
 * Map, Set, WeakMap, WeakSet
 */

// Check kiểu dữ liệu bằng typeof
let x = 20;
console.log(typeof x === "number"); //true
console.log(typeof null); //object
console.log(typeof undefined); //undefined

let myString = new String(123);

/**
 * Ép kiểu ngầm định
 * Ép kiểu chủ động
 */
console.log(1 + "1"); // 11
console.log(1 - "1"); // 0
console.log(10 / "5"); // 2
console.log("10" / 2); // 2
console.log(10 * "5"); // 50

console.log(!0); //true
console.log(!""); //true
console.log(!null); //true
console.log(!undefined); //true
// --> phủ định của falsy là true

console.log(true + true); //1+1
console.log(true + false); //1+0

console.log(Number(true));
console.log(Number(false));
console.log(Number("Hoang"));
console.log(Number(null));
console.log(Number(undefined));

console.log(String(true));
console.log(String(false));
console.log(String("Hoang"));
console.log(String(null));
console.log(String(undefined));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(" "));

const calcBMI = (chieuCao, canNang) => {
  const BMI = canNang / (chieuCao * 2);

  //   if (BMI < 18.5) {
  //     console.log("Thiếu cân");
  //   } else if (18.5 <= BMI && BMI < 23) {
  //     console.log("Bình thường");
  //   } else if (23 <= BMI && BMI < 25) {
  //     console.log("Thừa cân");
  //   } else {
  //     console.log("Béo Phì");
  //   }

  // };
  switch (true) {
    case BMI < 18.5:
      console.log("Thiếu cân");
      break;
    case BMI < 23:
      console.log("Bình thường");
      break;
    case BMI < 25:
      console.log("Thừa cân");
      break;
    default:
      console.log("Béo Phì");
      break;
  }
};
calcBMI(1.73, 75);

const swapNumber = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};
console.log(swapNumber(1, 2));
/**
 * Hàm
 *
 */
const checkPrimeNumber = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return `${number} không phải số nguyên tố`;
  }
  return `${number} là số nguyên tố`;
};
console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(18));

const sortNumber = (a, b, c) => {};
