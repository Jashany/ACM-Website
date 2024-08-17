import Linkedin from './assets/Images/LinkedIn (1).svg';
import Instagram from './assets/Images/Instagram.svg';
import Github from './assets/Images/GitHub (1).svg';
import Linkedinb from './assets/Images/LinkedIn-blue.svg';
import Instagramb from './assets/Images/Instagram-blue.svg';
import Githubb from './assets/Images/GitHub-blue.svg';
import Device from './assets/Images/device.png';
import Bootcampimg from './assets/Images/bootcamps.png';
import Phone from './assets/Images/phone.png';
import amico1 from './assets/Images/amico.png';
import gallery2 from './assets/Images/gallery_big.png';
import gallery0 from './assets/Images/gallery.png';
import gallery1 from './assets/Images/gallery1.png';
import project from "./assets/Images/project.svg";
import face from './assets/Images/sample.png';
import logo from './assets/Images/logo.png';
import hackathon from "./assets/Images/hackathon.png";
import profile from "./assets/Images/profile.png"
import event1 from './assets/Images/event1.png';
import event2 from './assets/Images/event2.png';
import html from './assets/Images/html.png';
import css from './assets/Images/css.png';
import Js from './assets/Images/js.png';
import react from './assets/Images/react.png';
import arrow from './assets/Images/arrowsolid.png';

export const HeroData = {
  headline: 'Innovate, Elevate, Collaborate',
  keywords: ['Innovate.', 'Elevate.', 'Collaborate.'],
  subtitle: 'ACM Thapar 2023',
  copyright: 'THAPAR ACM CHAPTER © 2023',
  info: `A vibrant community of tech enthusiasts, dedicated to exploring, tackling and connecting with all things tech. `,
  logos: [
    {
      img: Linkedin,
      alt: 'Linkedin',
    },
    {
      img: Instagram,
      alt: 'Instagram',
    },
    {
      img: Github,
      alt: 'Github',
    },
  ],
};

export const NavData = {
  logo :{ 
    img: logo,
    alt: 'ACM-logo',
  },
  navbar: [
    {
      navitem: "Alumni",
      href: '/Alumni',
    },
    {
      navitem: "Events",
      href: '/Events',
    },
    // {
    //   navitem: "Bootcamps",
    //   href: '/Bootcamps',
    // },
    {
      navitem: "Projects",
      href: '/Projects',
    },
    {
      navitem: "Gallery",
      href: '/Gallery',
    },
    {
      navitem: "Home",
      href: '/',
    }
  ],
  logoss: [
    {
      img: Linkedinb,
      alt: 'Linkedin',
    },
    {
      img: Instagramb,
      alt: 'Instagram',
    },
    {
      img: Githubb,
      alt: 'Github',
    },
  ],
}


export const ProjectData = {
  subtitle2: 'Projects',
  project: [
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
    {
      name: "Webdev Guide",
      tech:  "HTML , CSS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      link: "",
      img : Phone
    },
  ],
  projectcount : [
    {
      name:"Project 1",
    },
    {
      name:"Project 2",
    },
    {
      name:"Project 3",
    },
    {
      name:"Project 4",
    },
    {
      name:"Project 5",
    },
    {
      name:"Project 6",
    },
  ]
}



export const Bootcamp = {
  subtitle1: 'Bootcamps',
  bootcamps : [
    {
      name:"Web Development",
      img : amico1
    },
    {
      name:"App Development",
      img : amico1
    },
    {
      name:"AI/ML Learning",
      img : amico1
    },
    {
      name:"UI/UX Classes",
      img : amico1
    },
    {
      name:"Academic Classes",
      img : amico1
    },
    {
      name:"And More!!! ",
      img : amico1
    },
  ]
}



