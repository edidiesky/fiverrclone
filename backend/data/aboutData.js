import bcrypt from "bcryptjs";

const userData = [
  // 2
  {
    user: "641d5b096713d2f3203602a5",
    description:
      "Hi, My name is Nikola I am an architect, designer and I am here to help you design your interior space, residential, commercial, etc. I also specialize in rendering and 3d modeling so we can make your space come to life and get the most authentic and realistic ambient.",
    from: "Serbia",
    languages: ["English", "Serbian"],
  },
  // 3
  {
    user: "641d5b096713d2f3203602a7",
    description:
      "5+ years graphic design experience working alongside various clients in a wide array of business sectors. Created various marketing media such as logo design, merchandise, promotional content for social platforms. Feel free to get in touch!",
    from: "United Kingdom",
    languages: ["English"],
    shortDesc:
      "Graphic Designer specialising in Rubberhose cartoons and alt design",
  },
  // 4
  {
    user: "641d5b096713d2f3203602a9",
    description:
      "Hello everyone my name is iheb , graduated architect with profesionnel experience who is doing interior design school for the moment in Paris , loving my field and also love creating making and communicating with clients. im gonna help you bring your ideas,projects,sketches to the next level.",
    languages: ["English", "Arabic"],
    skills: ["Adobe Photoshop", "Graphic design"],
  },
  // 5
  {
    user: "641d5b096713d2f3203602ab",
    languages: ["English", "Arabic"],
    education: ["M.A. - Graphic Arts"],
    skills: ["Adobe Photoshop", "Graphic design", "Autodesk 3ds Max"],
    description:
      "Hi everyone. My name is Sebastian, I am a freelance digital artist, specializing in 2D/Digital Illustration, I also do 3D Sculpting and Game assets. I will be more than happy to work with you. TOTAL COMPLETED PROJECTS: 2,904+",
  },
  // 6
  {
    user: "641d5b096713d2f3203602ad",
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
  // 7
  {
    user: "641d5b096713d2f3203602af",
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
  // 8
  {
    user: "641d5b096713d2f3203602b1",
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
  // 9
  {
    user: "641d5b096713d2f3203602b3",
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
  // 10 admin
  {
    user: "641d5b096713d2f3203602b5",
  },
  // 11
  {
    user: "641d5b096713d2f3203602b7",
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
  // 11
  // 12
  {
    user: "641d5b096713d2f3203602bb",
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
  // 13
  // {
  //   username: "mathias_gr",
  //   image:
  //     "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/bb296ca4fdc1df2d28bc50c245af4434-1633946117131/13cf2c87-97e9-4bbb-aa92-6cd0c4016815.jpg",
  //   email: "Mathias@gmail.com",
  //   phone: "599 831 5120",
  //   name: "Mathias",
  //   country: "Spain",
  //   createdAt: "1/20/2023",
  //   password: bcrypt.hashSync("eAdg145%1", 10),
  //   role: "seller",
  //   about: {
  //     from: "Spain",
  //     languages: ["English", "French"],
  //     education: ["M.A. - Graphic Arts"],
  //     shortDesc: "Give chance to taste the expertise",
  //     skills: ["Voice over"],
  //     description:
  //       "Hi, I am Mat, French Voice Over Artist since 2010. I will do a deep french voice over. New on fiverr, I worked untill now through the conventionnal VO artist path, in studios. I have been trusted by many internationnal brands such as Orange, Renault, Peugeot, Dacia, Ouest France, Royal Air Maroc and a lot of local companies (Banks, industrials, telecoms,...) Being an audio engineer as well working in Audio Post Production for movies, I will guarantee you a clean and broadcast ready Voice Over, recorded in a treated dry room, running through quality mic and preamp and cleanly edited",
  //   },
  // },
  // {
  //   username: "",
  //   image:
  //     "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7b4f3ed4e37de318b40d5667b2268b67-1540850076927/feb2a4e4-9d72-486d-b2d3-dfc42bafb31a.png",
  //   email: "anisocialmarket@gmail.com",
  //   phone: "599 831 5120",
  //   name: "anisocialmarket",
  //   country: "Spain",
  //   createdAt: "1/20/2023",
  //   password: bcrypt.hashSync("eAdg145%1", 10),
  //   role: "seller",
  //   about: {
  //     from: "Spain",
  //     languages: ["English", "French"],
  //     education: ["M.A. - Graphic Arts"],
  //     shortDesc: "Give chance to taste the expertise",
  //     skills: [
  //       "Social media management",
  //       "Facebook cover design",
  //       "Social media design",
  //     ],
  //     description:
  //       "My name Is Ani and I am professional social media manager and content creator with 5 years+ of experience. I work along with a young and energetic team of experts giving end to end social media management and graphic design. We can develop effective social media post design to drive brand engagement and awareness in the long run for your business. The platforms included are Facebook, Instagram, Twitter, Pinterest and LinkedIn. I am open to work on any gig plus new offers. Let’s make it happen!",
  //   },
  // },
];

export default userData;
