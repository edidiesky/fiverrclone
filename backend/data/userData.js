import bcrypt from "bcryptjs";

const userData = [
  {
    name: "Daniel Jokins",
    username: "Dean23f",
    image: "/images/user_1.jpeg",
    lastname: "nikola",
    country: "Serbia",
    state: "Lagos",
    phone: "1456-93837-5883",
    email: "danielJkins@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },

  // 2 seller
  {
    username: "vivky2737",
    image: "/images/user_2.png",
    email: "horvatnikola95@drupal.org",
    phone: "612 484 7315",
    name: "Vivky Robins",
    address: "3449 Northland Alley",
    country: "Serbia",
    createdAt: "8/6/2021",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      description:
        "Hi, My name is Vicky I am an architect, designer and I am here to help you design your interior space, residential, commercial, etc. I also specialize in rendering and 3d modeling so we can make your space come to life and get the most authentic and realistic ambient.",
      from: "Serbia",
      languages: ["English", "Serbian"],
    },
  },
  // 3
  {
    username: "Robinson_1",
    image: "/images/user_3.jpg",
    email: "robinson@gmail.com",
    phone: "639 404 8339",
    name: "Robinson Samuels",
    country: "United Kingdom",
    createdAt: "8/12/2022",
    password: bcrypt.hashSync("12345", 10),
    role: "seller",
    about: {
      description:
        "5+ years graphic design experience working alongside various clients in a wide array of business sectors. Created various marketing media such as logo design, merchandise, promotional content for social platforms. Feel free to get in touch!",
      from: "United Kingdom",
      languages: ["English"],
      shortDesc:
        "Graphic Designer specialising in Rubberhose cartoons and alt design",
    },
  },
  // 4
];

export default userData;
