const myInfor = {
  name: "Quyen Nguyen Quang",
  age: 23,
};
// Phương thức tĩnh
console.log(Object.values(myInfor));
console.log(Object.keys(myInfor));
console.log(Object.entries(myInfor));
console.log(Object.fromEntries(Object.entries(myInfor)));

// viết 1 hàm khởi tạo giỏ hàng "Cart"
//  có đầu vào là userId, products(array)
//  có các tính năng sau:
// - Viết phương thức tĩnh "calc()" cho Cart in ra tổng giá trị đơn hàng
// - Viết phương thức tĩnh "checkout()" cho Cart để xóa toàn bộ sản phẩm

const products = [
  { id: 1, name: "Táo", price: 15000, quantity: 2 },
  { id: 2, name: "Bìa đậu", price: 5000, quantity: 5 },
];

const Cart = (userId, products) => {
  this.userId = userId;
  this.products = products;
};

Cart.calc = function () {
  let total = 0;
  for (let i = 0; i < this.products.length; i++) {
    total += this.products.price * this.products.quantity;
  }
  return total;
};

const cartOfQuyen = new Cart("1", products);
console.log(cartOfQuyen.calc());
