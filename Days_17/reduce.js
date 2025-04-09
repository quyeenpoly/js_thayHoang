// const arr = [1, 2, 3, 4];
// const result = arr.reduce((a, b, c, d) => {
//   console.table({ a, b, c, d });
// });
// --------------------------------------------------------------
// tính giai thừa với reduce cho số n
// --------------------------------------------------------------
// tính tích các phần tử trong mảng với reduce
const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const result2 = arr2.reduce((a, b) => a * b);
// console.log(result2);
function factorial(arr) {
  arr.reduce((acc, cur, index, array) => {
    return acc * cur;
  });
}
console.log(factorial(arr2)); // 720
// ---------------------------------------------------------------
const animals = [
  "cat",
  "dog",
  "tiger",
  "virusS",
  "dog",
  "dog",
  "python",
  "tiger",
  "ostrich",
  "python",
];
// đếm số lần xuất hiện của các động vật
function countAnimals(arr) {
  return arr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}
console.log(countAnimals(animals));

// tạo function trả về mảng mới đã loại bỏ các phần tử trùng lặp
// sử dụng reduce
const duplicateFilter = (arr) => {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
};
console.log(duplicateFilter(animals));
