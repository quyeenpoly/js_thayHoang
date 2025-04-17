/* 
Đếm tần suất các thuộc tính trong object
Viết hàm countProperties(obj) nhận vào một object và trả về một object mới
chứa tần suất xuất hiện của các thuộc tính trong object đầu vào.
- Input:
    + obj: object đầu vào
- Output:
    + object mới chứa tần suất xuất hiện của các thuộc tính trong object đầu vào
- Ví dụ:
    + Input: {a: 1, b: 2, c: 1, d: 2}
    + Output: 4
*/
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
const countProperties = (arr) => {
  return Object.keys(arr).length;
};
console.log(countProperties(obj));
/* 
Mã hóa chuỗi (Run-Length Encoding)
Viết hàm encodeRLE(str) nhận vào một chuỗi và trả về chuỗi đã được mã hóa
bằng thuật toán Run-Length Encoding.
- Input:
    + str: chuỗi ký tự
- Output:
    + Chuỗi đã được mã hóa bằng thuật toán Run-Length Encoding
- Ví dụ:
    + Input: "aaabbcccc"
    + Output: "3a2b4c"
*/
function encodeRLE(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += count + str[i - 1];
      count = 1;
    }
  }
  return result;
}
console.log(encodeRLE("aaaabbccddd"));
/* 
Tìm phần tử xuất hiện nhiều nhất trong mảng
Viết hàm findMostFrequent(arr) nhận vào một mảng các phần tử và trả về phần tử xuất hiện nhiều lần nhất.
Nếu có nhiều phần tử cùng tần suất, trả về phần tử xuất hiện đầu tiên.
- Input:
    + arr: mảng số nguyên
- Output:
    + Phần tử xuat hiện nhieu nhat trong mảng arr
    + Nếu có nhiều phần tử xuất hiện nhiều nhất thì trả về phần tử đầu tiên trong mảng arr
- Ví dụ:
    + Input: [1, 2, 2, 3, 3, 3, 4, 4, 4]
    + Output: 3
*/
