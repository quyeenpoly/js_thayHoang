const arr1 = [1, 2, 6, 8, 11, 5, 3, 5, 7];
// Sắp xếp mảng sau tăng dần ko dùng sort()

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
document.writeln(quickSort(arr1));
