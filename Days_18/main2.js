// viết hàm randomOTP(length) trả về 1 OTP có độ dài length, nếu không truyền length thì mặc định length là 6

const randomOTP = (a, b) => {
  const length = a || 6;
  const num = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += num[Math.floor(Math.random() * num.length)];
  }
  return otp;
};

const listCharacters = ASDFGGHJKLZXCVBNMQWERTYUIOPskdadafaspfa0123456789;
const generateId = (length, prefix) => {};
