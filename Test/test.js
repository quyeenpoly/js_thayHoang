const data = [
  {
    id: 1,
    name: "Toro",
    math: 8,
    english: 7,
    science: 6,
  },
  {
    id: 2,
    name: "Ly Tieu Long",
    math: 4,
    english: 3,
    science: 5,
  },
  {
    id: 3,
    name: "Donal Trump",
    math: 9,
    english: 9,
    science: 10,
  },
  {
    id: 4,
    name: "Quang Quyen",
    math: 5,
    english: 4,
    science: 10,
  },
];

data.map((item) => {
  const diemTb = (item.math + item.english + item.science) / 3;
  let hocLuc = "";
  if (diemTb >= 8) {
    hocLuc = "Giỏi";
  } else if (diemTb < 8 && diemTb >= 6.5) {
    hocLuc = "Khá";
  } else if (diemTb < 6.5 && diemTb >= 5) {
    hocLuc = "Trung bình";
  } else if (diemTb < 5) {
    hocLuc = "Yếu";
  }

  const element = document.createElement("tr");
  element.innerHTML = `  
  <tr>
  <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.math}</td>
    <td>${item.english}</td>
    <td>${item.science}</td>
    <td>${diemTb}</td>
    <td>${hocLuc}</td>
   <td>
    <button>Xóa</button>
    <button>Cập nhật</button>
   </td>
  </tr>    
  `;
  const table = document.getElementById("table");
  table.appendChild(element);
});
