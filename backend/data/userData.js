import bcrypt from "bcryptjs";

const userData = [
  {
    name: "Hover",
    username: "peterfrog",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/3935083/original/facial-hair.jpg",
    lastname: "nikola",
    country: "Serbia",
    state: "Lagos",
    phone: "1456-93837-5883",
    email: "peterfrog@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "user",
    about: {},
  },

  // 2 seller
  {
    username: "horvatnikola95",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a4c7b243c208ab0bba746d06227c168d-1626277309288/36082227-6dfb-4d30-96dd-bd1b4f2de192.png",
    lastname: "horvat",
    email: "horvatnikola95@drupal.org",
    phone: "612 484 7315",
    name: "Nikola",
    address: "3449 Northland Alley",
    country: "Serbia",
    createdAt: "8/6/2021",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      description:
        "Hi, My name is Nikola I am an architect, designer and I am here to help you design your interior space, residential, commercial, etc. I also specialize in rendering and 3d modeling so we can make your space come to life and get the most authentic and realistic ambient.",
      from: "Serbia",
      languages: ["English", "Serbian"],
    },
  },
  // 3
  {
    username: "Thrifty",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d93604d50fbe37256ff589734963683d-1659992759069/3a0980e0-5c79-438b-a96a-ad3c46345709.png",
    lastname: "",
    email: "emcrobert1@yolasite.com",
    phone: "639 404 8339",
    name: "Thrifty",
    country: "United Kingdom",
    createdAt: "8/12/2022",
    password: bcrypt.hashSync("eAdg145%1", 10),
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
  {
    username: "elhiheb",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f399e6e94988a51dfd231a3b33eec0c6-1678448638081/3c3f0ab8-328a-44f5-89bc-5db4035f2ebd.jpg",
    lastname: "Hagger",
    email: "chagger2@cisco.com",
    phone: "961 720 3412",
    name: "Iheb",
    country: "Algeria",
    createdAt: "12/17/2022",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      description:
        "Hello everyone my name is iheb , graduated architect with profesionnel experience who is doing interior design school for the moment in Paris , loving my field and also love creating making and communicating with clients. im gonna help you bring your ideas,projects,sketches to the next level.",
      languages: ["English", "Arabic"],
      skills: ["Adobe Photoshop", "Graphic design"],
    },
  },
  // 5
  {
    username: "I.sebastian.c",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/3153488/original/vivi_by_johnbarman-d86cudl.jpg",
    lastname: "",
    email: "Sebastian@e-recht24.de",
    phone: "770 513 5467",
    name: "Sebastian",
    country: "China",
    createdAt: "11/25/2022",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      languages: ["English", "Arabic"],
      education: ["M.A. - Graphic Arts"],
      skills: ["Adobe Photoshop", "Graphic design", "Autodesk 3ds Max"],
      description:
        "Hi everyone. My name is Sebastian, I am a freelance digital artist, specializing in 2D/Digital Illustration, I also do 3D Sculpting and Game assets. I will be more than happy to work with you. TOTAL COMPLETED PROJECTS: 2,904+",
    },
  },
  // 6
  {
    username: "designlord43",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/45041221cfaf2c02bc75cc5586da0d52-1649940985788/294c5125-9727-48a8-ba0d-a17cc506b4a6.JPG",
    lastname: "Breagan",
    email: "lbreagan4@cnn.com",
    phone: "599 831 5120",
    name: "Kam",
    address: "307 Thompson Lane",
    country: "Sweden",
    state: "Dalarna",
    postalCode: "783 35",
    createdAt: "9/10/2021",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "Pakistan",
      languages: ["English", "Arabic"],
      education: ["M.A. - Graphic Arts"],
      skills: [
        "Adobe Photoshop",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
      description:
        "Hello, This is Kam and I am a professional designer working with over 1000+ clients worldwide. I am 24/7 available to provide my best services for you",
    },
  },
  // 7
  {
    username: "supergf_x",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/96cea9b8b833ceda6b7b7b39fcbffe02-1603642426461/1b114d1e-f550-416d-a414-72557238e0f5.jpg",
    lastname: "Breagan",
    email: "ali@cnn.com",
    phone: "599 831 5120",
    name: "Ali",
    address: "307 Thompson Lane",
    country: "Sweden",
    postalCode: "783 35",
    createdAt: "9/13/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "United Kingdom",
      languages: ["English"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Design adds value faster than it adds costs",
      skills: [
        "Adobe Photoshop",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
      description:
        "Hello, This is Kam and I am a professional designer working with over 1000+ clients worldwide. I am 24/7 available to provide my best services for you",
    },
  },
  // 8
  {
    username: "cosmicbeauty2",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/96cea9b8b833ceda6b7b7b39fcbffe02-1603642426461/1b114d1e-f550-416d-a414-72557238e0f5.jpg",
    lastname: "Dsouza",
    email: "Martina@cnn.com",
    phone: "599 831 5120",
    name: "Martina",
    address: "307 Thompson Lane",
    country: "Pakistan",
    postalCode: "783 35",
    createdAt: "9/13/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "United Kingdom",
      languages: ["English"],
      certifications: ["Adobe Certification"],
      education: ["B.A. - Graphic Arts"],
      description:
        "Hello, I am a professional logo design with having more than 10 years of experience. I have 1000+ Clients worldwide. I am ready to take your brand to the next level. Don't waste your time looking for other cheap sellers. Just hire me and leave the rest on my creative shoulders.",
      shortDesc: "Transforming brands with creativity",
      skills: [
        "Adobe Photoshop",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
    },
  },
  // 9
  {
    username: "willllli",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/816f87fbdcaaa945fa47b4b67bb06b38-622467281538545734074/JPEG_20181003_104851_458700562.jpg",
    phone: "599 831 5120",
    name: "Rana M Waleed",
    email: "willllli@gmail.com",
    country: "Pakistan",
    postalCode: "783 35",
    createdAt: "9/13/2022",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "Pakistan",
      languages: ["English"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Give chance to taste the expertise",
      skills: [
        "Adobe Photoshop",
        "Responsive design",
        "Web development",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
      description:
        "Hi, Thanks for taking interest in my profile. I'm a professional website designer with the 6 years of experience and have designed +1k wix websites as a freelancer. I do custom website designing and an expert of wix web redesign. Also awarded Pioneer & Legend (Top Level) badge by WIX. Also I'm learning Wordpress and its gig will be live soon to buy.",
    },
  },
  // 10 admin
  {
    username: "Admin",
    image:
      "https://media.istockphoto.com/id/1208814601/photo/photo-of-attractive-guy-serious-looking-young-promoted-boss-chief-hands-crossed-self.jpg?s=612x612&w=0&k=20&c=UzD7wi214qylXarF9r3vXswadjufO_8Vc6EnyBa1L8A=",
    email: "admin@gmail.com",
    phone: "599 831 5120",
    name: "Martina",
    country: "Nigeria",
    createdAt: "9/13/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "admin",
    about: {},
    about: {
      from: "Pakistan",
      languages: ["English"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Give chance to taste the expertise",
      skills: [
        "Adobe Photoshop",
        "Responsive design",
        "Web development",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
      description:
        "I'm a tech entrepreneur, born with pc in my hands and raised in innovation. Always curious and updated with the cutting edge innovative solutions. I led national and international projects and companies, both on the managing and operational side.",
    },
  },
  // 11
  {
    username: "monsterai",
    image: "",
    email: "monsterai@gmail.com",
    phone: "599 831 5120",
    name: "Jacopo",
    country: "Italy",
    createdAt: "9/13/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "Pakistan",
      languages: ["English"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Give chance to taste the expertise",
      skills: [
        "Adobe Photoshop",
        "Responsive design",
        "Web development",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
      description:
        "I'm a tech entrepreneur, born with pc in my hands and raised in innovation. Always curious and updated with the cutting edge innovative solutions. I led national and international projects and companies, both on the managing and operational side.",
    },
  },
  // 12
  {
    username: "carloscerralba",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/6003af3a01238b3d321d89b14a9c8a10-1620522952667/c464344f-c65b-4ece-a84c-66dfdaa6649e.jpg",
    email: "carloscerralba@gmail.com",
    phone: "599 831 5120",
    name: "carloscerralba",
    country: "Spain",
    createdAt: "1/13/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "Spain",
      languages: ["English"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Give chance to taste the expertise",
      skills: [
        "Adobe Photoshop",
        "Responsive design",
        "Web development",
        "Graphic design",
        "Autodesk 3ds Max",
        "Corporate branding",
      ],
      description: "AI Artist",
    },
  },
  // 13
  {
    username: "mathias_gr",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/bb296ca4fdc1df2d28bc50c245af4434-1633946117131/13cf2c87-97e9-4bbb-aa92-6cd0c4016815.jpg",
    email: "Mathias@gmail.com",
    phone: "599 831 5120",
    name: "Mathias",
    country: "Spain",
    createdAt: "1/20/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "Spain",
      languages: ["English", "French"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Give chance to taste the expertise",
      skills: ["Voice over"],
      description:
        "Hi, I am Mat, French Voice Over Artist since 2010. I will do a deep french voice over. New on fiverr, I worked untill now through the conventionnal VO artist path, in studios. I have been trusted by many internationnal brands such as Orange, Renault, Peugeot, Dacia, Ouest France, Royal Air Maroc and a lot of local companies (Banks, industrials, telecoms,...) Being an audio engineer as well working in Audio Post Production for movies, I will guarantee you a clean and broadcast ready Voice Over, recorded in a treated dry room, running through quality mic and preamp and cleanly edited",
    },
  },
  {
    username: "",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7b4f3ed4e37de318b40d5667b2268b67-1540850076927/feb2a4e4-9d72-486d-b2d3-dfc42bafb31a.png",
    email: "anisocialmarket@gmail.com",
    phone: "599 831 5120",
    name: "anisocialmarket",
    country: "Spain",
    createdAt: "1/20/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    role: "seller",
    about: {
      from: "Spain",
      languages: ["English", "French"],
      education: ["M.A. - Graphic Arts"],
      shortDesc: "Give chance to taste the expertise",
      skills: [
        "Social media management",
        "Facebook cover design",
        "Social media design",
      ],
      description:
        "My name Is Ani and I am professional social media manager and content creator with 5 years+ of experience. I work along with a young and energetic team of experts giving end to end social media management and graphic design. We can develop effective social media post design to drive brand engagement and awareness in the long run for your business. The platforms included are Facebook, Instagram, Twitter, Pinterest and LinkedIn. I am open to work on any gig plus new offers. Let’s make it happen!",
    },
  },
];

export default userData;
