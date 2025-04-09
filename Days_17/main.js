const arr1 = [1, 2, 5, 4, -1];
// const arr2 = arr1.sort(); // xếp từ nhỏ đến lớn
const arr2 = arr1.sort().reverse(); // xếp từ lớn đến nhỏ

const arr31 = arr1.sort((a, b) => a - b); // xếp từ nhỏ đến lớn
// ---------------------------------------------------------------------------
const arr3 = [
  { id: 1, name: "product1", price: 200 },
  { id: 2, name: "product2", price: 140 },
  { id: 3, name: "product3", price: 300 },
];
// Lấy arr4 là product giá tăng dần
const arr4 = arr3.sort((a, b) => a.price - b.price);

// Lấy arr5 là product giá giảm dần
const arr5 = arr3.sort((a, b) => b.price - a.price);
// ----------------------------------------------------------------------------
const users = [
  { id: 1, username: "hoang", email: "hoang@gmail.com", age: 33 },
  { id: 2, username: "minh", email: "minh@gmail.com", age: 22 },
  { id: 3, username: "quan", email: "quan@gmail.com", age: 24 },
  { id: 4, username: "khanh", email: "khanh@gmail.com", age: 18 },
];
// Viết hàm nhận vào mảng user và trả về
// danh sách user được sắp xếp theo username
const sortByUsername = (arr) => {
  // Tạo bản sao của mảng để không làm thay đổi mảng gốc
  const userCopy = structuredClone(arr);
  userCopy.sort((a, b) => {
    if (a.username < b.username) return -1;
  });
  return userCopy;
};
console.log(sortByUsername(users));
// ---------------------------------------------------------------------------------
const arr6 = [1, 5, -1, "hoang", "anh", "yen", null, NaN, "", , , 100];
// Sắp xếp mảng arr6  với các số từ bé đến lớn
// và xếp trước, sau đó đếm chuỗi xếp theo a-z
// các falsy value xếp cuối mảng bỏ qua các empty values
// Bước 1: Loại bỏ mảng thưa
// Bước 2:
// Dùng switch case để phân loại
// Tạo ra 3 mảng con và sắp xếp lại 3 mảng con này(number, string, falsy value)
// Bước 3: Ghép lại 3 mảng con và trả về kết quả

const sortArr = (arr) => {
  const arrCopy = arr.flat(1);
  const stringArr = [];
  const numberArr = [];
  const falsyArr = [];
  arrCopy.forEach((item) => {
    if (!item) {
      falsyArr.push(item);
    } else if (typeof item === "number") {
      numberArr.push(item);
    } else if (typeof item === "string") {
      stringArr.push(item);
    }
  });
  // Sắp xếp các mảng con
  numberArr.sort((a, b) => a - b);
  // console.log(numberArr);
  stringArr.sort((a, b) => {
    if (a < b) return -1;
  });
  console.log(stringArr);
  falsyArr.sort((a, b) => {
    if (a < b) return -1;
  });
  // Ghép lại các mảng con
  const result = numberArr.concat(stringArr);
  return result;
};
sortArr(arr6);
console.log(sortArr(arr6));
