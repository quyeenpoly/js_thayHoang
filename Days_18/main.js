let myName = "John Doe";
// truy cap chuoi
console.log(myName.charAt(0)); // J
// trả về string
console.log(myName[0]); // J
// trả về string or undefined

// Cập nhật/xóa 1 phần chuỗi => không được phép (primitive type)
myName = "CodeFarmer";
console.log(myName); // CodeFarmer

myName[0] = "Q"; // không thay đổi được

// Vòng lặp qua chuỗi
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]); // C o d e F a r m e r
}

// Chuyển đổi sang kiểu chuỗi
let age = 18;
console.log(age.toString()); // "18"
console.log(age + ""); // "18"

// Biến đổi chuỗi
let school = "cao dang Fpt poLytecHnic";
console.log(school.toUpperCase()); // CAO DANG FPT POLYTECHNIC
console.log(school.toLowerCase()); // cao dang fpt polytechnic

console.log(school); // cao dang Fpt poLytecHnic

// ? toLocaleLowerCase() => chuyển đổi sang chữ thường theo ngôn ngữ của người dùng
console.log(school.toLocaleLowerCase()); // cao dang fpt polytechnic

// các phương thức làm việc với chuỗi
// 1. slice(start, end) => cắt chuỗi từ vị trí start đến end
// slide hỗ trợ chỉ số âm, tạo ra chuỗi con được
// cắt từ chuỗi ban đầu, nếu không cắt được chuỗi con thì
// trả về chuỗi rỗng
console.log(school.slice(0, -2)); // cao dang Fpt poLytecHn
// 2. substring(start, end) => cắt chuỗi từ vị trí start đến end
// không hỗ trợ chỉ số âm, tạo ra chuỗi con được
// 3.split(separator, limit) => tách chuỗi thành mảng các chuỗi con
console.log(school.split(" ")); // ["cao", "dang", "Fpt", "poLytecHnic"]
console.log(school.split(" ", 2)); // ["cao", "dang"]

let content =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore rem blanditiis error aliquam, fuga veritatis labore eveniet similique in eum accusantium nam assumenda nesciunt quae. Provident labore fuga sit dolores.";
//đếm xem có bao nhiêu từ trong chuỗi
let words = content.split(" ", content[content.length]);
console.log(words);

//3.Tìm kiếm chuỗi
// indexOf
// lastIndexOf
// includes
// startsWith
// endsWith
// search
// match
// replace
// replaceAll
// tìm kiếm chuỗi trong chuỗi

let str =
  "học lập trình JS tại codeFarm cùng thầy Hoàng, thầy Hoàng dạy khá ổn";
// thay thế  thầy Hoàng bằng thầy Đông
// và thay thế JS bằng javascript
// replace => thay thế 1 lần đầu tiên
console.log(str.replace("Hoàng", "Đông").replace("JS", "javascript"));
// replaceAll => thay thế tất cả các lần xuất hiện
console.log(str.replaceAll("Hoàng", "Đông").replaceAll("JS", "javascript"));

const arr = [
  { id: 1, name: "Nguyen Hoang Huy", age: 32 },
  { id: 2, name: "Nguyen Quang Quyen", age: 20 },
  { id: 3, name: "Hoang Thanh Huy", age: 18 },
  { id: 3, name: "Huy Quoc", age: 18 },
];
// input: arr, "Huy" -> output [{id: 1, name: "Nguyen Huy Hoang", age:32}, {id: 3, name: "Hoang Thanh Huy", age:18}]
// input: arr, "Quyen"-> output [{id: 2, name: "Nguyen Quang Quyen", age:20}]
const searchName = (arr1, name) => {
  const result = arr1.filter((item) => {
    let arrOfName = item.name.split(" ");
    let firstName = arrOfName[arrOfName.length - 1]; // lấy tên cuối cùng
    // console.log(firstName); // Hoang, Quyen, Huy});
    return firstName === name;
  });
  return result;
};
console.log("Kết quả", searchName(arr, "Huy")); // [{id: 1, name: "Nguyen Huy Hoang", age:32}, {id: 3, name: "Hoang Thanh Huy", age:18}]

// Viết hàm sortName() theo tên người dùng a-z (chỉ sắp xếp theo tên,
// nếu trùng tên thì sắp xếp theo họ + tên đệm)
const arr3 = [
  { id: 1, fullname: "Nguyen Anh Huy", age: 32 },
  { id: 2, fullname: "Nguyen Huy Hoang", age: 10 },
  { id: 3, fullname: "Hoang Thanh Huy", age: 30 },
  { id: 4, fullname: "Lê Đạt", age: 30 },
  { id: 5, fullname: "Lê Duy Đạt", age: 30 },
  { id: 6, fullname: "Huy Quốc", age: 30 },
];
const sortName = (arr, name) => {
  const result = arr.sort((a, b) => {
    let arrOfNameA = a.fullname.split(" ");
    let arrOfNameB = b.fullname.split(" ");
    let firstNameA = arrOfNameA[arrOfNameA.length - 1]; // lấy tên cuối cùng
    let firstNameB = arrOfNameB[arrOfNameB.length - 1]; // lấy tên cuối cùng
    if (firstNameA < firstNameB) {
      return -1;
    } else if (firstNameA === firstNameB) {
      return a.fullname.localeCompare(b.fullname);
      // so sánh họ + tên đệm
    }
  });
  return result;
};
/**
 * * Viết hàm randomOTP(length) trả về 1 OTP (One Time Password) có độ dài length.
 * * nếu không truyền length thì mặc định length = 6
 */

const randomOTP = (a, b) => {
  const length = a | 6;
  const num = "0123456789";
  const randomOTP = "";
  for (let i = 0; i < length; i++) {}
};
