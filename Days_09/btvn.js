console.log("Bài 9");
const doiCho = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};
console.log(doiCho(1, 2));

console.log("Bài 10");
function sortThreeNumbers(a, b, c) {
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  if (a > c) {
    a = a + c;
    c = a - c;
    a = a - c;
  }
  if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
  }

  return [a, b, c];
}

let a = 5;
let b = 2;
let c = 3;
let sortedNumbers = sortThreeNumbers(a, b, c);
console.log(sortedNumbers);

console.log("Bài 11");
function tamGiac(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
console.log(tamGiac(3, 4, 5));
console.log(tamGiac(1, 2, 3));

console.log("Bài 12");
function soChinhPhuong(n) {
  for (let i = 2; i * i <= n; i++) {
    console.log(i * i);
  }
}

// Sử dụng hàm
soChinhPhuong(66);
