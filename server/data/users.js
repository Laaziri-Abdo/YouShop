import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "abdolaaziri@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "hamza@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