export const Teamdata = {
  homeheadline :"Meet The Team",
  ebheadline:"EXBO",
  coreheadline:"THE CORE",
   EB : [
    {
      name : "Jai Madhukar",
      position : "General Secretary",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723728926/jai_bg_-_Jai_Madhukar_-_Jai_Madhukar_lcd3kt.png",
      linkdin : {
        link:"https://www.linkedin.com/in/jai-madhukar/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Jai-17",
        img: Github,
      }
    },
    {
      name : "Utkarsh Agarwal",
      position : "General Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723727618/utkarsh_-_Utkarsh_Agarwal_nbxuqg.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/utkarsh-agarwal-054545211/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Utkarsh09102004",
        img: Github,
      }
    },
    {
      name : "Aaradhya Sharma",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_830,h_830,ar_1:1,g_auto/v1723730577/WhatsApp_Image_2024-08-15_at_12.15.01_351891f2_-_Aaradhya_Sharma_txu4nv.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/aradhya-sharma-b94337245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/aradhyyySharrma8204",
        img: Github,
      }
    },
    {
      name : "Armeen Kaur Luthra",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3000,h_3000,ar_1:1/v1723729151/ArmeenPic_-_Armeen_Kaur_Luthra_buvq7n.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/armeen-kaur-luthra/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/armeenkaur/",
        img: Github,
      }
    },
    {
      name : "Sidharth Dhawan",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723729801/or-pic_-_Sidharth_Dhawan_j5rf9h.png",
      linkdin : {
        link:"https://www.linkedin.com/in/sidharth-dhawan/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/sidharthd7",
        img: Github,
      }
    },
    {
      name : "Varun Khatri",
      position : "Joint Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3048,h_3048,ar_1:1,g_auto/v1723751546/IMG_1142_-_Varun_Khatri_csldl3.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/varun-khatri-4b2139258/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/V5run-Kh5tri",
        img: Github,
      }
    },
    {
      name : "Ashmeet Kaur",
      position : "Project Director",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_540,h_540,ar_1:1,g_auto/v1723731192/Ashmeet_-_Ashmeet_Kaur_lx4ihf.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/ashmeet-kaur-b0b275296/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/ashmkaur",
        img: Github,
      }
    },
    {
      name : "Garv Kansal",
      position : "Project Director",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1780,h_1780,ar_1:1,g_auto/v1723731995/IMG_0201_-_Garv_Kansal_p4ickg.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/garvkansal",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Github,
      }
    },
    {
      name : "Arnav Khanduja",
      position : "Marketing Head",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_2900,h_2900,ar_1:1,g_auto/v1723732325/IMG_7038_-_Arnav_Khanduja_f2sxqh.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/arnavkhanduja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Github,
      }
    },
    {
      name : "Vasu Chugh",
      position : "Alumni Cell Secretary",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723732570/vc_picture_-_Vasu_Chugh_jv2syr.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/vasu-chugh-945746200/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/YashvardhanChugh",
        img: Github,
      }
    },
    // {
    //   name : "Vasu Tohani",
    //   position : "Joint  Seceratary",
    //   img: face,
    //   linkdin : {
    //     link:"",
    //     img: Linkedin,
    //   },
    //   insta : {
    //     link:"",
    //     img: Instagram,
    //   }
    // },
   ],
   core : [
    {
      name : "Kshitiz Jain",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1840,h_1840,ar_1:1,g_auto/v1723733187/photo-with-bg-edited_-_KSHITIZ_JAIN_yw5gig.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/kshitiz-jain2005/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/kshitiz510",
        img: Github,
      }
    },
    {
      name : "Naman Kundra",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_4200,h_4200,ar_1:1/v1723733841/hhhh_-_NAMAN_KUNDRA_kw4wrz.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/naman-kundra-850209281/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/naman777",
        img: Github,
      }
    },
    {
      name : "Nimish Goyal",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723734107/IMG_1968_-_Nimish_Goyal_gdhmfd.jpg",
      linkdin : {
        link:"http://linkedin.com/in/nimish-goyal-9483a02a2",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/nimishgoyal1",
        img: Github,
      }
    },
    {
      name : "Vinayak Jain",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_400,h_400,ar_1:1,g_auto/v1723891484/IMG_20240813_214554_-_VINAYAK_JAIN_1_tafnlp.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/vinayak-jain-21b493298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Vinayak55jain",
        img: Github,
      }
    },
    {
      name : "Armaan Jagirdar",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723891633/ArmaanJagirdar_-_ARMAAN_JAGIRDAR_e7cwt6.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/armaan-jagirdar-183b47285/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Armaan457",
        img: Github,
      }
    },
    {
      name : "Kashish Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893036/IMG_4007_-_KASHISH_GUPTA_oicejb.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/kashish-gupta-34205a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Kashish101204",
        img: Github,
      }
    },
    {
      name : "Snehil Jhawar",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893177/IMG_0145_-_SNEHIL_JHAWAR_juwz8k.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/snehil-jhawar-36b845244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"http://github.com/snehiljhawar",
        img: Github,
      }
    },
    {
      name : "Aaditya Jain",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893302/IMG_20240810_195547023_3_-_AADITYA_JAIN_oik0mb.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/aaditya-jain-7a3666247/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Aaditya060",
        img: Github,
      }
    },
    {
      name : "Sanya Sharma",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723893515/IMG_4049_-_SANYA_SHARMA_yje1w3.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/sanya-sharma-807596295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/sanyasharma09",
        img: Github,
      }
    },
    {
      name : "Parth Kaushal",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723893623/IMG_5316_-_PARTH_KAUSHAL_cdhffj.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/parth-kaushal",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/parthkaushal18",
        img: Github,
      }
    },
    {
      name : "Gurleen Kaur",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1200,h_1200,ar_1:1/v1723893714/IMG-20240716-WA0029_-_GURLEEN_KAUR_r6vf5j.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/gurleen-kaur-60b966278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/gurleenkaur164",
        img: Github,
      }
    },
    {
      name : "Gaurang Garg",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1700,h_1700,ar_1:1,g_auto/v1723893945/IMG_20240730_190037_-_GAURANG_GARG_umdhjf.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/gaurang-garg-5441382a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Ultramech",
        img: Github,
      }
    },
    {
      name : "Yajat Pahuja",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_500,h_500,ar_1:1/v1723894124/IMG-20240814-WA0039_-_YAJAT_PAHUJA_mdz1ml.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/yajat-pahuja-275a30275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/YajatPahuja",
        img: Github,
      }
    },
    {
      name : "Deepansh Tandon",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1080,h_1080,ar_1:1,g_auto/v1723894312/Screenshot_2023-10-13-22-53-44-35_948cd9899890cbd5c2798760b2b95377_-_DEEPANSH_TANDON_lqukzm.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/deepansh-tandon-296033278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Deepansh-tandon",
        img: Github,
      }
    },
    {
      name : "Ansh Madaan",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723894499/IMG_8235_-_ANSH_MADAAN_aamfih.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/ansh-madaan-5362b92a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Anshm1234",
        img: Github,
      }
    },
    {
      name : "Armaan Gogoi",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723894605/Screenshot_20240814-232634_-_ARMAAN_GOGOI_mxo0c3.png",
      linkdin : {
        link:"https://www.linkedin.com/in/armaan-gogoi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.con/Armaan100",
        img: Github,
      }
    },
    {
      name : "Vansh Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_3100,h_3100,ar_1:1/v1723894712/my_photo_-_VANSH_GUPTA_pjaksb.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/vansh-gupta-4269001b5/",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Vansh-7",
        img: Github,
      }
    },
    {
      name : "Aneesh Grover",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,w_1800,h_1800,ar_1:1,g_auto/v1723894901/aneesh_di_sohni_photo_-_ANEESH_GROVER_dwa3dq.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/aneesh-grover",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/Aneesh-382005",
        img: Github,
      }
    },
    {
      name : "Arnav Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723895053/20240120_220832_-_ARNAV_GUPTA_ky1geu.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/arnavgupta3035",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/arnavgupta00",
        img: Github,
      }
    },
    {
      name : "Atin Gupta",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/c_crop,ar_1:1/v1723895206/IMG_3637_-_ATIN_GUPTA_ikhjkq.jpg",
      linkdin : {
        link:"https://www.linkedin.com/in/atin-gupta-a323b3290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        img: Linkedin,
      },
      insta : {
        link:"https://github.com/TheCurdler",
        img: Github,
      }
    },
    {
      name : "Bhaumik",
      position : "Core",
      img: "https://res.cloudinary.com/dpfqalryd/image/upload/v1723895284/Photo_-_BHAUMIK_k56sre.jpg",
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
    {
      name : "Jashan",
      position : "Core",
      img: face,
      linkdin : {
        link:"",
        img: Linkedin,
      },
      insta : {
        link:"",
        img: Instagram,
      }
    },
   ]
}

