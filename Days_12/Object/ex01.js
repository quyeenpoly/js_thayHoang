const myInfor = {
  fullname: "Nguyễn Quang Quyền",
  email: "nguyenquangq111@gmail.com",
  position: "Dev",
};

// in ra từng cặp key-value cảu object trên với vòng lặp
for (key in myInfor) {
  console.log(`${key}----${myInfor[key]}`);
}
