const data = {
  name: "ES Module",
  description:
    "A module that exports a function to calculate the sum of two numbers.",
  code: "PH54332",
};

const myStudent = {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
};

function lengthStudent(arr) {
  return arr.length;
}

// or
export { data as myInfo, myStudent, lengthStudent };