export const homebrand = {
  images: [hackathon,hackathon,hackathon,hackathon],
  details : [
    {
      heading : "Innovate",
      data : "We inspire members to explore uncharted territories, embrace challenges, and turn ideas into technological marvels. Here, creativity flourishes, and every problem becomes a canvas for inventive solutions.", 
    },
    {
      heading : "Elevate",
      data : " We're not just a society; we're a community dedicated to elevating skills, aspirations, and the tech landscape as a whole. Through engaging workshops, mentorship programs, and collaborative projects, we empower our members to rise to new heights.", 
    },
    {
      heading : "Collaborate",
      data : "At ACM individuals unite their diverse talents and perspectives, creating a vibrant ecosystem where ideas converge and knowledge multiplies. In this collaborative spirit, we navigate the ever-changing tech landscape, achieving shared milestones through the power of teamwork.", 
    },
  ]
}

export const alumnid = {
  heading1 : "2022-23",
  heading2 : "2021-22",
  heading3 : "2020-21",
  data23 : [
    {
      name:"Harshit Vishwakarma ",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Microsoft",
      linkedin : "https://www.linkedin.com/in/harshit-vishwakarma-2001/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723460750/Harshit_Vishwakarma_aaudsp.jpg",
    },
    {
      name:"Mahek Khowala",
      // position:"Ex - Gen. Sec.",
      job:"Placed at JP Morgan Chase & Co.",
      linkedin : "https://www.linkedin.com/in/mahek-khowala/",
      img:"https://media.licdn.com/dms/image/sync/v2/C5627AQHo3JkhzMXX2A/articleshare-shrink_800/articleshare-shrink_800/0/1712033479461?e=1723982400&v=beta&t=IZGwZ2T9Vpo9Pvqde348mlhEtJvxoOLg4UTQeq2MOBk",
    },
    {
      name:"Aniket Biswas",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Headout",
      linkedin : "https://www.linkedin.com/in/aniket-biswas-59394b191/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723393436/aniket_biswas_kwdopt.jpg",
    },
    {
      name:"Harsh Goyal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Oracle",
      linkedin : "https://www.linkedin.com/in/harsh-goyal-909380186/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723461037/Harsh_Goyal_itcvn0.jpg",
    },
    {
      name:"Sanchit Goyal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Zynga",
      linkedin : "https://www.linkedin.com/in/sanchitgoyal01/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723461912/Sanchit_Goyal_lxcubi.jpg",
    },
    {
      name:"Shourya Gupta",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Corizo EdTech",
      linkedin : "https://www.linkedin.com/in/shouryaguptaa/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723462292/Shourya_Gupta_lfxcil.jpg",
    },
  ],
  data22:[
    {
      name:"Robin Sandhu",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Bloomberg",
      linkedin : "https://www.linkedin.com/in/robin-sandhu-b62010181/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723462587/Robin_Sandhu_pfmcyh.jpg",
    },
    {
      name:"Varun Aggarwal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at MakeMyTrip",
      linkedin : "https://www.linkedin.com/in/varun-aggarwal-840970179/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723462706/Varun_Aggarwal_ig1xci.jpg",
    },
    // {
    //   name:"Ankush Gupta",
    //   // position:"Ex - Gen. Sec.",
    //   job:"Placed at MSB Docs",
    //   linkedin : "https://www.linkedin.com/in/ankush1009/",
    //   img:profile,
    // },
  ],
  data21:[
    {
      name:"Roopali Neeraj",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Amazon",
      linkedin : "https://www.linkedin.com/in/roopali-neeraj-1710/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467551/Roopali_Neeraj_wafkzd.jpg",
    },
    {
      name:"Varun Singla",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Siemens",
      linkedin : "https://www.linkedin.com/in/varunsingla211/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723466319/Varun_Singla_bmvmia.jpg",
    },
    {
      name:"Kuljot Singh Saggu",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Siemens EDA",
      linkedin : "https://www.linkedin.com/in/kuljot-singh-saggu-93a6461b2/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467346/Kuljot_Singh_voz7pg.jpg",
    },
    {
      name:"Shaurya Thakur",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Everest Group",
      linkedin : "https://www.linkedin.com/in/shaurya-thakur-301154171/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467719/Shaurya_Thakur_szecrx.jpg",
    },
    {
      name:"Shaurya Goyal",
      // position:"Ex - Gen. Sec.",
      job:"Placed at Pluang",
      linkedin : "https://www.linkedin.com/in/shourya-goyal-3002a7185/",
      img:"https://res.cloudinary.com/dpfqalryd/image/upload/v1723467988/Shaurya_Goyal_erehzf.jpg",
    },
    // {
    //   name:"Alex Carey",
    //   position:"Ex - Gen. Sec.",
    //   job:"Placed at Google",
    //   linkedin : "",
    //   img:profile,
    // },
  ]
}

