import bcrypt from "bcryptjs";

const userData = [
  {
    name: "Mir Mohsin",
    username: "creativesprint312",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/395442256884224fd0a2cc80ad81f5f0-1679732206228/2a8ab806-b6fe-4c7e-b266-2df8a1c11c20.jpg",
    lastname: "nikola",
    country: "Serbia",
    state: "Lagos",
    phone: "1456-93837-5883",
    email: "creativesprint312@gmail.com",
    createdAt: "1/17/2021",
    password: bcrypt.hashSync("12345", 10),
    role: "seller",
    about: {
      from: "Pakistan",
      description:
        "Hi there! I'm a UI/UX designer with over 5 years of experience crafting digital experiences for businesses of all sizes. My expertise lies in creating intuitive interfaces that are not only visually stunning but also user-friendly. Let's work together to create beautiful and functional designs that engage your users and achieve your business objectives.",
      languages: ["English", "Urdu (اردو)"],
    },
  },

  // 2 seller
  {
    username: "kazdar1",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb30804ff27b7bf11fd3f706272b886c-1639821349460/28970aee-00a2-4d84-ac4e-c3480d0dae6c.png",
    email: "kazdar1@drupal.org",
    phone: "612 484 7315",
    name: "Kazdar",
    address: "3449 Northland Alley",
    country: "Serbia",
    createdAt: "8/6/2021",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      description:
        "Hello! I am an experienced UX/UI Designer I value simple content structure, clean design patterns, and thoughtful interactions. Things i Enjoy Designing UX, UI, Web, Mobile, Apps, Logos",
      from: "France",
      languages: ["English", "French (Français)"],
      occupation: "UX UI DESIGNER",
      skills: ["Adobe XD", "Adobe Illustrator", "Graphic design", "UI design"],
    },
  },
  // 3
  {
    username: "loftydesignshop34",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d93001bdcba7f9235745299f61850b71-1657200241990/24f7d64e-5d25-41b3-8175-c79ea47e35d1.jpg",
    email: "loftydesignshop34@gmail.com",
    phone: "639 404 8339",
    name: "Alaps",
    country: "United Kingdom",
    createdAt: "8/12/2022",
    password: bcrypt.hashSync("12345", 10),
    role: "seller",
    about: {
      description:
        "Hey, I'm Alpa. I am a graphics designer as well as business woman. My hobby is drawing. Because it's brings a lot of benefits besides simply boosting my creativity. It's make me feel relaxed. Another hobby is cycling. It's makes me healthy and fit.",
      from: "United Kingdom",
      languages: ["English"],
      occupation: "Minimalist Design Specialist",
      skills: [
        "Adobe XD",
        "Adobe Illustrator",
        "Creative design",
        "Vintage logo design",
        "Graphic design",
        "UI design",
        'English language'
      ],

      shortDesc:
        "Graphic Designer specialising in Rubberhose cartoons and alt design",
    },
  },
  // 4
];

export default userData;
