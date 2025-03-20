/**
 * Toán tử số học
 * Toán tử gán
 * Toán tử so sánh
 * Toán tử logic
 * Toán tử 3 ngôi
 */

// Toán tử số học: +, -, *, /, %, --, ++
console.log("Toán tử số học: +, -, *, /, %, --, ++");
console.log(10 / 3);
console.log(10 % 3);

let a = 10;
// a++ tương đương với a = a + 1
console.log(a++);
console.log(++a);

// ! Toán tử gán: =, +=, -=, *=, /=, %=, **=
console.log("Toán tử gán: =, +=, -=, *=, /=, %=");
console.log(10 ^ 2);

// Toán tử so sánh: >, <, >=, <=, ==, ===, !=, !==
let x = 10;
let y = "10";
console.log(x == y); // true
console.log(x === y); // false
/**
 * ! Trong JS không khai báo rõ kiểu dữ liệu khi khai báo biến. (Khác với Typescript)
 * ! JS thực hiện ép kiểu tự động (ngầm định) khi cần thiết
 *
 */

// Toán tử logic: &&, ||, !
console.log(true & true); // true
console.log(true & false); // false
console.log(true || false); // true
console.log(!true); //false
console.log("quyen" && "huong"); // huong
console.log("quyen" && 0 && "huong"); // 0
console.log("quyen" || 0 || "huong"); // quyen
/**
 * falsy: false, 0, "", null, undefined, NaN
 * truthy: 
 */