export const gallery = {
  heading: "Gallery",
  images:[
    {
      img1: gallery2,
      img2: gallery0,
      img3: gallery1,
    },
    {
      img1: gallery2,
      img2: gallery0,
      img3: gallery1,
    },
    {
      img1: gallery2,
      img2: gallery0,
      img3: gallery1,
    },
  ],
}

export const events = {
  details:[
    {
      heading: "Events",
      subtitle: "ECLIPSE 3.0",
      description: "Flagship Event",
      data:"Eclipse 3.0, transcended boundaries with a tech extravaganza featuring a high-octane hackathon, intense Kaggle Wars, mind-bending Enigma challenges, and the vibrant Flamingo showcase.",
      img: event1,
    },
    {
      heading: "Sub-Events",
      subtitle: "HACKLIPSE",
      description: "Most Popular Hackathon",
      data:"Hacklipse, our standout hackathon, is an immersive 24-hour coding marathon where participants unleash their coding prowess and creativity, it is a dynamic blend of innovation, problem-solving, and memorable moments.",
      img: event2,
    },
    {
      subtitle: "FLAMINGO",
      description: "Designathon",
      data:"Flamingo has been a canvas for imaginative expression, where designers used their artistic flair to craft visually stunning and impactful creations.",
      img: event2,
    },
    {
      subtitle: "CODESPRINT",
      description: "Competitive Coding",
      data:"An intra society event, providing a dynamic platform where members engage in intense coding sessions, showcasing their problem-solving abilities and fostering a spirit of friendly competition.",
      img: event1,
    },
  ],
}

