// khai báo biến
// var
var a = 10;
var a = "Quyền";
// ===> Loại var

console.log(a);

/**
 * Khai báo var :
 * - có thể khai báo lại biến
 * - cũng có thể gán lại giá trị cho biến
 * - var có phạm vi global
 *
 */
// block code
{
  {
    {
      a = 20;
      console.log(a);
    }
  }
}
// a vẫn bằng 20
// global scope
// ---------------------------------------------------------
/**
 * ECMAScript 6 (ES6) - 2015
 * Khai báo với let:
 * - không thể khai báo lại biến
 * - let có phạm vi là block
 */
{
  let b = "Quyền";
}
let b = 10; // vẫn khai báo được vì phạm vi là block
b = b + 10;

// --------------------------------------------------------
/**
 * Đối với const
 * - không thể khai báo lại biến
 * - ko thể gán lại giá trị cho biến (nếu ko có phương thức)
 * - const có phạm vi block (function, if else, for, while)
 */
const pi = 3.14;
pi = 3.15; // lỗi
console.log(pi); // 3.14