export const Bootcampdata = {
  title: "Bootcamps",
  'web-development': {
    heading: "Web Development",
    data: "Learn the latest web development technologies and frameworks.",
    img: Bootcampimg,
    tech: "HTML | CSS | JavaScript | React | Node.js",
    resourcs: [
      {
        name: "One shot HTML Course",
        image: html,
        img: arrow,
        link: "",
      },
      {
        name: "One shot CSS Course",
        image: css,
        img: arrow,
        link: "",
      },
      {
        name: "One shot React Course",
        image: react,
        img: arrow,
        link: "",
      },
      {
        name: "One shot JS Course",
        image: Js,
        img: arrow,
        link: "",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "HTML/CSS",
        link: "",
      },
      {
        week: "02",
        topic: "JavaScript",
        link: "",
      },
      {
        week: "03",
        topic: "Adv JS",
        link: "",
      },
      {
        week: "04",
        topic: "React Intro",
        link: "",
      },
      {
        week: "05",
        topic: "Adv React",
        link: "",
      },
      {
        week: "06",
        topic: "Node.js",
        link: "",
      },
      {
        week: "07",
        topic: "Full-Stack",
        link: "",
      }
    ]
  },
  'app-development': {
    heading: "App Development",
    data: "Dive into mobile app development for both Android and iOS.",
    img: Bootcampimg,
    tech: "Java | Kotlin | Flutter | Swift",
    resourcs: [
      {
        name: "One shot Java Course",
        image: html,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Kotlin Course",
        image: css,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Flutter Course",
        image: react,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Swift Course",
        image: Js,
        img: arrow,
        link: "",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "Java Basics",
        link: "",
      },
      {
        week: "02",
        topic: "Kotlin",
        link: "",
      },
      {
        week: "03",
        topic: "Flutter",
        link: "",
      },
      {
        week: "04",
        topic: "Adv Flutter",
        link: "",
      },
      {
        week: "05",
        topic: "Swift",
        link: "",
      },
      {
        week: "06",
        topic: "Deployment",
        link: "",
      },
      {
        week: "07",
        topic: "App Store",
        link: "",
      }
    ]
  },
  'ai-ml-learning': {
    heading: "AI/ML Learning",
    data: "Master the concepts of Artificial Intelligence and Machine Learning.",
    img: Bootcampimg,
    tech: "Python | TensorFlow | PyTorch | Scikit-Learn",
    resourcs: [
      {
        name: "One shot Python Course",
        image: html,
        img: arrow,
        link: "",
      },
      {
        name: "One shot TensorFlow Course",
        image: css,
        img: arrow,
        link: "",
      },
      {
        name: "One shot PyTorch Course",
        image: react,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Scikit-Learn Course",
        image: Js,
        img: arrow,
        link: "",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "Python",
        link: "",
      },
      {
        week: "02",
        topic: "Data Science",
        link: "",
      },
      {
        week: "03",
        topic: "ML Basics",
        link: "",
      },
      {
        week: "04",
        topic: "TensorFlow",
        link: "",
      },
      {
        week: "05",
        topic: "Adv DL",
        link: "",
      },
      {
        week: "06",
        topic: "NLP",
        link: "",
      },
      {
        week: "07",
        topic: "AI Project",
        link: "",
      }
    ]
  },
  'ui-ux-classes': {
    heading: "UI/UX Classes",
    data: "Learn the principles of User Interface and User Experience design.",
    img: Bootcampimg,
    tech: "Figma | Adobe XD | Sketch | InVision",
    resourcs: [
      {
        name: "One shot Figma Course",
        image: html,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Adobe XD Course",
        image: css,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Sketch Course",
        image: react,
        img: arrow,
        link: "",
      },
      {
        name: "One shot InVision Course",
        image: Js,
        img: arrow,
        link: "",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "UI Basics",
        link: "",
      },
      {
        week: "02",
        topic: "UX Principles",
        link: "",
      },
      {
        week: "03",
        topic: "Wireframe",
        link: "",
      },
      {
        week: "04",
        topic: "Prototype",
        link: "",
      },
      {
        week: "05",
        topic: "Testing",
        link: "",
      },
      {
        week: "06",
        topic: "Design Sys",
        link: "",
      },
      {
        week: "07",
        topic: "Portfolio",
        link: "",
      }
    ]
  },
  'academic-classes': {
    heading: "Academic Classes",
    data: "Strengthen your academic knowledge with these classes.",
    img: Bootcampimg,
    tech: "Math | Science | History | Literature",
    resourcs: [
      {
        name: "One shot Math Course",
        image: html,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Science Course",
        image: css,
        img: arrow,
        link: "",
      },
      {
        name: "One shot History Course",
        image: react,
        img: arrow,
        link: "",
      },
      {
        name: "One shot Literature Course",
        image: Js,
        img: arrow,
        link: "",
      }
    ],
    roadmap: [
      {
        week: "01",
        topic: "Math Basics",
        link: "",
      },
      {
        week: "02",
        topic: "Adv Math",
        link: "",
      },
      {
        week: "03",
        topic: "Experiments",
        link: "",
      },
      {
        week: "04",
        topic: "Highlights",
        link: "",
      },
      {
        week: "05",
        topic: "Analysis",
        link: "",
      },
      {
        week: "06",
        topic: "Projects",
        link: "",
      },
      {
        week: "07",
        topic: "Exam Prep",
        link: "",
      }
    ]
  }
}